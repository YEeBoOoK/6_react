import React from 'react';
import dog from '../image/pets/собака.jpg';
import mouse from '../image/pets/мышь.jpg';
import obezyana from '../image/pets/горилла.jpg';
// import cat from '../image/pets/кошка.jpg';
// import goat from '../image/pets/коза.jpeg';
// import logo from "../image/log.png";
import Card from "../module/Card";
// import Slider from "../module/Slider0";
// import Slider0 from "../module/Slider0";
import Slider01 from "../module/slider_01";
import News from "../module/News";

const Main = () => {
    return (
        <div>
            <main style={{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Найденные животные</h2>

                <Slider01/>


                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Карточки найденных животных</h2>
                <div className="d-flex flex-row flex-wrap justify-content-center">


                    <Card/>

                </div>



                <div className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                     style={{"background-color":"#9A9EAB"}}><News/></div>

                <div id="emailHelp" className="form-text text-center">   Мы никогда не делимся Вашими e-mail ни с кем.
                </div>



            </main>
        </div>
    );
};

export default Main;