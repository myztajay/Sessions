import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CardSectionVertical, CardSection } from './common'

const BadgesSection = () => {
	return(
		<View style={styles.mainContainer}>
			<CardSectionVertical>
				<View style={styles.badge}>
					<Icon name='rocket' />
					<Text style={styles.badgesText}> New and cool</Text>
				</View>
				<View style={styles.badge}>
					<Icon name='rocket' />
					<Text style={styles.badgesText}> Willing to teach</Text>
				</View>
				<View style={styles.badge}>
					<Icon name='rocket' />
					<Text style={styles.badgesText}> Veteran</Text>
				</View>
				<View style={styles.badge}>
					<Icon name='rocket' />
					<Text style={styles.badgesText}> Good peoples</Text>
				</View>
			</ CardSectionVertical>
		</View>
	)
}

const styles = {
	mainContainer:{
		width: '100%',
		alignItems: 'center',
		marginTop: '2.5%',
		marginBottom: '2.5%'
	},
	badge: {
		padding: 10,
		flexDirection: 'row'
	},
	badgesText: {
		fontSize: 15
	}
}
export { BadgesSection }