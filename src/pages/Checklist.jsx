import React from "react";
import { useEffect, useState } from "react";
import pwLogo from "../assets/icons/pack-way_logo_v01_x128.png";
import trailPic from "../assets/images/trail_02.jpg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import "../styles/Checklist.css";

function Checklist() {
  const [friends, setFriends] = useState("");
  const [listItems, setListItems] = useState("data");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="checklistContainer">
      <div className="checklistHeader">
        <div className="pwLogo">
          <img src={pwLogo} alt="green outline drawing of a backpack"></img>
          <h2>Pack-Way</h2>
        </div>
        <div className="tripTitle">
          {/* <img
            src={trailPic}
            alt="several people hiking down a trail with mountains in the distance"
          ></img> */}
          <div className="tripInfo">
            <h1>Summer Getaway 2022</h1>
            <h4>July 28 - July 31, 2022</h4>
          </div>
        </div>
        <div className="checklistButtons">
          <button id="overviewBtn">OVERVIEW</button>
          <button id="checklistBtn">CHECKLIST</button>
        </div>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>+ NEW CATEGORY</th>
                <th>Friend</th>
                <th>Friend</th>
                <th>Friend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sleeping</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    id="checkbox"
                    onChange={(e) => setIsChecked(e.target.value)}
                  ></input>
                </td>
                <td>item</td>
                <td>
                  <select>
                    <option value="willPack">
                      <span>
                        <TaskAltIcon /> Will Pack
                      </span>
                    </option>
                    <option value="needItem">
                      <ErrorOutlineIcon /> Need Item
                    </option>
                    <option value="notPacking">
                      <HighlightOffIcon /> Not Packing
                    </option>
                  </select>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Clothing</td>
              </tr>
              <tr>
                <td>First-Aid</td>
              </tr>
              <tr>
                <td>Kitchen</td>
              </tr>
              <tr>
                <td>Cooking</td>
              </tr>
              <tr>
                <td>Toiletries</td>
              </tr>
              <tr>
                <td>Lighting</td>
              </tr>
              <tr>
                <td>Hiking</td>
              </tr>
              <tr>
                <td>Tools</td>
              </tr>
              <tr>
                <td>Swimming</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Checklist;
