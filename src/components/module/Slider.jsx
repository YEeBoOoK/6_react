import React from 'react';


const Slider = (props) => {
    return (

        <div className="carousel-item p-3 rounded">

            <h2 className="text-center text-uppercase text-white mb-3" style={{"font-size":" 26px"}}>Вид животного</h2>
            <p className="text-center text-white mt-3" style={{"font-size":"18px"}}>{props.slider.kind}</p>

            <img src={'http://pets.сделай.site/'+props.slider.image} className="rounded mx-auto d-block w-100 h-auto" alt="Животное" style={{"max-width":"500px"}}/>

            <p className="text-center text-white mt-3" style={{"font-size":"18px"}}>Описание:</p>
            <p className="text-center text-white mt-3" style={{"font-size":"18px"}}>{props.slider.description}</p>

        </div>

    );
};

export default Slider;