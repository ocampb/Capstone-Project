import React from "react";
import "./styles/Dashboard.scss";
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { GrFormClose } from "react-icons/gr";

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

      {/* <div className="header-flex">
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Notes</h3>
      </div> */}

      {/* GRID VERSION */}
      {/* <div className="dashboard-grid">
        <p>SallyCEO</p>
        <p>sallyceo@gmail.com</p>
        <p>SallyEnterprises</p>
        <div className="icon-flex">
          <GrFormClose className="close-icon" />
        </div>
      </div>
      <div className="dashboard-grid">
        <p>Bob Salesman</p>
        <p>bobsales@gmail.com</p>
        <p>BobEnterprises</p>
        <div className="icon-flex">
          <GrFormClose className="close-icon" />
        </div>
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
              <td>SallyEnterprises</td>
              <td>
                <GrFormClose />
              </td>
            </tr>
            <tr>
              <td>Bob Salesman</td>
              <td>bobsales@gmail.com</td>
              <td>BobEnterprises</td>
              <td>
                <GrFormClose />
              </td>
            </tr>
            <tr>
              <td>Karen DesignComplainer</td>
              <td>karensales@gmail.com</td>
              <td>KarenEnterprises</td>
              <td>
                <GrFormClose />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
