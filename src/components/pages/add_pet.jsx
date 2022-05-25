import React from 'react';

const AddPet = () => {
    return (
        <div>
            <main style = {{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Добавление нового объявления</h2>
                <div className="p-3">
                    <form className="w-50 m-auto rounded border border-primary p-3"
                          style={{"min-width": "360px", "width": "45%","border":" 1px solid #68829e!important","background-color":"#68829e"}}>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-light">Введите ваше имя</label>
                            <input type="text" className="form-control" id="name"/>
                                <div className="form-text text-dark">Используйте кириллические буквы.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label text-light">Введите свой телефон:</label>
                            <input type="email" className="form-control" id="phone"/>
                                <div className="form-text text-dark">Используйте цифры, +, -.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-light">Введите адрес электронной
                                почты</label>
                            <input type="email" className="form-control" id="email"/>
                                <div className="form-text text-dark">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="kind" className="form-label text-light">Введите вид животного:</label>
                            <input type="text" className="form-control" id="kind"/>
                                <div className="form-text text-dark">Обязательное поле</div>
                        </div>

                        <div className="mb-3 form-check border p-2">
                            <input type="checkbox" className="form-check-input m-1" id="exampleCheck1"/>
                                <label className="form-check-label text-light mb-3" htmlFor="exampleCheck1">Пройти
                                    автоматическую регистрацию</label>
                                <label htmlFor="password" className="form-label text-light hidden ">Введите
                                    пароль:</label>
                                <input type="password" className="form-control hidden" id="password"/>
                                    <div className="form-text text-light hidden text-dark">Не менее 7 символов,
                                        обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква
                                    </div>
                                    <label htmlFor="confirm_password" className="form-label text-light hidden">Повторите
                                        пароль пароль:</label>
                                    <input type="password" className="form-control hidden" id="confirm_password"/>


                        </div>

                        <div className="mb-3 p-3 border">
                            <label htmlFor="image1" className="form-label text-light">Выберите файлы
                                изображений:</label>
                            <input type="file" className="form-control" id="image1" />
                                <div className="form-text text-dark">Обязательное поле</div>
                                <input type="file" className="form-control mb-3" id="image2"
                                      />
                                    <input type="file" className="form-control mb-3" id="image3"
                                          />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="chip" className="form-label text-light">Электронный чип:</label>
                            <input type="text" className="form-control" id="chip"/>
                                <div className="form-text text-dark">Обязательное поле.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label text-light">Описание:</label>
                            <textarea className="form-control" id="description"></textarea>
                            <div className="form-text text-dark">Обязательное поле.</div>
                        </div>

                        <div className="mb-3 form-check p-3">
                            <input type="checkbox" className="form-check-input" id="check1"/>
                                <label className="form-check-label text-light" htmlFor="check1">Подтвердить согласие на
                                    обработку персональных данных</label>
                        </div>

                        <input type="submit" className="btn btn-primary form-control bg-light px-5"
                               style={{"color":"#68829E","border-color":"#fff","position":" relative","left": "50%","transform":" translate(-50%,0)"}}
                              />
                    </form>
                </div>
            </main>

        </div>
    );
};

export default AddPet;