import React, { useState } from 'react';
import Display from './components/Display'
import { RandomGeneration } from './utils/RandomGeneration'
import Button from './components/reusable/Button'
import Select from './components/reusable/Select'

function App() {

  // entire list // 
  const [list, listSet] = useState([`Richard`, `Steve`, `Paul`, `Pablo`, `Dimitri`, `Hassan`, `Pierre`])

  // visuals // 
  const [listReduced, listReducedSet] = useState([`Click Me`])

  const DisplayAgain = () => listReducedSet(RandomGeneration(list, 4))

  return (
    <React.Fragment>
      <center>
        <Select data={[`Like`, `Dislike`]} />
        <Button onClick={DisplayAgain} />
        <br /><br /><br /><br />
        <Display list={listReduced} />
      </center>
    </React.Fragment>

  );
}

export default App;
