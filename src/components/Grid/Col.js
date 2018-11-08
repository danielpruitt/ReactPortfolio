import React from "react";

const Col = ({size, styleClass, children}) => (
    <div className={`${size.split(" ").map(size=>"col s" + size).join(" ")} ${styleClass}`}>
        {children}
    </div>

);

export default Col;