import React from 'react';
import cat from '../image/pets/кошка.jpg';
import goat from '../image/pets/коза.jpeg';

const Profile = () => {
    return (
        <div>
            <main style = {{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-3 rounded"
                    style={{"background-color":"#9A9EAB"}}>Личный кабинет</h2>
                <div className="p-3">
                    <div className="d-flex flex-row flex-wrap border m-auto p-3 w-50 rounded"
                        style={{"min-width": "300px", "width": "45%","border": "1px solid #68829e!important","background-color":"#68829e"}}>

                        <p className="text-uppercase w-50 px-2 text-light" style={{"min-width":"300px"}}>id:</p>
                        <p className="w-50 px-2" style={{"min-width":"300px"}}>14</p>

                        <p className="text-uppercase w-50 px-2 text-light" style={{"min-width":"300px"}}>Телефон:</p>
                        <p className="w-50 px-2" style={{"min-width":"300px"}}>+7-911-456-78-78</p>

                        <p className="text-uppercase w-50 px-2 text-light" style={{"min-width":"300px"}}>email:</p>
                        <p className="w-50 px-2" style={{"min-width":"300px"}}>leonid@yandex.ru</p>

                        <p className="text-uppercase w-50 px-2 text-light" style={{"min-width":"300px"}}>Имя:</p>
                        <p className="w-50 px-2" style={{"min-width":"300px"}}>Леонид</p>

                        <p className="text-uppercase w-50 px-2 text-light" style={{"min-width":"300px"}}>Дата
                            регистрации:</p>
                        <p className="w-50 px-2" style={{"min-width":"300px"}}>26-06-2015</p>

                        <p className="text-uppercase w-50 px-2 text-light" style={{"min-width":"300px"}}>Количество
                            найденных животных:</p>
                        <p className="w-50 px-2" style={{"min-width":"300px"}}>2</p>

                        <p className="text-uppercase w-50 px-2 text-light" style={{"min-width":"300px"}}>Количество
                            объявлений:</p>
                        <p className="w-50 px-2" style={{"min-width":"300px"}}>4</p>
                    </div>
                </div>

                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Изменить адрес электронной почты</h2>
                <form className="w-50 m-auto p-3" style={{"min-width":"300px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                            почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                            <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                    </div>

                    <button type="submit" className="btn btn-primary"
                            style={{"background-color": "#68829E","border-color":" #68829E"}}>Отправить
                    </button>
                </form>

                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Изменить номер телефона</h2>
                <form className="w-50 m-auto p-3" style={{"min-width":"300px"}}>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Введите номер телефона</label>
                        <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp"/>
                            <div className="form-text">Используйте цифры, +, -.</div>
                    </div>

                    <button type="submit" className="btn btn-primary"
                            style={{"background-color": "#68829E","border-color": "#68829E"}}>Отправить
                    </button>
                </form>

                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Добавленные объявления</h2>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    <div className="d-flex flex-row flex-wrap border rounded m-3 p-3 position-relative"
                        style={{"min-width": "300px", "width": "45%","border": "1px solid #68829e!important","background-color":"#68829e"}}>
                        <img src={cat} className="w-100 mx-auto d-block mb-4"
                             alt="рисунок животного"/>
                            <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width":"300px"}}>id:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>14</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width":"300px"}}>Вид
                                животного:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}> Кошка</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light"
                               style={{"min-width":"300px"}}>Описание:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>Потерялась кошка, пушистая, серая. Любит
                                играть, ласковая.</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width":"300px"}}>Номер
                                чипа:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>ca-001-spb</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light"
                               style={{"min-width":"300px"}}>Район:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>Василиостровский</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light"
                               style={{"min-width":"300px"}}>Дата:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>24-03-2020</p>
                            <div className="position-absolute text-danger"
                                 style={{"top":"15px", "right": "15px", "cursor": "pointer"}}>&#10060;</div>
                            <button type="submit" className="mt-3 btn btn-primary bg-light"
                                    style={{"color":"#68829E","border-color":"#fff","position":"relative","left":"50%","transform": "translate(-50%,0)"}}>Редактировать
                                объявление
                            </button>
                    </div>
                    <div className="d-flex flex-row flex-wrap border rounded m-3 p-3 position-relative"
                        style={{"min-width": "300px", "width": "45%","border": "1px solid #68829e!important","background-color":"#68829e"}}>
                        <img src={goat} className="w-100 mx-auto d-block mb-4"
                             alt="рисунок животного"/>
                            <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width":"300px"}}>id:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>18</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width":"300px"}}>Вид
                                животного:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}> Коза</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light"
                               style={{"min-width":"300px"}}>Описание:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>Потерялась коза, последний раз видели в
                                здании Московского вокзала
                                г. Санкт-Петербург. Коза белая, пуховая.</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width":"300px"}}>Номер
                                чипа:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>go-011-spb</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light"
                               style={{"min-width":"300px"}}>Район:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>Центральный</p>

                            <p className="text-uppercase fw-bold w-50 px-2 text-light"
                               style={{"min-width":"300px"}}>Дата:</p>
                            <p className="w-50 px-2" style={{"min-width":"300px"}}>14-03-2022</p>
                            <div className="position-absolute text-danger"
                                 style={{"top":"15px", "right": "15px", "cursor": "pointer"}}>&#10060;</div>
                            <button type="submit" className="mt-3 btn btn-primary bg-light"
                                    style={{"color":"#68829E","border-color":"#fff","position":"relative","left":"50%","transform": "translate(-50%,0)"}}>Редактировать
                                объявление
                            </button>
                    </div>
                </div>

                <nav aria-label="Page navigation example" className="m-3">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link text-light" style={{"background-color":"#68829E"," border-color":"#fff"}}
                               href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link text-light"
                                                     style={{"background-color":"#68829E", "border-color":"#fff"}} href="#">1</a>
                        </li>
                        <li className="page-item"><a className="page-link text-light"
                                                     style={{"background-color":"#68829E", "border-color":"#fff"}} href="#">2</a>
                        </li>
                        <li className="page-item"><a className="page-link text-light"
                                                     style={{"background-color":"#68829E", "border-color":"#fff"}} href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link text-light" style={{"background-color":"#68829E", "border-color":"#fff"}}
                               href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </main>

        </div>
    );
};

export default Profile;