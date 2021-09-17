import React from "react";
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem lable="Going to learn React"/>
            <PostListItem lable="This is so good"/>
            <PostListItem lable="I need a break..."/>
        </ul>
    )
}

export default PostList;