import React, { useRef } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from './Button';

const SearchComponent = props => {
    const textInputRef = useRef(null);
    return (
        <View style={styles.contentContainer}>
            <TextInput
                ref={textInputRef}
                onChangeText={props.onChangeText}
                style={styles.inputTextStyle}
                autoCapitalize="none"
                placeholderTextColor="rgba(212,211,212, 1)"
                placeholder="Search a Text"
            />
            <Button
                title={'Re-render'}
                buttonStyle={styles.renderButtonStyle}
                onButtonPress={() => {
                    textInputRef.current.clear();
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
