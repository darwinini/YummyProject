import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';




const OnePet = (props) =>{

    const {id} = props;
    const [pet, setPet] = useState({})
    const [counter, setCounter] = useState(0);

    let result = () =>{
        setCounter(counter + 1);
        return counter;
    }    

    useEffect(()=>{
        
        axios.get(`http://localhost:8000/api/pets/${id}`)
        // axios.get("http://localhost:8000/api/games/" + id)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setPet(res.data);

            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])






    const adoptAPet = () =>{

        axios.delete(`http://localhost:8000/api/pets/${id}`)
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
                    <h1>Pet Shelter</h1>    
                    <Link className="link" to={"/"}> back to home </Link>
                </header>
            </div>

            <div className='nav'>
                <h3> Details about: {pet.name} </h3>
                <div className='no-space'>
                    <i class="fa fa-home"></i> 
                    <button className='adopt-button' onClick={()=>adoptAPet(pet._id)}> Adopt {pet.name} </button>
                    
                </div>
                
            </div>
            <header>
                <h1 style={{fontSize:"50px", borderBottom:"5px double lightgray", 
                marginLeft:"450px", marginRight:"450px"}}>{pet.name}</h1>
                
            </header>
            {/* 
            <img src={game.image} alt="game image" 
            style={{width:"150px", height:"150px"}}/>
            <p>{game.genre}</p>
            <p>{game.yearReleased}</p>
            <p>{game.rating}</p>
            <p>{game.company}</p> */}

            {
                <table className='detail-table'>
                <tr>
                    <th>Pet Type:</th>
                    <td> {pet.type}</td>
                </tr>
                <tr>
                  <th>Description:</th>
                  <td>{pet.description}</td>
                </tr>
                <tr>
                  <th>Skills:</th>
                  <tr>
                    <td>{pet.skill1}</td>
                    <td>{pet.skill2}</td>
                    <td>{pet.skill3}</td>
                  </tr>
                </tr>

                <div className='rating'>
                    <button className='like' onClick={result}> Like {pet.name} </button>
                    <p> {counter} </p> <p> like(s) </p>
                </div>
            
              </table>           

            }

            


            
        </div>
    )
}


export default OnePet;