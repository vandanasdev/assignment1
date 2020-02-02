"use strict";

var element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("div", {
  className: "name"
}, "Vandana Singh"), React.createElement("img", {
  className: "image",
  src: "/images/vandanaProfilePic.png"
}), React.createElement("div", {
  className: "intro"
}, " I am an extended studies Student"), React.createElement("a", {
  className: "button",
  href: "https://github.com/vandanasdev/assignment1"
}, "VIEW MY GITHUB REPO"));
ReactDOM.render(element, document.getElementById('myInfo'));