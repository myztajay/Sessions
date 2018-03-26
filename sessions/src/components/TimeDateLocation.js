import React from 'react'
import { View, Text } from 'react-native'

const TimeDateLocation = () => {
	return(
		<View style={styles.mainContainer}>
			<Text style={styles.time}>7:00pm</Text>
			<Text style={styles.date}> March 10th 2018</Text>
			<Text style={styles.miles}> 27 miles</Text>
		</View>
	)
}

const styles = {
	mainContainer:{
		flexDirection:'column', 
		alignItems: 'flex-end',
		flex:1
	},
	time:{
		fontSize: 20
	},
	date:{
		fontSize: 13,
		color: 'gray'
	},
	miles:{
		fontSize:13,
		color: '#2774CC'
	}
}

export { TimeDateLocation }