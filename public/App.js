"use strict";

var element = React.createElement("div", {
  className: "center"
}, React.createElement("div", {
  className: "name"
}, "Vandana Singh"), React.createElement("img", {
  className: "image",
  src: "/images/vandanaProfilePic.png"
}), React.createElement("div", null, " I am an extended studies Student"), React.createElement("div", {
  className: "button-div"
}, React.createElement("a", {
  className: "button",
  href: "https://github.com/vandanasdev/assignment1"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(element, document.getElementById('myInfo'));