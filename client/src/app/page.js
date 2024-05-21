"use client";
import { decrement, increment, reset } from "@/redux/reducerSlice/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className=" mx-5 my-2 px-5 rounded-md py-2 bg-blue-500"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      {data}
      <button
        className=" mx-5 my-2 px-5 rounded-md py-2 bg-blue-500"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <button
        className=" mx-5 my-2 px-5 rounded-md py-2 bg-blue-500"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}
