import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { MdEmail, MdCancel } from "react-icons/md";
import { FaUserAlt, FaGraduationCap } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoIosHeart,
  IoIosListBox,
} from "react-icons/io";

import {
  PROFILE_GET_REQUEST,
  PROFILE_IMAGE_UPDATE_REQUEST,
} from "../../redux/types";
import { useDispatch, useSelector } from "react-redux";

const ProfileComponent = (props) => {
  const studentId = props.match.params.studentId;
  const dispatch = useDispatch();
  const [openBtnBox, setOpenBtnBox] = useState(false);
  const [openImgSelectModal, setOpenImgSelectModal] = useState(false);

  const profileList = useSelector((state) => state.profile.profile);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch({
      type: PROFILE_GET_REQUEST,
      payload: studentId,
    });
  }, [dispatch, studentId]);

  const onSelectImage = (e) => {
    const body = {
      studentId,
      profilePath: e.target.src,
    };

    dispatch({
      type: PROFILE_IMAGE_UPDATE_REQUEST,
      payload: body,
    });

    setOpenImgSelectModal(false);
  };
  return (
    <>
      <section className="profile" id="profile">
        <div className="container">
          <div className="profile-box">
            {profileList ? (
              <>
                <div className="profile-img-box">
                  <img
                    src={profileList.profilePath}
                    alt="test"
                    className="profile-img"
                  />

                  {auth.id === studentId ? (
                    <BiPencil
                      className="profile-img-update"
                      onClick={() => setOpenImgSelectModal(true)}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                
                {auth.id === studentId ? (
                  <>
                    <p className="profile-id">{profileList.id}</p>

                    <div className="profile-information-box">
                      <p className="profile-information">
                        <span>
                          <FaUserAlt />
                        </span>
                        {profileList.name}
                      </p>
                      <p className="profile-information">
                        <span>
                          <FaUserAlt />
                        </span>
                        {profileList.nickname}
                      </p>
                      <p className="profile-information">
                        <span>
                          <MdEmail />
                        </span>
                        {profileList.email}
                      </p>
                      <p className="profile-information">
                        <span>
                          <FaGraduationCap />
                        </span>
                        {profileList.major}
                      </p>

                      <Link to={`/students/${studentId}/update`} className="profile-update-btn"><BiPencil /></Link>

                      {openBtnBox ? (
                        <IoIosArrowDropupCircle
                          className="open-profile-btn"
                          onClick={() => setOpenBtnBox(!openBtnBox)}
                        />
                      ) : (
                        <IoIosArrowDropdownCircle
                          className="open-profile-btn"
                          onClick={() => setOpenBtnBox(!openBtnBox)}
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="profile-information-box">
                      <p className="profile-information">
                        <span>
                          <FaUserAlt />
                        </span>
                        {profileList.nickname}
                      </p>
                      <p className="profile-information">
                        <span>
                          <MdEmail />
                        </span>
                        {profileList.email}
                      </p>
                      <p className="profile-information">
                        <span>
                          <FaGraduationCap />
                        </span>
                        {profileList.major}
                      </p>
                    </div>
                  </>
                )}
              </>
            ) : (
              <> </>
            )}
          </div>
          {openBtnBox ? (
            <div className="profile-btn-box">
              <p>
                <Link to={`/watchlist/${studentId}`}>
                  <span>
                    <IoIosHeart />
                  </span>
                  관심목록
                </Link>
              </p>
              <p>
                <Link to={`/sale-list/${studentId}`}>
                  <span>
                    <IoIosListBox />
                  </span>
                  판매목록
                </Link>
              </p>
              <p>
                <Link to={`/purchase-list/${studentId}`}>
                  <span>
                    <IoIosListBox />
                  </span>
                  구매목록
                </Link>
              </p>
            </div>
          ) : (
            <></>
          )}

          {openImgSelectModal ? (
            <div className="profile-img-modal">
              <div className="img-select-box" onClick={onSelectImage}>
                <img
                  src="https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/profile/1.png"
                  alt="프로필 이미지 선택"
                />
              </div>
              <div className="img-select-box" onClick={onSelectImage}>
                <img
                  src="https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/profile/2.png"
                  alt="프로필 이미지 선택"
                />
              </div>
              <div className="img-select-box" onClick={onSelectImage}>
                <img
                  src="https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/profile/3.png"
                  alt="프로필 이미지 선택"
                />
              </div>
              <div className="img-select-box" onClick={onSelectImage}>
                <img
                  src="https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/profile/4.png"
                  alt="프로필 이미지 선택"
                />
              </div>
              <div className="img-select-box" onClick={onSelectImage}>
                <img
                  src="https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/profile/5.png"
                  alt="프로필 이미지 선택"
                />
              </div>
              <div className="img-select-box" onClick={onSelectImage}>
                <img
                  src="https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/profile/6.png"
                  alt="프로필 이미지 선택"
                />
              </div>
              <div className="img-modal-top">
                <p className="img-modal-title">
                  IUAM
                  <span>Select Profile Image</span>
                </p>
                <MdCancel
                  onClick={() => setOpenImgSelectModal(false)}
                  className="img-modal-cancel"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

export default withRouter(ProfileComponent);
