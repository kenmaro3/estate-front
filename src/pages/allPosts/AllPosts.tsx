import React from 'react'
import Post from '../post/Post'
import PostItem from '../../components/postlist/postitem/PostItem'
import "./allposts.scss"
import MediaQuery from "react-responsive";
import SideConditionSearch from '../../components/sideConditionSearch/SideConditionSearch';

function AllPosts() {
    return (
        <>
            <MediaQuery query="(min-width: 768px)">
                <div className="allPostsContainer">
                    <div className="allPostsContainerHeader">
                        <h2>
                            全国のダイビング記録

                        </h2>
                        <div className="description">

                            ダイビングに行った記録や口コミを残してみよう
                        </div>
                    </div>

                    <div className="allPostsContainerMain">
                        <div className="allPostsConditionSearchContainer">
                            <SideConditionSearch />
                        </div>

                        <div className="allPostsPostItemContainer">
                            <PostItem isMobile={false} />
                            <PostItem isMobile={false} />

                        </div>


                    </div>

                </div>

            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <div className="allPostsContainerMobile">
                    <div className="header">
                        <h2>
                            全国のダイビング記録

                        </h2>
                        <div className="description">

                            ダイビングに行った記録や口コミを残してみよう
                        </div>
                    </div>
                    <SideConditionSearch />
                    <PostItem isMobile={true} />
                </div>

            </MediaQuery>
        </>
    )
}

export default AllPosts