import  React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Firebase } from '../../Firebase';


class SplashScreen extends Component{
  // static navigationOptions = {
  // header: { visible: false }
  // }
  componentDidMount () {
  if (Firebase.auth().currentUser) {
      this._navigateTo('Main')
  } else {
      this._navigateTo('Main')
    }
  }

  _navigateTo = (routeName: string) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render(){
    return(
      <View>
        <Text>123</Text>
      </View>
    )
  }
}

export { SplashScreen }
