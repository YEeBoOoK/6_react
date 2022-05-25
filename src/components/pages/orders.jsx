import React from 'react';
import cat from '../image/pets/кошка.jpg';
import goat from '../image/pets/коза.jpeg';

const Orders = () => {
    return (
        <div>
            <main style = {{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Результаты поиска</h2>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    <div className="d-flex flex-row flex-wrap border rounded m-3 p-3"
                         style={{"min-width": "300px", "width": "45%","border": "1px solid #68829e!important","background-color":"#68829e"}}>
                        <img src={cat} className="rounded mx-auto d-block w-100 mb-4"
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
                    </div>
                    <div className="d-flex flex-row flex-wrap border rounded m-3 p-3"
                         style={{"min-width": "300px", "width": "45%","border": "1px solid #68829e!important","background-color":"#68829e"}}>
                        <img src={goat} className="rounded mx-auto d-block w-100 mb-4"
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
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Orders;