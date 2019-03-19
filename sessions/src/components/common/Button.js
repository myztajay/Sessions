import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const Button = ({ label, onPress, backgroundColor, color }) => {
	const styles = {
		button: {
			padding: 15,
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'center',
			borderRadius: 100,
			borderWidth: 1,
			borderColor: '#ffffff',
			backgroundColor,
			margin: 15
		},
		text: {
			color,
			textAlign: 'center',
			fontSize: 20
		}
	};

	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{label}</Text>
		</TouchableOpacity>
	);
};
export { Button };
