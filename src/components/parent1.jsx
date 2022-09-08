import { useState } from "react";
import Child1 from "./child1";
function Parent1() {
    const [value, setValue] = useState([]);
    return (
        <>
            <Child1 value={setValue} />
            <p>
                {value.map((value) => {
                    return (
                        <p>userID: {value.userId},
                            id: {value.id},
                            title: {value.title} ,
                            completed: {value.completed}
                        </p>
                    )
                })}
            </p>
        </>)
}
export default Parent1;