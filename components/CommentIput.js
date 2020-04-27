import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native'

export default class CommentIput extends Component {
    state = {
        text: ''
    }
    static propTypes = {
        onSubmitEditing: PropTypes.func.isRequired,
        placeholder: PropTypes.string
    }
    static defaultProps = {
        placeholder: ''
    }

    handleChangeText = text => {
        this.setState({ text })
    }

    handleSubmit = () => {
        const { onSubmit } = this.props
        const { text } = this.state

        if(!text) return;

        onSubmit(text)
        this.setState({ text: ''})
    }
    render() {
        const { text } = this.state
        const { placeholder } = this.props
        return (
            <View style={styles.container}>
            <TextInput
               style={styles.text}
               value={text}
               placeholder={placeholder}
               onChangeText={this.handleChangeText}
               onSubmitEditing={this.handleSubmit}
               underlineColorAndroid="transparent"  
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        paddingHorizontal: 20,
        height: 60,
    },
    text: {
        flex: 1
    }
})