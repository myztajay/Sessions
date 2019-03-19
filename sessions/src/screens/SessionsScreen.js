import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';
import map from 'lodash/map';
import { Firebase } from '../../Firebase';
import { CardSection, Card, Button, CardSectionVertical } from '../components/common';
import { SessionCard } from '../components/SessionCard';
import { TimeDateLocation } from '../components/TimeDateLocation';
import { LinearGradient } from 'expo';

class SessionsScreen extends Component {
	static navigationOptions = {
		title: 'Home',
		// headerTransparent: true,
		// headerTintColor: '#fff'
	};

	constructor(props) {
		super(props);
		this.state = { sessions: '' };
		this.sessionsRef = Firebase.database().ref('/sessions');
	}

	componentWillMount() {
		this.sessionsRef.once('value', (snapshot) => {
			this.setState({ sessions: snapshot.val() });
		});
	}

	generateSessions() {
		return map(this.state.sessions, (session, key) => {
			return {
				nav: this.props.navigation,
        sessionKey: session.key,
        key,
				name: session.name,
				description: session.description,
				creator: session.creator,
				topic: session.topic
			};
		});
	}

	render() {
		return (
			<LinearGradient
				colors={[ '#4c669f', '#3b5998', '#192f6a' ]}
				style={{ flex: 1, padding: 5, flexDirection:'column', alignItems: 'center', justifyContent:'center' }}
			>
				<Button
					onPress={() => this.props.navigation.navigate('NewSession')}
					label="Create New Session"
					backgroundColor="#ffc626"
					color="#000000"
				/>
        <View style={{height:450, width:'100%'}}>
				<FlatList
					style={{ width: '100%'}}
					data={this.generateSessions()}
					renderItem={({ item }) => {
						return (
							<SessionCard
								nav={item.nav}
								key={item.key}
								name={item.name}
								description={item.description}
								creator={item.creator}
								topic={item.topic}
								session={item}
							/>
						);
					}}
				/>
        </View>
			</LinearGradient>
		);
	}
}

export { SessionsScreen };
