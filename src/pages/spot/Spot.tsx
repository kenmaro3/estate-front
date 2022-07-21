import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate} from "react-router-dom";
import "./spot.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import Map from "../../components/map/Map"

const Spot = () => {
    const { spot_id } = useParams()

    const navigate = useNavigate()

    const jumpToCreatePost = () => {
        console.log("create post")
        navigate("/posts/new/1")
        
    }
    return (
        <div className="spotContainer">
            <div className="innerMargin">
                <div className="header">
                    <div className="top">
                        <div className="left">

                        </div>
                        <div className="right">
                            <div className="register">
                                <span className="title">登録者</span>
                                <span className="username">kenmaro</span>
                            </div>
                            <div className="history">
                                <span className="title">更新履歴</span>
                                <span className="icon"></span>

                            </div>
                            <div className="edit">
                                <span className="title">情報修正</span>

                            </div>
                            <div className="post">

                            </div>


                        </div>
                    </div>
                    <div className="title">
                        ベルさくらの湯

                    </div>
                    <div className="address">
                        栃木県 宇都宮市
                    </div>
                    <div className="share">
                        <div className="left">
                            <div className="twitter">
                                <TwitterIcon />
                                <span className="title">
                                    ツイートする
                                </span>
                            </div>
                            <div className="facebook">
                                <FacebookIcon />
                                <span className="title">
                                    シェアする
                                </span>
                            </div>

                        </div>
                        <div className="right">
                            <div className="like">
                                <span className='icon'></span>
                                <span className="title">
                                    いいね
                                </span>
                            </div>


                            <div className="post" onClick={(() => jumpToCreatePost())}>
                                <span className='icon'></span>
                                <span className='title'>
                                    投稿
                                </span>
                            </div>



                        </div>
                    </div>



                </div>

                <div className="segment">
                    <div className="placeInfo active">
                        スポット情報
                    </div>
                    <div className="post">
                        投稿
                    </div>

                </div>
                <div className="infoContainer">
                    <div className="featureCard">
                        <div className="icon">

                        </div>
                        <div className="title">
                            特徴１
                        </div>
                        <div className="value">
                            4

                        </div>
                        <div className="comment">
                            コメントが入る！
                        </div>

                    </div>
                    <div className="featureCard">
                        <div className="icon">

                        </div>
                        <div className="title">
                            特徴２

                        </div>
                        <div className="value">
                            5

                        </div>
                        <div className="comment">
                            コメントが入る！

                        </div>

                    </div>

                </div>
                <div className="postContainer">
                    <div className="header">
                        ダイビングイッタ
                    </div>
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
                <div className="basicInfoContainer">
                    <div className="header">
                        基本情報
                    </div>
                    <div className="container">
                        <div className="left">
                            <div className="image">
                                <img width="400px" src="https://pro-foto.jp/free/img/images_big/gyo0029-024.jpg" alt="" />

                            </div>
                            <div className="map">
                                <Map />

                            </div>

                        </div>
                        <div className="right">
                            <div className="infoCard">
                                <div className="title">
                                    スポット名

                                </div>
                                <div className="text">
                                    ベルさくらの湯

                                </div>

                            </div>
                            <div className="infoCard">
                                <div className="title">
                                    住所
                                </div>
                                <div className="text">
                                    栃木県 宇都宮市 陽東6-5-31
                                </div>
                            </div>
                            <div className="infoCard">
                                <div className="title">
                                    アクセス
                                </div>
                                <div className="text">
                                    ＪＲ宇都宮駅東口から国道4号線方面約2.4km
                                </div>
                            </div>
                            <div className="infoCard">
                                <div className="title">
                                    駐車場
                                </div>
                                <div className="text">
                                    駐車場5,000台完備(内専用地下駐車場235台)
                                </div>
                            </div>
                            <div className="infoCard">
                                <div className="title">
                                    TEL
                                </div>
                                <div className="text">
                                    028-663-4126
                                </div>
                            </div>
                            <div className="infoCard">
                                <div className="title">
                                    HP
                                </div>
                                <div className="text">
                                    <a href="http://bellsakuranoyu.com/">http://bellsakuranoyu.com/</a>

                                </div>
                            </div>
                            <div className="infoCard">
                                <div className="title">
                                    営業時間
                                </div>
                                <div className="text">
                                    8時00分～0時00分
                                </div>
                            </div>
                            <div className="infoCard">
                                <div className="title">
                                    料金
                                </div>
                                <div className="text">
                                    大人【平日】770円
                                    【土日祝】880円
                                    小人【平日・土日祝】400円
                                    (4歳〜小学生)
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
                <div className="photoContainer">
                    <div className="header">
                        写真ギャラリー
                    </div>
                    <div className="content">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Spot