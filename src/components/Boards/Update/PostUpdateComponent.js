import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FcCancel } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { BOARD_DETAIL_REQUEST, BOARD_WRITE_REQUEST } from "../../../redux/types";

//CKEditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import { editorConfiguration } from "../../Editor/EditorConfig";
import Myinit from "../../Editor/UploadAdapter";

const PostUpdateComponent = (props) => {
  const categoryName = props.match.params.categoryName;
  const num = props.match.params.num;

  const [modal, setModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalErrorMsg, setModalErrorMsg] = useState("");
  const [modalError, setModalError] = useState(false);
  const [formValues, setFormValues] = useState({
    studentId: localStorage.getItem("userId"),
    title: "",
    content: "",
    thumbnail: "",
    price: "",
    categoryName,
  });

  const dispatch = useDispatch();
  const boardDetail = useSelector((state) => state.boards);

  console.log(boardDetail);
  useEffect(() => {
      dispatch({
          type: BOARD_DETAIL_REQUEST,
          payload: {
            categoryName,
            num,
          },
      })
  }, [dispatch]);

  const getDataFromCKEditor = (event, editor) => {
    const data = editor.getData();

    console.log(data);
    //ThumbNail Image 추출
    if (data && data.match("<img src=")) {
      const whereImgStart = data.indexOf("<img src=");
      const extName = [
        "jpeg",
        "png",
        "jpg",
        "gif",
        "PNG",
        "JPEG",
        "JPG",
        "GIF",
      ];

      let whereImgEnd = "";
      let extNameFind = "";
      let resultImgUrl = "";

      for (let i = 0; i < extName.length; i++) {
        if (data.match(extName[i])) {
          extNameFind = extName[i];
          whereImgEnd = data.indexOf(`${extName[i]}`);
        }
      }

      if (extNameFind === "jpeg" || extNameFind === "JPEG") {
        resultImgUrl = data.substring(whereImgStart + 10, whereImgEnd + 4);
      } else {
        resultImgUrl = data.substring(whereImgStart + 10, whereImgEnd + 3);
      }

      setFormValues({
        ...formValues,
        thumbnail: resultImgUrl,
        content: data,
      });
    } else {
      //이미지 등록을 하지 않을 경우
      setFormValues({
        ...formValues,
        thumbnail:
          "https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/default-thumbnail/communication-2.png",
        content: data,
      });
    }
  };

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(categoryName === 'free' || categoryName === 'notice') {
      const {
        studentId,
        title,
        content,
        categoryName,
      } = formValues;
  
      const body = {
        studentId,
        title,
        content,
        categoryName,
      };

      console.log(body);
      
      //유효성 검사
      if (title === "") {
        setModal(true);
        setModalError(true);
        setModalErrorMsg("타이틀을 적어주세요.");
  
        setTimeout(() => {
          setModal(false);
        }, 1500);
      }
      /// ^[0-9]+$/: 비어있지 않은 연속된 숫자 문자열
      else if (content === "") {
        setModal(true);
        setModalError(true);
        setModalErrorMsg("빈 본문입니다.");
  
        setTimeout(() => {
          setModal(false);
        }, 1500);
      } else {
        dispatch({
          type: BOARD_WRITE_REQUEST,
          payload: body,
        });
        setModal(true);
        setModalMsg("게시글 업로드에 성공하셨습니다.");
        setModalError(false);
      }
      
    } else {
      const {
        studentId,
        title,
        content,
        thumbnail,
        price,
        categoryName,
      } = formValues;
  
      const body = {
        studentId,
        title,
        content,
        thumbnail,
        price,
        categoryName,
      };
  
      //유효성 검사
      if (title === "") {
        setModal(true);
        setModalError(true);
        setModalErrorMsg("타이틀을 적어주세요.");
  
        setTimeout(() => {
          setModal(false);
        }, 1500);
      }
      /// ^[0-9]+$/: 비어있지 않은 연속된 숫자 문자열
      else if (price.length > 0 && price.match(/^[0-9]+$/) === null) {
        setModal(true);
        setModalError(true);
        setModalErrorMsg("가격을 숫자만 입력해주세요.");
  
        setTimeout(() => {
          setModal(false);
        }, 1500);
      } else if (content === "") {
        setModal(true);
        setModalError(true);
        setModalErrorMsg("빈 본문입니다.");
  
        setTimeout(() => {
          setModal(false);
        }, 1500);
      } else {
        dispatch({
          type: BOARD_WRITE_REQUEST,
          payload: body,
        });
        setModal(true);
        setModalMsg("게시글 업로드에 성공하셨습니다.");
        setModalError(false);
      }
    }
  };

  return (
    <section id="post-write" className="post-write">
      <div className="container">
        <form className="post-write-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              id="title"
              className="write-title"
              onChange={onChange}
              placeholder="Title"
              value={boardDetail.title}
            />
            <span className="post-write-border"></span>
          </div>

          {categoryName === 'free' || categoryName === 'notice' ? (
            ""
          ): (
            <div className="form-group price">
              <input
                type="text"
                name="price"
                id="price"
                className="write-price"
                onChange={onChange}
                placeholder="Price"
                value={boardDetail.price}
              />
              <span className="post-write-border"></span>
              <span className="price-won">원 (숫자만 입력 ex. 1000)</span>
            </div>
          )}
          

          <div className="form-group">
            <CKEditor
              editor={ClassicEditor}
              config={editorConfiguration}
              onReady={Myinit}
              onBlur={getDataFromCKEditor}
              data={boardDetail.content}
            />
          </div>

          <div className="post-btn-box">
            <button className="post-write-btn" onClick={onSubmit}>
              Upload
            </button>
            <Link to={`/boards/${categoryName}`} className="post-cancel-btn">
              Cancel
            </Link>
          </div>
        </form>

        {modal ? (
          <div className="modal-wrapper">
            <div className="container">
              {modalError ? (
                <>
                  <FcCancel className="modal-icon-error" />
                  <h2 className="modal-msg-error">{modalErrorMsg}</h2>
                </>
              ) : (
                <>
                  <IoIosCheckmarkCircle className="modal-icon" />
                  <h2 className="modal-msg">{modalMsg}</h2>
                </>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default withRouter(PostUpdateComponent);
