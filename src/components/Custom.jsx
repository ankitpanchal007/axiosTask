
import axios from "axios";
import { useState } from "react";

function useCustom(url) {
    let [data, setData] = useState([]);
    axios.get(url).then((res) => { setData(res.data); })
        .catch((err) => console.log(err))
    // console.log(data);
    // console.log(url);
    return data ;
}
export default useCustom;