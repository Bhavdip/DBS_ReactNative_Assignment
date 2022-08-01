import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

class SearchComponent extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <TextInput
          onChangeText={() => {}}
          style={styles.inputTextStyle}
          placeholder="Search a Text"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {},
  inputTextStyle: { borderWidth: 1, margin: 12, padding: 12 },
});

export default SearchComponent;
