import React, { FC, useEffect, useState } from 'react';
import './updatepost.scss'
import FileUpload from "../../components/fileUpload/FileUpload";
import {
    EditorState,
    convertToRaw,
    ContentState,
    convertFromHTML
} from "draft-js"

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "react-hook-form";
import PostService from "../../services/post-service";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTodayPosts, setAddPost } from "../../store/reducers/post/action-creators";
import { CircularProgress } from "@mui/material";
import { useTitle } from "../../hooks";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import DraftService from '../../services/draft-service';


const UpdatePost: FC = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const { register, watch, handleSubmit, formState: { errors }, setValue } = useForm()
    const [file, setFile] = useState<any>(null)
    const { user } = useSelector((state: RootState) => state.auth)
    const [isError, setIsError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [mdValue, setMdValue] = useState<string>("")


    const { post_id } = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useTitle('Edit Post')


    useEffect(() => {
        (async () => {
            console.log("post Id", post_id)
            const response = await PostService.getById(Number(post_id))
            setValue("title", response.data.title)
            setValue("description", response.data.description)
            setMdValue(response.data.text)

        })();

    }, [post_id])


    const onSubmit = async (data: any) => {
        setIsLoading(true)
        try {
            const response = await PostService.updatePost(file, String(post_id), data['title'], mdValue, user.id, data["description"])
            dispatch(setAddPost(response.data))
            dispatch(fetchTodayPosts(5))
            navigate(`/posts/${response.data.id}`)
        } catch (e: any) {
            const response = e.response.data.message
            if (Array.isArray(response)) setIsError(response[0])
            else setIsError(response)
            console.log(e.response)
        } finally {
            setIsLoading(false)
        }
    }

    const onDraftSubmit = async (data: any) => {
        setIsLoading(true)
        try {
            const response = await DraftService.createDraft(data['title'], mdValue, user.id, data["description"])
            navigate(`/profile`)
        } catch (e: any) {
            const response = e.response.data.message
            if (Array.isArray(response)) setIsError(response[0])
            else setIsError(response)
            console.log(e.response)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={'createPostContainer'}>
            <div className="header">
                <div className="actionContainer">
                    <div className={'buttonContainer'}>
                        <button className='draftButton' onClick={handleSubmit(onDraftSubmit)}>
                            Save as Draft{isLoading && <CircularProgress style={{ color: 'white' }} size={20} />}
                        </button>
                        {isError && <div className={'alert danger'}>{isError}</div>}
                        {isError && <div className={'alert danger'}>{isError}</div>}
                    </div>
                    <div className={'buttonContainer'}>
                        <button className='updateButton' onClick={handleSubmit(onSubmit)}>
                            Update Post  {isLoading && <CircularProgress style={{ color: 'white' }} size={20} />}
                        </button>
                        {isError && <div className={'alert danger'}>{isError}</div>}
                    </div>


                </div>

            </div>
            <FileUpload
                displayImage={true}
                handleFile={(file: File | undefined) => setFile(file)}
            />

            <div className="formGroup">
                <div className="formGroupInfo">
                    <label htmlFor={"title"}>Title</label>
                    {errors["title"] && <p>{errors["title"].message}</p>}
                </div>
                <input
                    {...register("title", {
                        required: { value: true, message: 'Required field' },
                        maxLength: 60,
                    })}
                />

            </div>

            <div className="formGroup">
                <div className="formGroupInfo">
                    <label htmlFor={"description"}>Description</label>
                    {errors["title"] && <p>{errors["title"].message}</p>}
                </div>
                <input
                    {...register("description", {
                        required: { value: false, message: 'Required field' },
                        maxLength: 100,
                    })}
                />

            </div>

            <div className="markDownEditorContainer">
                <MDEditor
                    height={800}
                    value={mdValue}
                    onChange={(val) => { setMdValue(val!); }}
                // previewOptions={{
                //     rehypePlugins: [[rehypeSanitize]],
                // }}

                />
            </div>
        </div>
    );
};

export default UpdatePost;