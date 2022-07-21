import React, { FC, useState } from 'react';
import './kulist.scss'
import KuItem from "./kuitem/KuItem";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../store/reducers/post/action-creators";
import { PostSortActions } from "../../store/reducers/post/types";
import Loader from "../loader/Loader";
import { motion } from "framer-motion";
import ModalWindow from "../modalWindow/ModalWindow";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface KuListProp {
    isMobile: boolean
}


const KuList: FC<KuListProp> = ({ isMobile }) => {
    const { isAuth } = useSelector((state: RootState) => state.auth)
    const { posts, status } = useSelector((state: RootState) => state.posts)
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch()
    const [sortType, setSortType] = useState<string>("time")
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState<boolean>(false)
    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    //     if (newValue == 0) {
    //         dispatch(setSort(PostSortActions.SORT_BY_TIME))
    //     }
    //     else if (newValue == 1) {
    //         dispatch(setSort(PostSortActions.SORT_BY_COMMENTS))
    //     }
    //     else if (newValue == 2) {
    //         dispatch(setSort(PostSortActions.SORT_BY_LIKES))

    //     }
    // };


    const handleClick = (path: string) => {
        if (isAuth) {
            return navigate(`/${path}`)
        } else {
            setShowModal(true)
        }
    }

    const contentInside = (isMobile: boolean) => {
        return (
            <>
                {isMobile &&
                    <>
                        <ModalWindow setShowModal={setShowModal} showModal={showModal} />
                        <button onClick={() => handleClick('create')} className={'newPostButton'}>Create Post</button>

                    </>

                }
                <div className={'kuList'}>
                        <div className="contentContainer">
                            <KuItem name={"渋谷区"} isMobile={isMobile}/>
                            <KuItem name={"新宿区"} isMobile={isMobile}/>
                            <KuItem name={"目黒区"} isMobile={isMobile}/>
                            <KuItem name={"港区"} isMobile={isMobile}/>
                            <KuItem name={"品川区"} isMobile={isMobile}/>

                        </div>
                </div>

            </>
        )
    }

    return (
        <div className={`${isMobile ? "kuListContainerMobile" : "kuListContainer"}`}>
            {contentInside(isMobile)}

            </div>
    );
};

export default KuList;