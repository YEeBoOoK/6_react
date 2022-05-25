import React from 'react';

const EditPet = () => {
    return (
        <div>
            <main style = {{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-gradient my-3 mx-1 p-2 rounded"
                    style={{"background-color":"#9A9EAB"}}>Редактирование объявления</h2>
                <div className="p-3">
                    <form className="w-50 border rounded mx-auto my-3 p-3"
                          style={{"min-width":" 300px","border":" 1px solid #68829e!important","background-color":"#68829e"}}>

                        <div className="mb-3">
                            <label htmlFor="kind" className="form-label text-light">Введите вид животного:</label>
                            <input type="text" className="form-control" id="kind"/>
                                <div className="form-text text-dark">Обязательное поле</div>
                        </div>


                        <div className="mb-3 p-3 border">
                            <label htmlFor="image1" className="form-label text-light">Выберите файлы
                                изображений:</label>
                            <input type="file" className="form-control" id="image1"/>
                                <div className="form-text text-dark">Обязательное поле</div>
                                <input type="file" className="form-control mb-3" id="image2"/>
                                    <input type="file" className="form-control mb-3" id="image3"/>
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


                        <input type="submit" className="btn btn-primary form-control bg-light px-5"
                               style={{"color":"#68829E","border-color":"#fff","position":"relative","left":"50%","transform":"translate(-50%,0)"}}/>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default EditPet;