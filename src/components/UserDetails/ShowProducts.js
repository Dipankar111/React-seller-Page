import React from "react";
import classes from "./ShowProducts.module.css";

const ShowProducts = (props) => {
  const deleteHandler = () => {
    // alert(`${props.ID}`);
    props.ondelete(props.ID, props.PRICE);
  };

  const editHandler = (key) => {
    // alert(key);
    // console.log(key)
    props.onedit(key);
  };
  return (
    // <li  key={props.Index}>
      <span className={classes.list}>
        <p>{props.NAME}</p>
        <p>{props.PRICE}</p>
        <button
          onClick={() => {
            deleteHandler(props.ID);
          }}
        >
          Delete
        </button>
        <button onClick={() => editHandler(props.Index)}>Edit</button>
      </span>
    // </li>
  );
};

export default ShowProducts;
