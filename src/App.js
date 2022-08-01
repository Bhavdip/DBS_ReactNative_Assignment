import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchComponent from './SearchComponent';
import PostsComponent from './PostsComponent';
import GIFComponent from './GIFComponent';

class DBSActivity extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <GIFComponent />
        <SearchComponent />
        <PostsComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 38,
  },
});

export default DBSActivity;
