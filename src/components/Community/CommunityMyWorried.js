import React, { useState, useContext, useEffect } from "react";
import Box from "./Box";
import Nav from "../Nav";
import Worried from "./Worried";
import MyWorried from './MyWorried';
import styles from "../../styles/Community/Worried.module.css";
import axios from "axios";
import { JoinContext } from "../../Pages/Join/JoinProvider";

function CommunityMyWorried() {
    const [posts, setPosts] = useState([]);
    const [isWorriedClicked, setIsWorriedClicked] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const { userId } = useContext(JoinContext);

    const handleWorriedClick = (post) => {
        setSelectedPost(post);
        setIsWorriedClicked(true);
    };

    const handleBackClick = () => {
        setIsWorriedClicked(false);
    };

    const GetMyWorried = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_HOST}/community/user/${userId}`)
            if (res.status === 200) {
                setPosts(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        GetMyWorried();
    }, []);

    return (
        <div style={{ height: "80vh" }}>
            {isWorriedClicked ? (
                <div>
                    <MyWorried post={selectedPost} />
                </div>
            ) : (
                <div>
                    <div className={styles['myworried-container']}>
                        {posts.map((post, index) => (
                            <Worried 
                                key={index} 
                                title={post.title} 
                                commentCount={post.commentCount} 
                                onClick={() => handleWorriedClick(post)}
                            />
                        ))}
                    </div>
                    <Box />
                    <Nav />
                </div>
            )}
        </div>
    );
}

export default CommunityMyWorried;
