import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [addTitle, setAddTitle] = useState("");
  const [addAmount, setAmount] = useState("");
  const [addPrice, setPrice] = useState("");
  const titleHandler = (e) => {
    setAddTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(),
      title: addTitle,
      quantity: addAmount,
      price: addPrice,
      amount: addAmount * addPrice,
    };
    console.log(newItem);
    props.addItem(newItem);
    setAddTitle("");
    setAmount("");
    setPrice("");
  };
  return (
    <div>
      <h3 className={classes.title}>Voucher</h3>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          placeholder="Enter Item's Title"
          onChange={titleHandler}
          value={addTitle}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Item's Quantity"
          onChange={amountHandler}
          value={addAmount}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Enter Item's Price"
          onChange={priceHandler}
          value={addPrice}
          required
        />
        <div className={classes.action}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
