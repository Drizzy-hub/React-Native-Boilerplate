import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../types';
import { ClientNavigator } from './Stacks';
import { AuthStack } from '../Auth';
import { OnboardingStack } from '../Onboard';
import { Login, Signup } from '../../Screens';

import { useAppSelector } from '../../../store/hooks';

const { Navigator, Screen, Group } = createStackNavigator<AppRoutes>();
const AppNavigator = () => {
  // const { onboarded, user } = useAppSelector((state) => state.authSlice);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* {user ? (
        <Group>
          <Screen name="ClientStack" component={ClientNavigator} />
        </Group>
      ) : onboarded ? (
        <Group>
          <Screen name="AuthStack" component={AuthStack} />
        </Group>

      ) : (
        <Group>
          <Screen name="OnboardingStack" component={OnboardingStack} />
        </Group>
      )} */}
    </Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})



