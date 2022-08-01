import React, {Component} from 'react';
import {Image, StyleSheet, View } from 'react-native';

class GIFComponent extends Component {
  render() {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={require('./image/doggo_walk.gif')}
          style={styles.imageStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 225,
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default GIFComponent;
