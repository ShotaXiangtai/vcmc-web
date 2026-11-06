/* ==========================================================================
   VoiceMC 多言語対応（全ページで defer 読み込み。main.js より前に置く）

   ・表示言語は head 内のスクリプトが「?lang= → 保存された選択 → ブラウザの設定言語」の順で決める
   ・ページの HTML に書かれている日本語が原文。下の表で日本語の文と一致した部分を翻訳に置き換える
   ・日本語の文を書き換えたときは、表の1列目（日本語）も同じ文に直すこと
     （一致しない文は翻訳されず、日本語のまま表示される）

   表の列：[日本語, English, 简体中文, 繁體中文（台灣）, 繁體中文（香港）]
   ※ 香港の列を省略した行は、台灣と同じ文を使う
   ========================================================================== */
window.VCMC_I18N_ROWS = [
  // ── 共通（ヘッダー・フッター） ──
  ['本文へスキップ', 'Skip to content', '跳到正文', '跳至主要內容'],
  ['VoiceMC トップ', 'VoiceMC home', 'VoiceMC 首页', 'VoiceMC 首頁'],
  ['メインメニュー', 'Main menu', '主菜单', '主選單'],
  ['参加方法', 'How to join', '加入方式', '加入方式', '加入方法'],
  ['About', 'About', '关于', '關於'],
  ['サーバー', 'Servers', '服务器', '伺服器'],
  ['ルール', 'Rules', '规则', '規則'],
  ['コマンド', 'Commands', '命令', '指令'],
  ['投票', 'Vote', '投票', '投票'],
  ['Discordに参加', 'Join Discord', '加入 Discord', '加入 Discord'],
  ['テーマを切り替え', 'Toggle theme', '切换主题', '切換主題'],
  ['メニューを開く', 'Open menu', '打开菜单', '開啟選單', '打開選單'],
  ['メニューを閉じる', 'Close menu', '关闭菜单', '關閉選單'],
  ['声でつながる、Minecraftの世界。<br>Simple Voice Chat 対応 / Java版専用サーバー',
    'A Minecraft world connected by voice.<br>Simple Voice Chat ready / Java Edition only',
    '用声音连接的 Minecraft 世界。<br>支持 Simple Voice Chat／仅限 Java 版',
    '用聲音連結的 Minecraft 世界。<br>支援 Simple Voice Chat／僅限 Java 版',
    '用聲音連結的 Minecraft 世界。<br>支援 Simple Voice Chat／只限 Java 版'],
  ['サーバーアドレス vcmc.jp をコピー', 'Copy server address vcmc.jp', '复制服务器地址 vcmc.jp', '複製伺服器位址 vcmc.jp', '複製伺服器地址 vcmc.jp'],
  ['サイト内リンク', 'Site links', '站内链接', '站內連結'],
  ['外部リンク', 'External links', '外部链接', '外部連結'],
  ['トップ', 'Home', '首页', '首頁'],
  ['ホーム', 'Home', '首页', '首頁'],
  ['パンくずリスト', 'Breadcrumb', '面包屑导航', '導覽路徑'],
  ['ページトップへ', 'Back to top', '返回顶部', '回到頂端', '返回頁頂'],
  ['コピーしました', 'Copied', '已复制', '已複製'],
  ['手動でコピーしてください', 'Please copy it manually', '请手动复制', '請手動複製'],

  // ── トップページ ──
  ['VoiceMC | 配信フレンドリーなボイスサーバー', 'VoiceMC | A stream-friendly voice chat server', 'VoiceMC | 适合直播的语音服务器', 'VoiceMC | 對直播友善的語音伺服器'],
  ['Simple Voice Chat対応のMinecraftサーバー。配信者もリスナーも、誰でも参加OK。近接ボイスチャットでわいわい遊ぼう。',
    'A Minecraft server with Simple Voice Chat. Streamers and viewers alike — everyone’s welcome. Come hang out with proximity voice chat!',
    '支持 Simple Voice Chat 的 Minecraft 服务器。无论主播还是观众，任何人都可以加入。一起用近距离语音热闹地玩吧！',
    '支援 Simple Voice Chat 的 Minecraft 伺服器。不論直播主還是觀眾，任何人都能加入。一起用近距離語音熱鬧地玩吧！',
    '支援 Simple Voice Chat 的 Minecraft 伺服器。無論主播還是觀眾，任何人都可以加入。一起用近距離語音熱鬧地玩吧！'],
  ['Simple Voice Chat 対応', 'Simple Voice Chat ready', '支持 Simple Voice Chat', '支援 Simple Voice Chat'],
  ['Java版専用', 'Java Edition only', '仅限 Java 版', '僅限 Java 版', '只限 Java 版'],
  ['<em>声</em>でつながる、<br>Minecraftの世界。',
    'A Minecraft world,<br>connected by <em>voice</em>.',
    '用<em>声音</em>连接的<br>Minecraft 世界。',
    '用<em>聲音</em>連結的<br>Minecraft 世界。'],
  ['配信者も、リスナーも、純粋なサバイバル勢も。<br>近接ボイスチャットで一緒に遊べる、誰でも歓迎のサーバーです。',
    'Streamers, viewers, and pure survival players alike.<br>Play together with proximity voice chat — everyone is welcome here.',
    '无论是主播、观众，还是纯生存玩家。<br>这里是能用近距离语音一起游玩、欢迎所有人的服务器。',
    '不論是直播主、觀眾，還是純生存玩家。<br>這裡是能用近距離語音一起遊玩、歡迎所有人的伺服器。',
    '無論是主播、觀眾，還是純生存玩家。<br>這裡是可以用近距離語音一起遊玩、歡迎所有人的伺服器。'],
  ['接続中のプレイヤー', 'Players online', '在线玩家', '線上玩家', '在線玩家'],
  ['ステータスを取得中...', 'Checking status...', '正在获取状态...', '正在取得狀態...', '正在讀取狀態...'],
  ['オンライン', 'Online', '在线', '線上', '在線'],
  ['バージョン', 'Version', '版本', '版本'],
  ['現在オフラインです', 'Currently offline', '当前离线', '目前離線', '現時離線'],
  ['ステータスを取得できませんでした', 'Couldn’t get the server status', '无法获取状态', '無法取得狀態', '未能讀取狀態'],
  ['IPをコピー', 'Copy IP', '复制 IP', '複製 IP'],
  ['※ サーバーへの参加にはDiscordへの加入を推奨しています', '* We recommend joining our Discord before you join the server', '※ 建议在加入服务器前先加入 Discord', '※ 建議在加入伺服器前先加入 Discord'],

  ['3ステップで始める', 'Get started in 3 steps', '只需三步即可开始', '只要三步驟就能開始', '只需三個步驟即可開始'],
  ['Discordに参加する', 'Join our Discord', '加入 Discord', '加入 Discord'],
  ['まず公式Discordサーバーへの参加を推奨しています。参加前に<a href="rules.html">ルール・禁止事項</a>を必ずご確認ください。',
    'We recommend joining our official Discord server first. Be sure to read the <a href="rules.html">rules and prohibited actions</a> before you join.',
    '建议先加入官方 Discord 服务器。加入前请务必阅读<a href="rules.html">规则与禁止事项</a>。',
    '建議先加入官方 Discord 伺服器。加入前請務必詳閱<a href="rules.html">規則與禁止事項</a>。',
    '建議先加入官方 Discord 伺服器。加入前請務必細閱<a href="rules.html">規則及禁止事項</a>。'],
  ['Modを導入して接続', 'Install the mod and connect', '安装模组并连接', '安裝模組並連線', '安裝模組並連接'],
  ['<b>Simple Voice Chat</b>（Mod）を導入してサーバーに接続。ゲーム内でマイクの設定をすれば準備完了です。',
    'Install <b>Simple Voice Chat</b> (a mod) and connect to the server. Set up your mic in-game and you’re ready to go.',
    '安装 <b>Simple Voice Chat</b>（模组）后连接服务器。在游戏内设置好麦克风就准备就绪了。',
    '安裝 <b>Simple Voice Chat</b>（模組）後連線到伺服器。在遊戲內設定好麥克風就準備完成了。',
    '安裝 <b>Simple Voice Chat</b>（模組）後連接伺服器。在遊戲內設定好咪高峰就準備完成了。'],
  ['Modrinthでダウンロード', 'Download on Modrinth', '在 Modrinth 下载', '到 Modrinth 下載', '在 Modrinth 下載'],
  ['自由に遊ぶ', 'Play your way', '自由游玩', '自由遊玩'],
  ['サバイバルを楽しむもよし、配信企画に使うもよし。ルールを守って自由に楽しみましょう。',
    'Enjoy survival, or use it for your stream projects. Just follow the rules and have fun.',
    '可以享受生存，也可以用来做直播企划。遵守规则，尽情享受吧。',
    '可以享受生存，也可以拿來做直播企劃。遵守規則，盡情享受吧。',
    '可以享受生存，也可以用來做直播企劃。遵守規則，盡情享受吧。'],
  ['コマンドを見る', 'View commands', '查看命令', '查看指令'],

  ['サーバーの特徴', 'Features', '服务器特色', '伺服器特色'],
  ['近接ボイスチャット', 'Proximity voice chat', '近距离语音聊天', '近距離語音聊天'],
  ['Simple Voice Chatによる、その場にいるような臨場感のある通話',
    'Immersive voice chat powered by Simple Voice Chat — like you’re really there',
    '通过 Simple Voice Chat 实现身临其境的通话',
    '透過 Simple Voice Chat 實現身歷其境的通話'],
  ['近接ボイスチャットのイメージ図。近くのプレイヤーの声ははっきり、遠いと小さく聞こえ、範囲外では聞こえない。',
    'Proximity voice chat diagram. Nearby players sound clear, distant players sound quieter, and players out of range can’t be heard.',
    '近距离语音聊天示意图。附近玩家的声音清晰，距离较远时声音变小，超出范围就听不到。',
    '近距離語音聊天示意圖。附近玩家的聲音清楚，距離較遠時聲音變小，超出範圍就聽不到。'],
  ['近い：はっきり聞こえる', 'Near: heard clearly', '近：听得很清楚', '近：聽得很清楚'],
  ['遠い：小さく聞こえる', 'Far: heard quietly', '远：声音较小', '遠：聲音較小'],
  ['範囲外：聞こえない', 'Out of range: silent', '范围外：听不到', '範圍外：聽不到'],
  ['配信・動画投稿OK', 'Streaming & videos welcome', '欢迎直播和发布视频', '歡迎直播與上傳影片', '歡迎直播及上載影片'],
  ['配信者向けの配慮も充実しており、安心してコンテンツ制作に使えます',
    'We look out for streamers, so you can create content with peace of mind',
    '为主播考虑得十分周到，可以安心进行内容创作',
    '為直播主考慮得十分周到，可以安心進行內容創作',
    '為主播考慮得十分周到，可以安心進行內容創作'],
  ['ワールドマップ', 'World map', '世界地图', '世界地圖'],
  ['Bluemapによるリアルタイム3Dマップを公開中。ブラウザからいつでもワールドを確認できます',
    'A live 3D map powered by Bluemap. Explore the world from your browser anytime',
    '我们公开了基于 Bluemap 的实时 3D 地图。随时都能在浏览器中查看世界',
    '我們公開了由 Bluemap 製作的即時 3D 地圖。隨時都能在瀏覽器中查看世界',
    '我們公開了由 Bluemap 製作的實時 3D 地圖。隨時都可以在瀏覽器中查看世界'],
  ['WebMapを開く', 'Open WebMap', '打开 WebMap', '開啟 WebMap', '打開 WebMap'],

  ['サーバー紹介', 'Our servers', '服务器介绍', '伺服器介紹'],
  ['ハブのNPCから、遊びたいサーバーを選んで移動できます。ハブへはいつでも <code class="kbd">/hub</code> で戻れます。',
    'Choose a server from the NPCs in the hub to head there. You can return to the hub anytime with <code class="kbd">/hub</code>.',
    '在大厅的 NPC 处选择想玩的服务器即可前往。随时可以用 <code class="kbd">/hub</code> 返回大厅。',
    '在大廳的 NPC 選擇想玩的伺服器就能前往。隨時可以用 <code class="kbd">/hub</code> 回到大廳。'],
  ['ハブに並んだ各サーバー行きのNPC', 'NPCs lined up in the hub, each leading to a server', '大厅里通往各服务器的 NPC', '大廳裡通往各伺服器的 NPC'],
  ['ハブ（ロビー）の様子', 'The hub (lobby)', '大厅（Hub）', '大廳（Hub）'],
  ['メインサーバー', 'Main server', '主服务器', '主伺服器'],
  ['VoiceMCのメインとなるサバイバルサーバーです。みんなと同じワールドで、建築や冒険を自由に楽しめます。',
    'VoiceMC’s main survival server. Build and adventure freely in the same world as everyone else.',
    'VoiceMC 的主要生存服务器。可以和大家在同一个世界里自由地建筑和冒险。',
    'VoiceMC 的主要生存伺服器。可以和大家在同一個世界裡自由地建築與冒險。',
    'VoiceMC 的主要生存伺服器。可以和大家在同一個世界裡自由建築及冒險。'],
  ['サバイバル', 'Survival', '生存', '生存'],
  ['資源サーバー', 'Resource server', '资源服务器', '資源伺服器'],
  ['資源集めのためのサーバーです。Minecraftのバージョンが上がるタイミングで、ワールドがリセットされます。',
    'A server for gathering resources. The world is reset whenever Minecraft gets a version update.',
    '用于收集资源的服务器。每当 Minecraft 版本更新时，世界都会重置。',
    '用來收集資源的伺服器。每當 Minecraft 版本更新時，世界都會重置。'],
  ['バージョン更新でリセット', 'Resets on version updates', '版本更新时重置', '版本更新時重置'],
  ['村人をアンデッドの大群から守るミニゲームです。ウェーブごとにゾンビが増えて強くなり、ウェーブに上限はありません。どこまで生き残れるか挑戦しよう。',
    'A minigame where you protect villagers from hordes of the undead. Every wave brings more and stronger zombies, and there’s no wave limit. How long can you survive?',
    '保护村民免受亡灵大军侵袭的小游戏。每一波僵尸都会更多、更强，而且波数没有上限。来挑战你能坚持多久吧！',
    '保護村民不受不死生物大軍侵襲的小遊戲。每一波殭屍都會更多、更強，而且波數沒有上限。來挑戰你能撐多久吧！',
    '保護村民免受不死生物大軍侵襲的小遊戲。每一波殭屍都會更多、更強，而且波數沒有上限。來挑戰一下你能撐多久吧！'],
  ['ミニゲーム', 'Minigame', '小游戏', '小遊戲'],

  ['サーバーの様子', 'Around the server', '服务器一览', '伺服器一覽'],
  ['WebMapでワールドを見る', 'Explore the world on WebMap', '在 WebMap 上查看世界', '在 WebMap 上查看世界'],
  ['スクリーンショット {n} を拡大表示', 'Enlarge screenshot {n}', '放大截图 {n}', '放大截圖 {n}'],
  ['サーバースクリーンショット {n}', 'Server screenshot {n}', '服务器截图 {n}', '伺服器截圖 {n}'],
  ['スクリーンショットは近日公開予定です。', 'Screenshots coming soon.', '截图即将公开。', '截圖即將公開。'],
  ['画像ビューワー', 'Image viewer', '图片查看器', '圖片檢視器', '圖片瀏覽器'],
  ['閉じる', 'Close', '关闭', '關閉'],
  ['前の画像', 'Previous image', '上一张', '上一張'],
  ['次の画像', 'Next image', '下一张', '下一張'],

  ['お問い合わせ・サポート', 'Contact & support', '联系与支持', '聯絡與支援', '聯絡及支援'],
  ['お問い合わせ', 'Contact', '联系我们', '聯絡我們'],
  ['一般的なサポート', 'General support', '一般支持', '一般支援'],
  ['公式Discordのスレッドへどうぞ。', 'Please post in a thread on our official Discord.', '请到官方 Discord 的子区中提问。', '請到官方 Discord 的討論串詢問。', '請到官方 Discord 的討論串查詢。'],
  ['個人的なサポート', 'Private support', '个人支持', '個人支援'],
  ['座標や個人情報を含む内容、異議申し立てなどは、Discord の <span class="handle">@ShusakuNamiki</span> へDMをお願いします。',
    'For anything involving coordinates or personal information, or to appeal a decision, please DM <span class="handle">@ShusakuNamiki</span> on Discord.',
    '涉及坐标、个人信息的内容或申诉等，请在 Discord 私信 <span class="handle">@ShusakuNamiki</span>。',
    '涉及座標、個人資料的內容或申訴等，請在 Discord 私訊 <span class="handle">@ShusakuNamiki</span>。'],
  ['寄付について', 'Donations', '关于捐赠', '關於捐款'],
  ['ご支援いただける方はDiscordで <span class="handle">@ShusakuNamiki</span> にDMをお願いします。',
    'If you’d like to support us, please DM <span class="handle">@ShusakuNamiki</span> on Discord.',
    '如果愿意支持我们，请在 Discord 私信 <span class="handle">@ShusakuNamiki</span>。',
    '如果願意支持我們，請在 Discord 私訊 <span class="handle">@ShusakuNamiki</span>。'],
  ['あなたの声を、<br>待ってます。', 'We can’t wait<br>to hear your voice.', '期待听见<br>你的声音。', '期待聽見<br>你的聲音。'],
  ['Java版 / Simple Voice Chat 対応。配信者もリスナーも、誰でも参加OKです。',
    'Java Edition / Simple Voice Chat ready. Streamers, viewers — everyone is welcome.',
    'Java 版／支持 Simple Voice Chat。无论主播还是观众，任何人都可以加入。',
    'Java 版／支援 Simple Voice Chat。不論直播主還是觀眾，任何人都能加入。',
    'Java 版／支援 Simple Voice Chat。無論主播還是觀眾，任何人都可以加入。'],
  ['キーワードを入力...', 'Enter a keyword...', '输入关键词...', '輸入關鍵字...'],
  ['開く', 'Open', '打开', '開啟', '打開'],
  ['違います', 'Nope.', '不对', '不對'],

  // ── ルール ──
  ['ルール＆ガイドライン | VoiceMC', 'Rules & Guidelines | VoiceMC', '规则与指南 | VoiceMC', '規則與指南 | VoiceMC', '規則及指引 | VoiceMC'],
  ['VoiceMCサーバーのルールとプレイガイドライン。快適なサーバー環境のために守るべきマナーを確認できます。',
    'Rules and play guidelines for the VoiceMC server — the etiquette that keeps the server enjoyable for everyone.',
    'VoiceMC 服务器的规则与游玩指南。在这里确认维持舒适服务器环境所需遵守的礼仪。',
    'VoiceMC 伺服器的規則與遊玩指南。在這裡確認維持舒適伺服器環境所需遵守的禮儀。',
    'VoiceMC 伺服器的規則及遊玩指引。在這裡確認維持舒適伺服器環境所需遵守的禮儀。'],
  ['ルール＆ガイドライン', 'Rules & Guidelines', '规则与指南', '規則與指南', '規則及指引'],
  ['快適なサーバー環境のため、以下のルールをお守りください。', 'To keep the server enjoyable for everyone, please follow the rules below.', '为了营造舒适的服务器环境，请遵守以下规则。', '為了維持舒適的伺服器環境，請遵守以下規則。'],
  ['禁止事項', 'Prohibited actions', '禁止事项', '禁止事項'],
  ['プレイガイド', 'Play guide', '游玩指南', '遊玩指南', '遊玩指引'],
  ['違反が確認された場合、警告またはサーバーからの退出・BANの対象となります。',
    'Violations may result in a warning, removal from the server, or a ban.',
    '一经确认违规，将会受到警告、被移出服务器或封禁。',
    '一經確認違規，將會受到警告、被移出伺服器或封鎖（BAN）。',
    '一經確認違規，將會被警告、踢出伺服器或封禁（BAN）。'],
  ['配信関連', 'Streaming', '直播相关', '直播相關'],
  ['配信者ロール以外の方が、自分の配信URLを貼る行為', 'Posting your own stream URL without the Streamer role', '没有主播身份组却张贴自己的直播链接', '沒有直播主身分組卻張貼自己的直播網址', '沒有主播身分組卻張貼自己的直播連結'],
  ['プレイ・チャット関連', 'Gameplay & chat', '游戏与聊天相关', '遊戲與聊天相關', '遊戲及聊天相關'],
  ['Simple Voice Chatを導入せずメインワールドに参加する行為', 'Joining the main world without Simple Voice Chat installed', '未安装 Simple Voice Chat 就进入主世界', '未安裝 Simple Voice Chat 就進入主世界'],
  ['外部VC（Discordなど）での会話（VoiceMC公式Discordでのボイスチャットは可）',
    'Talking over external voice chat such as Discord (voice chat in the official VoiceMC Discord is fine)',
    '使用外部语音（如 Discord）交谈（VoiceMC 官方 Discord 的语音聊天除外）',
    '使用外部語音（如 Discord）交談（VoiceMC 官方 Discord 的語音聊天除外）'],
  ['合意のないPvP行為', 'PvP without mutual consent', '未经双方同意的 PvP', '未經雙方同意的 PvP'],
  ['荒らし・迷惑行為', 'Griefing or harassment', '恶意破坏、骚扰行为', '惡意破壞、騷擾行為'],
  ['チート・不正行為', 'Cheating or other unfair play', '作弊、违规行为', '作弊、不正當行為'],
  ['卑猥または公序良俗に反する建築・発言', 'Obscene or offensive builds or messages', '猥亵或违背公序良俗的建筑与发言', '猥褻或違反善良風俗的建築與發言', '猥褻或有違公眾道德的建築及言論'],
  ['特定の思想・宗教・政治的主張を含む建築・発言', 'Builds or messages promoting specific ideologies, religions, or political views', '包含特定思想、宗教、政治主张的建筑与发言', '包含特定思想、宗教、政治主張的建築與發言', '包含特定思想、宗教、政治主張的建築及言論'],
  ['運営の指示に従わない行為', 'Ignoring instructions from staff', '不服从管理团队的指示', '不服從管理團隊的指示'],
  ['他プレイヤーの許可なしに建築物を破壊する行為', 'Destroying other players’ builds without permission', '未经许可破坏其他玩家的建筑', '未經許可破壞其他玩家的建築'],
  ['バグ・不具合・エクスプロイトの悪用', 'Abusing bugs, glitches, or exploits', '利用 Bug、故障或漏洞', '濫用 Bug、故障或漏洞'],
  ['PvP補助・自動化マクロなどの不正MODやスクリプトの使用', 'Using unfair mods or scripts such as PvP assists or automation macros', '使用 PvP 辅助、自动化宏等不正当的模组或脚本', '使用 PvP 輔助、自動化巨集等不正當的模組或腳本'],
  ['他プレイヤーへの誹謗中傷・煽り行為', 'Insulting, defaming, or provoking other players', '诽谤中伤、挑衅其他玩家', '誹謗中傷、挑釁其他玩家'],
  ['スパム・無断宣伝行為', 'Spamming or unauthorized advertising', '刷屏、擅自宣传', '洗版、未經許可的宣傳'],
  ['個人情報の共有・晒し行為', 'Sharing or exposing personal information (doxxing)', '分享、曝光他人个人信息（人肉）', '分享、公開他人個人資料（肉搜）', '分享、公開他人個人資料（起底）'],
  ['ピザにパイナップルを乗せる行為', 'Putting pineapple on pizza', '在披萨上放菠萝', '在披薩上放鳳梨', '在薄餅上放菠蘿'],
  ['プレイガイド（推奨）', 'Play guide (recommended)', '游玩指南（建议）', '遊玩指南（建議）', '遊玩指引（建議）'],
  ['強制ではありませんが、みんなが気持ちよく遊べる環境づくりにご協力ください。',
    'These aren’t mandatory, but please help us keep the server a pleasant place for everyone.',
    '以下并非强制规定，但请协助营造让大家都能愉快游玩的环境。',
    '以下並非強制規定，但請協助營造讓大家都能愉快遊玩的環境。'],
  ['コミュニケーション', 'Communication', '交流', '交流', '溝通'],
  ['丁寧な言葉遣いと節度ある態度を心がけましょう', 'Use polite language and be considerate', '请注意用语礼貌，保持有分寸的态度', '請注意用字遣詞，保持有分寸的態度', '請注意用詞禮貌，保持有分寸的態度'],
  ['初対面のプレイヤーには軽い挨拶を。友好的な雰囲気づくりを意識してください', 'Say hi to players you meet for the first time, and help keep things friendly', '遇到初次见面的玩家，就打个招呼吧。请留意营造友好的氛围', '遇到初次見面的玩家，就打聲招呼吧。請留意營造友善的氣氛'],
  ['不快な発言を見かけても過度に反応せず、運営へ報告を', 'If you see something offensive, don’t overreact — report it to staff', '看到令人不快的发言时不要过度反应，请向管理团队报告', '看到令人不快的發言時不要過度反應，請向管理團隊回報', '看到令人不快的言論時不要過度反應，請向管理團隊舉報'],
  ['プレイマナー', 'Play etiquette', '游戏礼仪', '遊戲禮儀'],
  ['他プレイヤーの建築物を壊さず・荒らさず・尊重しましょう', 'Respect other players’ builds — don’t break or grief them', '尊重其他玩家的建筑，不要破坏或捣乱', '尊重其他玩家的建築，不要破壞或搗亂'],
  ['共用施設やチェストは譲り合って利用してください', 'Share common facilities and chests with others', '公共设施和箱子请互相谦让使用', '公共設施和箱子請互相禮讓使用'],
  ['AFKする場合は安全な場所に移動しておくと◎', 'If you go AFK, it’s best to move somewhere safe first', '挂机（AFK）时最好先移动到安全的地方', '掛機（AFK）時最好先移動到安全的地方'],
  ['Mobの過密飼育・大型装置など、サーバー負荷をかける行為は控えめに', 'Go easy on things that strain the server, like overcrowded mob farms or huge contraptions', '请适度控制高密度养殖生物、大型装置等会增加服务器负担的行为', '請適度控制高密度飼養生物、大型裝置等會增加伺服器負擔的行為'],
  ['配信中は他プレイヤーへの配慮を忘れずに', 'While streaming, be mindful of other players', '直播时请别忘了顾及其他玩家', '直播時請別忘了顧及其他玩家'],
  ['配信・撮影を行う場合は <code class="kbd">/stream on</code> や <code class="kbd">/rec on</code> で周囲に表示し、終了後は <code class="kbd">/stream off</code> <code class="kbd">/rec off</code> で解除しましょう',
    'When streaming or recording, let others know with <code class="kbd">/stream on</code> or <code class="kbd">/rec on</code>, and turn it off with <code class="kbd">/stream off</code> <code class="kbd">/rec off</code> when you’re done',
    '直播或录像时，请用 <code class="kbd">/stream on</code> 或 <code class="kbd">/rec on</code> 告知周围的玩家，结束后用 <code class="kbd">/stream off</code> <code class="kbd">/rec off</code> 解除',
    '直播或錄影時，請用 <code class="kbd">/stream on</code> 或 <code class="kbd">/rec on</code> 讓周圍的玩家知道，結束後用 <code class="kbd">/stream off</code> <code class="kbd">/rec off</code> 解除'],
  ['視聴者にもルールを簡単に伝えてもらえると助かります', 'It helps if you briefly share the rules with your viewers too', '如果也能向观众简单说明规则就太好了', '如果也能向觀眾簡單說明規則就太好了'],
  ['配信タイトルにサーバー名を入れてもOKです！', 'Feel free to put the server name in your stream title!', '直播标题里放上服务器名称也没问题！', '直播標題裡放上伺服器名稱也沒問題！'],
  ['運営への協力', 'Helping the staff', '协助管理团队', '協助管理團隊'],
  ['不具合やバグを発見した場合は、詳細を添えて運営へ報告してください', 'If you find a glitch or bug, please report it to staff with details', '如果发现故障或 Bug，请附上详细情况向管理团队报告', '如果發現故障或 Bug，請附上詳細情況向管理團隊回報', '如果發現故障或 Bug，請附上詳細情況向管理團隊報告'],
  ['ルールや仕様に関する質問は、気軽にスタッフまで', 'Feel free to ask staff about the rules or how things work', '有关规则或机制的问题，欢迎随时询问工作人员', '關於規則或機制的問題，歡迎隨時詢問工作人員', '關於規則或機制的問題，歡迎隨時向職員查詢'],

  // ── コマンド ──
  ['コマンドガイド | VoiceMC', 'Command Guide | VoiceMC', '命令指南 | VoiceMC', '指令指南 | VoiceMC'],
  ['VoiceMCサーバーで使えるコマンド一覧。基本操作からチェスト保護、Bluemap、配信・撮影、投票まで。',
    'Commands you can use on the VoiceMC server — from the basics to chest protection, Bluemap, streaming and recording, and voting.',
    'VoiceMC 服务器可用命令一览。从基本操作到箱子保护、Bluemap、直播与录像、投票。',
    'VoiceMC 伺服器可用指令一覽。從基本操作到箱子保護、Bluemap、直播與錄影、投票。'],
  ['サーバーで使えるコマンド', 'Server commands', '服务器可用命令', '伺服器可用指令'],
  ['コマンド名をクリックするとコピーできます。', 'Click a command to copy it.', '点击命令即可复制。', '點擊指令即可複製。'],
  ['コマンドの種類', 'Command categories', '命令类别', '指令類別'],
  ['基本コマンド', 'Basics', '基本命令', '基本指令'],
  ['チェスト保護', 'Chest lock', '箱子保护', '箱子保護'],
  ['配信・撮影', 'Streaming', '直播与录像', '直播與錄影', '直播及錄影'],
  ['ハブ（ロビー）へ移動する', 'Go to the hub (lobby)', '前往大厅（Hub）', '前往大廳（Hub）'],
  ['地面に座る', 'Sit down', '坐下', '坐下'],
  ['地面に横になる', 'Lie down', '躺下', '躺下'],
  ['地面を這う', 'Crawl', '趴下爬行', '趴下爬行'],
  ['くるくる回る', 'Spin around', '原地转圈', '原地轉圈'],
  ['ブロックの変更履歴を確認する（CoreProtect インスペクトモードのON/OFF。※一般権限では co i のみ使用可能）',
    'Check a block’s change history (toggles CoreProtect inspect mode. *Regular players can only use co i)',
    '查看方块的变更记录（开关 CoreProtect 检查模式。※一般权限只能使用 co i）',
    '查看方塊的變更紀錄（開關 CoreProtect 檢查模式。※一般權限只能使用 co i）',
    '查看方塊的變更記錄（開關 CoreProtect 檢查模式。※一般權限只可使用 co i）'],
  ['自分専用の共有チェストを開く（どのサーバーから開いても中身が同期）',
    'Open your personal shared chest (its contents sync no matter which server you open it from)',
    '打开自己专用的共享箱子（无论从哪个服务器打开，内容都会同步）',
    '開啟自己專用的共享箱子（不論從哪個伺服器開啟，內容都會同步）',
    '打開自己專用的共享箱子（無論從哪個伺服器打開，內容都會同步）'],
  ['ロック操作', 'Locking', '上锁操作', '上鎖操作'],
  ['アクセス管理・権限', 'Access & permissions', '访问管理与权限', '存取管理與權限', '存取管理及權限'],
  ['グループ管理', 'Groups', '组管理', '群組管理'],
  ['モード・その他', 'Modes & more', '模式与其他', '模式與其他', '模式及其他'],
  ['ブロックを private 保護（実行後に対象ブロックをクリック）', 'Protect a block as private (click the target block after running)', '将方块设为 private 保护（执行后点击目标方块）', '將方塊設為 private 保護（執行後點擊目標方塊）'],
  ['誰でも利用可能だが破壊不可なロック', 'A lock anyone can use but no one can break', '任何人都能使用但无法破坏的锁', '任何人都能使用但無法破壞的鎖'],
  ['中身を見せるだけ（アイテム取り出し不可）', 'Display contents only (items can’t be taken out)', '只展示内容（无法取出物品）', '只展示內容（無法取出物品）'],
  ['誰でも投入可能、取り出しは自分のみ', 'Anyone can deposit; only you can withdraw', '任何人都能放入，只有自己能取出', '任何人都能放入，只有自己能取出'],
  ['取り出しのみ許可', 'Allow withdrawals only', '只允许取出', '只允許取出'],
  ['保護を解除（実行後にクリックで適用）', 'Remove protection (click to apply after running)', '解除保护（执行后点击生效）', '解除保護（執行後點擊套用）'],
  ['保護情報（所有者・作成日時・アクセスリスト等）を確認', 'View protection info (owner, creation date, access list, etc.)', '查看保护信息（所有者、创建时间、访问列表等）', '查看保護資訊（擁有者、建立時間、存取清單等）', '查看保護資料（擁有者、建立時間、存取清單等）'],
  ['プレイヤーにアクセス権を追加（実行後にクリックで適用）', 'Give a player access (click to apply after running)', '为玩家添加访问权限（执行后点击生效）', '為玩家新增存取權限（執行後點擊套用）'],
  ['プレイヤーのアクセス権を削除', 'Remove a player’s access', '删除玩家的访问权限', '移除玩家的存取權限'],
  ['ACLに詳細なアクセス権を追加', 'Add detailed access to the ACL', '在 ACL 中添加详细的访问权限', '在 ACL 中新增詳細的存取權限'],
  ['ACLからアクセス権を削除', 'Remove access from the ACL', '从 ACL 中删除访问权限', '從 ACL 中移除存取權限'],
  ['自分の全保護へのアクセスを許可（グローバルトラスト）', 'Allow access to all your protections (global trust)', '允许访问自己的所有保护（全局信任）', '允許存取自己的所有保護（全域信任）', '允許存取自己的所有保護（全局信任）'],
  ['グローバルトラストを解除', 'Remove global trust', '解除全局信任', '解除全域信任', '解除全局信任'],
  ['保護の所有権を別プレイヤーへ譲渡（実行後にクリックで適用）', 'Transfer ownership of a protection to another player (click to apply after running)', '将保护的所有权转让给其他玩家（执行后点击生效）', '將保護的擁有權轉讓給其他玩家（執行後點擊套用）'],
  ['グループを新規作成', 'Create a new group', '新建组', '建立新群組'],
  ['グループにメンバーを追加', 'Add a member to a group', '向组中添加成员', '將成員加入群組'],
  ['グループからメンバーを削除', 'Remove a member from a group', '从组中删除成员', '從群組中移除成員'],
  ['グループのメンバー一覧を表示', 'List a group’s members', '显示组成员列表', '顯示群組成員清單'],
  ['グループを削除', 'Delete a group', '删除组', '刪除群組'],
  ['連続操作モードの ON / OFF 切替', 'Toggle persist mode (keep applying actions) on / off', '切换连续操作模式的开 / 关', '切換連續操作模式的開／關'],
  ['自動保護を一時無効化', 'Temporarily disable auto-protection', '暂时停用自动保护', '暫時停用自動保護'],
  ['操作メッセージを非表示', 'Hide action messages', '隐藏操作提示消息', '隱藏操作提示訊息'],
  ['パスワード保護されたブロックへアクセス', 'Access a password-protected block', '访问受密码保护的方块', '存取受密碼保護的方塊'],
  ['Boltのヘルプを表示', 'Show Bolt help', '显示 Bolt 帮助', '顯示 Bolt 說明'],
  ['指定したコマンドの詳細ヘルプを表示', 'Show detailed help for a command', '显示指定命令的详细帮助', '顯示指定指令的詳細說明'],
  // コマンド内の <…> の部分（コピーされる文字列にも反映される）
  ['<名前>', '<player>', '<玩家名>', '<玩家名稱>'],
  ['<グループ名>', '<group>', '<组名>', '<群組名稱>'],
  ['<パスワード>', '<password>', '<密码>', '<密碼>'],
  ['<コマンド名>', '<command>', '<命令名>', '<指令名稱>'],
  ['配信中であることを表示する', 'Show that you’re streaming', '显示自己正在直播', '顯示自己正在直播'],
  ['配信中表示を解除する', 'Remove the streaming indicator', '取消直播中标示', '取消直播中標示'],
  ['動画撮影中であることを表示する', 'Show that you’re recording', '显示自己正在录像', '顯示自己正在錄影'],
  ['動画撮影中表示を解除する', 'Remove the recording indicator', '取消录像中标示', '取消錄影中標示'],
  ['投票サイトの一覧を表示する', 'Show the list of voting sites', '显示投票网站列表', '顯示投票網站清單'],
  ['投票メニューをGUI画面で開く', 'Open the voting menu as a GUI', '以 GUI 界面打开投票菜单', '以 GUI 介面開啟投票選單', '以 GUI 介面打開投票選單'],
  ['投票ショップを開き、獲得ポイントをアイテムと交換する', 'Open the vote shop and trade your points for items', '打开投票商店，用获得的点数兑换物品', '開啟投票商店，用獲得的點數兌換物品', '打開投票商店，用獲得的積分換領物品'],
  ['/vote shop の省略形', 'Short for /vote shop', '/vote shop 的简写', '/vote shop 的簡寫'],
  ['自分の合計投票数を確認する', 'Check your total votes', '查看自己的总投票数', '查看自己的總投票數'],
  ['次に投票できるまでの待ち時間を確認する', 'Check how long until you can vote again', '查看距离下次可投票的等待时间', '查看距離下次可投票的等待時間'],
  ['最後に投票した日時を確認する', 'Check when you last voted', '查看最后一次投票的时间', '查看最後一次投票的時間'],
  ['トップ投票者ランキングを表示する', 'Show the top voters ranking', '显示投票排行榜', '顯示投票排行榜'],
  ['連続投票記録を確認する', 'Check your voting streak', '查看连续投票记录', '查看連續投票紀錄', '查看連續投票記錄'],
  ['過去の自己ベスト投票記録を確認する', 'Check your personal best voting record', '查看个人最佳投票记录', '查看個人最佳投票紀錄', '查看個人最佳投票記錄'],
  ['本日投票したプレイヤー一覧を確認する', 'See who voted today', '查看今天投票的玩家列表', '查看今天投票的玩家清單'],
  ['投票関連コマンドのヘルプを表示する', 'Show help for vote commands', '显示投票相关命令的帮助', '顯示投票相關指令的說明'],
  ['MODについて', 'About mods', '关于模组', '關於模組'],
  ['必須MOD以外で許可を希望するMODはDiscordの <b>ご希望・質問・提案</b> チャンネルまでご連絡ください。許可なしMODの使用は自己責任です。',
    'To request approval for a mod other than the required one, contact us in the <b>ご希望・質問・提案</b> (requests, questions & suggestions) channel on Discord. Using unapproved mods is at your own risk.',
    '如果希望使用必需模组以外的模组，请在 Discord 的 <b>ご希望・質問・提案</b>（希望、问题、建议）频道联系我们。使用未经许可的模组须自行承担风险。',
    '如果希望使用必要模組以外的模組，請在 Discord 的 <b>ご希望・質問・提案</b>（希望、問題、建議）頻道聯絡我們。使用未經許可的模組須自行承擔風險。',
    '如果希望使用必要模組以外的模組，請在 Discord 的 <b>ご希望・質問・提案</b>（希望、問題、建議）頻道聯絡我們。使用未經許可的模組，後果自負。'],
  ['使用禁止MOD', 'Banned mods', '禁止使用的模组', '禁止使用的模組'],

  // ── 投票 ──
  ['投票サイト | VoiceMC', 'Voting Sites | VoiceMC', '投票网站 | VoiceMC', '投票網站 | VoiceMC'],
  ['VoiceMCサーバーの投票サイト一覧。投票してポイントを貯め、特典と交換しよう。',
    'Voting sites for the VoiceMC server. Vote to earn points and trade them for rewards.',
    'VoiceMC 服务器的投票网站一览。投票累积点数，兑换奖励吧。',
    'VoiceMC 伺服器的投票網站一覽。投票累積點數，兌換獎勵吧。',
    'VoiceMC 伺服器的投票網站一覽。投票累積積分，換領獎賞吧。'],
  ['投票サイト', 'Voting sites', '投票网站', '投票網站'],
  ['以下のサイトに<b>投票するごとにポイントがもらえます</b>。', '<b>You earn points every time you vote</b> on the sites below.', '每次在以下网站<b>投票都能获得点数</b>。', '每次在以下網站<b>投票都能獲得點數</b>。', '每次在以下網站<b>投票都可獲得積分</b>。'],
  ['Minecraftサーバー検索ポータル。<b>投票すると +1ポイント</b>もらえます。24時間ごとに1回投票できます。',
    'A Minecraft server search portal. <b>Each vote earns +1 point</b>. You can vote once every 24 hours.',
    'Minecraft 服务器搜索门户网站。<b>投票即可获得 +1 点</b>。每 24 小时可投票一次。',
    'Minecraft 伺服器搜尋入口網站。<b>投票即可獲得 +1 點</b>。每 24 小時可投票一次。',
    'Minecraft 伺服器搜尋入口網站。<b>投票即可獲得 +1 積分</b>。每 24 小時可投票一次。'],
  ['Minecraftサーバー掲示板。<b>投票すると +1ポイント</b>もらえます。24時間ごとに1回投票できます。',
    'A Minecraft server listing board. <b>Each vote earns +1 point</b>. You can vote once every 24 hours.',
    'Minecraft 服务器公告板。<b>投票即可获得 +1 点</b>。每 24 小时可投票一次。',
    'Minecraft 伺服器佈告欄。<b>投票即可獲得 +1 點</b>。每 24 小時可投票一次。',
    'Minecraft 伺服器告示板。<b>投票即可獲得 +1 積分</b>。每 24 小時可投票一次。'],
  ['投票する', 'Vote', '去投票', '去投票'],
  ['投票の流れ', 'How voting works', '投票流程', '投票流程'],
  ['サイトを開く', 'Open a site', '打开网站', '開啟網站', '打開網站'],
  ['上記の投票サイトから好きなページを開きます。', 'Open any of the voting sites above.', '从上方的投票网站中任选一个打开。', '從上方的投票網站中任選一個開啟。', '從上方的投票網站中任選一個打開。'],
  ['各サイトの投票ボタンを押して、VoiceMCに投票します。', 'Press the vote button on the site to vote for VoiceMC.', '按下网站上的投票按钮，为 VoiceMC 投票。', '按下網站上的投票按鈕，為 VoiceMC 投票。'],
  ['ポイントGET', 'Get points', '获得点数', '獲得點數', '獲得積分'],
  ['投票が完了すると、<b>各サイトで +1ポイント</b>もらえます。', 'Once your vote goes through, you get <b>+1 point per site</b>.', '投票完成后，<b>每个网站可获得 +1 点</b>。', '投票完成後，<b>每個網站可獲得 +1 點</b>。', '投票完成後，<b>每個網站可獲得 +1 積分</b>。'],
  ['特典と交換', 'Redeem rewards', '兑换奖励', '兌換獎勵', '換領獎賞'],
  ['ゲーム内で<code class="kbd">/vote shop</code>を開き、ポイントと交換します。',
    'Open <code class="kbd">/vote shop</code> in-game and trade in your points.',
    '在游戏内打开 <code class="kbd">/vote shop</code>，用点数兑换。',
    '在遊戲內開啟 <code class="kbd">/vote shop</code>，用點數兌換。',
    '在遊戲內打開 <code class="kbd">/vote shop</code>，用積分換領。'],
  ['投票ポイント', 'Vote points', '投票点数', '投票點數', '投票積分'],
  ['1サイト投票あたり', 'Per site, per vote', '每个网站每次投票', '每個網站每次投票'],
  ['投票のクールタイム', 'Vote cooldown', '投票冷却时间', '投票冷卻時間'],
  ['1日の最大獲得数', 'Max per day', '每日最多可获得', '每日最多可獲得'],
  ['<code class="kbd">/vote shop</code> でポイントと特典アイテムを交換できます。ポイントはゲーム内で確認できます。',
    'Trade points for reward items with <code class="kbd">/vote shop</code>. You can check your points in-game.',
    '使用 <code class="kbd">/vote shop</code> 可以用点数兑换奖励物品。点数可在游戏内查看。',
    '使用 <code class="kbd">/vote shop</code> 可以用點數兌換獎勵物品。點數可在遊戲內查看。',
    '使用 <code class="kbd">/vote shop</code> 可以用積分換領獎賞物品。積分可在遊戲內查看。'],
  ['エリトラ', 'Elytra', '鞘翅', '鞘翅'],
  ['<b>150ポイント</b>で交換できます', 'Redeem for <b>150 points</b>', '可用 <b>150 点</b>兑换', '可用 <b>150 點</b>兌換', '可用 <b>150 積分</b>換領'],
  ['投票ショップの使い方', 'Using the vote shop', '投票商店使用方法', '投票商店使用方式', '投票商店使用方法'],
  ['貯めたポイントはゲーム内の投票ショップで好きな特典と交換できます。', 'Trade the points you’ve saved for rewards of your choice in the in-game vote shop.', '累积的点数可以在游戏内的投票商店兑换喜欢的奖励。', '累積的點數可以在遊戲內的投票商店兌換喜歡的獎勵。', '累積的積分可以在遊戲內的投票商店換領喜歡的獎賞。'],
  ['開き方', 'How to open', '打开方式', '開啟方式', '打開方法'],
  ['購入例', 'Example', '购买示例', '購買範例', '購買例子'],
  ['<b>150ポイント</b>で /voteshop から購入可能', 'Buy from /voteshop for <b>150 points</b>', '可在 /voteshop 用 <b>150 点</b>购买', '可在 /voteshop 用 <b>150 點</b>購買', '可在 /voteshop 用 <b>150 積分</b>購買'],
  ['確認できること', 'What you can check', '可以查看的内容', '可以查看的內容'],
  ['詳しいコマンドは<a href="commands.html#vote">コマンドガイド</a>をご覧ください。', 'See the <a href="commands.html#vote">command guide</a> for more.', '更多命令请参阅<a href="commands.html#vote">命令指南</a>。', '更多指令請參閱<a href="commands.html#vote">指令指南</a>。'],
  ['注意事項', 'Notes', '注意事项', '注意事項'],
  ['投票は各サイトで24時間に1回までです。', 'You can vote once every 24 hours on each site.', '每个网站每 24 小时只能投票一次。', '每個網站每 24 小時只能投票一次。'],
  ['投票後、ポイントが反映されない場合は時間を置いてから再度確認してください。', 'If your points don’t show up after voting, wait a while and check again.', '投票后若点数未到账，请稍等一段时间再确认。', '投票後若點數未入帳，請稍待一段時間再確認。', '投票後如積分未有更新，請稍後再查看。'],
  ['不正な手段での投票は禁止です。', 'Voting by unfair means is prohibited.', '禁止以不正当手段投票。', '禁止以不正當手段投票。'],

  // ── 404 ──
  ['お探しのページは見つかりませんでした。VoiceMCの公式サイトへ戻ってください。', 'The page you were looking for couldn’t be found. Please head back to the VoiceMC website.', '找不到您要找的页面。请返回 VoiceMC 官方网站。', '找不到您要找的頁面。請返回 VoiceMC 官方網站。'],
  ['このページは存在しません', 'This page doesn’t exist', '此页面不存在', '此頁面不存在'],
  ['お探しのページが見つかりませんでした。URLが正しくないか、ページが移動・削除された可能性があります。',
    'We couldn’t find the page you were looking for. The URL may be wrong, or the page may have been moved or deleted.',
    '找不到您要找的页面。可能是网址有误，或页面已被移动或删除。',
    '找不到您要找的頁面。可能是網址有誤，或頁面已被移動或刪除。'],
  ['リスポーン（トップページへ戻る）', 'Respawn (back to home)', '重生（返回首页）', '重生（返回首頁）'],
];

