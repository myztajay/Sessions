import { TabNavigator, StackNavigator } from 'react-navigation'
import { SessionsScreen } from './screens/SessionsScreen'
import { SessionScreen } from './screens/SessionScreen'
// import { ProfileScreen } from './screens/ProfileScreen'
// import { SettingsScreen } from './screens/SettingsScreen'
import { NewSessionScreen } from './screens/NewSessionScreen'
import { LoginScreen } from './screens/LoginScreen'
import { RegisterScreen } from './screens/RegisterScreen'
import { SplashScreen } from './screens/SplashScreen'


const SessionNav = TabNavigator({
	Home: { screen: SessionsScreen },
	// Profile: { screen: ProfileScreen },
	// Settings: { screen: SettingsScreen },
},{
	tabBarPosition: 'bottom'
})

const Nav = StackNavigator({
	Splash: { screen: SplashScreen },
	Main: { screen: SessionNav },
	NewSession: { screen: NewSessionScreen },
	Session: { screen: SessionScreen },
	Login: { screen: LoginScreen },
	Register: { screen: RegisterScreen}
})


export { Nav }
