import React, { useRef, useContext } from 'react';
import { Button } from './Button';
import { StyleSheet, View, TextInput } from 'react-native';
import { AppContext } from '../context/ApplicationContext';
import { searchInPost } from '../reudx/action';

const SearchComponent = props => {
    // access the state of post component
    const { dispatch } = useContext(AppContext);
    const textInputRef = useRef(null);
    return (
        <View style={styles.contentContainer}>
            <TextInput
                ref={textInputRef}
                onChangeText={text => {
                    dispatch(searchInPost(text));
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
                    dispatch(searchInPost(''));
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
        marginVertical: 12
    },
    inputTextStyle: { borderWidth: 1, padding: 12 }
});

export default SearchComponent;
