import React from "react";
import GameItem from "./GameItem";

const GameItems = (props) => {
    const { filtered } = props;

    return (
        <div className="list">
            {filtered.map((item) => {
                return <GameItem
                    key={item.id}
                    info={item}
                />
            })}

        </div>
    )
}

export default GameItems;