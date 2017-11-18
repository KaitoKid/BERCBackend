import React from 'react';
import TabNavigator from '../components/TabNavigator'
import SimpleCard from '../components/SimpleCard'
import SimpleMediaCard from '../components/SimpleMediaCard'

class ListingsPage extends React.Component {
  render () {
    return(
      <div>
        <SimpleMediaCard />
        <SimpleMediaCard />
        <SimpleMediaCard />
        <SimpleMediaCard />
      </div>
    )
  }
}

export default ListingsPage;
