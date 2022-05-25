import React from 'react';
import dog from '../image/pets/собака.jpg';
import mouse from '../image/pets/мышь.jpg';
import obezyana from '../image/pets/горилла.jpg';
import cat from '../image/pets/кошка.jpg';
import goat from '../image/pets/коза.jpeg';
import logo from "../image/log.png";
import Card from "../module/Card";
import Slider0 from "../module/Slider0";
import Slider01 from "../module/slider_01";

const Main = () => {
    return (
        <div>
            <main style={{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Найденные животные</h2>
                <div id="carouselExampleIndicators" className="carousel slide m-auto rounded bg-opacity-25 w-75 p-2"
                     data-bs-ride="carousel" style={{"height":" 570px ","min-height": "400px","background-color":"#68829E"}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active p-3 rounded"
                             style= {{"background-color":"#68829E","max-height":"580px"}}>
                            <h2 className="text-center text-uppercase text-white mb-3" style={{"font-size":" 26px"}}>Найдена
                                собака</h2>
                            <img src={dog} className="rounded mx-auto d-block w-100 h-auto"
                                 alt="Собака" style={{"max-width":"500px"}}/>
                                <p className="text-center text-white mt-3" style={{"font-size":"18px"}}>Собака рыжая, была
                                    утеряна в красногвардейском районе</p>
                        </div>
                        <div className="carousel-item p-3 rounded" style= {{"background-color":"#68829E","max-height":"580px"}}>
                            <h2 className="text-center text-uppercase text-white mb-3">Найдена мышь</h2>
                            <img src={mouse} className="rounded mx-auto d-block w-100 h-auto" alt="Мышь"
                                 style={{"max-width":"500px"}}/>
                                <p className="text-center text-white mt-3" style={{"font-size":"18px"}}>Мышь серая, была
                                    утеряна в центральном районе</p>
                        </div>
                        <div className="carousel-item p-3 rounded" style= {{"background-color":"#68829E","max-height":"580px"}}>
                            <h2 className="text-center text-uppercase text-white mb-3">Найдена горила</h2>
                            <img src={obezyana} className="rounded mx-auto d-block w-100 h-auto"
                                 alt="Горилла" style={{"max-width":"500px"}}/>
                                <p className="text-center text-white mt-3" style={{"font-size":"18px"}}>Горилла, была
                                    утеряна в красногвардейском райне районе</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Предыдущий</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Следующий</span>
                    </button>
                </div>

                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Карточки найденных животных</h2>
                <div className="d-flex flex-row flex-wrap justify-content-center">


                    <Card/>

                </div>

                <Slider01/>

                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Подписка на новости</h2>
                <form className="w-50 m-auto p-3" style={{"min-width":"300px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                            почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.
                            </div>
                    </div>

                    <button type="submit" className="btn btn-primary"
                            style={{"background-color":"#68829E","border-color":"#68829E"}}>Подписаться
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Main;