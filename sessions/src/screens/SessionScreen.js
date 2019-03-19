import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSectionVertical } from '../components/common';
import { SessionCard } from '../components/SessionCard';
import { BadgesCard } from '../components/BadgesCard';
import { DescriptionCard } from '../components/DescriptionCard';
import { MapCard } from '../components/MapCard';
import { LinearGradient } from 'expo';

class SessionScreen extends Component {
	static navigationOptions = {};

	render() {
		const { name, description, id, creator, topic } = this.props.navigation.state.params;
		return (
			<LinearGradient
				colors={[ '#4c669f', '#3b5998', '#192f6a' ]}
				style={{ flex: 1, alignItems: 'center', flexDirection: 'column', padding:5 }}
			>
				<SessionCard nav={this.props.navigation} key={id} name={name} creator={creator} topic={topic} />
				{/* <BadgesCard />  */}
				<DescriptionCard description={description} />
				<MapCard />
			</LinearGradient>
		);
	}
}

export { SessionScreen };
