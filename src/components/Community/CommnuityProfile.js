import React from "react";
import styles from "../../styles/Community/CommunityProfile.module.css"

function CommunityProfile(){
    return(
        <div className={styles['profile-container']}>
            <img src="/images/chajo.png" alt="profile" className={styles['profile-img']}/>
            <div>
                <p className={styles['user-name']}>서혀니 바봉</p>
                <p className={styles["date"]}>2024.03.01</p>
            </div>
        </div>
    )
}
export default CommunityProfile;