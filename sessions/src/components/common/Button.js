import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

const Button = ({ label, onPress }) => {
	return(
		<TouchableOpacity 
			style={styles.button}
			onPress={onPress}
		>
			<Text style={styles.text}>{label}</Text>
		</TouchableOpacity>
	)
}

const styles = {
	button: {
		backgroundColor: '#3091FF',
		padding:10,
		justifyContent: 'center'
	},
	text: {
		color: '#ffffff',
		textAlign: 'center'
	}
}

export { Button }