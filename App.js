import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Video from 'react-native-video';

export default class App extends Component<{}> {

  constructor() {
    super();
    this.state = { paused: true };
  }

  play() {
    this.setState({ paused: !this.state.paused });
  }

  render() {
    return (
      <View style={styles.container}>
      <Button title="Play" onPress={() => this.play() } />
      <Video
        repeat
        resizeMode='cover'
        source={{ uri: 'https://instagram.fpoa1-1.fna.fbcdn.net/t50.2886-16/22113919_120489425324056_3448697780493615104_n.mp4' }}
        style={styles.backgroundVideo}
        paused={this.state.paused}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundVideo: {
    width: 200,
    height: 200,
  },
});
