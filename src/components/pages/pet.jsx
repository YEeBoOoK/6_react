import React from 'react';
import chicken1 from '../image/pets/курица1.jpg';
import chicken2 from '../image/pets/курица2.jpg';
import chicken3 from '../image/pets/курица3.jpg';


const Pet = () => {
    return (
        <div>
            <main style={{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Карточка животного</h2>


                <div className="d-flex flex-row flex-wrap border rounded m-auto  p-2 position-relative w-50"
                    style={{"min-width": "300px", "width": "45%","border": "1px solid #68829e!important","background-color":"#68829e"}}>
                    <div className="d-flex flex-row flex-wrap justify-content-around border border rounded">
                        <img src={chicken1} className="w-25 p-3" style={{"min-width": "280px"}}
                             alt="Изображения животного"/>
                            <img src={chicken2} className="w-25 p-3" style={{"min-width": "280px"}}
                                 alt="Изображения животного"/>
                                <img src={chicken3} className="w-25 p-3 m" style={{"min-width": "280px"}}
                                     alt="Изображения животного"/>
                    </div>
                    <p className="text-uppercase fw-bold w-50 px-2 text-light mt-3" style={{"min-width": "250px"}}>id:</p>
                    <p className="w-50 px-2 mt-3" style={{"min-width": "250px"}}>14</p>

                    <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width": "250px"}}>Имя:</p>
                    <p className="w-50 px-2" style={{"min-width": "250px"}}> Иван</p>

                    <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width": "250px"}}>Телефон:</p>
                    <p className="w-50 px-2" style={{"min-width": "250px"}}>+7-921-485-65-44</p>

                    <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width": "250px"}}>E-mail:</p>
                    <p className="w-50 px-2" style={{"min-width": "250px"}}>my_chiken@mail.ru</p>

                    <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width": "250px"}}>Вид
                        животного:</p>
                    <p className="w-50 px-2" style={{"min-width": "250px"}}> Курица</p>

                    <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width": "250px"}}>Описание:</p>
                    <p className="w-50 px-2" style={{"min-width": "250px"}}>Потерялась курица, пятнистая, рыжая. Любит
                        играть, ласковая.</p>

                    <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width": "250px"}}>Номер чипа:</p>
                    <p className="w-50 px-2" style={{"min-width": "250px"}}>ch-001-spb</p>

                    <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width": "250px"}}>Район:</p>
                    <p className="w-50 px-2" style={{"min-width": "250px"}}>Невский</p>

                    <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width": "250px"}}>Дата:</p>
                    <p className="w-50 px-2" style={{"min-width": "250px"}}>29-03-2020</p>
                </div>
                <br/>

            </main>

        </div>
    );
};

export default Pet;