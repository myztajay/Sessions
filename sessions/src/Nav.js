import { TabNavigator, StackNavigator } from 'react-navigation';
import { SessionsScreen } from './screens/SessionsScreen';
import { SessionScreen } from './screens/SessionScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { NewSessionScreen } from './screens/NewSessionScreen';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';

const SessionNav = TabNavigator({
  Home: { screen: SessionsScreen },
  Profile: { screen: ProfileScreen },
  Settings: { screen: SettingsScreen },
  Login: { screen:LoginScreen},
  Register: { screen:RegisterScreen},
},{
  tabBarPosition: 'bottom'
})

const Nav = StackNavigator({
  Main: { screen: SessionNav },
  NewSession: { screen: NewSessionScreen },
  Session: { screen: SessionScreen }
})

export { Nav };
