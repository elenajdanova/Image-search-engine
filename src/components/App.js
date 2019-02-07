import React from 'react';
import Sbar from './Sbar';
import axios from 'axios';


class App extends React.Component {

  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers:{
        Authorization: 'Client-ID f1e10e15763395c5ff52531046ec6e834983f765c08ff296bac84c822e000710'
      }
    });
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
