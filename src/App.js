import React, { useState } from "react";
import Input from "./ColumnLeft/Input";
import List from "./ColumnRight/List";
import classes from "./App.module.css";

export default function App() {
  const [lists, setLists] = useState([]);
  const addItem = (newItem) => {
    setLists((oldLists) => {
      return [...oldLists, newItem];
    });
  };

  return (
    <div>
      <div className={classes.row}>
        <div className={classes.colLeft}>
          <Input addItem={addItem} />
        </div>
        <div className={classes.colRight}>
          <List lists={lists} />
        </div>
      </div>
    </div>
  );
}
