import { useEffect, useState } from "react";
const UseCustomHook = (url) => {
    const [data, setData] = useState([]); // data is empty array
    useEffect(() => {
        fetch(url, {
            method: "GET"
        })
            .then((response) => response.json()) // 1st then
            .then((json) => { // 2nd then (Promise chaining)
                setData(json); // to update state
            });
    }, []);
    return [data];
}

export default UseCustomHook;