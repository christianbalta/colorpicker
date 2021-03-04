import React, {useState} from 'react';
import List from "./List";
import data from './data';
import Logo from './images/bsz-logo-200x.png';

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
