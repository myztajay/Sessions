import React from 'react'
import { View } from 'react-native'



const CardSectionVertical = (props) =>{
  return(
    <View style={style.containerStyle}>
      {props.children}
    </View>
  )
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  }
}


export { CardSectionVertical }
