import React, {useState} from 'react';

import data from './data';
import List from "./List";

import Logo from './images/bsz-logo-200x.png';
import Image from './images/istockphoto-1271083806-1024x1024.png'

function App() {
    const [colors, setColors] = useState(data);

    return (
        <>
            <header>
                <img src={Logo} alt="bsz-logo" className="img-fluid"/>
            </header>
            <section>
                <div>
                    <div className="row">
                        <List colors={colors}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
