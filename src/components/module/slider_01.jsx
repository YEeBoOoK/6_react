import React, {useEffect, useState} from 'react';
import Slider from "./Slider"
import Slider0 from "./Slider0";


function my_request(sliders, setSliders){
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.token);
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
        method: 'GET',
        headers: myHeaders //+body если существует
    };
    fetch("http://pets.сделай.site/api/pets/slider", requestOptions)
        .then(response=>response.json())
        .then(response=>setSliders(response))}
const Slider01 = () => {
    let [sliders, setSliders]=useState({data:{pets:[]}})
    useEffect(()=>my_request(sliders, setSliders), [])
    let slide=sliders.data.pets.map((slider, index)=>
        index===0 ? (<Slider0 slider={slider} key={index}/>) : (<Slider slider={slider} key={index}/>))
    return (
        <div id="carouselExampleIndicators" className="carousel slide m-auto rounded bg-opacity-25 w-75 p-2" data-bs-ride="carousel"
             style={{"height":" 570px ","min-height":"400px","background-color":"#68829E"}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        aria-current="true" aria-label="Slide 1" className="active"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                {slide}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
};

export default Slider01;