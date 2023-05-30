import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";

export default function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <Description content={props.item.description} />
    </div>
  );
}

function Description({ content }) {
  return <p>{content}</p>;
}
