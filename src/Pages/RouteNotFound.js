import React from "react";

export default function RouteNotFound() {
  let r = [];
  [...Array(10).keys()].forEach((i) =>
    r.push(<h1 key={i}>Unable to find that...</h1>)
  );
  return r;
}
