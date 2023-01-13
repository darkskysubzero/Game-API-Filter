import React from "react";

const GameItem = (props) => {

    return (
        <div className="item">
            <div className="img">
                <img src="https://via.placeholder.com/150" />
            </div>
            <div className="info">
                <h3>{props.info.name}</h3>
                <p>Release Date: {new Date(props.info.first_release_date).toDateString()}</p>
                <p>{props.info.summary}</p>
            </div>
            <div className="number">
                <p>{Math.trunc(props.info.rating)}</p>

            </div>
        </div>
    )
}
export default GameItem;