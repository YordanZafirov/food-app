"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();

  function pickImageHandler() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/jpg, image/jpeg, image/png"
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={pickImageHandler}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
