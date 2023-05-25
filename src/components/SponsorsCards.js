import React from "react";
import "./components/SponsorCards.css"

function SponsorCards(props){

    return (
        <img className = "sponsorCard" src = {props.img} alt = ""></img>
    );
}

export default SponsorCards;