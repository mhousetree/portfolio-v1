import * as React from "react"
// import { Link } from "gatsby"
import ImageZoom from "react-medium-image-zoom"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import * as subpageStyles from "./modules/subpage.module.css"
import * as styles from "./works/works.module.css"

const WorkPage = () => (
  <Layout>
    <SEO title="Works" />
    <section className={subpageStyles.wrapper}>
      <h1 id="top">Works</h1>
      <ul className={subpageStyles.contentlist}>
        <li>
          <a href="#webapps">Web Applications</a>
        </li>
        <li>
          <a href="#dtapps">Desktop Applications</a>
        </li>
        <li>
          <a href="#designs">Designs</a>
        </li>
        <li>
          <a href="#others">Others</a>
        </li>
      </ul>
      <article id="webapps">
        <h2>Web Applications</h2>
        <section>
          <h3>Oshapport</h3>
          <p>2020.9 - (開発休止中)</p>
          <ul className={styles.skill_list}>
            <li>Django</li>
            <li>Python</li>
            <li>PostgreSQL</li>
            <li>HTML</li>
            <li>CSS(SCSS)</li>
          </ul>
          <div className={styles.img_wrapper}>
            <ImageZoom
              image={{
                src: "/portfolio-v1/oshapport/oshapport_qanda.png",
                alt: "image of oshapport",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
          </div>
          <p>
            「おしゃれ」＋「港(port)」というテーマで、ファッション関連の情報を扱うQ&amp;Aサイトです。
            <br />
          </p>
        </section>
        <section>
          <h3>Gakusou</h3>
          <p>2020.9 - 2020.10</p>
          <ul className={styles.skill_list}>
            <li>Django</li>
            <li>Python</li>
            <li>PostgreSQL</li>
            <li>HTML</li>
            <li>CSS(SCSS)</li>
          </ul>
          <div className={styles.img_wrapper}>
            <ImageZoom
              image={{
                src: "/portfolio-v1/gakusou/gakusou.png",
                alt: "renewed mail magazine",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
          </div>
          <details>
            <summary>
              大学の学生相談室と地域のカウンセリングに同時に通っていた時期があり、
              <br />
              もう一方での相談内容の情報共有に時間をかけるのがもったいなかったため制作した自分用のWebアプリケーションです。
            </summary>
            <p>
              地域のカウンセリングは混雑していてなかなか長時間の相談は難しく、初めは紙のメモを前日や当日に準備していたのですが、
              <br />
              時間もかかるし前回の相談から起きたことをすべて覚えていられるはずもないので、随時更新していけるアプリケーションにしました。
            </p>
            <p>
              かなりの個人情報を含むため、認証まわりについて勉強するきっかけになりました。
              <br />
              最終的にはカウンセラーの方にも見てもらうため、Basic認証とDjangoのアカウント機能を用いたID/パスワードの2段階を設定しています。
            </p>
            <p>
              画像の「今後の予定」の欄には、本来ならば管理画面から入力した予定のうち、本日以降のものの日付と内容が入ります。
            </p>
            <p>今はすっかり元気になったので使っていませんが、便利。</p>
          </details>
        </section>
        <section>
          <h3>GOKIGEN Appeal</h3>
          <ul className={styles.links}>
            <li className={styles.app}>
              <a href="https://gokigen-appeal.herokuapp.com/" target="_blank">
                App
              </a>
            </li>
            <li className={styles.github}>
              <a
                href="https://github.com/mhousetree/gokigen-appeal"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
          <p>2021.4</p>
          <ul className={styles.skill_list}>
            <li>Slack API</li>
            <li>Node.js</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS(SCSS)</li>
          </ul>
          <div className={styles.img_wrapper}>
            <ImageZoom
              image={{
                src:
                  "/portfolio-v1/GOKIGEN_appeal/gokigen-appeal.herokuapp.com_ (1).png",
                alt: "first image of GOKIGEN appeal",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
            <ImageZoom
              image={{
                src:
                  "/portfolio-v1/GOKIGEN_appeal/gokigen-appeal.herokuapp.com_(iPhone 5_SE).png",
                alt: "second image of GOKIGEN appeal",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
          </div>
          <details>
            <summary>
              ボタン1つで、今のごきげん(mood)をSlackのstatus emojiとstatus
              messageに設定できます。
              <br />
              レスポンシブ対応。(画像2枚目はiPhone 5サイズでの表示です)
            </summary>
            <p>
              技術的にやっていることとしては、Slack APIを利用して、status
              emojiとstatus messageを書き換えます。
              <br />
              いずれ、スラッシュコマンドにも対応したら便利だと思っています(実装予定)。
              <br />
            </p>
            <p>
              このアプリケーションの開発、およびアイデアは、デジタルでのコミュニケーションを拡張したい、より便利にしたいという思想に基づいています。
            </p>
            <p>
              Slackというサービスはワークスペースというシステム上、誰もが「何かの集団の一員」として利用することがほとんどだと思います。
              <br />
              ですが、多くの人は別のワークスペースであったり、家庭であったり、なにかしらの他のコミュニティにも同時に属しており
              <br />
              (あるいは個人というひとりだけの空間も持っています)、そしてそこで起こったことで気持ちに変化が生じることは当然です。
            </p>
            <p>
              顔を見てコミュニケーションを取れる環境では、表情や声色、行動などからある程度相手の状態を想像することも可能かもしれませんが、
              <br />
              コロナ禍でリモートワークの進んだ今、Slackなどのツールでコミュニケーションを取っているとなかなか難しいです。
              <br />
              status
              emojiひとつで気持ちを抽象的に表現することは、コミュニケーションをする上で一つの「気持ちの準備」になるのではないかと思いました。
            </p>
          </details>
        </section>
        <section>
          <h3>Curtain</h3>
          <ul className={styles.links}>
            <li className={styles.app}>
              <a href="https://mhousetree.github.io/Curtain/" target="_blank">
                App
              </a>
            </li>
            <li className={styles.github}>
              <a href="https://github.com/mhousetree/Curtain" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
          <p>2021.5.28 構想から完成まで3h(画像3枚目参照)</p>
          <ul className={styles.skill_list}>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS(SCSS)</li>
          </ul>
          <div className={styles.img_wrapper}>
            <ImageZoom
              image={{
                src: "/portfolio-v1/curtain/mhousetree.github.io_Curtain_.png",
                alt: "first image of curtain",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
            <ImageZoom
              image={{
                src: "/portfolio-v1/curtain/curtain.png",
                alt: "second image of curtain",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
            <ImageZoom
              image={{
                src: "/portfolio-v1/curtain/curtain_time.png",
                alt: "third image of curtain",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
          </div>
          <details>
            <summary>
              ブラウザで複数ウィンドウを使用中、タスクバーのマウスオーバー時やWindowsのタスク
              ビュー機能のサムネイルによって、
              <br />
              そのウィンドウの作業内容が分かるようにするためのシンプルなWebアプリケーションです。
            </summary>
            <p>
              就職活動・大学の講義・研究・個人開発を平行して行っていると、Chromeでウィンドウやタブを開きすぎて
              <br />
              どのウィンドウにどんな情報があるか分からなくなり、作業効率が低下していると感じました。
              <br />
              これを解決するために制作しました。
            </p>
            <p></p>
          </details>
        </section>
      </article>
      <article id="dtapps">
        <h2>Desktop Applications</h2>
        <section>
          <h3>mmmaker</h3>
          <p>2020.12 - 2021.3</p>
          <ul className={styles.skill_list}>
            <li>Electron</li>
            <li>NeDB</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS(SCSS)</li>
          </ul>
          <details>
            <summary>
              フォームを埋めるだけでメールマガジンとして配信するためのHTMLファイルを出力するアプリケーションです。
            </summary>
            <p></p>
          </details>
        </section>
        <section>
          <h3>task-management-app</h3>
          <p>2020.12 - 2021.3</p>
          <ul className={styles.skill_list}>
            <li>Electron</li>
            <li>NeDB</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS(SCSS)</li>
          </ul>
          <div className={styles.img_wrapper}>
            <ImageZoom
              image={{
                src: "/portfolio-v1/task-management-app/nedb_practice-02.png",
                alt: "image of task-management-app",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
            <ImageZoom
              image={{
                src: "/portfolio-v1/task-management-app/nedb_practice-04.png",
                alt: "image of task-management-app",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
            <ImageZoom
              image={{
                src: "/portfolio-v1/task-management-app/nedb_practice-05.png",
                alt: "image of task-management-app",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
            <ImageZoom
              image={{
                src: "/portfolio-v1/task-management-app/nedb_practice-06.png",
                alt: "image of task-management-app",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
          </div>
          <p>タスク管理アプリです。</p>
        </section>
      </article>
      <article id="designs">
        <h2>Designs</h2>
        <section>
          <h3>つくばスタートアップパーク 施設内イベント告知バナー</h3>
          <ul className={styles.skill_list}>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
          <div className={styles.img_wrapper}>
            <ImageZoom
              image={{
                src: "/portfolio-v1/stapa_banner/20201015_2.png",
                alt: "event banner 1",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
            <ImageZoom
              image={{
                src:
                  "/portfolio-v1/stapa_banner/update_pitchcampus_demo_banner.png",
                alt: "event banner 2",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
          </div>
          <details>
            <summary>
              アルバイト先のコワーキングスペースで開催された、施設内イベントの告知バナーです。
            </summary>
            <p>
              デザインすること自体ももちろん勉強になりましたが、とにかく「すべての文字サイズを大きくしろ」というリテイクが多く、
              <br />
              クライアントワークの大変さを身をもって知ることができました。
            </p>
          </details>
        </section>
      </article>
      <article id="others">
        <h2>Others</h2>
        <section>
          <h3>つくばスタートアップパーク メールマガジン</h3>
          <p>2020.9 - 2021.3</p>
          <ul className={styles.skill_list}>
            <li>HTML(HTMLメール)</li>
            <li>CSS</li>
          </ul>
          <div className={styles.img_wrapper}>
            <ImageZoom
              image={{
                src: "/portfolio-v1/stapa_mailmagazine/new_mail.png",
                alt: "renewed mail magazine",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
            <ImageZoom
              image={{
                src: "/portfolio-v1/stapa_mailmagazine/old_mail.png",
                alt: "old mail magazine",
              }}
              zoomImage={{
                className: `${subpageStyles.mediumzoom_image}`,
              }}
              shouldReplaceImage={false}
            />
          </div>
          <details>
            <summary>
              受付のアルバイトとして採用されたコワーキングスペースにて、メールマガジンの制作を担当しました。
            </summary>
            元々配信されていたメールマガジンの内容を整理、再分類し、読みやすく魅力的なレイアウトになるようデザイン、マークアップしました。
          </details>
        </section>
      </article>
    </section>
  </Layout>
)

export default WorkPage
