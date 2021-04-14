import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import * as subpageStyles from "./modules/subpage.module.css"
import * as styles from "./about/about.module.css"

const AboutPage = () => (
    <Layout>
        <SEO title="Works" />
        <section className={subpageStyles.wrapper + " " + styles.wrapper}>
            <h1>About</h1>
            <ul className={subpageStyles.contentlist}>
                <li>
                    <a href="#profile">Profile</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#activity">Activity</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <article id="profile">
                <h2>Profile</h2>
                <h3>Mhousetree</h3>
                <p>
                    京都出身。横浜/滋賀育ち。つくば在住。
                </p>
                <details>
                    <summary>
                        趣味・特技など
                    </summary>
                    <h3>Hobby / Special Skills</h3>
                    <ul>
                        <li>
                            万年筆、手芸(裁縫/刺繍/編み物/粘土etc)<br />
                        細かい手作業、手先の器用さを求められる作業が好きです。
                        </li>
                        <li>
                            手紙を書くこと<br />
                        手書きの手紙やメッセージカードを書くことが好きです。<br />
                        便箋や封筒を選んだり、ペン(インク)にこだわったり、口語とは違った文面を考えて、<br />丁寧に文字をしたためることが楽しいです。
                        </li>
                        <li>
                            読書<br />
                            紙の本を読むのが好きです。<br />
                            原田マハさん、雛倉さりえさん(同郷です)の作品、<br class="wide-hide medium-hide" />檸檬(梶井基次郎)、赤い蝋燭(新美南吉)などが好きです。<br />
                            技術の修得も、(良書があれば)紙の本で学習したい派です。
                        </li>
                        <li>
                            ロシア語<br />
                        昔からロシアという国家、文化、言語に憧れがあり、大学で第二外国語として学習しました。<br />
                        授業外でもSNSやサークルを通じてロシア語圏の方と関わり、<br class="wide-hide medium-hide" />興味・関心と実用的なロシア語の技能を深めました。<br />
                        2018年の9月に、ロシア・サンクトペテルブルグにホームステイし、<br class="wide-hide medium-hide" />サンクトペテルブルク国立大学が開催する<br class="narrow-hide" />外国人向けの語学コースに1か月編入する形で、<br class="wide-hide medium-hide" />短い期間ですが語学留学プログラムに参加しました。<br />
                        </li>
                    </ul>
                </details>
            </article>
            <article id="skills">
                <h2>Skills</h2>
                <h3>Languages, Libraries and Frameworks</h3>
                <ul>
                    <li>
                        HTML(2016~)
                    </li>
                    <li>
                        CSS
                        <ul>
                            <li>
                                Plain CSS(2016~)
                            </li>
                            <li>
                                SCSS(2020~)
                            </li>
                            <li>
                                BEM, FLOCSS(2020~)
                            </li>
                        </ul>
                    </li>
                    <li>
                        JavaScript
                        <ul>
                            <li>
                                Vanilla JS(2018~)
                            </li>
                            <li>
                                jQuery(2018~)
                            </li>
                            <li>
                                GatsbyJS(2020~)
                            </li>
                            <li>
                                Electron(2020~)
                            </li>
                        </ul>
                    </li>
                    <li>
                        Python
                        <ul>
                            <li>
                                Django(2020~)
                            </li>
                            <li>
                                tkinter(2020~)
                            </li>
                        </ul>
                    </li>
                    <li>
                        Google Apps Script(2020~)
                    </li>
                    <li>
                        C, C++, OpenCV, OpenGL, GLUT,<br class="narrow-only" /> Ruby, Processing, assembly language<br class="medium-only" />(それぞれ大学の授業のみ)
                    </li>
                </ul>
                <h3>DB</h3>
                <ul>
                    <li>
                        MySQL(2017~2018, 大学の授業のみ)
                    </li>
                    <li>
                        PostgreSQL(2020~)
                    </li>
                    <li>
                        NeDB(2021~)
                    </li>
                </ul>
                <h3>Cloud(SaaS, PaaS)</h3>
                <ul>
                    <li>
                        Heroku(2020~)
                    </li>
                    <li>
                        Cloudinary(2020~)
                    </li>
                    <li>
                        Netlify(2020~)
                    </li>
                </ul>
                <h3>Tools</h3>
                <ul>
                    <li>Slack(2016~)</li>
                    <li>Redmine(2018~)</li>
                    <li>Git(Github)(2020~)</li>
                </ul>
                <h3>Software</h3>
                <ul>
                    <li>
                        Adobe
                        <ul>
                            <li>
                                Illustrator(2016~)
                            </li>
                            <li>
                                Photoshop(2016~)
                            </li>
                            <li>
                                InDesign(2018~)
                            </li>
                            <li>
                                XD(2020~)
                            </li>
                            <li>
                                Animator(2021~)
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3>Others</h3>
                <ul>
                    <li>
                        普通自動車第一種運転免許(AT限定)(2018.3)
                    </li>
                    <li>
                        実用英語技能検定準一級(2021.2)
                    </li>
                </ul>
            </article>
            <article id="activity">
                <h2>Activity</h2>
                <dl className={styles.activity_history}>
                    <dt className={styles.scienceweb}>
                    </dt>
                    <dd>
                        <h3>サイエンスウェブ株式会社 マークアップエンジニア(アルバイト)</h3>
                        <ul>
                            <li>
                                HTML/CSS/JavaScriptを用いた静的Webサイトの制作
                            </li>
                            <li>
                                CMS(WordPress, MODX)を用いたWebサイトの構築
                            </li>
                            <li>
                                デザインデータ(psd形式)からのスライス等、デザインを基にしたWebサイト制作の技術を習得
                            </li>
                        </ul>
                    </dd>
                    <dt className={styles.stapa}>
                    </dt>
                    <dd>
                        <h3>株式会社ツクリエ メールマガジン/イベントバナー制作(受付と兼任、アルバイト)</h3>
                        <ul>
                            <li>HTMLメールの作成</li>
                            <li>HTMLメール作成ツールの開発</li>
                            <li>施設内開催イベントのイベントバナー制作</li>
                        </ul>
                    </dd>
                    <dt className={styles.penqe}></dt>
                    <dd>
                        <h3>株式会社Penqe フロントエンドエンジニア(長期インターンシップ)</h3>
                        <ul>
                            <li>
                                CMS(WordPress)を用いたWebサイトの制作(リニューアル作業)
                            </li>
                        </ul>
                    </dd>
                    <dd>
                        <h3>現在</h3>
                    </dd>
                </dl>
            </article>
            <article id="contact">
                <h2>Contact</h2>
                <p>
                    <a href="mailto:&#109;&#104;&#111;&#117;&#115;&#101;&#116;&#114;&#101;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#109;&#104;&#111;&#117;&#115;&#101;&#116;&#114;&#101;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>
                </p>
            </article>
        </section>
    </Layout >
)

export default AboutPage
