import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    FlatList,
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';

const keyExtractor = (item, index) => index.toString();
const ListView = props => {
    const { showError, showLoading } = props;
    if (showLoading) {
        return (
            <View style={styles.indicatorLayout}>
                <ActivityIndicator testID="ActivityIndicator" />
            </View>
        );
    }
    if (showError) {
        return (
            <View style={styles.indicatorLayout}>
                <Text testID="TextError">{showError}</Text>
            </View>
        );
    }

    return (
        <View style={[styles.listContainer, props.listContainerStyle]}>
            <FlatList
                testID="FlatList"
                data={props.data}
                keyExtractor={keyExtractor}
                style={[styles.listViewStyle, props.listViewStyle]}
                contentContainerStyle={[
                    styles.contentContainerStyle,
                    props.containerStyle
                ]}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {},
    listViewStyle: {
        paddingHorizontal: 16
    },
    contentContainerStyle: {},
    indicatorLayout: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

ListView.defaultProps = {
    defaultSeparator: false
};

ListView.propTypes = {
    listViewStyle: PropTypes.object,
    listContainerStyle: PropTypes.object,
    data: PropTypes.array,
    defaultSeparator: PropTypes.bool,
    defaultStickHeader: PropTypes.bool,
    containerStyle: PropTypes.object,
    showLoading: PropTypes.bool,
    showError: PropTypes.string
};

export default ListView;
