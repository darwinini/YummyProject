import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';



const EditMeal = (props)=>{

    const {id} = props;

    const [day, setDay] = useState("")
    const [breakfast1, setBreakfast1] = useState("")
    const [breakfast2, setBreakfast2] = useState("")
    const [lunch1, setLunch1] = useState("")
    const [lunch2, setLunch2] = useState("")
    const [dinner1, setDinner1] = useState("")
    const [dinner2, setDinner2] = useState("")
    
    
    const [errors, setError] = useState([])

  
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/meals/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setDay(res.data.day);
                setBreakfast1(res.data.breakfast1);
                setBreakfast2(res.data.breakfast2);
                setLunch1(res.data.lunch1);
                setLunch2(res.data.lunch2);
                setDinner1(res.data.dinner1);
                setDinner2(res.data.dinner2);
    
            })
            .catch((err)=>{
                console.log(err);
            
            });
    }, [id])

const editHandler = (e)=>{
    e.preventDefault();

    axios.put(`http://localhost:8000/api/meals/${id}`,
    
    {
            day,
            breakfast1,
            breakfast2,
            lunch1,
            lunch2,
            dinner1,
            dinner2 
        

    })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)

        })
}


const deleteButtonHandler = () => {
    axios.delete(`http://localhost:8000/api/meals/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            //navigate to main.js
            navigate("/");
           
        })
        .catch((err) => {
            console.log(err);
        })
}


    return(
        <div>
            <div className="nav">
                <header className="nav">
                    <h1 className='text-black-50'>Yummy Times</h1>    
                    <Link className="link" to={"/"}> back to home </Link>
                </header>
            </div>

            <h3 className='text-center py-2 text-secondary'> Edit Meal </h3>

            <div style={{textAlign:"center"}}>
                    <form onSubmit={(e)=>editHandler(e)} className="table-responsive col px-3 day mx-3 mx-auto">

                        {/* table will be inside here */}
                        <div className='outer'>
                            {/* Div for the tables representing the daily menus */}
                            <div className='main my-3'>

                            {/* Day 1: Sunday */}        
                            <div className="table-responsive col px-3 day mx-3 mx-auto">

                                <label className="sub-header text-center text-secondary"> Enter Day </label>
                                <input placeholder='Today' className="sub-header text-center text-secondary" value={day} onChange={(e)=>setDay(e.target.value)} type="text" /> 
                                <div>
                                    <table className="table bg-light">
                                        <thead>
                                
                                        </thead>
                                            <tbody>
                                                {
                                        
                                                    <div>

                                                        {/* Breakfast */}
                                                        <div className='bg-light'>
                                                            <h3> BreakFast </h3>
                                                            <label className='text-secondary'>Breakfast Side 1</label>
                                                            <input value={breakfast1} onChange={(e)=>setBreakfast1(e.target.value)} type="text"/>
                                                            {/* Set validation on the front-end from the backend */}
                                                            {
                                                                errors.breakfast1?
                                                                <span>{errors.breakfast1.message}</span>
                                                                :null
                                                            }
                                                                
                                                        </div>
                                                        <div className='bg-light'>
                                                            <label className='text-secondary'>Breakfast Side 2</label>
                                                            <input value={breakfast2} onChange={(e)=>setBreakfast2(e.target.value)} type="text"/>
                                                            {/* Set validation on the front-end from the backend */}
                                                            {
                                                                errors.breakfast2?
                                                                <span>{errors.breakfast2.message}</span>
                                                                :null
                                                            }
        
                                                        </div>

                                                        {/* Lunch */}
                                                        <div className='bg-light'>
                                                            <h3> Lunch </h3>
                                                            <label className='text-secondary'>Lunch Side 1</label>
                                                            <input value={lunch1} onChange={(e)=>setLunch1(e.target.value)} type="text"/>
                                                                
                                                        </div>
                                                        <div className='bg-light'>
                                                            <label className='text-secondary'>Lunch Side 2</label>
                                                            <input value={lunch2} onChange={(e)=>setLunch2(e.target.value)} type="text"/>
        
                                                        </div>
                                                        {/* Dinner */}
                                                        <div className='bg-light'>
                                                            <h3> Dinner </h3>
                                                            <label className='text-secondary'>Dinner Side 1</label>
                                                            <input value={dinner1} onChange={(e)=>setDinner1(e.target.value)} type="text"/>
                                                                
                                                        </div>
                                                        <div className='bg-light'>
                                                            <label className='text-secondary'>Dinner Side 2</label>
                                                            <input value={dinner2} onChange={(e)=>setDinner2(e.target.value)} type="text"/>
                                                        </div>

                                                        <button type='submit' className="btn btn-outline-warning"> Submit Changes </button>
                                                    </div>
                                                }
                                            </tbody>
                                    </table>
                            </div>
                    </div>
                    {/* end of Sunday */}

                    


                </div>
                {/*main div for the days at Sunday*/}
                        
                        

                        </div>           


                </form>
            </div>
            <div>
                 <button type="button" className="btn btn-outline-danger" onClick={()=>deleteButtonHandler()}> Delete </button>
            </div>

        {/* donot delete: main div for return statement */}

        
        </div>



    )//end of return closing parentheses
}


export default EditMeal;