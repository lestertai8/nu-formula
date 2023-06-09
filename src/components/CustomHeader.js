import React from 'react';

function CustomHeader(props) {
  const container_style = {
    width: "100%",
    height: "260px",
    textAlign: "center",
    background: "black"
  }

  const text_style = {
    position: "relative",
    fontSize: "72px",
    fontWeight: "800",
    fontFamily: "Helvetica",
    color: "#FCFAFF",
    top: "-85%",
  }

  const img_style = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: "0.5",
  }

  return (
      <div style = {container_style}>
        <img style = {img_style} src = {props.img} alt = ""></img>
        <h1 style = {text_style}>{props.name}</h1>
      </div>
);}

export default CustomHeader;