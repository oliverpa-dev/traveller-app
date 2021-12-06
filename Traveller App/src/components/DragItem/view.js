import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ data, classValue, color }, ref) => {
  return (
    <div className={`item ${classValue} c${color} ` } ref={ref}>
      {data.text}
    </div>
  );
});
