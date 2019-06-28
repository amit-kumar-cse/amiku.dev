import React from 'react';
// import bg from './images/bg.jpg';
import './App.scss';

// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/css/boostrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App container">
            <div className='background-image-container'>
                {/*<img src='http://sauravkumar.com/images/pexels-photo.jpg' alt={'laptop, notebook and coffee'}/>*/}
                <img src={'./bg.jpg'} alt={'Background image'}/>
            </div>
            {/*<div className={'header'}></div>*/}
            <section>
                <div className='jumbotron text-center'>
                    <h2 className='name'>Amit Kumar</h2>
                    <h4 className='role'>Full Stack Software Professional</h4>
                    <h5 className='role'>React | Java | AWS</h5>
                    <div>
                        <img src='./images/amit-kumar.jpg' alt={'Amit Kumar'}/>
                    </div>
                </div>

            </section>
            <footer>

            </footer>
        </div>
    );
}

export default App;
