import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { BOARD_NEW_REQUEST, BOARD_NEW_INIT } from "../../../redux/types";

//CKEditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import { editorConfiguration } from "../../Editor/EditorConfig";
import Myinit from "../../Editor/UploadAdapter";
import { useDispatch, useSelector } from "react-redux";

const PostWriteComponent = (props) => {
  const dispatch = useDispatch();
  const categoryName = props.match.params.categoryName;
  let { num } = useSelector((state) => state.boardNew);

  const [write, setWrite] = useState(false);

  const [formValues, setFormValues] = useState({
    studentId: localStorage.getItem("userId"),
    title: "",
    content: "",
    thumbnail: "",
    price: "",
    categoryName,
  });

  useEffect(() => {
    if (num) {
      props.history.push(`/boards/${categoryName}/${num}`);

      dispatch({
        type: BOARD_NEW_INIT,
      });
    }
  }, [num]);

  console.log(write);

  const getDataFromCKEditor = (event, editor) => {
    const data = editor.getData();
    console.log(data);

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

      console.log(formValues);
    } else {
      setFormValues({
        ...formValues,
        thumbnail:
          "https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/default-thumbnail/communication-2.png",
        content: data,
      });
    }
    console.log(formValues);
  };

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

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

    if (title === "") alert("타이틀을 적어주세요.");
    else if (content === "") alert("빈 본문입니다.");
    else {
      dispatch({
        type: BOARD_NEW_REQUEST,
        payload: body,
      });
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
            />
            <span className="post-write-border"></span>
          </div>

          <div className="form-group price">
            <input
              type="text"
              name="price"
              id="price"
              className="write-price"
              onChange={onChange}
              placeholder="Price"
            />
            <span className="post-write-border"></span>
            <span className="price-won">원 (숫자만 입력 ex. 1000)</span>
          </div>

          <div className="form-group">
            <CKEditor
              editor={ClassicEditor}
              config={editorConfiguration}
              onReady={Myinit}
              onBlur={getDataFromCKEditor}
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
      </div>
    </section>
  );
};

export default withRouter(PostWriteComponent);
