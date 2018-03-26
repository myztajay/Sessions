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
		width: '95%',
		justifyContent: 'center',
		
		backgroundColor: 'white'
	}
}

export { CardSectionVertical }
