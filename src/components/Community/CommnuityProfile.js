import React from "react";
import styles from "../../styles/Community/CommunityProfile.module.css";

function CommunityProfile(props) {
    const { createdAt, nickname, img } = props;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    return (
        <div className={styles['profile-container']}>
            <img src={"/images/chajo.png"} alt="profile" className={styles['profile-img']} />
            <div>
                <p className={styles['user-name']}>{nickname || '서혀니 바봉'}</p>
                <p className={styles["date"]}>{formatDate(createdAt)}</p>
            </div>
        </div>
    );
}

export default CommunityProfile;
