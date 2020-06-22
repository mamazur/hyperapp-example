/* eslint-disable no-unused-vars */
import { h } from "hyperapp";
import { targetValue } from "@hyperapp/events";
import { GeoFindMe } from "../utils/geo";
import { Card } from "./card.jsx";
import { Field } from "./field.jsx";

const updateField = (state, { target: { id: field, value } }) => ({
  ...state,
  [field]: value,
});
const open = (state) => ({ ...state, modal: true });

export const View = (state) => (
  <div>
    <div class="row container">
      <div class="column-style">
        {[1, 2, 3, 4, 5, 6, 7]
          .sort(() => Math.random() - 0.5)
          .map((option) => (
            <div class={`block style-${option}`}></div>
          ))}
      </div>
      <div class="column">
        <h3>Enter some data</h3>
        <div class="field">
          <label class="label" for="lang">
            Language
          </label>
          <select id="language" value={state.language} onInput={updateField}>
            {[
              { id: "de", name: "German" },
              { id: "en", name: "English" },
              { id: "fr", name: "French" },
              { id: "jp", name: "Japanese" },
            ].map((option) => (
              <option value={option.id} selected={option.id === state.language}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <Field id="city" value={state.city} name="city" />
        <button onclick={GeoFindMe(state)}>Get CIty</button>
        <Field id="givenName" value={state.givenName} name="Given Name" />
        <Field id="familyName" value={state.familyName} name="Family Name" />
        <Field id="email" value={state.email} name="Email" />
        <button onclick={open}>Generate card</button>
      </div>
      <div class="column">
        <h3>Current state</h3>
        <Card state={state} />
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    </div>
  </div>
);
