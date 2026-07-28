const features = [
  {
    number: "01",
    title: "表情をリアルタイムに反映",
    text: "まばたき、口の開閉、頭の向きや傾きを、自然な動きでアバターへ反映します。",
  },
  {
    number: "02",
    title: "自分のVRMを読み込み",
    text: "ファイルからVRM 0.x／VRM 1.0形式のアバターを選び、すぐに撮影へ使えます。",
  },
  {
    number: "03",
    title: "2つのカメラで撮影",
    text: "内カメラと外カメラの表示を入れ替え、小窓のサイズも自由に調整できます。",
  },
  {
    number: "04",
    title: "見え方を自分らしく",
    text: "遠近感、明るさ、揺れの安定度、表示するパーツをアプリ内で調整できます。",
  },
];

const privacyItems = [
  {
    title: "カメラ",
    text: "カメラ映像の表示と、顔・表情・頭部のトラッキングに使用します。",
  },
  {
    title: "マイク",
    text: "ユーザーが録画する際の音声収録に使用します。",
  },
  {
    title: "写真ライブラリ",
    text: "ユーザーが録画した動画を端末へ保存するために使用します。",
  },
  {
    title: "VRMファイル",
    text: "ユーザーが選択したアバターを表示するため、アプリ内のローカル領域へ保存します。",
  },
  {
    title: "設定情報",
    text: "選択したアバターや表示設定を、次回起動時に復元するため端末内へ保存します。",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function CameraStage() {
  return (
    <div className="stage" aria-label="VR Vlogの撮影画面をイメージしたグラフィック">
      <div className="stage-glow" />
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-status">
            <span>VR Vlog</span>
            <span className="live-dot">LIVE</span>
          </div>
          <div className="scene-sky" />
          <div className="scene-horizon" />
          <div className="avatar">
            <div className="avatar-hair avatar-hair-back" />
            <div className="avatar-face">
              <span className="avatar-eye avatar-eye-left" />
              <span className="avatar-eye avatar-eye-right" />
              <span className="avatar-mouth" />
            </div>
            <div className="avatar-hair avatar-hair-front" />
            <div className="avatar-neck" />
            <div className="avatar-body" />
          </div>
          <div className="pip">
            <span className="pip-sun" />
            <span className="pip-line pip-line-one" />
            <span className="pip-line pip-line-two" />
          </div>
          <div className="record-control">
            <span />
          </div>
        </div>
      </div>
      <div className="orbit orbit-one">
        <span>BLINK</span>
      </div>
      <div className="orbit orbit-two">
        <span>VRM</span>
      </div>
      <div className="orbit orbit-three">
        <span>REC</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VR Vlog トップ">
          <span className="brand-mark">VR</span>
          <span>VR Vlog</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#features">機能</a>
          <a href="#vroid-hub">VRoid Hub</a>
          <a href="#privacy">プライバシー</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            iOS APP · IN DEVELOPMENT
          </p>
          <h1>
            あなたの表情で、
            <br />
            <span>アバターと撮る。</span>
          </h1>
          <p className="hero-lead">
            VR Vlogは、iPhoneのカメラ映像にVRMアバターを重ね、
            表情や頭の動きをリアルタイムに反映して撮影できるVlogアプリです。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#features">
              VR Vlogについて
              <ArrowIcon />
            </a>
            <span className="development-note">現在開発中 · 公開時期未定</span>
          </div>
        </div>
        <CameraStage />
      </section>

      <section className="intro" aria-label="VR Vlogのコンセプト">
        <p className="section-kicker">ONE CAMERA, ANOTHER YOU</p>
        <p className="intro-statement">
          顔を隠すためのアバターではなく、
          <br />
          <em>あなたらしさを映す</em>ためのアバターへ。
        </p>
      </section>

      <section className="section features" id="features">
        <div className="section-heading">
          <div>
            <p className="section-kicker">FEATURES</p>
            <h2>撮ることに、集中できる。</h2>
          </div>
          <p>
            複雑な準備を減らして、iPhoneだけでアバターとの撮影を始められる体験を目指しています。
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <div className="feature-line" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section hub-section" id="vroid-hub">
        <div className="hub-visual" aria-hidden="true">
          <div className="hub-ring hub-ring-one" />
          <div className="hub-ring hub-ring-two" />
          <div className="hub-core">
            <span>VR</span>
          </div>
          <span className="hub-node hub-node-one" />
          <span className="hub-node hub-node-two" />
          <span className="hub-node hub-node-three" />
        </div>
        <div className="hub-copy">
          <p className="section-kicker">COMING NEXT</p>
          <h2>VRoid Hub連携を開発中</h2>
          <p>
            VRoid Hubに登録された利用可能なモデルを選択し、VR
            Vlogのアバターとして使用できる機能を開発予定です。認証、モデル選択、利用条件の確認を含む連携フローを予定しています。
          </p>
          <div className="notice">
            <span>開発中</span>
            <p>
              この機能は現在未提供です。提供内容は開発および審査の状況により変更される場合があります。
            </p>
          </div>
          <p className="trademark-note">
            VRoid Hubはピクシブ株式会社が提供するサービスです。VR
            Vlogは、VRoid Hubの公式サービスではありません。
          </p>
        </div>
      </section>

      <section className="section privacy" id="privacy">
        <div className="section-heading privacy-heading">
          <div>
            <p className="section-kicker">PRIVACY</p>
            <h2>プライバシーポリシー</h2>
          </div>
          <p>最終更新日：2026年7月28日</p>
        </div>
        <div className="privacy-panel">
          <p className="privacy-intro">
            VR
            Vlogは、機能提供に必要な範囲で端末のカメラ、マイク、写真ライブラリ、およびユーザーが選択したVRMファイルを使用します。
          </p>
          <dl className="privacy-list">
            {privacyItems.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
          <div className="privacy-details">
            <p>
              現行の開発版では、カメラ映像、音声、顔トラッキング情報、選択したローカルVRMファイルを開発者のサーバーへ送信しません。録画データは、ユーザーの操作により端末の写真ライブラリへ保存されます。
            </p>
            <p>
              アプリを削除すると、アプリ内に保存されたVRMファイルと設定は削除されます。写真ライブラリへ保存済みの動画は、ユーザーが写真アプリから削除できます。
            </p>
            <p>
              VRoid
              Hub連携機能の提供開始前に、公式SDK／APIを通じて取り扱う認証情報・モデル情報、その利用目的と保存方法を本ポリシーへ追記します。
            </p>
            <p>
              本ポリシーは、機能追加や法令・サービス要件の変更に応じて改定する場合があります。
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-kicker">CONTACT</p>
        <h2>
          VR Vlogは、
          <br />
          ただいま開発中です。
        </h2>
        <p>
          一般公開時期は未定です。掲載している名称・画面・機能は、開発の進行により変更される場合があります。
        </p>
        <a
          className="button button-secondary"
          href="https://github.com/mitsuya0077"
          rel="noreferrer"
          target="_blank"
        >
          開発者ページ
          <ArrowIcon />
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">VR</span>
          <span>VR Vlog</span>
        </a>
        <p>© 2026 VR Vlog · Developed by mitsuya0077</p>
        <div>
          <a href="#privacy">プライバシー</a>
          <a href="#contact">お問い合わせ</a>
        </div>
      </footer>
    </main>
  );
}
