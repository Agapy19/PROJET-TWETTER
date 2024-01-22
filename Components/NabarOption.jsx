import React from "react";
function NavbarOption({ active, name, Icon }) {
    return (
        <div className="nav-bar__option">
            <Icon />
            <h2>{name} </h2>
        </div>
    )

}
export default NavbarOption;