import React from 'react'
import { Text, View } from 'react-native'

const TitleAndSub = ({ title, sub }) => {
	return(
		<View style={styles.mainContainer}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.sub}>{sub}</Text>
		</View>
	)
}

const styles = {
	mainContainer:{
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	title: {
		fontSize: 15
	},
	sub: {
		fontSize: 13
	}
}

export { TitleAndSub }