import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc', 
        padding: 20,
        flexDirection: 'row', 
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: 100, 
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'space-around',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 10,
        alignSelf: 'flex-start', 
    },
    input: {
        width: 250, 
        marginVertical: 8,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        backgroundColor: '#000', 
        paddingVertical: 10,
        borderRadius: 5,
        width: 250, 
        alignItems: 'center',
        marginVertical: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14, 
    },
    googleButton: {
        backgroundColor: 'transparent', 
        paddingVertical: 10,
        borderRadius: 5,
        width: 250, 
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    googleButtonText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 14, 
    },
    footerText: {
        marginTop: 15,
        color: '#666',
        fontSize: 12,
    },
    linkText: {
        color: 'blue',
        fontWeight: '600',
    },
   
    taskHubTitleContainer: {
        flexDirection: 'row',
        marginLeft: 230,
        
    },
    taskText: {
        fontSize: 24,
        fontWeight: 'condensedBold',
        backgroundColor: 'black', 
        color: 'white', 
        paddingHorizontal: 4,
        borderRadius: 5,
    },
    hubText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    taskHubSubtitle: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        marginLeft: 230,
    },
});

export default function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        const userData = {
            name,
            email,
            password,
        };

        try {
            const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
            } else {
                alert('Erro ao realizar o cadastro!');
            }
        } catch (error) {
            console.error(error);
            alert('Ocorreu um erro. Tente novamente mais tarde.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.taskHubTitleContainer}>
                    <Text style={styles.taskText}>Task</Text>
                    <Text style={styles.hubText}>Hub</Text>
                </View>
                <Text style={styles.taskHubSubtitle}>
                    This project is part of a study.{'\n'}Create your user with email and password.
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                />
                <Pressable style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <TouchableOpacity style={styles.googleButton}>
                    <Text style={styles.googleButtonText}>Continue With Google</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>
                    Already have an account? <Text style={styles.linkText}>Sign In</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}