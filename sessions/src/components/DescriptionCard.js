import React from 'react'
import { View, Text } from 'react-native'
import { CardSection } from './common'

const DescriptionCard = ({ description }) => {
	return(
		<View style={styles.mainContainer}>
			<CardSection>
				<Text>{ description }</Text>
			</CardSection>
		</View>
	)
}

const styles = {
	mainContainer:{
		width:'100%',
		alignItems: 'center',
		marginTop: '2.5%',
		marginBottom: '2.5%'
	}
}
export { DescriptionCard }