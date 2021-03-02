import React, {useState} from "react";
import Image from "./images/istockphoto-1271083806-1024x1024.png";
import data from "./data";

const List = ({colors}) => {
    const [color, setColor] = useState('#ccc');

    return (
        <>
            <aside className="scrollbar" id="style-2">
                {colors.map((color) => {
                    const {code, hex} = color
                    return (
                        <>
                            <div className="colors" style={{backgroundColor: hex}} onClick={() => {setColor(hex)}}>
                                <p>RAL: {code}</p>
                            </div>
                        </>
                    )
                })}
            </aside>
            <div className="col-8" style={{backgroundColor: color }}>
                <img src={Image} alt="sofa" width='100%'/>
            </div>
        </>
    )
}

export default List;