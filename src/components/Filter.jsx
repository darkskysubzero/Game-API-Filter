import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from './Dropdown';

const Filter = (props) => {

    const [name, setName] = useState("");
    const [score, setScore] = useState("");


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



    // getting selected item from dropdown
    const [selected, setSelected] = useState({
        sortBy: "none",
        sortTitle: "Choose One"
    });



    useEffect(() => {

        //If both name and score are entered
        if (name.length > 0 && score.length > 0) {
            filteredArray = data.filter((item) => {
                return (item.name.toLowerCase().includes(name.toLowerCase()) && Math.trunc(item.rating) === +score);
            });
        }
        //If only name is entered
        else if (name.length > 0 && score.length === 0) {
            filteredArray = data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
        }
        //If only score is entered
        else if (name.length === 0 && score.length > 0) {
            //the bug was======> removing decimals from rating
            filteredArray = data.filter((item) => {
                return Math.trunc(item.rating) === +score
            });

        }
        //If nothing is entered
        else {
            filteredArray = data;
        }




        //if no sorting
        if (selected.sortBy === "none") {
            //update filtered array
            updateStateArray(filteredArray);
        }

        //if sorting by release
        if (selected.sortBy === "release") {
            const sortedByDate = filteredArray.sort((a, b) => b.first_release_date - a.first_release_date);
            updateStateArray(sortedByDate);
        }

        //if sorting by score
        if (selected.sortBy === "score") {
            const sortedByScore = filteredArray.sort((a, b) => b.rating - a.rating);
            updateStateArray(sortedByScore);
        }

        //if sorting by name
        if (selected.sortBy === "name") {
            const sortedByName = filteredArray.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            updateStateArray(sortedByName);
        }

    }, [name, score, selected]);




    // Clear button
    const clearEverything = (e) => {
        e.preventDefault();
        setName("");
        setScore("");
        setSelected({
            sortBy: "none",
            sortTitle: "Choose One"
        })
    }


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
                            <DropdownMenu selected={selected} setSelected={setSelected} />
                        </div>
                    </div>
                    <button onClick={clearEverything}>Clear</button>
                </div>

            </form>
        </div>
    )
}

export default Filter;