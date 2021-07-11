import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButoon from '../components/CircleButoon';

const MemoListScreen = () => (
  <View style={styles.container}>
    <AppBar />
    <MemoList />
    <CircleButoon name="plus" />
  </View>
);

export default MemoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
