import React from 'react'
import { TextInput, View, Text } from 'react-native'
let textColor 
const Input = ({ label, underlineColorAndroid, maxLength, value, onChangeText, color, placeholder, secureTextEntry, labelColor }) => {
	// Added style in the component so that font color is dynamic
	const styles = {
		inputStyle:{
			color,
			fontSize: 20,
			lineHeight: 23,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width:'100%'
		},
		labelStyle:{
			fontSize: 20,
			color,
			alignSelf: 'center',
		},
		containerStyle:{
			alignItems: 'center',
			padding:20,
			width:'95%'
		}
	}
	return (
		<View style={styles.containerStyle}>
			<TextInput
				underlineColorAndroid={underlineColorAndroid}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={styles.inputStyle}
				value={value}
				onChangeText={onChangeText}
				maxLength={maxLength}
			/>
			<Text style={styles.labelStyle}>{ label }</Text>
		</View>
	)
}

const styles = {
	inputStyle:{
		color: '#ffffff',
		fontSize: 20,
		lineHeight: 23,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width:'100%'
	},
	labelStyle:{
		fontSize: 20,
		color: textColor,
		alignSelf: 'center',
	},
	containerStyle:{
		alignItems: 'center',
		padding:20,
		width:'95%'
	}
}

export { Input }
