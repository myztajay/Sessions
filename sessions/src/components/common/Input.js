import React from 'react'
import { TextInput, View, Text } from 'react-native'
let textColor 
const Input = ({ label, underlineColorAndroid, maxLength, value, onChangeText, color='white', placeholder, secureTextEntry, labelColor }) => {
	// Added style in the component so that font color is dynamic
	const styles = {
		inputStyle:{
			color,
			fontSize: 20,
			lineHeight: 23,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width:'100%',
			borderWidth: 1,
			borderColor: '#d6d7da',
			borderRadius: 4,
			height: 50,
			backgroundColor:'white'

		},
		labelStyle:{
			fontSize: 20,
			color:'white',
			alignSelf: 'flex-start',
			paddingBottom:10,
			paddingTop:10,
			
		},
		containerStyle:{
			alignItems: 'center',
			width:'100%',
		}
	}
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{ label }</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={styles.inputStyle}
				value={value}
				onChangeText={onChangeText}
				maxLength={maxLength}
			/>
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
