"use client";

import {
  changeHeight,
  changeWidth,
  changeShape,
  changeBackgroundColor,
} from "@/redux/reducerSlice/boxSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Box = () => {
  const { backgroundcolor, height, width, borderRadius } = useSelector(
    (state) => state.box
  );
  const dispatch = useDispatch();
  const generateArea = () => {
    if (borderRadius == "50%") {
      return Math.PI * (width / 2) ** 2;
    } else {
      return height * width;
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: backgroundcolor,
          height: height,
          width: width,
          borderRadius: borderRadius,
        }}
      ></div>
      {generateArea()}
      <div>
        <button
          className=" mx-5 my-2 px-5 rounded-md py-2 bg-blue-500"
          onClick={() => dispatch(changeWidth())}
        >
          +width
        </button>{" "}
        <button
          className=" mx-5 my-2 px-5 rounded-md py-2 bg-blue-500"
          onClick={() => dispatch(changeHeight())}
        >
          +height
        </button>
        <button
          className=" mx-5 my-2 px-5 rounded-md py-2 bg-blue-500"
          onClick={() => dispatch(changeShape())}
        >
          +Change to circle
        </button>
        <input
          className=" text-black"
          onChange={(e) => dispatch(changeBackgroundColor(e.target.value))}
          type="text"
          placeholder="Enter color"
        />
      </div>
    </div>
  );
};

export default Box;
