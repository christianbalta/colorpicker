import React, {useState} from "react";

const List = ({colors, images}) => {
    const [color, setColor] = useState('#ccc');
    const [image, setImage] = useState('')

    return (
        <>
            <aside className="scrollbar col-lg-2 col-sm-12" id="style-2">
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
            <div className="col-lg-3 col-sm-12">
                {images.map((picture) => {
                    const {image} = picture;
                    return (
                        <>
                            <div className="bg-img" style={{
                                backgroundImage: `url(${image})`,
                            }} onClick={() => {
                                setImage(image)
                            }}>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className="col-lg-6 col-sm-12 img-container"
                 style={{backgroundColor: color, backgroundImage: `url(${image})`}}>
            </div>
        </>
    )
}

export default List;