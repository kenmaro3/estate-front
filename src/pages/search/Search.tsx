import React, { FC, useEffect, useState } from 'react';
import './search.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import PostService from "../../services/post-service"
import { IPost } from '../../types/post-type';
import { IUser } from '../../types/user-type';
import UserService from '../../services/user-service';
import SearchLeftList from "../../components/searchLeftList/SearchLeftList"
import SearchPostList from "../../components/searchPostList/SearchPostList"
import SearchUserList from "../../components/searchUserList/SearchUserList"
import PrefectureSelect from '../../components/prefecturSelect/PrefectureSelect';
import FeatureSelect from '../../components/featureSelect/FeatureSelect';

const Search: FC = () => {
    const search = useLocation().search;

    const navigate = useNavigate()

    const queryString = new URLSearchParams(search);
    const [posts, setPosts] = useState<IPost[]>([])
    const [users, setUsers] = useState<IUser[]>([])
    const [type, setType] = useState<string>("posts")
    const [contentsToLeftList, setContentsToLeftList] = useState<Map<string, number>>(new Map([]))
    const [functionsToLeftList, setFunctionToLeftList] = useState<Map<string, any>>(new Map([]))

    const queryStringHandler = async () => {

        if (queryString.get("q")) {
            const keyword = queryString.get("q") ?? ""
            const response = await PostService.getPostByKeyword(keyword)
            setPosts(response.data)

            const jumpToPosts = () => {
                navigate(`/search?q=${keyword}&type=posts`)
            }
            setFunctionToLeftList(functionsToLeftList.set("posts", jumpToPosts))
        }
        if (queryString.get("q")) {
            const keyword = queryString.get("q") ?? ""
            const response = await UserService.getByKeyword(keyword)
            setUsers(response.data)

            const jumpToUsers = () => {
                navigate(`/search?q=${keyword}&type=users`)
            }
            setFunctionToLeftList(functionsToLeftList.set("users", jumpToUsers))
        }
        if (queryString.get("type")) {
            setType(queryString.get("type") ?? "posts")
        }

    }


    useEffect(() => {
        queryStringHandler()
    }, [])

    useEffect(() => {
        queryStringHandler()
    }, [search])

    useEffect(() => {
        console.log("posts", posts)
        setContentsToLeftList(contentsToLeftList.set("posts", posts.length))

    }, [posts])

    useEffect(() => {
        console.log("users", users)
        setContentsToLeftList(contentsToLeftList.set("users", users.length))

    }, [users])


    return (
        <div className={'searchContainer'}>
            <>
                <div className="searchHeader">
                    <div className="inputContainer">
                        <div className="area">
                            <PrefectureSelect className=''>
                                <div className="button">
                                    <span className='left'>地域</span>
                                    <span className='middle'>選択する</span>
                                    <div className="icon"></div>

                                </div>
                            </PrefectureSelect>
                        </div>
                        <div className="feature">
                            <FeatureSelect className=''>
                                <div className="button">
                                    <span className='left'>特徴</span>
                                    <span className='middle'>選択する</span>
                                    <div className="icon"></div>
                                </div>

                            </FeatureSelect>
                        </div>
                        <input type="text" placeholder='キーワード' className='keyword' />

                    </div>

                    <div className="searchButtonContainer">
                        <div className="button">
                            <div className="icon"></div>
                            <span className='value'>検索</span>
                        </div>

                    </div>

                </div>

                <div className="body">
                    <div className="header">
                        <div className="left">
                            <div className="title">
                                検索結果一覧

                            </div>
                            <div className="description">
                                現在地から近い順
                            </div>

                        </div>
                        <div className="right">
                            <div className="title">
                                並び順
                            </div>
                            <div className="select">
                                現在地から近い順
                            </div>
                            <div className="result">
                                <span className='title'>検索結果</span>
                                <span className='number'>10</span>
                                <span className='ken'>件</span>


                            </div>
                        </div>
                    </div>

                    <div className="list">
                        <div className="segment">
                            <button className="array active">リスト表示</button>
                            <button className='map'>地図表示</button>

                        </div>

                        <div className="spots">
                            <div className="spot">
                                <img src="https://www.owd.jp/wp-content/uploads/2018/04/DSC7678.jpg" alt="" />
                                <div className="info">
                                    <div className="name">
                                        ドーミーインEXPRESS目黒青葉台

                                    </div>
                                    <div className="address">
                                        東京都 目黒区

                                    </div>
                                    <div className="feature">
                                        ホテルの為宿泊者のみ、施設が利用できる。 タトゥーNG。 ◎ただし、貸切利用の場合は上記に当てはまらない。

                                    </div>
                                </div>
                                <div className="right">
                                    <div className="like">
                                        <span className='title'>いいね</span>
                                        <span className='number'>10</span>

                                    </div>
                                    <div className="post">
                                        <span className='title'>投稿</span>
                                        <span className='number'></span>

                                    </div>
                                </div>

                            </div>
                            <div className="spot">
                                <img src="https://www.owd.jp/wp-content/uploads/2018/04/DSC7678.jpg" alt="" />
                                <div className="info">
                                    <div className="name">
                                        ドーミーインEXPRESS目黒青葉台

                                    </div>
                                    <div className="address">
                                        東京都 目黒区

                                    </div>
                                    <div className="feature">
                                        ホテルの為宿泊者のみ、施設が利用できる。 タトゥーNG。 ◎ただし、貸切利用の場合は上記に当てはまらない。

                                    </div>
                                </div>
                                <div className="right">
                                    <div className="like">
                                        <span className='title'>いいね</span>
                                        <span className='number'>10</span>

                                    </div>
                                    <div className="post">
                                        <span className='title'>投稿</span>
                                        <span className='number'></span>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </>
        </div>
    );
};

export default Search;