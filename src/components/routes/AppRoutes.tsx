import React, { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import NotFound from "../../pages/404/NotFound";
import RequireAuth from "./RequireAuth";
import CreatePost from "../../pages/createPost/CreatePost";
import UpdatePost from "../../pages/updatePost/UpdatePost";
import UpdateDraft from "../../pages/updateDraft/UpdateDraft";
import Profile from "../../pages/profile/Profile";
import Post from "../../pages/post/Post";
import Spot from "../../pages/spot/Spot";
import { motion } from "framer-motion";
import Search from '../../pages/search/Search';
import Fork from '../../pages/fork/Fork';
import Draft from '../../pages/draft/Draft';
import CreateSpot from '../../pages/createSpot/CreateSpot';
import ProfileEdit from '../../pages/profile/ProfileEdit';
import AllPosts from '../../pages/allPosts/AllPosts';
import Table from '../../components/table/Table';
import SignUp from "../../pages/signUp/SignUp";

import SpotImages from '../../pages/spotImages/SpotImages';

const AppRoutes: FC = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home />} />
                <Route path={'login'} element={<Login />} />
                <Route path={'register'} element={<SignUp/>} />
                <Route path={'search'} element={<Search />} />
                <Route path={'posts'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><AllPosts/></motion.div>} />
                <Route path={'posts/:post_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Post /></motion.div>} />
                <Route path={'tables/:ku_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Table/></motion.div>} />
                <Route path={'spots/new'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><CreateSpot/></motion.div>} />
                <Route path={'spots/:spot_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Spot/></motion.div>} />
                <Route path={'spots/:spot_id/posts'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Spot/></motion.div>} />
                <Route path={'spots/:spot_id/images/new'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><SpotImages/></motion.div>} />
                <Route path={'profiles/:user_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Profile /></motion.div>} />
                <Route path={'posts/new/:spot_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><CreatePost/></motion.div>} />
                <Route element={<RequireAuth />}>
                    <Route path={'profile/edit'} element={<ProfileEdit/>} />
                    <Route path={'profile'} element={<Profile />} />
                </Route>
                <Route path={'*'} element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;