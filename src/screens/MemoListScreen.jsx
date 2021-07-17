import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButoon from '../components/CircleButoon';
import LogOutButton from '../components/LogOutButton';

const MemoListScreen = (props) => {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButoon
        name="plus"
        onPress={() => {
          navigation.navigate('MemoCreate');
        }}
      />
    </View>
  );
};

export default MemoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
