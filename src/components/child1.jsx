import React from "react";
import useCustom from "./Custom";

const Child1 = ({ value }) => {
    const data = useCustom("https://jsonplaceholder.typicode.com/todos");
    return (
        <button onClick={()=> value(data)}>click</button>
    )
};
export default Child1;
