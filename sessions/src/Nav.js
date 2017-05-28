import { TabNavigator, StackNavigator } from 'react-navigation';
import { SessionsScreen } from './screens/SessionsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';

const SessionNav = TabNavigator({
  Home: { screen: SessionsScreen },
  Profile: { screen: ProfileScreen },
  Settings: { screen: SettingsScreen }
})

const Nav = StackNavigator({
  Main: { screen: SessionNav }
})




export { Nav };
