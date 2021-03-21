import React, {useState} from 'react';
import List from "./List";
import data from './data';
import Logo from './images/bsz-logo-200x.png';
import imagesData from "./imagesData";

function App() {
    const [colors, setColors] = useState(data);
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
