import React, { createRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  Navigate,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./Hello.css"
import Footer from "./Footer"
import MovieList from "./components/MovieList";
import Paragraph from "./components/Paragraph";

export default function Hello(): React.ReactNode {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

// react-transition-group の React 19 対応
//
// > 「react-transition-group」には nodeRef という props があり、これを指定すれば内部的に findDOMNode は使われません。
// > よって、以下のように CSSTransition に nodeRef を指定する対応を行いました。
// > この対応により、React 19 環境でもポップアップ機能が正常に動作するようになりました。
// >
// > React 17 から React 19 への段階的なバージョンアップと Legacy Context の話
// > https://developers.play.jp/entry/2025/04/21/183228
//
// > Usage with React Router
// > https://reactcommunity.org/react-transition-group/with-react-router/

function MainPage(): React.ReactNode {
  const location = useLocation();

  const menuItems = [
    { text: "", href: "/", nodeRef: createRef<HTMLDivElement>() },
    { text: "About", href: "/about", nodeRef: createRef<HTMLDivElement>() },
    { text: "CDs"  , href: "/cds", nodeRef: createRef<HTMLDivElement>() },
    { text: "BMS"  , href: "/bms", nodeRef: createRef<HTMLDivElement>() },
    { text: "Movies", href: "/movies", nodeRef: createRef<HTMLDivElement>() },
    { text: "Secret"  , href: "/secret", nodeRef: createRef<HTMLDivElement>() },
  ];

  // 末尾がスラッシュで終わる場合、 nodeRef が見つからず null になってしまう場合がある
  if (location.pathname !== "/" && location.pathname.endsWith("/")) {
    return <Navigate to={location.pathname.slice(0, -1)} replace />;
  }

  // Find the current route's nodeRef
  const { nodeRef } = menuItems.find((item) => item.href === location.pathname) ?? {};

  return (
    <div className="page-container">
      <Routes location={location}>
        {
          menuItems.map((menuItem, i) => {
            const title = `${(menuItem.text + " | ").replace(/^ \| /, "")}Yu^ta's Laboratory`;
            return (
              <Route path={menuItem.href} key={i} element={
                <>
                  <title>{title}</title>
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:site" content="@yutaortslabo" />
                  <meta name="twitter:title" content={title} />
                  <meta name="twitter:description" content="Yu^ta の個人サイトです。" />
                  <meta name="twitter:image" content="https://yutabms.net/assets/images/twitter-card.png" />
                </>
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
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <div ref={nodeRef} className="css-transition-content">
                <Routes location={location}>
                  <Route path="/" element={
                    <div className="routing-container routing-container-root">
                      <h2>What's new?</h2>
                      <h3>2025/8/28 更新</h3>
                      <Paragraph>C107 に申し込みを行いました。当選したらオリジナル曲のピアノ楽譜を頒布する予定です。</Paragraph>
                      <Paragraph>
                        <img src="https://yuinore.moe/c107cut.jpg" />
                      </Paragraph>
                      <h3>2023/4/26 更新</h3>
                      <Paragraph>4/30（日）に開催のM3-2023春に参加し、新作CDと新作グッズを頒布します。<a href="https://twitter.com/yutaortslabo/status/1647607097805406210" target="_blank">おしながきはTwitterをご確認ください。</a></Paragraph>
                      <h3>2022/11/26</h3>
                      <Paragraph>10/30（日）に開催のM3-2022秋に参加し、Twinkle Space Travelerを含むCD4種を頒布しました。今後もホットな情報はTwitterにて発信する予定ですのでぜひフォローをお願いします：<a href="https://twitter.com/yutaortslabo" target="_blank">@yutaortslabo</a></Paragraph>
                      <h3>2022/5/4</h3>
                      <Paragraph>5/8（日）に開催のCOMIC1☆20に参加を予定しております。Twinkle Space Travelerを含むCD4種を委託する予定です。スペース番号「G08b」にてお待ちしております。</Paragraph>
                      <h3>2022/4/30</h3>
                      <Paragraph>BOOTHで頒布しております<a href="https://hatoqne.booth.pm/items/1344630" target="_blank">Planisphere</a>の冊子画像に誤りがあったため修正を行いました。BOOTHの商品説明に記載されておりました曲名が正となります。また、<a href="https://hatoqne.booth.pm/items/1344630" target="_blank">Planisphere</a>と<a href="https://hatoqne.booth.pm/items/1344613" target="_blank">Strawberry Mint Chocolate</a>のFLAC版を追加しました。</Paragraph>
                      <h3>2022/4/28</h3>
                      <Paragraph>サイトを公開しました。</Paragraph>
                      <Footer title="Yu^ta's Laboratory" />
                    </div>
                  } />

                  <Route path="about" element={
                    <div className="routing-container routing-container-root">
                      <h2>About</h2>
                      <h3>Yu^ta</h3>
                      <img src="/assets/images/logo.png" className="profile-avatar" />
                      <Paragraph>Composer / BMS Creator / Track Maker / Arranger / Since 2009</Paragraph>
                      <Paragraph>Twitter: <a href="https://twitter.com/yutaortslabo" target="_blank">@yutaortslabo</a></Paragraph>
                      <Paragraph>YouTube Channel: <a href="https://ch.yutabms.net/" target="_blank">https://ch.yutabms.net/</a></Paragraph>
                      <Paragraph>YouTube Channel (Sub): <a href="https://ch.yutabms.net/sub" target="_blank">https://ch.yutabms.net/sub</a></Paragraph>
                      <Paragraph>SoundCloud: <a href="https://soundcloud.com/strawberry-mint-chocolate/tracks">https://soundcloud.com/strawberry-mint-chocolate/tracks</a></Paragraph>
                      <Footer title="About | Yu^ta's Laboratory" />
                    </div>
                  } />

                  <Route path="cds" element={
                    <div className="routing-container routing-container-root">
                      <h2>CDs</h2>
                      <div>
                        <h3>現実をカットアップしてみた</h3>
                        <Paragraph>
                          <img src="assets/images/cds_cutup_jacket.png" />
                        </Paragraph>
                        <Paragraph>無料配布 @ M3-2023春 え-34b</Paragraph>
                        <Paragraph>
                          CD1枚 / 35曲 / 73分
                        </Paragraph>
                      </div>
                      <hr />
                      <div>
                        <h3>Twinkle Space Traveler</h3>
                        <Paragraph>
                          <iframe width="100%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1251785857&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" /><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/strawberry-mint-chocolate" title="Strawberry Mint Chocolate" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Strawberry Mint Chocolate</a> · <a href="https://soundcloud.com/strawberry-mint-chocolate/twinkle-space-travelercrossfade" title="【Crossfade】Twinkle Space Traveler【M3-2022春 う-24b】" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>【Crossfade】Twinkle Space Traveler【M3-2022春 う-24b】</a></div>
                        </Paragraph>
                        <Paragraph>￥500 @ M3-2022春 う-24b</Paragraph>
                        <Paragraph><a href="https://hatoqne.booth.pm/items/3819084" target="_blank">[BOOTH]</a></Paragraph>
                        <Paragraph>
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
                        </Paragraph>
                      </div>
                      <hr />
                      <div>
                        <h3>にゃーんEP</h3>
                        <Paragraph>
                          <iframe width="100%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480110112&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" /><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/strawberry-mint-chocolate" title="Strawberry Mint Chocolate" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Strawberry Mint Chocolate</a> · <a href="https://soundcloud.com/strawberry-mint-chocolate/c94ep-demo1-10b" title="【C94】にゃーんEP DEMO【1日目 西ふ10b】" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>【C94】にゃーんEP DEMO【1日目 西ふ10b】</a></div>
                        </Paragraph>
                        <Paragraph>￥500 @ C94 1日目 西ふ10b</Paragraph>
                        <Paragraph><a href="https://hatoqne.booth.pm/items/1344645" target="_blank">[BOOTH]</a></Paragraph>
                        <Paragraph>
                          01. にゃーん！ / Yu^ta<br />
                          02. Buttered Paradox / Maroyu<br />
                          03. 終末を告げしネコ / BJ.chika<br />
                          04.「今日もツイッターとニコ動を眺めてたら一日が終わったけどまあ明日頑張ればいいよねとりあえず寝るかの曲」 / かむ<br />
                          05. ふたりのせかい / かーく feat. 春歌ナナ<br />
                          06. きまぐれキャット / そめし feat. 兎眠りおん<br />
                          <br />
                          Mastering: BJ.chika<br />
                        </Paragraph>
                      </div>
                      <hr />
                      <div>
                        <h3>Planisphere</h3>
                        <Paragraph>
                          <iframe width="100%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/299723870&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" /><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/strawberry-mint-chocolate" title="Strawberry Mint Chocolate" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Strawberry Mint Chocolate</a> · <a href="https://soundcloud.com/strawberry-mint-chocolate/c91-planisphere-demo2" title="【C91】 Planisphere DEMO2 【3日目 西よ40a】" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>【C91】 Planisphere DEMO2 【3日目 西よ40a】</a></div>
                        </Paragraph>
                        <Paragraph>￥500 @ C91 3日目 西よ40a</Paragraph>
                        <Paragraph><a href="https://hatoqne.booth.pm/items/1344630" target="_blank">[BOOTH]</a></Paragraph>
                        <Paragraph>
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
                        </Paragraph>
                      </div>
                      <hr />
                      <div>
                        <h3>Strawberry Mint Chocolate</h3>
                        <Paragraph>
                          <iframe width="100%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228612756&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" /><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/strawberry-mint-chocolate" title="Strawberry Mint Chocolate" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Strawberry Mint Chocolate</a> · <a href="https://soundcloud.com/strawberry-mint-chocolate/strawberry-mint-chocolate-xfd" title="【M3-2015秋】 Strawberry Mint Chocolate 【XFD】" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>【M3-2015秋】 Strawberry Mint Chocolate 【XFD】</a></div>
                        </Paragraph>
                        <Paragraph>￥500 @ M3-2015秋 K-01a</Paragraph>
                        <Paragraph><a href="https://hatoqne.booth.pm/items/1344613" target="_blank">[BOOTH]</a></Paragraph>
                        <Paragraph>
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
                        </Paragraph>
                      </div>
                      <Footer title="CDs | Yu^ta's Laboratory" />
                    </div>
                  } />

                  <Route path="bms" element={
                    <div className="routing-container routing-container-root">
                      <h2>BMS</h2>
                      <Paragraph>Under Construction...</Paragraph>
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
                      <Paragraph>
                        <img src="assets/images/secret.png" />
                      </Paragraph>
                      <Paragraph>
                        <form action="https://yuinore.moe/secret2023/post.php" method="POST">
                          <input type="text" name="password" placeholder="password" style={{ fontSize: "1.2em" }} />
                          <button type="submit" style={{ fontSize: "1.2em" }}>Submit</button>
                        </form>
                      </Paragraph>
                      <Footer title="Secret | Yu^ta's Laboratory" />
                    </div>
                  } />

                  <Route path="*" element={
                    // Error??
                    // <Navigate to="/" />

                    <meta httpEquiv="refresh" content="0;URL=/" />
                  } />
                </Routes>
              </div>
             </CSSTransition>
           </TransitionGroup>
        </div>
      </div>
    </div>
  );
}
