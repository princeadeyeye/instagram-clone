import React from 'react';
import { StyleSheet, Text, View, Platform, Modal } from 'react-native';
import Feed from './screen/Feed'
import { Constants } from 'expo'
import Comments from './screen/Comments'



export default class App extends React.Component {
  state = {
    commentsForItem: {},
    showModal: false,
    selectedItemId: null,

  }

  showCommentScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id,
    })
  }

  closeCommentScreen = () => {
    console.log('click close')
    this.setState({
      showModal: false,
      selectedItemId: null,
    })
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
