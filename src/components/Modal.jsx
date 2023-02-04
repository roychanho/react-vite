import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");  // same with cd .. 
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
