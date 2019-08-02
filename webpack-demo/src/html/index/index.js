import _ from "lodash";
import "./index.css";
// import Print from './print';

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.onclick = Print.bind(null, "Hello webpack!");

  return element;
}

document.body.appendChild(component());
