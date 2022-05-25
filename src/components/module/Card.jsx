import React, {useEffect, useId, useState} from 'react';

const Card = (props) => {
    function my_request(setSlides) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        let res = fetch("http://pets.сделай.site/api/pets", requestOptions)
            .then(response=>response.json())
            .then(response=>setPets(response))
    }

    let [orders, setPets] = useState({data:{orders:[]}});
    useEffect(() => my_request(()=>setPets(), orders), [])

    let Cards_pets=orders.data.orders.map((pet, index)=>{
        return (
            <div className="d-flex flex-row flex-wrap border rounded m-3 p-2"
                 style={{"min-width":"300px", "width":"36%","border":"1px solid #68829e!important","background-color":"#68829e"}}>
                <img  src={"http://pets.сделай.site/"+pet.photos}className="rounded mx-auto d-block w-100 mb-4" alt="рисунок животного"/>
                <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width":"250px"}}><a>id:</a></p>
                <p className="w-50 px-2" style={{"min-width":"300px"}}><a>{pet.id}</a></p>

                <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width":"250px"}}><a>Имя:</a></p>
                <p className="w-50 px-2" style={{"min-width":"300px"}}> <a>{pet.name}</a></p>

                <p className="text-uppercase fw-bold w-50 px-2 text-light"
                   style={{"min-width":"300px"}}><a>Описание:</a></p>
                <p className="w-50 px-2" style={{"min-width":"300px"}}><a>{pet.description}</a></p>

                <p className="text-uppercase fw-bold w-50 px-2 text-light" style={{"min-width":"300px"}}><a>Номер
                    чипа:</a></p>
                <p className="w-50 px-2" style={{"min-width":"300px"}}><a>{pet.mark}</a></p>

                <p className="text-uppercase fw-bold w-50 px-2 text-light"
                   style={{"min-width":"300px"}}><a>Район:</a></p>
                <p className="w-50 px-2" style={{"min-width":"300px"}}><a>{pet.district}</a></p>

                <p className="text-uppercase fw-bold w-50 px-2 text-light"
                   style={{"min-width":"300px"}}><a>Дата:</a></p>
                <p className="w-50 px-2" style={{"min-width":"300px"}}><a>{pet.date}</a></p>
            </div>
        )
    });
    let [buttons, setButtons]=useState([])

    return (
        <div className="Cards_pets d-flex flex-row flex-wrap justify-content-center">

            {Cards_pets}
        </div>


    );
};

export default Card;