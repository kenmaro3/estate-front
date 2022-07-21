import React, { useEffect, useState } from 'react';
import './post.scss'
import { Link, useParams, useNavigate } from "react-router-dom";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Post = () => {
    const { post_id } = useParams()

    return (
        <div className="postContainer">
            <div className="postCard">
                <div className="header">
                    <div className="title">
                        ベルさくらの湯

                    </div>
                    <div className="address">
                        栃木県 宇都宮市
                    </div>
                </div>
                <div className="segment">
                    <div className="placeInfo">
                        スポット情報
                    </div>
                    <div className="post active">
                        投稿
                    </div>

                </div>

                <div className="contentContainer">
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

                    <div className="text">

                        ロックンロール明けの朝。
                        泊まりの朝ウナとチェックアウトが、少しの気怠さと少しの寝不足と少しの帰りたくない感でいっぱいなのは、ニコーリフレでも大垣サウナでもゴールデンタイムでも同じ。

                        あー楽しかったな。
                        あー帰んなきゃな。
                        あーまた明日から頑張らんとな。

                        というかけがえのない時間は、日曜朝TVの釣りでも皇室でもバナナマンを見ながらでもいいが、フィンランド的なTV無しサ室でセルフロウリュ、セルフロックンロウリュしながらもいい。
                        あんまり自分と向き合い過ぎるのはアレだが。

                        せっかくの高松ですから今日はもう一サくらい行ってみよう。

                        朝食はさか枝うどんへ。
                        うどん・そばミックスのひやかけと、肉ぶっかけ。ミックスは各1玉とは知らなかった。要は朝から3玉食べて満腹。Game Over。
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

                    <div className="commentContainer">
                        <textarea
                            value=""
                            placeholder={'この投稿へのコメント'}
                            className={'commentFormArea'}
                        />

                        <div className="buttonContainer">
                                <button className="submit">
                                    コメントを投稿する
                                </button>
                                <button className="other_post">
                                    この場所の他の投稿を見る
                                </button>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )


}

export default Post;