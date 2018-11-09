import React from "react";

const Col = ({size, styleClass, children}) => (
    <div className={`${size.split(" ").map(size=>"col " + size).join(" ")}`}>
        {children}
    </div>

);

export default Col;