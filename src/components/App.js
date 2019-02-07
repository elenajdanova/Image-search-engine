import React from 'react';
import Sbar from './Sbar';
import unsplash from '../api/unsplash';


class App extends React.Component {
  state ={images: []};

 onSearchSubmit = async (term) => {
    let response = await unsplash.get('/search/photos', {
      params: {query: term},
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
    <div className="ui container" style = {{marginTop: '20px'}}>
      <Sbar afterUserSubmit={this.onSearchSubmit}/>
      <h5>Found: {this.state.images.length} images</h5>
    </div>
    );
  }
}



export default App;
