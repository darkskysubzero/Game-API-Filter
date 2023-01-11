import React from "react";
import Filter from "./Filter";
import GameItems from "./GameItems";

const UI = (props) => {
    return (
        <div className="ui">
            <Filter />
            <GameItems />
        </div>
    )
}

export default UI;