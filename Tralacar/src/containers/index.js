import {Navigation} from 'react-native-navigation';

import LoginContainer from './LoginContainer';
import MapSelectContainer from './MapSelectContainer';
import HomeContainer from './HomeContainer';
import SettingsContainer from './SettingsContainer';

export function registerContainers(store, Provider) {
    Navigation.registerComponent('LoginContainer', () => LoginContainer, store, Provider);
    Navigation.registerComponent('MapSelectContainer', () => MapSelectContainer, store, Provider);
    Navigation.registerComponent('HomeContainer', () => HomeContainer, store, Provider);
    Navigation.registerComponent('SettingsContainer', () => SettingsContainer, store, Provider);
}
  