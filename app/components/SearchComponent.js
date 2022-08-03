import React, { useRef, useContext } from 'react';
import { Button } from './Button';
import { StyleSheet, View, TextInput } from 'react-native';
import { AppContext } from '../context/ApplicationContext';

const SearchComponent = props => {
    const { setFilterText } = useContext(AppContext);
    const textInputRef = useRef(null);
    return (
        <View style={styles.contentContainer}>
            <TextInput
                ref={textInputRef}
                onChangeText={text => {
                    setFilterText(text);
                }}
                style={styles.inputTextStyle}
                autoCapitalize="none"
                autoCorrect={false}
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
        paddingHorizontal: 8
    },
    renderButtonStyle: {
        marginVertical: 12
    },
    inputTextStyle: { borderWidth: 1, padding: 12 }
});

export default SearchComponent;
