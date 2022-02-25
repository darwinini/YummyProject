import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const AllMeals = (props) =>{

    //const {id} = props;


    // const [meal, setMealList] = useState([
    //     {sunday:["Breakfast","Lunch","Dinner"]}
    // ]);

    // const [mealList1, setMealList1] = useState([
    //     {sunday:["Side1","Side2"]}
    // ]);

    const [meal, setMeal] = useState([
        {Sunday: []},
        {Monday: []},
        {Tuesday: []},
        {Wednesday: []},
        {Thursday: []},
        {Friday: []},
        {Saturday: []}

    ])
    

    useEffect( () => {
        const url = "http://localhost:8000/api/meals";
        //const url = `http://localhost:8000/api/meals/${id}`;
        axios.get(url)
        .then((response) =>{
            console.log(response);
            console.log(response.data)
            //setMealList(response.data);
            //setMealList1(response.data);
            setMeal(response.data);
        })
        .catch( (err) => { console.log(err) });
    }, []);

    
    return(
        // <div style={{textAlign:"center"}}>
        <div className="mx-auto form-row">
            <div className="nav">
                <header className="nav">
                    <h1 className='text-black-50'>Yummy Times</h1>
                    <hr className="w-100"  />    
                    {/* <Link className="link" to={"/new"}> add new meal </Link> */}
                </header>
            </div>

            <h3 className='text-center py-2 text-secondary'> Make it Yummy! </h3>
            
            {/* Div for the tables representing the daily menus */}
            <div className='form-row main my-3'>

                {/* Day 1: Sunday */}        
                <div className="table-responsive col-md-5 px-3 day mx-3 mx-auto">
                    <h2 className="sub-header text-center text-secondary">Sunday</h2>
                    <div>
                                <table className="table bg-light">
                                <thead>
                                   
                                </thead>
                                <tbody>
                                    <tr className='bg-light'>
                                    <th className='text-secondary'>Breakfast</th>
                                    {
                                        // mealList1[0].sunday.map((meal, index) => (
                                        //     <td key={index}>{meal}</td>
                                        // ))
                                        meal[0].Sunday.map((meal, index) =>(
                                            <td key={index}>{meal.Sunday.side1}</td>
                                        ))
                                    }
                                    {/* {
                                        mealList.map((meal, index) => (
                                            <td key={index}>{meal}</td>
                                        ))
                                    } */}
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>

                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Lunch</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Dinner</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                    </div>
                    {/* end of We */}

                    {/* Monday */}
                    <div className="table-responsive col-md-5 px-3 day mx-3 mx-auto">
                    <h2 className="sub-header text-center text-secondary">Monday</h2>
                    <div>
                                <table className="table bg-light">
                                <thead>
                                   
                                </thead>
                                <tbody>
                                    <tr className='bg-light'>
                                    <th className='text-secondary'>Breakfast</th>
                                    {/* {
                                        mealList.map((meal, index) => (
                                            <td key={index}>{meal.side1}</td>
                                            
                                        ))
                                    }
                                    {
                                        mealList.map((meal, index) => (
                                            <td key={index}>{meal.side2}</td>
                                        ))
                                    } */}
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>

                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Lunch</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Dinner</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                    </div>
                    {/* end of monday */}    

            
            </div>
            {/*main div for the days*/}

            {/* Div for the tables representing the daily menus */}
            <div className='form-row main'>
                {/* Day 1: Tuesday */}        
                <div className="table-responsive col-md-5 px-3 day mx-3 mx-auto">
                    <h2 className="sub-header text-center text-secondary">Tuesday</h2>
                    <div>
                                <table className="table bg-light">
                                <thead>
                                   
                                </thead>
                                <tbody>
                                    <tr className='bg-light'>
                                    <th className='text-secondary'>Breakfast</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>

                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Lunch</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Dinner</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                    </div>
                    {/* end of Tuesday */}

                    {/* Wednesday */}
                    <div className="table-responsive col-md-5 px-3 day mx-3 mx-auto">
                    <h2 className="sub-header text-center text-secondary">Wednesday</h2>
                    <div>
                                <table className="table bg-light">
                                <thead>
                                   
                                </thead>
                                <tbody>
                                    <tr className='bg-light'>
                                    <th className='text-secondary'>Breakfast</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>

                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Lunch</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Dinner</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                    </div>
                    {/* end of Wednesday */}    
            
            </div>
            {/*main div for the days*/}

            {/* Div for the tables representing the daily menus */}
            <div className='form-row main my-3'>
                {/* Day 5: Thursday */}        
                <div className="table-responsive col-md-5 px-3 day mx-3 mx-auto">
                    <h2 className="sub-header text-center text-secondary">Thursday</h2>
                    <div>
                                <table className="table bg-light">
                                <thead>
                                   
                                </thead>
                                <tbody>
                                    <tr className='bg-light'>
                                    <th className='text-secondary'>Breakfast</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>

                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Lunch</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Dinner</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                    </div>
                    {/* end of Thursday */}

                    {/* Friday */}
                    <div className="table-responsive col-md-5 px-3 day mx-3 mx-auto">
                    <h2 className="sub-header text-center text-secondary">Friday</h2>
                    <div>
                                <table className="table bg-light">
                                <thead>
                                   
                                </thead>
                                <tbody>
                                    <tr className='bg-light'>
                                    <th className='text-secondary'>Breakfast</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>

                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Lunch</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Dinner</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                    </div>
                    {/* end of Friday */}    

            
            </div>
            {/*main div for the days*/}

            {/* Div for the tables representing the daily menus */}
            <div className='form-row main my-3'>

                    {/* Sabbath */}
                    <div className="table-responsive col-md-5 px-3 day mx-3 mx-auto">
                    <h2 className="sub-header text-center text-secondary">Sabbath</h2>
                    <div>
                                <table className="table bg-light">
                                <thead>
                                   
                                </thead>
                                <tbody>
                                    <tr className='bg-light'>
                                    <th className='text-secondary'>Breakfast</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>

                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Lunch</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Dinner</th>
                                    <td> {} </td>
                                    <td> {} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${meal._id}`}> edit </Link> </button></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                    </div>
                    {/* end of Sabbath */}    

            
            </div>
            {/*main div for the days*/}


  
        {/* main div */}
        </div> 
    )
}


export default AllMeals;