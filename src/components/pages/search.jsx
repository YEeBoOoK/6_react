import React from 'react';

const Search = () => {
    return (
        <div>
            <main style = {{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Поиск по объявлениям</h2>
                <div className="p-3">
                    <form className="w-50 m-auto rounded border p-3"
                        style={{"min-width": "300px", "width": "45%","border": "1px solid #68829e!important","background-color":"#68829e"}}>

                        <div className="mb-3">
                            <label htmlFor="district" className="form-label text-light">Выберите район:</label>
                            <select id="district" className="form-select">
                                <option>Приморский</option>
                                <option>Петроградский</option>
                                <option>Василиостровский</option>
                                <option>Центральный</option>
                                <option>Красногвардейский</option>
                                <option>Выборгский</option>
                                <option>Калининский</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-light">Введите вид животного:</label>
                            <input type="password" className="form-control" id="password"/>

                        </div>

                        <input type="submit" className="btn btn-primary bg-light px-5"
                               style={{"color":"#68829E","border-color":"#fff","position": "relative","left": "50%","transform": "translate(-50%,0)"}}/>
                    </form>
                </div>
            </main>

        </div>
    );
};

export default Search;