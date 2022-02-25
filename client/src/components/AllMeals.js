import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';


const AllMeals = (props) =>{


    const [mealList, setMealList] = useState([])
    //const [day, setDay] = useState("")

    //const navigate = useNavigate();
    

    useEffect( () => {
        const url = "http://localhost:8000/api/meals";
        //const url = `http://localhost:8000/api/meals/${id}`;
        axios.get(url)
        .then((response) =>{
            console.log("Showing Entire Response",response);
            console.log("Showing Response.data is showing: ", response.data);
            console.log("Showing Response.data zero element", response.data.day);
            setMealList(response.data);
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
                    <td> <Link type='button' className='btn btn-outline-info' to={`/new`}> Add New Meal </Link></td>
                </header>
            </div>

            <h3 className='text-center py-2 text-secondary'> Make it Yummy! </h3>
            
            {/* Div for the tables representing the daily menus */}
            <div className='form-row main my-3'>

                {/* Day 1: Sunday */}        
                    {
                        mealList.map((food, index) =>(
                <div className=" col-md-5 px-3 day mx-3 mx-auto my-3">

                        <h2 className="sub-header text-center text-secondary"> {food.day} </h2>
                        <div>
                                <table className="table bg-light w-100">
                                <thead>
                                   {/*  */}
                                </thead>
                                <tbody>
                                    <div>
                                            <div>
                                                <tr className='bg-light col'>
                                                    <th className="col-md-1 text-secondary">Breakfast</th>
                                                        <td key={index} className="col-md-1 text-secondary">{food.breakfast1}</td>
                                                        <td key={index} className="col-md-1 text-secondary">{food.breakfast2}</td>
                                                </tr>
                                                <tr className='bg-light'>
                                                    <th className="col-md-1 text-secondary">Lunch</th>
                                                        <td key={index} className="col-md-1 text-secondary">{food.lunch1}</td>
                                                        <td key={index} className="col-md-1 text-secondary">{food.lunch2}</td>
                                                </tr>
                                                <tr className='bg-light col'>
                                                    <th className="col-md-1 text-secondary">Dinner</th>
                                                        <td key={index} className="col-md-1 text-secondary">{food.dinner1}</td>
                                                        <td key={index} className="col-md-1 text-secondary">{food.dinner2}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button className="btn btn-outline-warning" onClick={()=> navigate(`/meals/edit/${food._id}`)}> Edit </button>
                                                    </td>  
                                                    <td>
                                                        <button type="button" className="btn btn-outline-danger" onClick={()=>navigate(`/meals/edit/${food._id}`)}> Delete </button>
                                                    </td>   
                                                </tr>
                                            </div>
                                    </div>
                                </tbody>
                                </table>
                            </div>
                    </div>
                   

                     

                    ))
                }
            
            </div>
            {/*main div for the days at Sunday*/}

  
        {/* main div */}
        </div> 
    )
}


export default AllMeals;