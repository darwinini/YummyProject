import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';




const OneMeal = (props) =>{

    const {id} = props;
    const [meal, setMeal] = useState({})
    const [counter, setCounter] = useState(0);

    let result = () =>{
        setCounter(counter + 1);
        return counter;
    }    

    useEffect(()=>{
        
        axios.get(`http://localhost:8000/api/meals/${id}`)
        
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setMeal(res.data);

            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])






    const deleteMeal = () =>{

        axios.delete(`http://localhost:8000/api/meals/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err)
            })

    }


    return(
        <div style={{textAlign:"center"}}>
            <div className="nav">
                <header className="nav">
                    <h1>Yummy Times</h1>    
                    <Link className="link" to={"/"}> back to home </Link>
                </header>
            </div>

            <div className='nav'>
                <h3> Details about: Meal </h3>
                <div className='no-space'>
                    <i class="fa fa-home"></i> 
                    <button className='adopt-button' onClick={()=>deleteMeal(meal._id)}> Meal {meal.side1} </button>
                    
                </div>
                
            </div>
            <header>
                <h1 style={{fontSize:"50px", borderBottom:"5px double lightgray", 
                marginLeft:"450px", marginRight:"450px"}}>{meal.side1}</h1>
                
            </header>
            

            {
                <table className='detail-table'>
                <tr>
                    <th>Side 1:</th>
                    <td> {meal.side1}</td>
                </tr>
                <tr>
                  <th>Side 2:</th>
                  <td>{meal.sid2}</td>
                </tr>
                

                <div className='rating'>
                    <button className='like' onClick={result}> Like {meal.side1} </button>
                    <p> {counter} </p> <p> like(s) </p>
                </div>
            
              </table>           

            }

            


            
        </div>
    )
}


export default OneMeal;