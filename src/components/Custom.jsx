
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function useCustom(url) {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => { setData(res.data); })
            .catch((err) => console.log(err))
    }, [url]);
    // console.log(data);
    // console.log(url);

    return { data };
}
export default useCustom;