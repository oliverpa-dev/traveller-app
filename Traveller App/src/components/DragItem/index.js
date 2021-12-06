import React, { useState, useRef } from "react";
import "./styles.css";
import useDrag from "../../hooks/useDrag";
import View from "./view";

const DragItem =({ dragEffect, data, id , color = '2e9c8c'}) => {
  const dragRef = useRef();
  const [classValue, setClassValue] = useState("grab");
  useDrag({
    id,
    effect: dragEffect,
    ref: dragRef,
    onDragStart: () => setClassValue("grabbing"),
    onDragEnd: () => {
      setClassValue("grab");
    }
  });
  return <View ref={dragRef} data={data} color={color} classValue={classValue} />;
};

export default DragItem