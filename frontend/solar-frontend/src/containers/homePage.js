import React from 'react';
import TabNavigator from '../components/TabNavigator'
import RangeSlider from '../components/RangeSlider'

class HomePage extends React.Component {
  render () {
    const data =[{"name":"test1", "location":"location1"},{"name":"test2", "location":"location2"}]
    return(
      <div>
        <RangeSlider />
      </div>
    )
  }
}



export default HomePage;
