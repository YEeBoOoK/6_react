import React from 'react';

const Auth = () => {
    return (
        <div>
            <main style = {{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Аутентификация</h2>
                <div className="p-3">
                    <form className="w-50 border rounded mx-auto my-3 p-3"
                          style={{"min-width":" 300px","border":" 1px solid #68829e!important","background-color":"#68829e"}}>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-light">Введите адрес электронной
                                почты</label>
                            <input type="email" className="form-control" id="email"/>
                                <div className="form-text text-dark">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-light">Введите пароль:</label>
                            <input type="password" className="form-control" id="password"/>
                                <div className="form-text text-dark">Не менее 7 символов, обязательно: 1 - цифра, 1 -
                                    строчная буква, 1 - заглавная буква
                                </div>
                        </div>

                        <input type="submit" className="btn btn-primary bg-light px-5"
                               style={{"color":"#68829E","border-color":"#fff","position":"relative","left":"50%","transform":"translate(-50%,0)"}}/>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Auth;