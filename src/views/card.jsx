/* eslint-disable no-unused-vars */
import { h } from "hyperapp";

const close = (state) => ({ ...state, modal: false });
export const Card = ({ state }) => (
  <div
    class={state.modal && `modal`}
    style={{ display: state.modal ? "block" : "none" }}
    onclick={close}
  >
    <div class="modal-content">
      <div class="wrap">
        <div class="block-title">
          {`Hi, ${state.givenName} ${state.familyName} from ${state.city}`}
        </div>
        {[1, 2, 3, 4, 5]
          .sort(() => Math.random() - 0.5)
          .map((option) => (
            <div class={`block style-${option}`}></div>
          ))}
      </div>
    </div>
  </div>
);
