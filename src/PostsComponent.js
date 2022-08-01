import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PostsComponent extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text>PostComponent</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {},
});

export default PostsComponent;
