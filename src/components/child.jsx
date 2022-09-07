// eslint-disable-next-line 
import React from "react";
import axios from "axios";
function GetData({ setValue }) {

    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            const temp = res.data;
            setValue(temp);
        }).catch(error => {
            return error;
        });
}
export default GetData;


