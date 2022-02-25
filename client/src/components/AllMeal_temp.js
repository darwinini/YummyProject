import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import D1Sunday from './D1Sunday';
import D2Monday from './D2Monday';


const AllMeals = (props) =>{

    //const {id} = props;


    //const [mealList, setMealList] = useState([]);

    useEffect( () => {
        const url = "http://localhost:8000/api/meals";
        //const url = `http://localhost:8000/api/meals/${id}`;
        axios.get(url)
        .then((response) =>{
            console.log(response);
            console.log(response.data);
            console.log(response.data.Array())
            //setMealList(response.data);
        })
        .catch( (err) => { console.log(err) });
    }, []);

    return(
        // <div style={{textAlign:"center"}}>
        <div className="mx-auto form-row">
            <div className="nav">
                <header className="nav">
                    <h1 className='text-black-50'>Yummy Times</h1>    
                    <Link className="link" to={"/new"}> add new meal </Link>
                </header>
            </div>
            <h3 className='text-center py-2 text-secondary'> Make it Yummy! </h3>
            <D1Sunday />
            <D2Monday />

            
           


  
        {/* main div */}
        </div> 
    )
}


export default AllMeals;