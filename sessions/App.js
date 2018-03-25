import Expo from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { SessionsScreen } from './src/screens/SessionsScreen'
import { SessionScreen } from './src/screens/SessionScreen'
import { ProfileScreen } from './src/screens/ProfileScreen'
import { SettingsScreen } from './src/screens/SettingsScreen'
import { NewSessionScreen } from './src/screens/NewSessionScreen'
import { LoginScreen } from './src/screens/LoginScreen'
import { RegisterScreen } from './src/screens/RegisterScreen'
import { SplashScreen } from './src/screens/SplashScreen'


const SessionNav = TabNavigator({
	Home: { screen: SessionsScreen },
	// Profile: { screen: ProfileScreen },
	Settings: { screen: SettingsScreen },
},{
	tabBarPosition: 'bottom',
})
// Nav had to be changed
const App = StackNavigator({
	Splash: { screen: SplashScreen },
	Main: { screen: SessionNav },
	NewSession: { screen: NewSessionScreen },
	Session: { screen: SessionScreen },
	Login: { screen: LoginScreen},
	Register: { screen: RegisterScreen}
})


export default App 
