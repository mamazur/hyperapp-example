/* eslint-disable no-unused-vars */
import { h } from "hyperapp";
import { targetValue } from "@hyperapp/events";

const updateField = (state, { target: { id: field, value } }) => ({
  ...state,
  [field]: value,
});

export const Field = ({ id, name, value }) => (
  <div class="field">
    <label class="label" for={id}>
      {name}
    </label>
    <input
      type="text"
      class="input"
      id={id}
      value={value}
      onInput={updateField}
    />
  </div>
);
