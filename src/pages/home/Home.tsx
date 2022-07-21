import React, { FC, useState, useEffect } from 'react';
import './home.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import PostList from "../../components/postlist/PostList";
import SidebarRight from "../../components/sidebarRight/SidebarRight"
import SearchBar from "../../components/searchBar/SearchBar"
import Map from "../../components/map/Map"
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PrefectureSelect from '../../components/prefecturSelect/PrefectureSelect';
import FeatureSelect from '../../components/featureSelect/FeatureSelect';
import SpotList from '../../components/spotlist/SpotList';
import News from '../../components/news/News';
import { Link } from 'react-router-dom';
import KuList from '../../components/kuList/KuList';
import Sheet from 'sheet-happens'

function useWatch(interval: number) {
    const [time, updateTime] = useState(Date.now());

    useEffect(() => {
        const timeoutId = setTimeout(() => updateTime(Date.now()), interval);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [time]); // eslint-disable-line react-hooks/exhaustive-deps

    return time;
}

const Home: FC = () => {
    const time = useWatch(1)
    const [index, setIndex] = useState(0)
    const [name, setName] = useState("image0")
    useEffect(() => {
        const tmp = Math.floor(time / 8000 % 4)
        setIndex(tmp)

    }, [time])

    useEffect(() => {
        setName(`image${index}`)
    }, [index])


    return (
        <div className={'homeContainer'}>
            <div className="whiteBody">
                <div className="newPostContainer">
                    <div className="header">
                        <div className="title">
                            東京都内の中古マンション情報
                        </div>
                        <div className="description">
                            自分にあった物件を探してみよう
                        </div>
                    </div>
                    <div className="body">
                        <KuList isMobile={false} />

                    </div>

                </div>
                <div className="newPlaceContainer">
                    <div className="header">
                        <div className="title">
                            新着分析
                        </div>
                        <div className="description">
                            物件の分析情報を更新します
                        </div>
                    </div>
                    <div className="body">
                        <div className="contentContainer">

                        </div>
                        <div className="more">
                            <Link to="/search">
                                <button>もっと見る</button>
                            </Link>
                        </div>

                    </div>

                </div>



            </div>

            <div className="grayBody">
                <div className="homeNewsContainer">
                    <div className="header">
                        <div className="title">
                            お知らせ
                        </div>
                        <div className="description">
                            運営からのお知らせ。<a>Twitter</a>でも情報発信中。
                        </div>
                    </div>
                    <div className="body">
                        <News />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;