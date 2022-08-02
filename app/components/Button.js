import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Button = ({ title, buttonStyle, onButtonPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onButtonPress}>
            <View style={[styles.buttonStyle, buttonStyle]}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        maxWidth: 96,
        height: 36,
        backgroundColor: 'rgb(216,215,215)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
