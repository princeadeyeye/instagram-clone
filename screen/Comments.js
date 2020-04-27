import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ViewPropTypes } from 'react-native'

import CommentInput from '../components/CommentIput'
import CommentList from '../components/CommentList'
import Navigation from '../components/Navigation'

export default function Comments({
    style,
    comments,
    onClose,
    onSubmitComment
}) {
        return (
            <SafeAreaView style={style}>
                <Navigation
                    title="Comments"
                    leftText= "Close"
                    onPressLeftText={onClose}
                 />
                 <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
                 <CommentList items={comments} />
            </SafeAreaView>
        )
    }

    Comments.propTypes = {
        style: ViewPropTypes.style,
        comments: PropTypes.arrayOf(PropTypes.string).isRequired,
        onClose: PropTypes.func.isRequired,
        onSubmitComment: PropTypes.func.isRequired,
    }

    Comments.defaultProps = {
         style: null,
     };