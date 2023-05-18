import React from 'react';

function AboutTeamContainerLeft(props) {
  const container_style = {
    width: "80%",
    minHeight: "300px",
    height: "100%",
    position: "relative",
    background: "white",
    justifyContent: "left",
    display: "flex",
    margin: "60px 0px 40px"
  }

  const img_style = {
    width: '300px',
    height: 'auto',
    objectFit: 'cover',
    position: "relative",
  }

  const text_style   = {
    position: "relative",
    padding: "40px",
    width: "67%"
  }

  const heading_style = {
    display: "block",
    position: "relative",
    fontSize: "24px",
    textAlign: "left"
  }

  const para_style = {
    display: "block",
    position: "relative",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    fontSize: "14px",
    lineHeight: "1.5",
    textAlign: "justify"
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
    width: "80%",
    minHeight: "300px",
    height: "100%",
    position: "relative",
    background: "white",
    justifyContent: "right",
    display: "flex",
    margin: "40px 0px 60px"
  }

  const img_style = {
    width: '300px',
    height: 'auto',
    objectFit: 'cover',
    position: "relative",
  }

  const text_style   = {
    position: "relative",
    padding: "40px",
    width: "67%"
  }

  const heading_style = {
    display: "block",
    position: "relative",
    fontSize: "24px",
    textAlign: "right"
  }

  const para_style = {
    display: "block",
    position: "relative",
    wordWrap: "break-word",
    fontSize: "14px",
    lineHeight: "1.5",
    textAlign: "justify"
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