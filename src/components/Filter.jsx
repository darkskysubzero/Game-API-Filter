import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from './Dropdown';

const Filter = (props) => {

    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [sortby, setSortby] = useState("none");

    const { data } = props;
    const { setFiltered } = props;

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleScore = (e) => {
        setScore(e.target.value);
    }

    const updateStateArray = (array) => {
        setFiltered([...array]);
    }


    let filteredArray = []

    useEffect(() => {

        //If both name and score are entered
        if (name.length > 0 && score.length > 0) {
            filteredArray = data.filter((item) => {
                return (item.name.toLowerCase().includes(name.toLowerCase()) && item.rating === +score);
            });
        }
        //If only name is entered
        else if (name.length > 0 && score.length === 0) {
            filteredArray = data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
        }
        //If only score is entered
        else if (name.length === 0 && score.length > 0) {
            filteredArray = data.filter((item) => item.rating == score);
        }
        //If nothing is entered
        else {
            filteredArray = data;
        }

        updateStateArray(filteredArray);

    }, [name, score]);






    return (

        <div className="filter">
            <p>Filter Results</p>
            <form>
                <div className="toprow">
                    <label>Name (contains)</label>
                    <input type="text" placeholder="Text string" value={name} onChange={handleName} />
                </div>
                <div className="lowrow">
                    <div className="minscore">
                        <label>Minimum Score</label>
                        <input type="number" placeholder="1-100" value={score} onChange={handleScore} />
                    </div>
                    <div className="orderby">
                        <label>Order By</label>
                        <div className="dropdown">
                            <div className="icon"><FontAwesomeIcon icon={faArrowUp} /></div>
                            <DropdownMenu />
                        </div>
                    </div>
                    <button>Clear</button>
                </div>

            </form>
        </div>
    )
}

export default Filter;