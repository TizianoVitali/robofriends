import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ marginTop: '20px', paddingTop: '20px', overflowY: 'scroll', border: '5px solid black', height: '750px', background: 'linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%)' }}>
            {props.children}
        </div>
    );
}

export default Scroll;