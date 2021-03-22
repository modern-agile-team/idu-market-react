import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import testImg from "../../img/신발.jpg";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
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

  const profileList = useSelector((state) => state.profile.profile);

  useEffect(() => {
    dispatch({
      type: PROFILE_GET_REQUEST,
      payload: studentId,
    });
  }, [dispatch]);

  return (
    <>
      <section className="profile" id="profile">
        <div className="container">
          <div className="profile-box">
            {profileList ? (
              <>
                <div className="profile-img-box">
                  <img src={testImg} alt="test" className="profile-img" />
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
        </div>
      </section>
    </>
  );
};

export default withRouter(ProfileComponent);
