import React from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sarah Smith</span>
            <span className="widgetSmUserTitle">gynaecologist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Christopher Davis</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>{" "}
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/8420889/pexels-photo-8420889.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ava Brown</span>
            <span className="widgetSmUserTitle">Photographer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>{" "}
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/7745573/pexels-photo-7745573.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Benjamin Taylor</span>
            <span className="widgetSmUserTitle">Accountant</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>{" "}
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Chloe Miller</span>
            <span className="widgetSmUserTitle">Teacher</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
