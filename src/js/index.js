import "../scss/app.scss";

import {
  updateCardInformation
} from "./ui";

const ctrlEventInfo = (e) => {
  updateCardInformation(e);
};

const setupEventListener = () => {
  document.addEventListener("keyup", ctrlEventInfo);
};

const init = () => {
  setupEventListener();
};

init();