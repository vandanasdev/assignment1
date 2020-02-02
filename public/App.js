"use strict";

var element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h1", null, "Assignment 1"));
ReactDOM.render(element, document.getElementById('contents'));