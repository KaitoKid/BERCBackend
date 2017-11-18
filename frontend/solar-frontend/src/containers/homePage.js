import React from 'react';
import TabNavigator from '../components/TabNavigator'

class HomePage extends React.Component {
  render () {
    const data =[{"name":"test1", "location":"location1"},{"name":"test2", "location":"location2"}]
    return(
      <div>
        {data.map(function(d, idx){
          return (<li key={idx}>{d.name}</li>)
        })}
      </div>
    )
  }
}



export default HomePage;
