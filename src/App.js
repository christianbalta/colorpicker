import React, {useState} from 'react'
import {SwatchesPicker} from 'react-color'
import Tippy from '@tippyjs/react'
import Image from './images/istockphoto-1271083806-1024x1024.png'

function App() {

    const [selectedColor, setSelectedColor] = useState('#ccc')

    return (
        <section>
            <h1 className="text-center">Business Solution Zürich</h1>
            <h2 className="text-center">Color Picker</h2>

            <div className='area' style={{backgroundColor: selectedColor}}>
                <Tippy interactive={true} placement={'bottom'} content={
                    <SwatchesPicker
                        color={selectedColor}
                        onChangeComplete={color => setSelectedColor(color.hex)}
                    />
                }>
                    <button className='btn btn-primary'>+</button>
                </Tippy>

            </div>
            <div className="image-container center">
                <img src={Image} alt="text" width='2000' height='700'/>
            </div>
        </section>
    );
}

export default App;
