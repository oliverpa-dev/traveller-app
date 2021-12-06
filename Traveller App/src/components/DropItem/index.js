import React, { useRef } from "react";
import View from "./view";

import useDrop from "../../hooks/useDrop";

const DropItem = ({ children, onDrop, img, outside, empty }) => {
  const dropRef = useRef();
  const { droppedItem } = useDrop({
    ref: dropRef,
    onDrop
  });
  return (
    <View ref={dropRef} empty={empty} img={img} outside={outside} droppedItem={droppedItem}>
      {children}
    </View>
  );
};

export default DropItem