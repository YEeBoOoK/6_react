import React, {useEffect, useId, useState} from 'react';
const News = () => {
    async function my_request(e) {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(email)

        };
        console.log(requestOptions)
        let res = fetch("http://pets.сделай.site/api/subscription", requestOptions)
        let result = await res;
        if(result.status===204) document.getElementById('message').style.display='block'
        if(result.status !== 204) return

    }
    let [email, setEmail] = useState({email:''});
    return (
        <div>
            <button type="button" className="butt bg-gradient" style={{"background":"#9A9EAB"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Подписка на новости
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <form className="modal-content" onSubmit={my_request}>
                        <div className="modal-header" style={{"background-color":"#68829E"}}>
                            <h5 className="modal-title text-light" id="exampleModalLabel">Подписка на новости</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="container" >
                                <div className="input-container">

                                    <i className="bi bi-envelope icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                             fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path
                                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                        </svg>
                                    </i>

                                    <input type="email" placeholder="Email" className="form-control input-field" id="name" required onChange={(e)=>setEmail({email:e.target.value})}/>
                                </div>
                                <input type={"submit"} className="butt" value={'Подписаться'}/>
                            </div>
                            <div id={'message'}  style={{display:'none'}} className="form-text text-center">
                                <label htmlFor="name" className="text-primary ">Вы успешно подписались!</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default News;