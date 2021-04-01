import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { FaUserAlt, FaGraduationCap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const ProfileUpdateComponent = (props) => {
  const studentId = props.match.params.studentId;
  
  const dispatch = useDispatch();
  const profileList = useSelector((state) => state.profile.profile);
  const auth = useSelector((state) => state.auth);

  const [errorMsg, setErrorMsg] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    nickname: "",
    major: "",
  });

  useEffect(() => {
    if (profileList === null) {
        props.history.push(`/students/${studentId}`);
    } else {
        if(auth.id !== studentId) {
            props.history.push(`/students/${studentId}`);
        } else {
            setFormValues({
                email: profileList.email,
                nickname: profileList.nickname,
                major: "",
            });
        }
    }
    
  }, [dispatch, props.history])

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onHandlerSelect = (e) => {
    setFormValues({
      ...formValues,
      major: e.target.value,
    });
  };

  const onUpdateProfile = (e) => {
    e.preventDefault();

    const { email, nickname, major } = formValues;
    let body = {
        email,
        nickname,
        major,
      };
      setErrorMsg("하이");
      console.log(body);
  }

    return (
        <section className="profile-update" id="profile-update">
            <div className="container">
                <div className="profile-box">
                    {profileList ? (
                        <div className="profile-information-box">
                            <h1 className="profile-update-title">프로필 수정</h1>
                            <p className="profile-information">
                                <span><FaUserAlt /></span>
                                {profileList.name}
                            </p>

                            <p className="profile-information">
                                <span><FaUserAlt /></span>
                                <input 
                                    type="text"
                                    name="nickname"
                                    className="update-profile"
                                    autoComplete="off"
                                    onChange={onChange}
                                    defaultValue={profileList.nickname}
                                />
                            </p>

                            <p className="profile-information">
                                <span><MdEmail /></span>
                                <input 
                                    type="text"
                                    name="email"
                                    className="update-profile"
                                    autoComplete="off"
                                    onChange={onChange}
                                    defaultValue={profileList.email}
                                />
                            </p>

                            <div className="profile-information">
                                <span><FaGraduationCap /></span>
                                <select
                                className="update-major"
                                onChange={onHandlerSelect}
                                defaultalue=""
                                >
                                    <option value="">학과 선택 </option>
                                    <option value="1">비서학과</option>
                                    <option value="2">관광서비스경영학과</option>
                                    <option value="3">휴먼사회복지학과</option>
                                    <option value="4">비지니스영어과</option>
                                    <option value="5">비즈니스중국어과</option>
                                    <option value="6">비즈니스일본어과</option>
                                    <option value="7">세무회계학과</option>
                                    <option value="8">글로벌항공서비스학과</option>
                                    <option value="9">건축학과</option>
                                    <option value="10">토목공학과</option>
                                    <option value="11">실내건축과</option>
                                    <option value="12">디지털산업디자인학과</option>
                                    <option value="13">시각디자인과</option>
                                    <option value="14">주얼리디자인학과</option>
                                    <option value="15">멀티미디어디자인학과</option>
                                    <option value="16">정보통신공학과</option>
                                    <option value="17">리빙세라믹디자인학과</option>
                                    <option value="18">게임/vr디자인학과</option>
                                    <option value="19">방송영상미디어학과</option>
                                    <option value="20">방송뷰티학과</option>
                                    <option value="21">기계자동화학과</option>
                                    <option value="22">컴퓨터전자공학과</option>
                                    <option value="23">산업경영공학과</option>
                                    <option value="24">컴퓨터소프트웨어학과</option>
                                    <option value="25">메카트로닉스공학과</option>
                                    <option value="26">융합기계공학과</option>
                                </select>
                            </div>
                            <p className="form-errmsg">{errorMsg}</p>
                            <button className="update-btn" onClick={onUpdateProfile}>Update</button>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </section>
    );
};

export default withRouter(ProfileUpdateComponent);