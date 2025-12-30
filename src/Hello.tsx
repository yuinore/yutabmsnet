import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Helmet } from "react-helmet";
import "./Hello.css"
import Footer from "./Footer"
import MovieList from "./components/MovieList";
import News20251224 from "./articles/news/News20251224";
import News20251231 from "./articles/news/News20251231";

function Hello(): JSX.Element {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

function MainPage(): JSX.Element {
  const location = useLocation();

  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setTimeout(() => {
      // TODO:
      /*
      const line_count = 80;

      const lines_node = document.querySelector(".lines");
      lines_node.style.opacity = "100%";

      const line_nodes = document.querySelectorAll(".line");
      for (let i = 0; i < line_count; i++) {
        line_nodes[i].style.marginLeft = `${Math.round(1000 * (i + Math.random()) / line_count) / 10}%`;
        line_nodes[i].style.animationDelay = `${-Math.round(45 * 100 * Math.random()) / 100}s`
      }
      */
    }, 500);

    return () => {
      // cancel Timer
      clearTimeout(timer);
    };
  }, [now]);
  const menuItems = [
    { text: "", href: "/" },
    { text: "About", href: "/about" },
    { text: "CDs"  , href: "/cds" },
    { text: "BMS"  , href: "/bms" },
    { text: "Movies", href: "/movies" },
    { text: "Secret"  , href: "/secret" },
  ];
  const nonMenuPages = [
    { text: "News", href: "/news/20251224" },
    { text: "News", href: "/news/20251231" },
  ]

  return (
    <div className="page-container">
      <Routes location={location}>
        {
          [...menuItems, ...nonMenuPages].map((menuItem, i) => {
            return (
              <Route path={menuItem.href} key={i} element={
                <Helmet
                  title={`${(menuItem.text + " | ").replace(/^ \| /, "")}Yu^ta's Laboratory`}
                  meta={[
                    { name: 'twitter:card', content: 'summary_large_image' },
                    { name: 'twitter:site', content: '@yutaortslabo' },
                    { name: 'twitter:title', content: `${(menuItem.text + " | ").replace(/^ \| /, "")}Yu^ta's Laboratory` },
                    { name: 'twitter:description', content: 'Yu^ta の個人サイトです。' },
                    { name: 'twitter:image', content: 'https://yutabms.net/assets/images/twitter-card.png' }
                  ]}
                />
              } />
            )
          })
        }
      </Routes>

      <div className="page-background"></div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="page-title">
        <h1>
          <NavLink to="/" className={(navData) => navData.isActive ? " disabled-link" : ""}>Yu^ta's Laboratory</NavLink>
        </h1>
      </div>

      <div className="page-border"></div>

      <div className="page-under-title">
        <div className="navigation-container">
          {
            menuItems.filter(menuItem => menuItem.text != "").map((menuItem, i) => {
              if (menuItem.href === '/secret' && location.pathname !== '/secret') {
                return <React.Fragment key={i} />;
              }

              return (
                <div className="navigation-button-flow" key={i}>
                  <div className="navigation-button-container">
                    <NavLink to={menuItem.href} className={(navData) => "navigation-button" + (navData.isActive ? " disabled-link" : "")}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                        <text className="svg-style-fore" x="50%" y="30" textAnchor="middle">{menuItem.text}</text>
                        <text className="svg-style-back" x="50%" y="30" textAnchor="middle">{menuItem.text}</text>
                      </svg>
                    </NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="main-container">
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/news/20251224" element={
                  <div className="routing-container routing-container-root">
                    <h2>News</h2>
                    <News20251224 fullsize={true} permalink="/news/20251224" />
                    <Footer title="News | Yu^ta's Laboratory" />
                  </div>
                } />
                <Route path="/news/20251231" element={
                  <div className="routing-container routing-container-root">
                    <h2>News</h2>
                    <News20251231 fullsize={true} permalink="/news/20251231" />
                    <Footer title="News | Yu^ta's Laboratory" />
                  </div>
                } />
                <Route path="/" element={
                  <div className="routing-container routing-container-root">
                    <h2>What's new?</h2>
                    <News20251231 fullsize={false} permalink="/news/20251231" />
                    <News20251224 fullsize={false} permalink="/news/20251224" />
                    <h3>2025/8/28 更新</h3>
                    <div className="paragraph">C107 に申し込みを行いました。当選したらオリジナル曲のピアノ楽譜を頒布する予定です。</div>
                    <div className="paragraph">
                      <img src="https://yuinore.moe/c107cut.jpg" />
                    </div>
                    <h3>2023/4/26 更新</h3>
                    <div className="paragraph">4/30（日）に開催のM3-2023春に参加し、新作CDと新作グッズを頒布します。<a href="https://twitter.com/yutaortslabo/status/1647607097805406210" target="_blank">おしながきはTwitterをご確認ください。</a></div>
                    <h3>2022/11/26</h3>
                    <div className="paragraph">10/30（日）に開催のM3-2022秋に参加し、Twinkle Space Travelerを含むCD4種を頒布しました。今後もホットな情報はTwitterにて発信する予定ですのでぜひフォローをお願いします：<a href="https://twitter.com/yutaortslabo" target="_blank">@yutaortslabo</a></div>
                    <h3>2022/5/4</h3>
                    <div className="paragraph">5/8（日）に開催のCOMIC1☆20に参加を予定しております。Twinkle Space Travelerを含むCD4種を委託する予定です。スペース番号「G08b」にてお待ちしております。</div>
                    <h3>2022/4/30</h3>
                    <div className="paragraph">BOOTHで頒布しております<a href="https://hatoqne.booth.pm/items/1344630" target="_blank">Planisphere</a>の冊子画像に誤りがあったため修正を行いました。BOOTHの商品説明に記載されておりました曲名が正となります。また、<a href="https://hatoqne.booth.pm/items/1344630" target="_blank">Planisphere</a>と<a href="https://hatoqne.booth.pm/items/1344613" target="_blank">Strawberry Mint Chocolate</a>のFLAC版を追加しました。</div>
                    <h3>2022/4/28</h3>
                    <div className="paragraph">サイトを公開しました。</div>
                    <Footer title="Yu^ta's Laboratory" />
                  </div>
                } />

                <Route path="about" element={
                  <div className="routing-container routing-container-root">
                    <h2>About</h2>
                    <h3>Yu^ta</h3>
                    <img src="/assets/images/logo.png" className="profile-avatar" />
                    <div className="paragraph">Composer / BMS Creator / Track Maker / Arranger / Since 2009</div>
                    <div className="paragraph">Twitter: <a href="https://twitter.com/yutaortslabo" target="_blank">@yutaortslabo</a></div>
                    <div className="paragraph">YouTube Channel: <a href="https://ch.yutabms.net/" target="_blank">https://ch.yutabms.net/</a></div>
                    <div className="paragraph">YouTube Channel (Sub): <a href="https://ch.yutabms.net/sub" target="_blank">https://ch.yutabms.net/sub</a></div>
                    <div className="paragraph">SoundCloud: <a href="https://soundcloud.com/strawberry-mint-chocolate/tracks">https://soundcloud.com/strawberry-mint-chocolate/tracks</a></div>
                    <Footer title="About | Yu^ta's Laboratory" />
                  </div>
                } />

                <Route path="cds" element={
                  <div className="routing-container routing-container-root">
                    <h2>CDs</h2>
                    <div>
                      <h3 id="funny-fancy-fantasia">Funny Fancy Fantasia</h3>
                      <div className="paragraph">
                        <a href="https://hatoqne.booth.pm/items/6925860" target="_blank">
                          <img src="assets/images/cds_fff_jacket.png" />
                        </a>
                      </div>
                      <div className="paragraph">￥500 @ M3-2025春 P-21ab</div>
                      <div className="paragraph"><a href="https://hatoqne.booth.pm/items/6925860" target="_blank">[BOOTH]</a></div>
                      <div className="paragraph">
                        01. にゃーん！！<br />
                        02. white * cocoa<br />
                        03. Magical Toy Vox<br />
                        04. Now in the Castle Age (True Techno Remix)<br />
                        05. 英雄 ～氷の妖精のお話～ (2024 Remastered)<br />
                        06. Brand New Year<br />
                        07. 一曲即発☆スグロイド<br />
                        08. Kindergarten<br />
                        09. March 27<br />
                        10. Misty Rain<br />
                        11. The Blue Bird (piano arrangement ver.)<br />
                        12. Funny Fancy Fantasia<br />
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h3 id="cutup-the-reality">現実をカットアップしてみた</h3>
                      <div className="paragraph">
                        <a href="https://hatoqne.booth.pm/items/4718397" target="_blank">
                        <img src="assets/images/cds_cutup_jacket.png" />
                        </a>
                      </div>
                      <div className="paragraph">無料配布 @ M3-2023春 え-34b</div>
                      <div className="paragraph"><a href="https://hatoqne.booth.pm/items/4718397" target="_blank">[BOOTH]</a></div>
                      <div className="paragraph">
                        CD1枚 / 35曲 / 73分
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h3 id="twinkle-space-traveler">Twinkle Space Traveler</h3>
                      <div className="paragraph">
                        <iframe width="100%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1251785857&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" /><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/strawberry-mint-chocolate" title="Strawberry Mint Chocolate" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Strawberry Mint Chocolate</a> · <a href="https://soundcloud.com/strawberry-mint-chocolate/twinkle-space-travelercrossfade" title="【Crossfade】Twinkle Space Traveler【M3-2022春 う-24b】" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>【Crossfade】Twinkle Space Traveler【M3-2022春 う-24b】</a></div>
                      </div>
                      <div className="paragraph">￥500 @ M3-2022春 う-24b</div>
                      <div className="paragraph"><a href="https://hatoqne.booth.pm/items/3819084" target="_blank">[BOOTH]</a></div>
                      <div className="paragraph">
                        01. Mana<br />
                        02. Now in the Castle Age (Original Mix)<br />
                        03. Sweet festival (Yu^ta Remix) / Shu※ remixed by Yu^ta<br />
                        04. Deep into the Water<br />
                        05. La Tomatiiiina<br />
                        06. Fiber Bundle<br />
                        07. Win the Race!<br />
                        08. ミ☆ ミ☆ ミ☆<br />
                        09. Summer Breeze (Yu^ta Remix) / Shinagawa_13 remixed by Yu^ta<br />
                        10. WonderfuLoop (Yu^ta Remix) / Uynet remixed by Yu^ta<br />
                        11. Planisphere (Electro Pop Mix)<br />
                        12. Twinkle Space Traveler<br />
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h3 id="nyan-ep">にゃーんEP</h3>
                      <div className="paragraph">
                        <iframe width="100%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480110112&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" /><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/strawberry-mint-chocolate" title="Strawberry Mint Chocolate" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Strawberry Mint Chocolate</a> · <a href="https://soundcloud.com/strawberry-mint-chocolate/c94ep-demo1-10b" title="【C94】にゃーんEP DEMO【1日目 西ふ10b】" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>【C94】にゃーんEP DEMO【1日目 西ふ10b】</a></div>
                      </div>
                      <div className="paragraph">￥500 @ C94 1日目 西ふ10b</div>
                      <div className="paragraph"><a href="https://hatoqne.booth.pm/items/1344645" target="_blank">[BOOTH]</a></div>
                      <div className="paragraph">
                        01. にゃーん！ / Yu^ta<br />
                        02. Buttered Paradox / Maroyu<br />
                        03. 終末を告げしネコ / BJ.chika<br />
                        04.「今日もツイッターとニコ動を眺めてたら一日が終わったけどまあ明日頑張ればいいよねとりあえず寝るかの曲」 / かむ<br />
                        05. ふたりのせかい / かーく feat. 春歌ナナ<br />
                        06. きまぐれキャット / そめし feat. 兎眠りおん<br />
                        <br />
                        Mastering: BJ.chika<br />
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h3 id="planisphere">Planisphere</h3>
                      <div className="paragraph">
                        <iframe width="100%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/299723870&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" /><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/strawberry-mint-chocolate" title="Strawberry Mint Chocolate" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Strawberry Mint Chocolate</a> · <a href="https://soundcloud.com/strawberry-mint-chocolate/c91-planisphere-demo2" title="【C91】 Planisphere DEMO2 【3日目 西よ40a】" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>【C91】 Planisphere DEMO2 【3日目 西よ40a】</a></div>
                      </div>
                      <div className="paragraph">￥500 @ C91 3日目 西よ40a</div>
                      <div className="paragraph"><a href="https://hatoqne.booth.pm/items/1344630" target="_blank">[BOOTH]</a></div>
                      <div className="paragraph">
                        01. Sunny<br />
                        02. CHAiNSAW<br />
                        03. THE EARTH<br />
                        04. Pleasure of Being (Album Edit.)<br />
                        05. Rainbow Night Party<br />
                        06. Θrbit<br />
                        07. Ninja Castle (Album Edit.)<br />
                        08. Cold Hands<br />
                        09. Open your Parasol<br />
                        10. Busy Factory<br />
                        11. Strawberry Mint Chocolate (2016 Remix)<br />
                        12. Planisphere<br />
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h3 id="strawberry-mint-chocolate">Strawberry Mint Chocolate</h3>
                      <div className="paragraph">
                        <iframe width="100%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228612756&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" /><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/strawberry-mint-chocolate" title="Strawberry Mint Chocolate" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Strawberry Mint Chocolate</a> · <a href="https://soundcloud.com/strawberry-mint-chocolate/strawberry-mint-chocolate-xfd" title="【M3-2015秋】 Strawberry Mint Chocolate 【XFD】" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>【M3-2015秋】 Strawberry Mint Chocolate 【XFD】</a></div>
                      </div>
                      <div className="paragraph">￥500 @ M3-2015秋 K-01a</div>
                      <div className="paragraph"><a href="https://hatoqne.booth.pm/items/1344613" target="_blank">[BOOTH]</a></div>
                      <div className="paragraph">
                        01. Party Time!<br />
                        02. wa:k around the wor:d<br />
                        03. C.E.N.T.E.R.<br />
                        04. Happycore☆Tightcore<br />
                        05. GREENS 2012<br />
                        06. Speed of Light (Album Edit.)<br />
                        07. Neural Network (Another Mix)<br />
                        08. Sigmoid<br />
                        09. Alien Artifact<br />
                        10. Rainy<br />
                        11. Fly up to : the Sky<br />
                        12. Strawberry Mint Chocolate<br />
                        <br />
                        特設サイト <a href="http://strawberry-mint-chocolate.com/" target="_blank">http://strawberry-mint-chocolate.com/</a><br />
                      </div>
                    </div>
                    <Footer title="CDs | Yu^ta's Laboratory" />
                  </div>
                } />

                <Route path="bms" element={
                  <div className="routing-container routing-container-root">
                    <h2>BMS</h2>
                    <div className="paragraph">Under Construction...</div>
                    <h3>Links</h3>
                    <ul>
                      <li>
                        <a href="https://drive.google.com/drive/folders/1-4ueQ8IR-k3MMKM50OaRANoD_d-iXCK4?usp=sharing" target="_blank">Yu^ta's BMS Complete Drive</a>
                      </li>
                      <li>
                        <a href="http://yuinore.net/2017/02/smc-package/" target="_blank">Strawberry Mint Chocolate BMS Package</a>
                      </li>
                      <li>
                        <a href="https://famousbms.web.fc2.com/" target="_blank">第λ回 自称超有名BMS作家が物申す！</a>
                      </li>
                    </ul>
                    <Footer title="BMS | Yu^ta's Laboratory" />
                  </div>
                } />

                <Route path="movies" element={
                  <div className="routing-container routing-container-root">
                    <h2>Movies</h2>
                    <MovieList />
                    <Footer title="Movies | Yu^ta's Laboratory" />
                  </div>
                } />

                <Route path="secret" element={
                  <div className="routing-container routing-container-root">
                    <h2>Secret</h2>
                    <div className="paragraph">
                      <img src="assets/images/secret.png" />
                    </div>
                    <div className="paragraph">
                      <form action="https://yuinore.moe/secret2023/post.php" method="POST">
                        <input type="text" name="password" placeholder="password" style={{ fontSize: "1.2em" }} />
                        <button type="submit" style={{ fontSize: "1.2em" }}>Submit</button>
                      </form>
                    </div>
                    <Footer title="Secret | Yu^ta's Laboratory" />
                  </div>
                } />

                <Route path="*" element={
                  // Error??
                  // <Navigate to="/" />

                  <meta httpEquiv="refresh" content="0;URL=/" />
                } />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default Hello;
