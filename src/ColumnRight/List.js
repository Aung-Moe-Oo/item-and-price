import React, { useState } from "react";
import classes from "./List.module.css";

const List = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div>Item_name </div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Amount</div>
      </div>
      {props.lists.map((list) => {
        return (
          <div key={list.id}>
            <div className={classes.list}>
              <div>{list.title} </div>
              <div>{list.quantity}</div>
              <div>{list.price}</div>
              <div>{list.amount}</div>
            </div>
          </div>
        );
      })}
      {/* <hr></hr>
      <div className={classes.list}>
        <div></div>
        <div></div>
        <div>Total</div>
        <div>0</div>
      </div> */}
    </div>
  );
};

export default List;
