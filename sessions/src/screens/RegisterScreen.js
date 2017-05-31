import  React, { Component } from 'react';
import { firebase } from 'firebase'
import { View, Text, Button} from 'react-native';
import { Input, CardSectionVertical, Card } from '../components/common'
import { Firebase } from '../../Firebase';


class RegisterScreen extends Component{
  static navigationOptions = {
  title: 'Register'
  }

  constructor(props){
  super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  }

  onButtonPress = () => {
    if(this.state.confirmPassword !== this.state.password){
      this.setState({error: 'Your passwords do not match'})
    }
    else{
      Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{
        this.props.navigation.navigate('Login')
      })
      .catch((error)=>{
        this.setState({ error: error.message })
      })
    }
  }

  render(){
    return(
      <View>
        <CardSectionVertical>
          <Input
            label='Email'
            onChangeText={(email) => this.setState({ email })}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          <Input
            label="Confirm Password"
            secureTextEntry={true}
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          />
          <Text>{this.state.error}</Text>
          <Button
            title='Signup'
            onPress={this.onButtonPress.bind(this)}
          />
        </CardSectionVertical>
      </View>
    )
  }
}

export { RegisterScreen };
