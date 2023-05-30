import React from "react";

function DonateInstructions(props) {
    const img_style = {
        width: "500px",
        height: "320px",
        borderRadius: "12px",
        objectFit: "scale-down"
    }

    const circle_style = {
        display: "flex",
        width: "62px",
        minWidth: "62px",
        height: "62px",
        maxHeight: "62px",
        borderRadius: "100%",
        background: "#8462B6",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica",
        fontSize: "24px",
        fontWeight: "800",
        textAlign: "center",
        color: "#FDFCFF"
    }
    const text_style = {
        fontFamily: 'Helvetica',
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "24px",
        width: "380px",
        color: "#FDFCFF",
        textAlign: "left",
        wordWrap: "break-word"
    }
    const circle_text_style = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "24px",
    }
    const instructions_style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "28px",
    }

    return (
        <div style = {instructions_style}>
            <div style = {circle_text_style}>
                <div style = {circle_style}> {props.number}</div>
                <p1 style = {text_style}> {props.instructions} </p1>
            </div>
            <img style = {img_style} src = {props.img} alt = ""></img>
        </div> 
    );
}

export default DonateInstructions;