# VoiceMC Official Website (`vcmc.jp`)

Simple Voice Chat 対応の Minecraft サーバー **VoiceMC**（[https://www.vcmc.jp/](https://www.vcmc.jp/)）の公式ホームページリポジトリです。

## 構成 (Structure)

- `index.html` — トップページ（サーバー紹介、参加手順、リアルタイムサーバーステータス、ギャラリー、サポート案内）
- `rules.html` — サーバールール・禁止事項・配信ガイドライン（ゲーム内 `/rules` プラグインとも連携）
- `commands.html` — コマンドガイド（基本コマンド、Bolt 保護、配信・撮影ステータス、投票コマンド、許可 Mod 案内）
- `vote.html` — 投票案内・投票ショップの使い方
- `404.html` — カスタム 404 エラーページ
- `style.css` — 全体スタイルシート（デザインコンセプト「Night Broadcast」、昼 / 夜テーマ対応、レスポンシブデザイン）
- `main.js` — 共通スクリプト（テーマ切替、モバイルナビゲーション、タブ切替、スクロールアニメーション、クリックでコピー）
- `images/` — アイコンおよびギャラリー用スクリーンショット画像（元画像）
- `images/opt/` — サイト表示用に軽量化した画像（スクリーンショットの WebP 版 `*-960.webp` / `*-1920.webp`、ロゴ、ファビコン）

## 画像の追加 (Adding images)

ギャラリーに画像を追加するときは、`images/` に画像を置き、`index.html` 下部の `galleryImages` に `'images/ファイル名.png'` のようにパスを追加してください。
軽量版を `images/opt/名前-960.webp` と `images/opt/名前-1920.webp` として用意した場合は、`'名前'` だけを書くとそちらが使われます。

## ライセンス (License)

このプロジェクトは [MIT License](./LICENSE) のもとで公開されています。
