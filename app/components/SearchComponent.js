import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from './Button';

class SearchComponent extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    style={styles.inputTextStyle}
                    placeholder="Search a Text"
                />
                <Button
                    title={'Re-render'}
                    buttonStyle={styles.renderButtonStyle}
                    onButtonPress={() => {
                        this.props.requestForRefresh();
                    }}
                />
            </View>
        );
    }
}

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
