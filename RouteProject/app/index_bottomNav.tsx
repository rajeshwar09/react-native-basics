import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import WelcomeScreen from '@/components/WelcomeScreen';
import LoginScreen from '@/components/LoginScreen';
import LittleLemonHeader from '@/components/LittleLemonHeader';
import LittleLemonFooter from '@/components/LittleLemonFooter';

const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <View style={styles.container}>
                <LittleLemonHeader />
                <BottomTab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ size }) => {
                            let iconName : any;
                            if (route.name === 'Welcome') {
                                iconName = 'home-outline';
                            }
                            else if (route.name === 'Login') {
                                iconName = 'enter-outline';
                            }
                            return <Ionicons name={iconName} size={size} />;
                        },
                    })}
                        initialRouteName='Login'>
                        <BottomTab.Screen name='Welcome' component={WelcomeScreen} />
                        <BottomTab.Screen name='Login' component={LoginScreen} />
                    </BottomTab.Navigator>
            </View>
            <View style={styles.footerContainer}>
                <LittleLemonFooter />
            </View>
        </NavigationContainer>   
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#333333",
    },
    footerContainer: { backgroundColor: "#333333" },
  });