(function () {
  'use strict';
  var root = document.documentElement;
  var lang = window.vcmcLang || 'ja';
  var column = { en: 1, 'zh-CN': 2, 'zh-TW': 3, 'zh-HK': 4 }[lang];
  var norm = function (s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); };
  var fill = function (s, vars) {
    return vars ? String(s).replace(/\{(\w+)\}/g, function (m, k) { return k in vars ? vars[k] : m; }) : s;
  };

  // 日本語の文 → 選択中の言語の文
  var map = null;
  if (column) {
    map = Object.create(null);
    window.VCMC_I18N_ROWS.forEach(function (row) {
      var text = row[column] != null ? row[column] : (column === 4 ? row[3] : null);
      if (row[0] && text != null) map[norm(row[0])] = text;
    });
  }
  var lookup = function (s) { var k = norm(s); return k && map ? map[k] : undefined; };

  // ページ内のスクリプトから使う翻訳関数（例：vcmcT('スクリーンショット {n} を拡大表示', { n: 1 })）
  window.vcmcT = function (s, vars) {
    var t = lookup(s);
    return fill(t != null ? t : s, vars);
  };

  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, SELECT: 1, OPTION: 1 };

  function translatePage() {
    var t = lookup(document.title);
    if (t != null) document.title = t;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && (t = lookup(meta.getAttribute('content'))) != null) meta.setAttribute('content', t);

    // 1) 要素の中身がまるごと表の文と一致するもの（<b> や <a> を含む文）
    var els = document.body.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (SKIP[el.tagName] || !el.isConnected) continue;
      var html = el.innerHTML;
      if (!html || html.length > 1500) continue;
      t = lookup(html);
      if (t != null) {
        el.innerHTML = t;
        el.setAttribute('data-i18n-done', '');
      }
    }

    // 2) アイコンと並んでいる文字など、テキスト部分だけが一致するもの
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var parent = node.parentElement;
      if (!parent || SKIP[parent.tagName] || parent.closest('[data-i18n-done]')) return;
      var raw = node.nodeValue;
      var tr = lookup(raw);
      if (tr == null) return;
      node.nodeValue = raw.match(/^\s*/)[0] + tr + raw.match(/\s*$/)[0];
    });

    // 3) 読み上げ用のラベルや画像の代替テキスト
    var ATTRS = ['aria-label', 'alt', 'title', 'placeholder'];
    document.querySelectorAll('[aria-label],[alt],[title],[placeholder]').forEach(function (el) {
      ATTRS.forEach(function (name) {
        if (!el.hasAttribute(name)) return;
        var tr = lookup(el.getAttribute(name));
        if (tr != null) el.setAttribute(name, tr);
      });
    });

    // 4) コマンド内の <名前> などの部分
    document.querySelectorAll('.cmd-code code').forEach(function (code) {
      code.textContent = code.textContent.replace(/<[^<>]+>/g, function (m) {
        return map[m] != null ? map[m] : m;
      });
    });
  }

  // 言語切り替えメニュー（選んだ言語は保存して、次回以降もその言語で表示）
  function initSwitcher() {
    var select = document.getElementById('lang-select');
    if (!select) return;
    select.value = lang;
    select.addEventListener('change', function () {
      var next = select.value;
      var saved = false;
      try { localStorage.setItem('lang', next); saved = true; } catch (e) { /* 保存できない環境では URL で指定 */ }
      var url = new URL(location.href);
      if (saved && !url.searchParams.has('lang')) {
        location.reload();
        return;
      }
      if (saved) url.searchParams.delete('lang');
      else url.searchParams.set('lang', next);
      location.replace(url.href);
    });
  }

  try {
    if (map) translatePage();
    initSwitcher();
  } finally {
    root.classList.remove('i18n-pending');
  }
})();
