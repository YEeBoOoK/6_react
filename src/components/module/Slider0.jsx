import React from 'react';

const Slider0 = (props) => {
    return (
        <div className="carousel-item active p-3 rounded">
            <h2 className="text-center text-uppercase text-white mb-3" style={{"font-size":" 26px"}}>{props.slider.kind}</h2>
            <img src={'http://pets.сделай.site/'+props.slider.image} className="rounded mx-auto d-block w-100 h-auto"
                 alt="Животное" style={{"max-width":"350px"}}/>
            <p className="text-center text-white mt-3" style={{"font-size":"18px"}}>Описание: {props.slider.description}</p>
        </div>
    );
};

export default Slider0;