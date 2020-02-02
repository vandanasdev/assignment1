"use strict";

var element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("div", null, "Vandana Singh"), React.createElement("div", null, " I am an extended studies Student"), React.createElement("a", {
  href: "https://github.com/vandanasdev/assignment1"
}, "VIEW MY GITHUB REPO"));
ReactDOM.render(element, document.getElementById('myInfo'));