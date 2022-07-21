import React, { FC } from 'react';
import './postitem.scss'
import { Link, useNavigate} from "react-router-dom";
import { IPost } from "../../../types/post-type";
import { formatDate } from "../../../helpers";
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
TimeAgo.addLocale(en)

interface PostItemProps {
    // post: IPost;
    // displayImage?: boolean;
    isMobile: boolean;
}

const PostItem: FC<PostItemProps> = ({ isMobile }) => {

    const navigate = useNavigate()

    const jumpToPost = () => {
        navigate("/posts/1")
    }



    return (
        <div className={`${isMobile ? "postItemContainerMobile" : "postItemContainer"}`}>

            <div className="postContainer" onClick={(() => jumpToPost())}>
                <div className="post">
                    <div className="header">
                        <div className="left">
                            <div className="container">
                                <div className="image">
                                    <PersonIcon />

                                </div>
                                <div className="nameContainer">
                                    <div className="name">
                                        ユーザーネーム
                                    </div>
                                    <div className="date">
                                        2022.02.10 １回目の訪問
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="right">
                            <div className="option">
                                <MoreHorizIcon />
                            </div>

                        </div>

                    </div>

                    <div className="content">
                        ここに投稿の内容が入る

                    </div>

                    <div className="footer">
                        <div className="like">
                            <div className="icon">
                                <FavoriteBorderIcon />
                            </div>
                            <div className="number">
                                20
                            </div>

                        </div>
                        <div className="comment">
                            <div className="icon">
                                <ChatBubbleOutlineIcon />
                            </div>
                            <div className="number">
                                10
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default PostItem;