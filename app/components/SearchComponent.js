import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from './Button';

const SearchComponent = props => {
    return (
        <View style={styles.contentContainer}>
            <TextInput
                onChangeText={props.onChangeText}
                style={styles.inputTextStyle}
                placeholder="Search a Text"
            />
            <Button
                title={'Re-render'}
                buttonStyle={styles.renderButtonStyle}
                onButtonPress={() => {
                    props.requestForRefresh();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: 8,
        paddingHorizontal: 8
    },
    renderButtonStyle: {
        marginTop: 8
    },
    inputTextStyle: { borderWidth: 1, padding: 12 }
});

export default SearchComponent;
