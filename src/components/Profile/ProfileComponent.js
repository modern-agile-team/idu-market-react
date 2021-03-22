import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import testImg from "../../img/신발.jpg";
import { MdEmail, MdCancel } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoIosHeart,
  IoIosListBox,
} from "react-icons/io";

import { PROFILE_GET_REQUEST } from "../../redux/types";
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
  }, [dispatch]);

  if (auth.id) {
    if (auth.id !== studentId) {
      alert("잘못된 접근 방식입니다.");
      props.history.push("/");
    }
  } else {
    props.history.push("/");
  }

  return (
    <>
      <section className="profile" id="profile">
        <div className="container">
          <div className="profile-box">
            {profileList ? (
              <>
                <div className="profile-img-box">
                  <img src={testImg} alt="test" className="profile-img" />
                  <BiPencil
                    className="profile-img-update"
                    onClick={() => setOpenImgSelectModal(true)}
                  />
                </div>

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
                      <MdEmail />
                    </span>
                    {profileList.email}
                  </p>

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
              <> </>
            )}
          </div>
          {openBtnBox ? (
            <div className="profile-btn-box">
              <p>
                <span>
                  <IoIosHeart />
                </span>
                <Link to="/">관심목록</Link>
              </p>
              <p>
                <span>
                  <IoIosListBox />
                </span>
                <Link to="/">판매목록</Link>
              </p>
              <p>
                <span>
                  <IoIosListBox />
                </span>
                <Link to="/">구매목록</Link>
              </p>
            </div>
          ) : (
            <></>
          )}

          {openImgSelectModal ? (
            <div className="profile-img-modal">
              <div className="img-select-box">
                <img src='https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/profile/1.png' alt="프로필 이미지 선택" />
              </div>
              <div className="img-select-box">
                <img src='https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/profile/2.png' alt="프로필 이미지 선택" />
              </div>
              <div className="img-select-box">
                <img src='https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/profile/3.png' alt="프로필 이미지 선택" />
              </div>
              <div className="img-select-box">
                <img src='https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/profile/4.png' alt="프로필 이미지 선택" />
              </div>
              <div className="img-select-box">
                <img src='https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/profile/5.png' alt="프로필 이미지 선택" />
              </div>
              <div className="img-select-box">
                <img src='https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/profile/6.png' alt="프로필 이미지 선택" />
              </div>
              <div className="img-modal-top">
                <p className="img-modal-title">IUAM<span>Select Profile Image</span></p>
                <MdCancel onClick={() => setOpenImgSelectModal(false)} className="img-modal-cancel" />
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
