import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import { Card, CardSection } from './common'
import { TitleAndSub } from './TitleAndSub'
import { TimeDateLocation } from './TimeDateLocation'
import Translation from '../topicImages/Translation'

const SessionCard = ({ nav, topic, name, description, creator }) => {
	const topicImage = Translation[topic]
	return(
		<View style={styles.sessionContainer}>
			<TouchableOpacity onPress={() => nav.navigate('Details', { topic, name, description, creator })}>
				<CardSection>
					<Image
						source={topicImage}
						style={styles.thumbnailStyle}
					/>
					<TitleAndSub title={name} sub={creator} />
					<TimeDateLocation />
				</CardSection>
			</TouchableOpacity>
		</View>
	)
}

const styles={
	sessionContainer: {
		width: '100%',
		alignItems: 'center'
	},
	thumbnailStyle: {
		width:50,
		height: 50,
		margin: 10,
	}
}

export { SessionCard }
