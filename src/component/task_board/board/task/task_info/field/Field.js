import React from "react";

export default function Field({name, value}) {
    return (
        <div id="field" style={FIELD_STYLE}>
            <b>{name}</b>
            <p>{value}</p>
        </div>
    )
}

const FIELD_STYLE = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}