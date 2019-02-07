import React from 'react';
import unsplash from '../api/unsplash';
import Sbar from './Sbar';
import ImageList from './ImageList';


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
      <ImageList images={this.state.images}/>
    </div>
    );
  }
}



export default App;
