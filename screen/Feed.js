import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, Text, ViewPropTypes, StyleSheet, SafeAreaView} from 'react-native'
import {fetchImages} from '../utils/api'
import CardList from '../components/CardList'

export default class Feed extends Component {
    state = {
        loading: true,
        error: false,
        items: []
    }
    static propTypes = {
        style: ViewPropTypes.style,
        commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
        .isRequired,
        onPressComments: PropTypes.func.isRequired,
    }

    static defaultProps = {
        style: null
    }

    async componentDidMount() {
        try {
            const items = await fetchImages()
            this.setState({
                loading: false,
                items
            })
        }catch(e) {
            this.setState({ 
                loading: false,
                error: true,
            })
        }

    }
    render() {
        const { style, commentsForItem, onPressComments, } = this.props
        const { loading, error, items } = this.state
        if(loading) {
            return <ActivityIndicator size={'large'} style={StyleSheet.absoluteFill} />
        }
        if (error) {
            return<Text>Error...</Text>
        }
        return (
           <SafeAreaView style={style}>
            <CardList
             items={items} 
             commentsForItem={commentsForItem}
            onPressComments={onPressComments}
            />
           </SafeAreaView>
        )
    }
}
