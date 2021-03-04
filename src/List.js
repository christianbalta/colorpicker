import React, {useState} from "react";

const List = ({colors}) => {
    const [color, setColor] = useState('#ccc');

    return (
        <>
            <aside className="scrollbar col-lg-3 col-sm-12" id="style-2">
                {colors.map((color) => {
                    const {code, hex} = color
                    return (
                        <>
                            <div className="colors" style={{backgroundColor: hex}} onClick={() => {
                                setColor(hex)
                            }}>
                            </div>
                            <p>RAL: {code}</p>
                        </>
                    )
                })}
            </aside>
            <div className="col-lg-7 col-sm-12 img-container" style={{backgroundColor: color}}>
            </div>
        </>
    )
}

export default List;