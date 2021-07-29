import { useNavigation } from '@react-navigation/native';
import { instanceOf, shape, string, arrayOf } from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import firebase from 'firebase';
import Icon from './Icon';
import { dateToString } from '../utils';

const MemoList = (props) => {
  const { memos } = props;
  const navigation = useNavigation();

  const deleteMemo = (id) => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      Alert.alert('メモ削除します。', 'よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {},
        },
        {
          text: '削除する',
          style: 'destructive',
          onPress: () => {
            ref.delete().catch(() => {
              Alert.alert('削除に失敗したよ');
            });
          },
        },
      ]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.memoListItem}
      onPress={() => {
        navigation.navigate('MemoDetail', { id: item.id });
      }}
    >
      <View>
        <Text style={styles.memoListItemTitle} numberOfLines={1}>
          {item.bodyText}
        </Text>
        <Text style={styles.memoListItemDate}>
          {dateToString(item.updatedAt)}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.Delete}
        onPress={() => {
          deleteMemo(item.id);
        }}
      >
        <Icon name="delete" size={24} color="#B0B0B0" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MemoList;

MemoList.propTypes = {
  memos: arrayOf(
    shape({
      id: string,
      bodyText: string,
      updatedAt: instanceOf(Date),
    })
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
