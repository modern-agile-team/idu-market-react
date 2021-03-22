import React from "react";
import ProfileComponent from "../../components/Profile/ProfileComponent";
import BoardBanner from "../../components/Boards/Layout/BoardBanner";

const ProfilePage = () => {
  return (
    <>
      <BoardBanner title="IUAM" desc="Profile" />
      <ProfileComponent />
    </>
  );
};

export default ProfilePage;
