import React from 'react';
import ReactDom from 'react-dom';

import './App.css';
import Navigation from './components/Navigation';

class App extends React.Component {
  
  static removeNavigation():void{
  
      const navigation:HTMLElement|null  =document.getElementById('navigation');
      if( navigation !==null)
    ReactDom.unmountComponentAtNode( navigation );
  }
  
  render()
    {

    return(
  
    <div className="App">
      <h1>REACT DAY 4</h1>
      <Navigation/>
    </div>
    );
    }

}

export default App;
