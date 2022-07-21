import React, { FC } from 'react';
import './kuitem.scss'
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

const ku_jp_to_id = (ku_id: string): string => {
    const ku_id_en_map = new Map<string, string>([
        ["港区", "1"],
        ["品川区", "2"],
        ["目黒区", "3"],
        ["渋谷区", "4"],
        ["新宿区", "5"],
    ])

    return ku_id_en_map.get(ku_id) ?? ""
}

interface KuItemProps {
    // post: IPost;
    // displayImage?: boolean;
    name: string;
    isMobile: boolean;
}

const KuItem: FC<KuItemProps> = ({ name, isMobile }) => {

    const navigate = useNavigate()

    const jumpToPost = () => {
        navigate(`/tables/${ku_jp_to_id(name)}`)
    }



    return (
        <div className={`${isMobile ? "kuItemContainerMobile" : "kuItemContainer"}`}>

            <div className="kuContainer" onClick={(() => jumpToPost())}>
                <div className="name">
                    {name}
                </div>
                

            </div>
        </div>
    );
};

export default KuItem;