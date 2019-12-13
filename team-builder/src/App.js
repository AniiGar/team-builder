import React, { useState } from 'react';
import './App.css';

import Data from './Components/Data';
import Form from './Components/Form';
import MembersList from './Components/MembersList';


function App() {

  const [list, setList] = useState(Data);

  const newMember = member => {
    setList([...list, member]);
  }

  return (
    <div className="App App-header">
      <Form newMember={newMember} />
      <MembersList membersList={list} />
    </div>
  );
}

export default App;
