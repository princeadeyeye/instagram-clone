import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Navigation extends Component {
    static propTypes = {
        title: PropTypes.string,
        letText: PropTypes.string,
        onPressLeftText: PropTypes.func
    }

    static defaultProps = {
        title: '',
        leftText: '',
        onPressLeftText: () => {}
    }

    render() {
        const { title, leftText, onPressLeftText } = this.props
        console.log(leftText)
        return (
            <View>
                <TouchableOpacity onPress={onPressLeftText}>
                    <Text>{leftText}</Text>
                </TouchableOpacity>
                <Text>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    title: {
        fontWeight: '500'
    },
    leftText: {
     position: 'absolute',
      left:  20,
      top: 0,
      bottom: 0,
      justifyContent: 'center'
    }
})
