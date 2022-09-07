import GetData from "./child";
import { useState } from "react";

function Parent() {
    const [value, setValue] = useState([]);

    return (
        <>
            <GetData setValue={setValue} />
            {value.map(Value =>
                <p>userID: {Value.userId},
                    id: {Value.id},
                    title: {Value.title} ,
                    completed: {Value.completed}
                </p>

            )}
        </>
    )

}

export default Parent;