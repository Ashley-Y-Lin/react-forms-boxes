import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

/** Shopping list: manages boxes in the list
 *
 * State:
 * - boxes: array like [ { height, width, bgColor }, ... ]
 *
 * BoxList -> NewBoxForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
      <div>
        {boxes.map((box) => (
          <div key={box.id}>
            <Box height={box.height} width={box.width} bgColor={box.bgColor} removeBox={() => removeBox(box)}/>
          </div>
        ))}
      </div>
    );
  }

  /** Add new box to list. */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  }

  /** Remove box from list. */
  function removeBox(box) {
    const newBoxes = [...boxes];
    let index = boxes.indexOf(box);
    newBoxes.splice(index, 1);
    setBoxes(newBoxes);
  }

  return (
    <div className="BoxList">
      {renderBoxes()}
    </div>
  );
}

export default BoxList;
