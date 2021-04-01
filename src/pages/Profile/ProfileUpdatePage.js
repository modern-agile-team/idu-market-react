import React from 'react';
import BoardBanner from "../../components/Boards/Layout/BoardBanner";
import ProfileUpdateComponent from '../../components/Profile/ProfileUpdateComponent';

const ProfileUpdatePage = () => {
    return (
        <div>
            <BoardBanner title="IUAM" desc="Profile" />
            <ProfileUpdateComponent></ProfileUpdateComponent>
        </div>
    );
};

export default ProfileUpdatePage;