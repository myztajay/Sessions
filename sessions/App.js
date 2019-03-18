// import { TabNavigator, StackNavigator } from 'react-navigation'
import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer,
	createSwitchNavigator
} from 'react-navigation';
import { SessionsScreen } from './src/screens/SessionsScreen';
import { SessionScreen } from './src/screens/SessionScreen';
import { ProfileScreen } from './src/screens/ProfileScreen'
import { SettingsScreen } from './src/screens/SettingsScreen';
import { NewSessionScreen } from './src/screens/NewSessionScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { TouchableHighlight } from 'react-native-gesture-handler';

const AuthStack = createStackNavigator({
	SignIn: LoginScreen,
	Register: RegisterScreen
});

const HomeStack = createStackNavigator({
	Main: SessionsScreen,
	Details: SessionScreen
});

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
	Profile: ProfileScreen
});

const TabNavigator = createBottomTabNavigator(
	{
	Home: HomeStack,
	Settings: SettingsStack,
	}
)



// Initial route goes to authentication
const App = createAppContainer(createSwitchNavigator({
	Auth: AuthStack,
	Main: TabNavigator
},{
	//@todo switch to 'Auth' after dev
	initialRouteName: 'Main'
}
));

export default App;
