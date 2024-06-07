import React, { useState } from "react";
import Box from "./Box";
import Nav from "../Nav";
import Worried from "./Worried";
import MyWorried from "./MyWorried";
import styles from "../../styles/Community/Worried.module.css";

function CommunityMyWorried() {
    const [isWorriedClicked, setIsWorriedClicked] = useState(false);

    const handleWorriedClick = () => {
        setIsWorriedClicked(true);
    };

    const handleBackClick = () => {
        setIsWorriedClicked(false);
    };

    return (
        <div style={{height:"80vh"}}>
            {isWorriedClicked ? (
                <div>
                    <MyWorried />
                </div>
            ) : (
                <div className={styles['myworried-container']}>
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                    <Worried onClick={handleWorriedClick} />
                </div>
            )}
            <Box />
            <Nav />
        </div>
    );
}

export default CommunityMyWorried;
