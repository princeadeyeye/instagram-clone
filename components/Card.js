import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'

import AuthorRow from './AuthorRow'

export default class Card extends Component {
    state = {
        loading: true
    }
    static propTypes = {
        fullname: PropTypes.string.isRequired,
        image: Image.propTypes.source.isRequired,
        linkText: PropTypes.string,
        onPressLinkText: PropTypes.func
    }

    static defaultProps = {
        linkText: '',
        onPressLinkText: () => {}
    }

    handleLoad = () => {
        this.setState({ loading: false})
    }
    render() {
        const {fullname, linkText, onPressLinkText, image } = this.props
        const {loading} = this.state
        return (
           <View>
            <AuthorRow
            fullname={fullname}
            linkText={linkText}
            onPressLink={onPressLinkText} 
            />
            <View style={styles.image}>
            {loading && (
                <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'}/>
            )

            }
            <Image  
            source={image} 
            onLoad={this.handleLoad}
            style={StyleSheet.absoluteFill}
            />
            </View>
            
           </View>
        )
    }
}


const styles = StyleSheet.create({
    image: {
       aspectRatio: 1,
       backgroundColor: 'rgba(0,0,0,0.02)',
    }
})