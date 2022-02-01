import './App.css';
import NewPet from './components/NewPet';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';
import {Router} from '@reach/router';
//import React, {useState, useEffect} from 'react';


function App() {

  //const [socket, setSocket] = useState(() => socket.socketio(':8000'));

  // useEffect(() =>{

  //   //console.log('Is the Socket.io running?');
  //   socket.on("new_message_from_server", socket => 
  //     setSocket(prevMessages =>{
  //       return [socket, ...prevMessages];
  //     })
  //   );

  //   // return () => socket.disconnect(true);


  // }, []);

  return (
    <div className="App">
      
      <Router>
        <AllPets path="/" />
        <NewPet path="/new" />
      
        <OnePet path="/pet/:id" />
        <EditPet path="/pet/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
