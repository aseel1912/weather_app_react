import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import WeatherApp from './WeatherApp';
import CustomButton from '../component/CustomButton/CustomButton';

const InitialScreen = (props) => {

    const { navigation } = props;
    return (
        <ImageBackground source={require('../../assets/images/home.jpeg')} style={styles.ImageBackground}>

            <View style={styles.container}>

            <Text style={styles.title}>Welcome To Weather App,
            plz write city name and get weather .. </Text>

            <CustomButton text={'Start'}
                onPress={() => navigation.navigate(WeatherApp)} />

            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    ImageBackground: {
        flex: 1,
    },
    title: {
        backgroundColor: 'gray',
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#fff',
        textAlign: 'justify',
    },
});

export default InitialScreen;
