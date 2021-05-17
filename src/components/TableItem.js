import React, { useState } from "react";
import "./TableItem.css";
import { deleteContact, triggerFavourite } from "../actions";
import { useDispatch } from "react-redux";

const TableItem = ({ contact }) => {
  console.log("create item");
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    console.log(e.target.id);
    dispatch(deleteContact(e.target.id));
  };

  const handleStar = (e) => {
    dispatch(triggerFavourite(e.target.id))
  };

  const [nameI, setNameI] = useState();
  const [numberI, setNumberI] = useState();

  return contact.map((el) => {
    console.log(el);
    return (
      <tr className="selectedRow" key={el.id}>
        <td >
          {/* <span>✏</span> */}
          <span onClick={handleStar} id={el.id} className={el.star ? "star" : "notstar"}>
            {el.star ? "🌟" : "⭐"}
          </span>
        </td>
        <td>{el.name}</td>
        <td>{el.number}</td>
        <td className="selectedTd">
          
          <span id={el.id} className="delete" onClick={handleDelete}>
            ❌
          </span>
        </td>
      </tr>
    );
  });
};

export default TableItem;
