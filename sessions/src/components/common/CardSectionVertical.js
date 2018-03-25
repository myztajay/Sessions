import React from 'react'
import { View } from 'react-native'



const CardSectionVertical = (props) =>{
	return(
		<View style={style.containerStyle}>
			{props.children}
		</View>
	)
}

const style = {
	containerStyle: {
		padding: 5,
		justifyContent: 'center',
		flexDirection: 'column',
		position: 'relative',
		backgroundColor: '#36587F',
		flex: 1,
		width: '80%'
	}
}


export { CardSectionVertical }
