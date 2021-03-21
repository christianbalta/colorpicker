import React, {useState} from 'react';
import List from "./List";
import colorData from './Data/colorData';
import imagesData from "./Data/imagesData";
import Logo from './Images/bsz-logo-200x.png';

function App() {
    const [colors, setColors] = useState(colorData);
    const [images, setImages] = useState(imagesData);

    return (
        <>
            <header>
                <img src={Logo} alt="bsz-logo" className="img-fluid"/>
            </header>
            <section>
                <div>
                    <div className="row">
                        <List colors={colors} images={images}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
