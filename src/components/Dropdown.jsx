import React, { Fragment, useState } from "react";




const DropDownItem = (props) => {

    const [oselected, setOselected] = useState("");



    return <Fragment>
        <li>This is my item</li>
    </Fragment>
}

const DropdownMenu = (props) => {

    const [clicked, setClicked] = useState(false);

    const handleClicked = (e) => {
        e.preventDefault();
        setClicked(true)
    }

    return <Fragment>
        <div className="dropdownbox">
            <button className="dropdownoptions" onClick={handleClicked}>Options</button>
            <ul className={`dropdownitems ${clicked ? "showitems" : ""}`}>
                <DropDownItem clicked={clicked} />
                <DropDownItem />
                <DropDownItem />
            </ul>
        </div>

    </Fragment>
}

export default DropdownMenu;