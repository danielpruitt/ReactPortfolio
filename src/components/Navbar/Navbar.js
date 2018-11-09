import React from "react";

const Navbar = () => (
    <div>


        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper grey white custFont">
                    <a href="/" className="brand-logo center light-blue-text text-darken-4 hide-on-med-and-down"><strong>Daniel Pruitt</strong></a>
                    <ul className=" white light-blue-text text-darken-4 custFont">
                        <li className="">
                            <a className="light-blue-text text-darken-4 flow-text" href="#aboutMe"><small>About Me</small></a>
                        </li>
                        <li >
                            <a className="light-blue-text text-darken-4 flow-text" href="#portfolio"><small>Portfolio</small></a>
                        </li>
                        <li>
                            <a className="light-blue-text text-darken-4 flow-text" href="#skills"><small>Skills</small></a>
                        </li>
                        <li>
                            <a className="light-blue-text text-darken-4 flow-text" href="#contact"><small>Contact</small></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        {/* sidenav */}

    </div>

);

export default Navbar;