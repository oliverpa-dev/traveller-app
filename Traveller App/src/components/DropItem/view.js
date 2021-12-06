import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ children, img, outside, empty }, ref) => {
  return (
    <div className={`${empty ? 'empty' : 'container'} ${outside ? "" : "outside"}`} ref={ref}>

      <img src={img} />

      <div className="body">{children}</div>

    </div>
  );
});
