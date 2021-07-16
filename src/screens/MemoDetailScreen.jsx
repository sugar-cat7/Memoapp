import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CircleButoon from '../components/CircleButoon';

const MemoDetailScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020年12月24日</Text>
      </View>
      <ScrollView style={styles.memoView}>
        <Text style={styles.memoText}>ここにテキストが入る〜</Text>
      </ScrollView>
      <CircleButoon
        style={{ top: 60, bottom: 'auto' }}
        name="pencil"
        onPress={() => {
          navigation.navigate('MemoEdit');
        }}
      />
    </View>
  );
};

export default MemoDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoView: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
