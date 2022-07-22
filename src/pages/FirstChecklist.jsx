import React from "react";
import { useEffect, useState } from "react";
import pwLogo from "../assets/icons/pack-way_logo_v01_x128.png";
import trailPic from "../assets/images/trail_02.jpg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { BsDashLg } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import data from "../packingLists.json";
import "../styles/Checklist.css";
import { red, yellow } from "@mui/material/colors";

function Checklist() {
  const [friends, setFriends] = useState("");
  const [listItems, setListItems] = useState(data);
  const [isChecked, setIsChecked] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => setSelectedOption(e.label);

  return (
    <div className="container">
      <div className="checklistHeader">
        <div className="pwLogo">
          <img src={pwLogo} alt="green outline drawing of a backpack"></img>
          <h2>Pack-Way</h2>
        </div>
        <div className="tripTitle">
          <div className="tripInfo">
            <h1>Summer Getaway 2022</h1>
            <h4>July 28 - July 31, 2022</h4>
          </div>
        </div>
        <div className="checklistButtons">
          <button id="overviewBtn">OVERVIEW</button>
          <button id="checklistBtn">CHECKLIST</button>
        </div>
        <div className="checklistContainer">
          <table>
            <thead>
              <tr>
                <th className="col1">
                  Items <button>+ Category</button>
                </th>
                <th className="col2">Friend</th>
                <th className="col3">Friend</th>
                <th className="col4">Friend</th>
              </tr>
            </thead>
            <tbody>
              <tr className="category">
                <td>
                  Sleeping <BiChevronDown /> <BiChevronUp />
                </td>
              </tr>

              <tr className="itemRow">
                {listItems.category === "Sleeping" ? (
                  <td className="td1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      id="checkbox"
                      onChange={(e) => setIsChecked(e.target.value)}
                    ></input>

                    {listItems.map((value) => (
                      <p>{listItems.item.value}</p>
                    ))}
                  </td>
                ) : (
                  <td>no list</td>
                )}
                <td className="whosPacking">
                  <BsDashLg />

                  {/* <ul className="packingTasks">
                    <li id="willPack">
                      <TaskAltIcon color="success" /> Will Pack
                    </li>
                    <li id="needItem">
                      <ErrorOutlineIcon x={{ color: yellow[600] }} /> Need Item
                    </li>
                    <li id="notPacking">
                      <HighlightOffIcon sx={{ color: red[900] }} /> Not Packing
                    </li>
                  </ul> */}
                </td>
                <td className="whosPacking">
                  <BsDashLg />
                </td>
                <td className="whosPacking">
                  <BsDashLg />
                </td>
              </tr>
              <tr className="itemRow">
                <td className="td1">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    id="checkbox"
                    onChange={(e) => setIsChecked(e.target.value)}
                  ></input>
                  <p>item</p>
                </td>
                <td className="whosPacking">
                  <BsDashLg />

                  {/* <ul className="packingTasks">
                    <li id="willPack">
                      <TaskAltIcon color="success" /> Will Pack
                    </li>
                    <li id="needItem">
                      <ErrorOutlineIcon x={{ color: yellow[600] }} /> Need Item
                    </li>
                    <li id="notPacking">
                      <HighlightOffIcon sx={{ color: red[900] }} /> Not Packing
                    </li>
                  </ul> */}
                </td>
                <td className="whosPacking">
                  <BsDashLg />
                </td>
                <td className="whosPacking">
                  <BsDashLg />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Checklist;
