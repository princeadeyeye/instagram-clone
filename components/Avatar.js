import { ColorPropType, StyleSheet, Text, View } from 'react-native';
 import PropTypes from 'prop-types';
import React from 'react';

export default function Avatar({ size, backgroundColor, initials }) {
    const style= {
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor
    }
    return (
       <View style={[styles.container, style]}>
        <Text style={styles.text}>{initials}</Text>
       </View>
    )
}
const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: "white"
        }
})

Avatar.propTypes = {
    size: PropTypes.number.isRequired,
    initials: PropTypes.string.isRequired,
    backgroundColor: ColorPropType.isRequired
}
