import React from "react";
import Box from "./Box";
import Nav from "../Nav";
import CommunityText from "./CommunityText";
import styles from "../../styles/Community/Worried.module.css"
import CommentNum from "./CommentNum";
import Comment from "./Comment";
import CommentContainer from "./CommentContainer"

function MyWorried(){

    
            
    return(
        <div>
            <div className={styles['worried-contaienr']}>
                <div style={{display:"flex", flexDirection:"column", rowGap:"3vw"}}>
                    <CommunityText title="배에 거지가 들었어요" text="저 진심으로 배에 거지새끼가 든 것 같아요 먹어도  먹어도 배가 고파요 아니면 거지새끼가 든게 아니라 그냥 제가 돼지가 된걸까요? ㅜㅜㅜㅜ"/>
                    <CommentNum />
                    <div style={{border:"1px solid var(--sub-color"}}></div>
                </div>
                <div>
                <CommentContainer />
                </div>
                
            </div>
            <Box/>
            <Nav />
        </div>
    )
}
export default MyWorried;