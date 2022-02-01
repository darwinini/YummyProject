import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';



const EditPet = (props)=>{

    const {id} = props;

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errors, setError] = useState([])

  
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill1(res.data.skill2);
                setSkill1(res.data.skill3);

    
            })
            .catch((err)=>{
                console.log(err);
            
            });
    }, [id])

const editHandler = (e)=>{
    e.preventDefault();

    axios.put(`http://localhost:8000/api/pets/${id}`,
    
    {
        name, 
        type,
        description,
        skill1,
        skill2,
        skill3,

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


    return(
        <div>
            <div className="nav">
                <header className="nav">
                    <h1>Pet Shelter</h1>    
                    <Link className="link" to={"/"}> back to home </Link>
                </header>
            </div>

            <h2 className='nav'> Edit {name} </h2>

            <div style={{textAlign:"center"}}>
                    <form onSubmit={editHandler} className='new-form'>

                        <div className='outer'>
                        <div className='left-form'>
                            <div>
                                <label> Pet Name: </label>
                                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />

                                {/* Set validation on the front-end from the backend */}
                                {
                                    errors.name?
                                    <span>{errors.name.message}</span>
                                    :null
                                }
                            </div>

                            <div>
                                <label>Pet Type: </label>
                                <input value={type} onChange={(e)=>setType(e.target.value)} type="text" />
                                {
                                    errors.type?
                                    <span>{errors.type.message}</span>
                                    :null
                                }
                            </div>

                            <div>
                                <label>Pet Description: </label>
                                <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" />

                                {
                                    errors.description?
                                    <span>{errors.description.message}</span>
                                    :null
                                }
                            </div>

                            <button className='pet-button'>Edit Pet</button>

                        </div>
                        <div className='right-form'>
                            <h4>Skills (optional): </h4>
                            <div>
                                <label> Skill 1: </label>
                                <input value={skill1} onChange={(e)=>setSkill1(e.target.value)} type="text" />
                            </div>
                            <div>
                                <label> Skill 2: </label>
                                <input value={skill2} onChange={(e)=>setSkill2(e.target.value)} type="text" />
                            </div>
                            <div>
                                <label> Skill 3: </label>
                                <input value={skill3} onChange={(e)=>setSkill3(e.target.value)} type="text" />
                            </div>
                        </div>

                        </div>


                       


                </form>
            </div>

        </div> 
    )
}


export default EditPet;