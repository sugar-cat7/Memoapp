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
