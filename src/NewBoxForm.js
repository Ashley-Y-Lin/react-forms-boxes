import React, { useState } from "react";

/** Form for creating a new box to add to a list.
 *
 * Has state for the height, width, bg-color of the box; on submission,
 * sends {height, width, bgColor} to fn rec'd from parent.
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const initialState = { height: 0, width: 0, bgColor: "" };
  const [formData, setFormData] = useState(initialState);

  /** Send {height, width, bgColor} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="bgColor">Background Color:</label>
      <input
        id="bgColor"
        name="bgColor"
        value={formData.bgColor}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
