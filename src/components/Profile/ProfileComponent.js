import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import testImg from '../../img/신발.jpg';
import { FaCartArrowDown, FaHeart, FaRegClipboard, FaEnvelope, FaUserAlt } from "react-icons/fa"
import { BsFillChatDotsFill } from "react-icons/bs"

import { PROFILE_GET_REQUEST } from "../../redux/types";
import { useDispatch, useSelector } from "react-redux";

const ProfileComponent = (students) => {

  const dispatch = useDispatch();
  const profilelist = useSelector((state) => state.profile.profile);

  useEffect(() => {
    dispatch({
      type: PROFILE_GET_REQUEST,
      payload: students,
    });
  }, [dispatch]);

  const profileInfo = profilelist.map((el) => {
    return (
      <div className="profile-information-box">
        <label>Name</label>
        <p className="profile-information-name">{el.name}</p>
        <label>ID</label>
        <p className="profile-information-name">{el.id}</p>
        <label>Email</label>
        <p className="profile-information-name">{el.email}</p>
      </div>
     )
  });
  
  return (
    <>
       <section className="profile" id="profile">
        <div className="container">
          <div className="profile-box">
            
              <div className="profile-img">
                <img src={testImg} alt="test" />
              </div>

              

            <div calssName="profile-information">
              {profileInfo}
            </div>

            <div className="profile-btnbox">
                <Link to="/" className="profile-btnbox-btn">
                  <p>관심목록</p>
                    <FaHeart size="48"/>
                </Link> 
                <Link to="/" className="profile-btnbox-btn">
                  <p>판매목록</p>
                    <FaCartArrowDown size="48" />
                </Link>          
                <Link to="/" className="profile-btnbox-btn">
                  <p>구매목록</p>
                    <FaCartArrowDown size="48" />
                </Link>
                <Link to="/" className="profile-btnbox-btn">
                  <p>댓글</p>
                    <BsFillChatDotsFill size="48" />
                </Link>
                <Link to="/" className="profile-btnbox-btn">
                  <p>게시글</p>
                    <FaRegClipboard size="48" />
                </Link>
              
              </div>
          </div>
        </div>  
      </section>
    </>
  );
};

export default ProfileComponent;