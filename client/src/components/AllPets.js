import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const AllPets = (props) =>{


    const [petList, setPetList] = useState([]);

    useEffect( () => {
        const url = "http://localhost:8000/api/pets";
        axios.get(url)
        .then((response) =>{
            console.log(response);
            console.log(response.data)
            setPetList(response.data);
        })
        .catch( (err) => { console.log(err) });
    }, []);

    return(
        <div style={{textAlign:"center"}}>
            <div className="nav">
                <header className="nav">
                    <h1>Pet Shelter</h1>    
                    <Link className="link" to={"/new"}> add a pet to the shelter </Link>
                </header>
            </div>

            <h3> These pets are looking for a good home</h3>

            <table className='tabular'>
                <thead className='table-head'>
                    <tr>
                        <th> Name </th>
                        <th> Type </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>

                    {
                       petList.map((pet, index) =>(
                           <tr key={index}>
                               <td> {pet.name} </td>
                               <td> {pet.type} </td>
                               <td>
                                <Link className="link-table" to={`/pet/${pet._id}`}> details </Link> 
                                <span> | </span> 
                                <Link className="link-table" to={`/pet/edit/${pet._id}`}> edit </Link>
                               </td>    
                           </tr>

                       )) 
                    }

                </tbody>

            </table>

        </div>
    )
}


export default AllPets;