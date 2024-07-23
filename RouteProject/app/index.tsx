import * as React from 'react-native';
import { View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from '@/components/WelcomeScreen';
import LoginScreen from '@/components/LoginScreen';
import LittleLemonHeader from '@/components/LittleLemonHeader';
import LittleLemonFooter from '@/components/LittleLemonFooter';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <View style={styles.container}>
                <LittleLemonHeader />
                <Drawer.Navigator initialRouteName='Login'>
                    <Drawer.Screen name='Welcome' component={WelcomeScreen} />
                    <Drawer.Screen name='Login' component={LoginScreen} />
                </Drawer.Navigator>
            </View>
            <View style={styles.footerContainer}>
                <LittleLemonFooter />
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    footerContainer: {
        backgroundColor: '#333333',
    },
});