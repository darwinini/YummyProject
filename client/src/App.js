import './App.css';
import NewMeal from './components/NewMeal';
import AllMeals from './components/AllMeals';
import OneMeal from './components/OneMeal';
import EditMeal from './components/EditMeal';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
//import React, {useState, useEffect} from 'react';


function App() {

  

  return (
    <div className="App">
      
      <Router>
        <AllMeals path="/" />
        <NewMeal path="/new" />
        <OneMeal path="/meals/:id" />
        <EditMeal path="/meals/edit/:id" />
      </Router>

    </div>
  );
}

export default App;
