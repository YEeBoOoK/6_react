import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header.jsx";
import Main from "./components/pages/main";
import AddPet from "./components/pages/add_pet";
import Auth from "./components/pages/auth";
import EditPet from "./components/pages/edit_pet";
import Orders from "./components/pages/orders";
import Pet from "./components/pages/pet";
import Profile from "./components/pages/profile";
import Registration from "./components/pages/registration";
import Search from "./components/pages/search";


function App() {
  return (

      <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/main'} element={<Main/>}/>
          <Route path={'/addpet'} element={<AddPet/>}/>
          <Route path={'/auth'} element={<Auth/>}/>
          <Route path={'/editpet'} element={<EditPet/>}/>
          <Route path={'/orders'} element={<Orders/>}/>
          <Route path={'/pet'} element={<Pet/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/registration'} element={<Registration/>}/>
          <Route path={'/search'} element={<Search/>}/>
      </Routes>

  );
}

export default App;
