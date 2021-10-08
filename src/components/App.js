/***
 *  @author alexandercddev
 *  @description 
 *  @date 09/octubre/2021 
**/ 
import React from 'react';
import image from '../assets/images/image.jpg';

export const App = () => {
    const handleOpen = (url) => window.open(url);
    return (
        <div className="container">
            <div className="card slide-bottom">
                <div className="col">
                    <h2>About Me ___</h2>
                    <h4>I'm a Profesional Web Designer</h4>
                    <p>
                        Nulla pellentesque mi non laoreet eleifend. Integer sed porttitor
                        mollisar lorem, at molestie arcust pulvinar ut.. Proina fermentum
                        est. Cras mist ipsum, consectetur ipsum in, egestas tellus ipsu
                        vestibulum telllus accumsan nec tristique justo.
                    </p>
                    <div className="stast">
                        <button 
                            className="btn btn-info"
                            onClick={() => {
                                handleOpen("https://www.alexandercd.dev/projects")
                            }}
                        >
                            Download Cv
                        </button>
                        <button 
                            className="btn btn-primary"
                            onClick={() => {
                                handleOpen("https://www.alexandercd.dev/about")
                            }}
                        >
                            Hire Me
                        </button>
                    </div>
                </div>
                <div className="col image">
                    <img alt="About me, I'am professional web designer" src={image} width="300" height="300"></img>
                </div>
            </div>
        </div>
    )
}

export default App;