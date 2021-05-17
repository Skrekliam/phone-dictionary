import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useStore } from "react-redux";
import TableItem from "./TableItem";
import "./TableList.css";
import {store} from '../index.js';

const TableList = () => {
  

  let contacts = useSelector((state) => state.contact)
  console.log(contacts)
  const [contact, setcontact] = useState(contacts)
  console.log(contact)

  function handleEdit() {
    const newState = store.getState().contact;
    setcontact(newState);
    console.log(newState);
  }

  store.subscribe(handleEdit);

  return (
    <div className="contactsList">
      <Table size="lg">
        <thead>
          <tr>
            <th style={{ width: "50px" }}></th>
            <th>Contact name</th>
            <th>Phone number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            <TableItem contact={contact}/>
          }
        </tbody>
      </Table>
    </div>
  );
};

export default TableList;
