  
import React from 'react';
import HornedBeasts from './HornedBeast';
import JSONData from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {

  render() {

    return (
      <div className='card-group'>
        {JSONData.map(item => {
          return (
            <HornedBeasts title={item.title} hornsCount={item.horns} imgUrl={item.image_url} description={item.description} keyword={item.keyword} />
          );
        })}
      </div>

    );
  }
}
export default Main;
