import React from 'react';
import {Link} from "react-router-dom";
import logo from './image/log.png';


const Header = () => {
    return (
        <div><header>
                <nav className="navbar navbar-expand-lg navbar-light bg-">
                    <div className="container-fluid">
                        <Link to={'/'} className="navbar-brand"><img src={logo}
                                                                           className="w-100 rounded-3" alt="logo"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>

                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/main' class="nav-link">Главная </Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/profile' class="nav-link">Личный кабинет</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/registration' class="nav-link">Регистрация</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/addpet' class="nav-link">Добавить объявление</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/search' class="nav-link">Поиск по объявлениям</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> <Link to='/orders' class="nav-link">Поиск</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/auth' class="nav-link">Аутентификация</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/editpet' class="nav-link">Редактирование</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> <Link to='/pet' class="nav-link">Карточка животного</Link></a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" list="pets" placeholder="Поиск"
                                       aria-label="Search"/>
                                    <button className="btn btn-primary"
                                            style={{"background-color":"#68829E", "border-color":"#68829E"}} onClick="" >Поиск
                                    </button>

                            </form>
                        </div>
                    </div>
                </nav>
        </header>

        </div>
    );
};

export default Header;