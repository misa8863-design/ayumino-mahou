しあわせ案内人 あゆみのまほう LP
Vercelにそのままアップロードできる静的LPです。

GitHubへアップロードするもの
GitHubには、このフォルダ自体をZIPのまま置くのではなく、フォルダの中身をアップロードしてください。

index.html
style.css
script.js
robots.txt
vercel.json
assets/ フォルダ一式
その他この階層にあるファイル
GitHub上で index.html と assets/ が同じ階層に見えていればOKです。

構成
index.html：LP本体
style.css：デザインとレスポンシブ設定
script.js：SNSリンクの一元管理
assets/images/：PC用画像
assets/images/mobile/：スマートフォン用画像
robots.txt / vercel.json：確認公開用のnoindex設定
差し替え箇所
SNSリンクは script.js の LINKS にまとめています。
画像は assets/images/sectionXX-*.webp と assets/images/mobile/sectionXX-*.webp を同名で置き換えると反映されます。
公開設定
現在は確認用として noindex, nofollow を設定しています。本番公開時は index.html の robots meta、robots.txt、vercel.json を本番用に変更してください。
