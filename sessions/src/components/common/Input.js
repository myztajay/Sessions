import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, underlineColorAndroid, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{ label }</Text>
      <TextInput
        underlineColorAndroid={underlineColorAndroid}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
        style={{width:200, color: '#FFFFFF'}}
      />
    </View>
  )
}

const styles = {
  inputStyle:{
    color: '#FFFFFF',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2
  },
  labelStyle:{
    fontSize: 18,
    color:'#FFF',

    alignSelf: 'center'

  },
  containerStyle:{
    alignItems: 'center'
  }
}

export { Input };
