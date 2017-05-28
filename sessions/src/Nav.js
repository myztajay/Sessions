import { TabNavigator, StackNavigator } from 'react-navigation';
import { SessionsScreen } from './screens/SessionsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';

const Nav = TabNavigator({
  Home: { screen: SessionsScreen },
  Profile: { screen: ProfileScreen },
  Settings: { screen: SettingsScreen }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'white',
  
    pressOpacity: 0.5,
    // eventually will be icon
    // showIcon: true,
    tabStyle: {
      backgroundColor: '#87281eff',
    },
    style: {
      backgroundColor: '#c0392bff'
    }
  }
}
)

export { Nav };
