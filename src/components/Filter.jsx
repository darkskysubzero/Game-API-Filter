import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
    return (
        <div className="filter">
            <p>Filter Results</p>
            <form>
                <div className="toprow">
                    <label>Name (contains)</label>
                    <input type="text" placeholder="Text string" />
                </div>
                <div className="lowrow">
                    <div className="minscore">
                        <label>Minimum Score</label>
                        <input type="number" placeholder="1-10" />
                    </div>
                    <div className="orderby">
                        <label>Order By</label>
                        <div className="dropdown">
                            <FontAwesomeIcon icon={faArrowUp} />
                            <select>
                                <option value="release">Release Date</option>
                                <option value="score">Score</option>
                                <option value="name">Name</option>
                            </select>
                        </div>
                    </div>
                    <button>Clear</button>
                </div>

            </form>
        </div>
    )
}

export default Filter;