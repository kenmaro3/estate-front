import {CurrentPostEnum, SetAddComment, SetCommentStatus, SetError, SetIsLiked, SetPost} from "./types";
import {IPost} from "../../../types/post-type";
import {AppDispatch, RootState} from "../../index";
import PostService from "../../../services/post-service";
import {IComment} from "../../../types/comment-type";
import {updateComments, updateLikes} from "../post/action-creators";

export const setError = (error: string): SetError => {
    return {type: CurrentPostEnum.SET_ERROR, payload: error}
}
export const setAddComment = (comment: IComment): SetAddComment => {
    return {type: CurrentPostEnum.ADD_COMMENT, payload: comment}
}

export const setCommentStatus = (status: 'default' | 'success' | 'failed'): SetCommentStatus => {
    return {type: CurrentPostEnum.SET_COMMENT_STATUS, payload: status}
}

export const setPost = (post: IPost): SetPost => {
    return {type: CurrentPostEnum.SET_POST, payload: post}
}

export const setIsLiked = (isLiked: boolean): SetIsLiked => {
    return {type: CurrentPostEnum.SET_IS_LIKED, payload: isLiked}
}

export const fetchPostById = (post_id: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setError(''))
    try{
        const user = getState().auth.user
        const response = await PostService.getById(post_id)
        const isLiked = response.data.user_likes.find(like => like.user.id === user.id)
        if(response.data){
            dispatch(setPost(response.data))
            if(isLiked){
                dispatch(setIsLiked(true))
            }
        }else{
            dispatch(setError('Error'))
        }
    }catch(e: any){
        dispatch(setError('Error'))
    }
}

export const createComment = (text: string, reproducibility: string, time_cost: string, post_id: number, user_id: number) => async (dispatch: AppDispatch) => {
    dispatch(setCommentStatus('default'))
    try{
        const response = await PostService.createComment(text, reproducibility, time_cost, post_id, user_id)
        dispatch(setAddComment(response.data))
        dispatch(updateComments(response.data))
        dispatch(setCommentStatus('success'))
        setTimeout(() => {
            dispatch(setCommentStatus('default'))
        }, 2000)
    }catch(e: any){
        if(e.response){
            dispatch(setCommentStatus('failed'))
        }
    }
}

export const likePost = (post_id: number) => async(dispatch: AppDispatch, getState: () => RootState) => {
    try{
        const currentPost = getState().currentPost.post
        const user = getState().auth.user
        const response =  await PostService.likePost(user.id, post_id)
        currentPost.user_likes.push(response.data)
        dispatch(setPost(currentPost))
        dispatch(updateLikes(response.data))
        dispatch(setIsLiked(true))
    }catch(e: any){
        console.log('error response: ', e.response)
    }
}
