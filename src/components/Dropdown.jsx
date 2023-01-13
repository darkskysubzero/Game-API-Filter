import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const DropdownMenu = (props) => {

    const [isActive, setIsActive] = useState(false);

    const makeActive = () => {
        setIsActive(!isActive);
    }

    const selectThis = (e) => {
        props.setSelected({
            sortBy: e.target.getAttribute("value"),
            sortTitle: e.target.innerText
        });
        setIsActive(false);
    }

    return <Fragment>
        <div className="dropdown-list">
            <div className="dropdown-btn" onClick={makeActive}>
                <span>{props.selected.sortTitle}</span>
                <span><FontAwesomeIcon icon={faCaretDown} /></span>
            </div>
            {isActive ? <div className="dropdown-content">
                <div className="dropdown-item" onClick={selectThis} value="release">Release Date</div>
                <div className="dropdown-item" onClick={selectThis} value="score">Score</div>
                <div className="dropdown-item" onClick={selectThis} value="name">Name</div>
            </div> : ""}

        </div>

    </Fragment>
}

export default DropdownMenu;