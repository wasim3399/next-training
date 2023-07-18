"use client";
import React from "react";
import { Button } from "./ui/button";
import type { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "@/store/slice/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counterSlice.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row gap-8 justify-center mt-10">
      <Button
        variant={"destructive"}
        onClick={() => dispatch(counterActions.decrement())}
      >
        Decrement
      </Button>

      <span className="text-lg leading-10 font-semibold">{count}</span>
      <Button
        variant={"secondary"}
        onClick={() => {
          dispatch(counterActions.increment());
        }}
      >
        Increment
      </Button>
    </div>
  );
}
