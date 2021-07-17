## How to setup project

- project 配下で init
  `$ expo init`
  → よしなに設定

- 起動 → ブラウザの開発ツールが立ち上がる
  `$ expo start`
  → ブラウザから run ios/Android simulator でシミュレーターが立ち上がる

- インストールしている端末を確認
  `emulator -list-avds`

### 注意

立ち上げるシミュレーターに `-dns-server 8.8.8.8`をつける

### ファイルの共有方法

`$ expo publish`
→ よしなに URL が発行される →QR を読み込むと自分の端末で確認できる

- ios の場合はクライアントと共有する場合、同じアカウントでログインする必要がある

- app.json に privacy: unlisted を追加すると公開されない（他の人に）

## core components

https://reactnative.dev/docs/components-and-apis

### firebase プロジェクト作成

</>で web app 作成(reactNative なので)
よしなに設定 →firebase を利用するために自分のプロジェクトに firebase Config を追加する

- env.js と適当に作ってそこに入れる

```js
const firebaseConfig = {
  apiKey: '…',
  authDomain: '…',
  projectId: '…',
  storageBucket: '…',
  messagingSenderId: '…',
  appId: '…',
};
```

Firebase プロジェクトの作成

```
$ npm install firebase
```

- App.jsx に追加

```js
import firebase from 'firebase';
import firebaseConfig from 'env';
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
```

### Authentication から email とパスワードから認証を有効にする
<img width="1089" alt="スクリーンショット 2021-07-17 13 03 33" src="https://user-images.githubusercontent.com/69241625/126025983-0c8cde95-5697-4d76-9019-983a6bb9da9c.png">
- Sign UP と Login 部分を実装
  firebase の auth メソッドから createUserWithEmailAndPassword と signInWithEmailAndPassword を使う

```js
const handlePress = () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      console.log(user.uid);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MemoList' }],
      });
    })
    .catch((err) => Alert.alert(err.message));
};
```
