import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : ""} */}
      {/* {props.bio ? <p>{props.bio}</p> : null} */}
      {props.bio ? <p>{props.bio}</p> : ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;



/*
if (props.bio) {
  <p>{props.bio}</p>
} else {
  null
}

props.bio ? <p>{props.bio}</p> : null
*/

/*
// Example:
if (condition) {
  doThis();
} else {
  doThat();
}

const result = condition ? doThis() : doThat();
*/