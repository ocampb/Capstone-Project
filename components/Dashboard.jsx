import React from "react";
import "./styles/Dashboard.scss";
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { GrFormClose } from "react-icons/gr";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

const Dashboard = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      {/* <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "DUMMY_CASE" })}>
        Increment
      </button> */}
      <div className="dash-add">
        <h1>My Dashboard</h1>

        <input type="button" value="Add" className="add-button" />
      </div>

      {/* <div className="input-flex">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="text" placeholder="company" />
      </div> */}

      {/* TABLE VERSION */}
      <div className="table-flex">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Notes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sally CEO</td>
              <td>sallyceo@gmail.com</td>
              <td>Is the CEO of the business</td>
              <td>
                <MoreVertIcon />
              </td>
            </tr>
            <tr>
              <td>Bob Salesman</td>
              <td>bobsales@gmail.com</td>
              <td>
                Bob has a pitch he wants to include in our meeting. Remember to
                take notes and ask any questions that you may have for him.
              </td>
              <td>
                <MoreVertIcon />
              </td>
            </tr>
            <tr>
              <td>Karen DesignComplainer</td>
              <td>karensales@gmail.com</td>
              <td>I mean, I guess she can join?</td>
              <td>
                <MoreVertIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
