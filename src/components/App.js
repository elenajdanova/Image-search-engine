import React from 'react';
import Sbar from './Sbar';


class App extends React.Component {

  onSearchSubmit(term){
    console.log(term);
  }

  render() {
    return (
    <div className="ui container" style = {{marginTop: '20px'}}>
      <Sbar afterUserSubmit={this.onSearchSubmit}/>
    </div>
    );
  }
}



export default App;
