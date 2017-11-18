import React from 'react';
import TabNavigator from '../components/TabNavigator'

class listingsPage extends React.Component {
  render () {
    return(
      <div>
        <TabNavigator currentPage='listingsPage' />
        <p> text </p>
      </div>
    )
  }
}

export default listingsPage;