import React from 'react';
import { StyleSheet, Text, View, Platform, Modal, AsyncStorage } from 'react-native';
import Feed from './screen/Feed'
import { Constants } from 'expo'
import Comments from './screen/Comments'


const ASYNC_STORAGE_COMMENT_KEY = `ASYNC_STORAGE_COMMENT_KEY`
export default class App extends React.Component {
  state = {
    commentsForItem: {},
    showModal: false,
    selectedItemId: null,

  }

  async componentDidMount() {
    try {
      const commentForItem = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENT_KEY)

      this.setState({
        commentForItem: commentForItem ? JSON.parse(commentForItem) : {}
      })
    } catch(e) {
      console.log('Fail to load comments')
    }
  }

  showCommentScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id,
    })
  }

  closeCommentScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null,
    })
  }

  onSubmitComment = text => {
    const { selectedItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectedItemId] || []

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text]
    }

    this.setState({ commentsForItem: updated })
    try {
      AsyncStorage.setItem(ASYNC_STORAGE_COMMENT_KEY, JSON.stringify(updated))
    } catch(e) {
      console.log('Fail to save comments')
    }
  }
    render() {
      const { commentsForItem, showModal, selectedItemId } = this.state;
      console.log(selectedItemId)
      return (
        <View style={styles.container}>
     
        <Feed
        style={styles.feed}
        commentsForItem={commentsForItem}
        onPressComments={this.showCommentScreen}
        />
        <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={this.closeCommentScreen}
        >
        <Comments
        style={styles.container}
        comments={commentsForItem[selectedItemId] || []}
        onClose={this.closeCommentScreen}
        onSubmitComment= {this.onSubmitComment}

          />
          </Modal>
        </View>
      );
    }
  }
  // const platformVersion = Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop: 25
    },
});
