import  React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CardSectionVertical } from '../components/common'
import { SessionCard } from '../components/SessionCard'
import { BadgesSection } from '../components/BadgesSection'
import { DescriptionCard } from '../components/DescriptionCard'
import { MapCard } from '../components/MapCard'


class SessionScreen extends Component{
  static navigationOptions = ( {navigation} )=> {
  title: 'navigation.state.params.name'
  }
  
  render(){
    const { name, description, id, creator, topic } = this.props.navigation.state.params
    return(
      <View style={{ flex:1, alignItems:'center', flexDirection:'column', backgroundColor: '#36587F' }}> 
        <SessionCard
          nav={ this.props.navigation }
          key={ id }
          name={ name }
          creator={ creator }
          topic={ topic }
        />       
        <BadgesSection /> 
        <DescriptionCard description={ description } />
        <MapCard />
      </View>
    )
  }
}

export { SessionScreen };
