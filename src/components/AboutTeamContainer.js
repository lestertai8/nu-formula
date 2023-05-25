import React from 'react';

function AboutTeamContainerLeft(props) {
  const container_style = {
    width: "85%",
    minHeight: "300px",
    height: "100%",
    background: "#FCFAFF",
    justifyContent: "left",
    display: "flex",
    margin: "60px 0px 40px",
    borderRadius: "12px"
  }

  const img_style = {
    width: '300px',
    height: 'auto',
    objectFit: 'cover',
  }

  const text_style   = {
    padding: "40px",
    width: "68%"
  }

  const heading_style = {
    fontSize: "24px",
    fontFamily: "Helvetica",
    textAlign: "left",
    fontWeight: "800",
    color: "#4F2C84"
  }

  const para_style = {
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    fontFamily: "Helvetica",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.7",
    textAlign: "justify",
    color: "#141316"
  }
  

  return (
    <div style = {container_style}>
        <img style = {img_style} src = {props.img} alt = ""></img>
        <div style = {text_style}>
          <h1 style = {heading_style}>{props.heading}</h1>
          <p1 style = {para_style}>{props.text}</p1>
        </div>
      </div>
);}

function AboutTeamContainerRight(props) {
  const container_style = {
    width: "85%",
    minHeight: "300px",
    height: "100%",
    background: "#FCFAFF",
    justifyContent: "right",
    display: "flex",
    margin: "40px 0px 60px",
    borderRadius: "12px"
  }

  const img_style = {
    width: '300px',
    height: 'auto',
    objectFit: 'cover',
  }

  const text_style   = {
    padding: "40px",
    width: "68%"
  }

  const heading_style = {
    fontSize: "24px",
    fontFamily: "Helvetica",
    textAlign: "right",
    fontWeight: "800",
    color: "#4F2C84"
  }

  const para_style = {
    wordWrap: "break-word",
    fontSize: "14px",
    fontFamily: "Helvetica",
    fontWeight: "500",
    lineHeight: "1.7",
    textAlign: "justify",
    color: "#141316"
  }
  

  return (
    <div style = {container_style}>
        <div style = {text_style}>
          <h1 style = {heading_style}>{props.heading}</h1>
          <p1 style = {para_style}>{props.text}</p1>
        </div>
        <img style = {img_style} src = {props.img} alt = ""></img>
      </div>
);}


export {AboutTeamContainerLeft, AboutTeamContainerRight};