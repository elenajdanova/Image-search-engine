import React from 'react';

class Sbar extends React.Component {
  render(){
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label><h3>Image search</h3></label>
            <input type="text"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Sbar;
