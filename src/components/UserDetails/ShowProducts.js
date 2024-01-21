import React from "react";
import classes from "./ShowProducts.module.css";

const ShowProducts = (props) => {
  const deleteHandler = () => {
    alert(`${props.ID}`);
    props.ondelete(props.ID, props.PRICE)
  };

  const editHandler = () => {
    alert("edited");
  };
  return (
    <div>
      <li className={classes.list} key={props.ID}>
        <span>
          <p>{props.NAME}</p>
          <p>{props.PRICE}</p>
          <button
            onClick={() => {
              deleteHandler(props.ID);
            }}
          >
            Delete
          </button>
          <button onClick={editHandler}>Edit</button>
        </span>
      </li>
    </div>
  );
};

export default ShowProducts;
