import React from "react";
import "./Sidebar.css";

import {
  BiGridAlt,
  BiSolidUser,
  BiNotepad,
  BiCalendarCheck,
  BiErrorCircle,
  BiMessageSquareAdd,
  BiWrench,
  BiLogOut,
  BiLock,
  BiUserCheck,
} from "react-icons/bi";
const Sidebar = () => {
  return (
    <React.Fragment>
      <aside>
        <div class="toggle">
          <div class="close" id="close-btn">
            <span>close</span>
          </div>
        </div>

        <div class="sidebar">
          <a>
            <span>
              <BiGridAlt />
            </span>
            <h3>Dashboard</h3>
          </a>
          <a>
            <span>
              <BiSolidUser />
            </span>
            <h3>Users</h3>
          </a>

          <a>
            <span>
              <BiUserCheck />
            </span>
            <h3>Admins</h3>
          </a>
          <a>
            <span>
              <BiMessageSquareAdd />
            </span>
            <h3>Products</h3>
          </a>
          <a>
            <span>
              <BiNotepad />
            </span>
            <h3>Orders</h3>
          </a>
          <a>
            <span>
              <BiNotepad />
            </span>
            <h3>Events</h3>
          </a>
          <a>
            <span>
              <BiErrorCircle />
            </span>
            <h3>Complaints</h3>
            <span class="lock-sign">
              <BiLock />
            </span>
          </a>

          <a>
            <span>
              <BiWrench />
            </span>
            <h3>Settings</h3>
          </a>

          <a>
            <span>
              <BiLogOut />
            </span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
