import  React, { Component } from 'react'
import { firebase } from 'firebase'
import { View, Text } from 'react-native'
import { Input, CardSectionVertical, Card, Button, Spinner } from '../components/common'
import { Firebase } from '../../Firebase'


class LoginScreen extends Component{
  static navigationOptions = {
  title: 'Login'
  }

  constructor(props){
  super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      authenticated: false,
      loading: false
    }
  }

  onLoginButtonPress = () => {
    this.setState({ loading: true })
    Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      this.setState({ authenticated: true, loading: false })
      this.props.navigation.navigate('Main')
    })
    .catch((error)=>{
      this.setState({ error: error.message, loading: false })
    })
  }

  onRegisterButtonPress = () => {
    this.props.navigation.navigate('Register')
  }

  render(){
    if(this.state.loading === true ) return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center',  backgroundColor: '#36587F',  }}>
      <CardSectionVertical>
      <Spinner />
      </CardSectionVertical>
      </View>
    ) 
    return(
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#36587F' }}>
          <Text style={styles.title}>Sessions</Text>
          <Input
            label='Email'
            onChangeText={(email) => this.setState({ email })}
            underlineColorAndroid='#ffffff'
          />
          <Input
            label="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            underlineColorAndroid='#ffffff'
          />
          <Text>{this.state.error}</Text>
          <Button
              label='Login'
              onPress={this.onLoginButtonPress}
            />            
          <Text
            style={styles.textStyles}
            title='Register'
            onPress={this.onRegisterButtonPress}
          >
          or Sign Up
          </Text>      
    </View>
    )
  }
}

const styles = {
  textStyles: {
    color: '#FFB530',
    textAlign: 'center'
  },
  title: {
    color:'#ffffff',
    fontSize:25,
    textAlign: 'center'
  }
}

export { LoginScreen };
