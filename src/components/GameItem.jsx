import React from "react";

const GameItem = (props) => {
    return (
        <div className="item">
            <div className="img"></div>
            <div className="info">
                <h3>Game Title</h3>
                <p>Release Date: DD/MM/YYYY</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iusto commodi, facere corporis molestiae fugiat amet aperiam alias rem eligendi delectus eius assumenda quam. At voluptas libero odit magni?</p>
            </div>
            <div className="number">
                <p>10</p>
            </div>
        </div>
    )
}
export default GameItem;