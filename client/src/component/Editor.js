import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editors = () => {
  const [text, setText] = useState("");
  const handleChange = (e, editor) => {
    setText(editor.getData());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("okk");
  };
  return (
    <div>
      <h4>Create Your own post</h4>
      <form onSubmit={handleSubmit}>
        <CKEditor editor={ClassicEditor} onChange={handleChange} />

        <button className="btn btn-primary">submit</button>
      </form>
      {text}
    </div>
  );
};

export default Editors;
