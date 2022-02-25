import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const D2Monday = (props) =>{

    //const {id} = props;


    const [mealList, setMealList] = useState([]);

    useEffect( () => {
        const url = "http://localhost:8000/api/meals";
        //const url = `http://localhost:8000/api/meals/${id}`;
        axios.get(url)
        .then((response) =>{
            console.log(response);
            console.log(response.data)
            setMealList(response.data.Array());
        })
        .catch( (err) => { console.log(err) });
    }, []);

    return(
        // <div style={{textAlign:"center"}}>
        <div className="mx-auto form-row">
            <div className="nav">
                <header className="nav">
                    {/* <h1 className='text-black-50'>Yummy Times</h1>     */}
                    {/* <Link className="link" to={"/new"}> add new meal </Link> */}
                </header>
            </div>

            {/* <h3 className='text-center py-2 text-secondary'> Make it Yummy! </h3> */}
            
            {/* Div for the tables representing the daily menus */}
            <div className='form-row main my-3'>

                {/* Day 2: Monday */}        
                <div className="table-responsive col-md-5 px-3 day mx-3 mx-auto">
                    <h2 className="sub-header text-center text-secondary">Monday</h2>
                    <div>
                                <table className="table bg-light">
                                <thead>
                                   
                                </thead>
                                <tbody>
                                    <tr className='bg-light'>
                                    <th className='text-secondary'>Breakfast</th>
                                    {
                                        mealList.map((meal, index) => (
                                            <td key={index}>{meal.side1}</td>
                                        ))
                                    }
                                    {
                                        mealList.map((meal, index) => (
                                            <td key={index}>{meal.side2}</td>
                                        ))
                                    }
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${mealList._id}`}> edit </Link> </button></td>

                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Lunch</th>
                                    <td> {mealList.side1} </td>
                                    <td> {mealList.side2} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${mealList._id}`}> edit </Link> </button></td>
                                    </tr>
                                    <tr className='bg-light'>
                                    <th className="col-md-1 text-secondary">Dinner</th>
                                    <td> {mealList.side1} </td>
                                    <td> {mealList.side2} </td>
                                    <td> <button type='button' className='btn btn-outline-info'> <Link to={"/new"}> add </Link> </button></td>
                                    <td> <button type='button' className="btn btn-outline-warning"> <Link to={`/meals/edit/${mealList._id}`}> edit </Link> </button></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                    </div>
                    {/* end of Monday */}
            </div>
            {/*main div for the days*/}


  
        {/* main div */}
        </div> 
    )
}


export default D2Monday;