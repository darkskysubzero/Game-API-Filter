import React from "react";
import Filter from "./Filter";
import GameItems from "./GameItems";

const UI = (props) => {
    return (
        <div className="ui">
            <Filter data={props.data} setData={props.setData} filtered={props.filtered} setFiltered={props.setFiltered} />
            <GameItems data={props.data} filtered={props.filtered} />
        </div>
    )
}

export default UI;