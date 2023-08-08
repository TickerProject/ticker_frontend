import React, {useRef, useState} from "react";

function Search() {

    const ref: any = useRef(null);

    const [text, setText] = useState("Search");

    const handleChange = (event: any) => {
        setText(event.target.value);
        console.log("Text value " + event.target.value);
    }
    const clearText = () => {
        setText("");
        // if (ref.current != null) {
            ref.current.value = "";
        // }
    }

    return (
        <>
            <input className="form-control-lg" ref={ref} onChange={handleChange} id="tickerSearch" readOnly={false} type="search"  defaultValue={text} onClick={clearText}/>
        </>
    );
}

export default Search;