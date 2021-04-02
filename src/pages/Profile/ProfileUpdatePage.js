import React from 'react';
import BoardBanner from "../../components/Boards/Layout/BoardBanner";
import ProfileUpdateComponent from '../../components/Profile/ProfileUpdateComponent';
import { Helmet } from 'react-helmet';

const ProfileUpdatePage = () => {
    return (
        <>
            <Helmet>
                <title>IUAM-(Profile)</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Idu Used Article Market" />
                <meta name="keywords" content="IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 프로필" />
            </Helmet>
            <BoardBanner title="IUAM" desc="Profile" />
            <ProfileUpdateComponent></ProfileUpdateComponent>
        </>
    );
};

export default ProfileUpdatePage;