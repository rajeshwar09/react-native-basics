import React from 'react';
import { ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const LittleLemonWelcomeText = () => {
    const [firstName, onChangeFirstName] = React.useState('');

    return (
        <KeyboardAvoidingView
        style={welcomeStyles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode='on-drag'>
                <Text style={welcomeStyles.headerText}>Welcome to Little Lemon</Text>
                <Text style={welcomeStyles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
                </Text>
                <TextInput 
                    style={welcomeStyles.inputBox} 
                    value={firstName} 
                    onChangeText={onChangeFirstName}
                    placeholder={'First Name'}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
    },
});

export default LittleLemonWelcomeText;