import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './coolbutton/CoolButton.js'

const App = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
      <div>
        <CoolButton className="button is-rounded is-small is-danger">Button 1</CoolButton>
        <CoolButton className="button is-small is-success">Button 2</CoolButton>   
      </div>
    </div>

  )
};

export default App;
