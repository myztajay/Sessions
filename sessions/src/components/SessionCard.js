import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import { Card, CardSection } from './common'
import Translation from '../topicImages/Translation'

const SessionCard = ({ nav, topic, name, description, creator }) =>{
	const topicImage = Translation[topic]
	return(
		<View style={styles.sessionContainer}>
			<TouchableOpacity onPress={() => nav.navigate('Session', { topic, name, description, creator })}>
				<CardSection>
					<Image
						source={topicImage}
						style={styles.thumbnailStyle}
					/>
					<Text style={styles.sessionText}>{name}</Text>
				</CardSection>
			</TouchableOpacity>
		</View>
	)
}

const styles={
	sessionContainer: {
		margin: 10,
		flex: 1,
	},
	sessionText: {
		flex: 2,
		fontSize: 20 
	},
	thumbnailStyle: {
		width:50,
		height: 50,
		margin: 10,
	}
}

export { SessionCard }
