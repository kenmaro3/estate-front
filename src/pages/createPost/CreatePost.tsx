import React, { FC, useState } from 'react';
import './createpost.scss'
import FileUpload from "../../components/fileUpload/FileUpload";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "react-hook-form";
import PostService from "../../services/post-service";
import DraftService from '../../services/draft-service';
import { useNavigate } from "react-router-dom";
import { fetchTodayPosts, setAddPost } from "../../store/reducers/post/action-creators";
import { setAddDraft } from "../../store/reducers/draft/action-creators";
import { CircularProgress } from "@mui/material";
import { useTitle } from "../../hooks";
import MDEditor from "@uiw/react-md-editor";


const CreatePost: FC = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [file, setFile] = useState<any>(null)
    const { user } = useSelector((state: RootState) => state.auth)
    const [isError, setIsError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [mdValue, setMdValue] = useState<string>("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useTitle('Create new')


    const onSubmit = async (data: any) => {
        // const stringFromHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        setIsLoading(true)
        try {
            //const response = await PostService.createPost(file, data['Title'], stringFromHtml, user.id, data['Description'])
            const response = await PostService.createPost(file, data['title'], mdValue, user.id, data['description'])
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


    return (
        <div className={'createPostContainer'}>
            <div className="innerMargin">
                <div className="header">
                    <div className={'buttonContainer'}>
                        <button className='postButton' onClick={handleSubmit(onSubmit)}>
                            投稿する {isLoading && <CircularProgress style={{ color: 'white' }} size={20} />}
                        </button>
                        {isError && <div className={'alert danger'}>{isError}</div>}
                    </div>
                </div>



                <div className="spotName">
                    ゆ家 和ごころ 吉の湯
                </div>
                <div className="inputContainers">
                    <div className="inputContainer">
                        <textarea name="" id="" rows={10}></textarea>
                    </div>
                </div>
                <div className={'postInner'}>
                    <FileUpload
                        displayImage={true}
                        handleFile={(file: File | undefined) => setFile(file)}
                    />

                </div>

            </div>
        </div>

    );
};

export default CreatePost;