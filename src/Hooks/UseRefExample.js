import { useEffect, useRef } from "react";

// Uncontrolled component
const UseRefExample = () => {
    const inputRef = useRef(null); // default value is null

    useEffect(() => {
        inputRef.current.focus(); // applying on focus
        console.log({ inputRef });
    }, [])

    return (<>
        <input type="text" ref={inputRef} />
    </>);
}

export default UseRefExample;