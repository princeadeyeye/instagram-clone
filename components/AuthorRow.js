import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

export default function AuthorRow({ fullname, linkText, onPressLink}) {
    return (
        <View style={styles.container}>
            <Avatar
                size={35}
                initials={'MA'}
                backgroundColor={'teal'}
            />
            <Text style={styles.text} numberOfLines={1}>{fullname}</Text>
            { !!linkText && (
                <TouchableOpacity onPress={onPressLink}>
                    <Text numberOfLines={1}>{linkText}</Text>
                </TouchableOpacity>
            )

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    text: {
        flex: 1,
        marginHorizontal: 5,
    }
})

AuthorRow.propTypes = {
    fullname: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLink: PropTypes.func.isRequired
}
