import React from 'react';

// markdown からの移行方法
// ・img閉じタグの追加
// ・br閉じタグの追加
// ・classNameにする（あれば）
// ・スタイル指定を優先
//   - width="96" height="96"
//   + style={{ width: 96, height: 96 }}
// ・h2 を h3 に
// ・最初以外のh3をhrタグ+h3タグに

const MovieList = () => {
  return (
    <>
      <h3 id="Fly-up-to--the-Sky" data-id="Fly-up-to--the-Sky"><span>Fly up to : the Sky</span></h3>
      <p><a href="https://www.youtube.com/watch?v=RAl73LFNGi4" target="_blank" rel="noopener"><img
            src="https://whiteless.works/images/movie_005_flyup_00.jpg" alt="わたしのて" loading="lazy" /></a></p>
      <p><span>CD「Strawberry Mint Chocolate」にフルver.を収録</span><br />
        <span>CD「現実をカットアップしてみた」にショートver.を収録</span>
      </p>
      <p><img src="https://whiteless.works/images/cd_001_smc.jpg" alt="Strawberry Mint Chocolate" style={{ width: 96,
          height: 96 }} loading="lazy" /><span> </span><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png"
          alt="現実をカットアップしてみた" style={{ width: 96, height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.youtube.com/watch?v=RAl73LFNGi4" target="_blank" rel="noopener"><span>この動画を YouTube
            で見る</span></a></p>
      <hr /><h3 id="Now-in-the-Castle-Age" data-id="Now-in-the-Castle-Age"><span>Now in the Castle Age</span></h3>
      <p><a href="https://www.youtube.com/watch?v=vU8lj_drm9A" target="_blank" rel="noopener"><img
            src="https://whiteless.works/images/movie_006_castleage_00.jpg" alt="城主の時代だ！" loading="lazy" /></a></p>
      <p><a href="https://www.youtube.com/watch?v=p6_m5UHsLQw" target="_blank" rel="noopener"><span>YouTube
            にてフルver.を公開中</span></a><br />
        <span>CD「Twinkle Space Traveler」に Original Mix を収録</span><br />
        <span>CD「現実をカットアップしてみた」にショートver.を収録</span>
      </p>
      <p><img src="https://whiteless.works/images/cd_004_twinkle.png" alt="Twinkle Space Traveler" style={{ width: 96,
          height: 96 }} loading="lazy" /><span> </span><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png"
          alt="現実をカットアップしてみた" style={{ width: 96, height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.youtube.com/watch?v=vU8lj_drm9A" target="_blank" rel="noopener"><span>「城主の時代だ！」を YouTube
            で見る</span></a></p>
      <hr /><h3 id="Mana" data-id="Mana"><span>Mana</span></h3>
      <p><a href="https://www.youtube.com/watch?v=olFZDX0PeBQ" target="_blank" rel="noopener"><img
            src="https://whiteless.works/images/movie_008_mana_00.jpg" alt="Mana HD" loading="lazy" /></a></p>
      <p><span>CD「Twinkle Space Traveler」にフルver.を収録</span><br />
        <span>CD「現実をカットアップしてみた」にショートver.を収録</span>
      </p>
      <p><img src="https://whiteless.works/images/cd_004_twinkle.png" alt="Twinkle Space Traveler" style={{ width: 96,
          height: 96 }} loading="lazy" /><span> </span><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png"
          alt="現実をカットアップしてみた" style={{ width: 96, height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.youtube.com/watch?v=olFZDX0PeBQ" target="_blank" rel="noopener"><span>この動画を YouTube
            で見る</span></a></p>
      <hr /><h3 id="Sweets" data-id="Sweets"><span>Sweets</span></h3>
      <p><img src="https://whiteless.works/images/movie_007_sweets.png" alt="あまいこと" loading="lazy" /></p>
      <p><span>CD未収録</span></p>
      <hr /><h3 id="Rainbow-Night-Party" data-id="Rainbow-Night-Party"><span>Rainbow Night Party</span></h3>
      <p><span>映像制作: </span><a href="https://to12lz.myportfolio.com/" target="_blank"
          rel="noopener"><span>tolz</span></a>
      </p>
      <p><a href="https://www.youtube.com/watch?v=RKpOW4jJLaI" target="_blank" rel="noopener"><img
            src="https://i.imgur.com/ixqZ1TX.png" alt="Rainbow Night Party" loading="lazy" /></a></p>
      <p><span>CD「Planisphere」にフルver.を収録</span><br />
        <span>CD「現実をカットアップしてみた」にショートver.を収録</span>
      </p>
      <p><img src="https://whiteless.works/images/cd_002_planisphere.jpg" alt="Planisphere" style={{ width: 96, height:
          96 }} loading="lazy" /><span> </span><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png"
          alt="現実をカットアップしてみた" style={{ width: 96, height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.youtube.com/watch?v=RKpOW4jJLaI" target="_blank" rel="noopener"><span>この動画を YouTube
            で見る</span></a></p>
      <hr /><h3 id="Strawberry-Mint-Chocolate" data-id="Strawberry-Mint-Chocolate"><span>Strawberry Mint Chocolate</span></h3>
      <p><a href="https://www.youtube.com/watch?v=SV_BxJzKcnY" target="_blank" rel="noopener"><img
            src="https://whiteless.works/images/movie_002_smc_00.jpg" alt="いちご みんと ちょこれーと" loading="lazy" /></a></p>
      <p><span>CD「Strawberry Mint Chocolate」にフルver.を収録</span><br />
        <span>CD「現実をカットアップしてみた」にショートver.を収録</span>
      </p>
      <p><img src="https://whiteless.works/images/cd_001_smc.jpg" alt="Strawberry Mint Chocolate" style={{ width: 96,
          height: 96 }} loading="lazy" /><span> </span><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png"
          alt="現実をカットアップしてみた" style={{ width: 96, height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.youtube.com/watch?v=SV_BxJzKcnY" target="_blank" rel="noopener"><span>この動画を YouTube で見る
            (Unofficial)</span></a></p>
      <hr /><h3 id="Sunny" data-id="Sunny"><span>Sunny</span></h3>
      <p><a href="https://www.youtube.com/watch?v=tp-UAMO69qQ" target="_blank" rel="noopener"><img
            src="https://whiteless.works/images/movie_004_sunny.jpg" alt="Sunny" loading="lazy" /></a></p>
      <p><span>CD「Planisphere」にフルver.を収録</span><br />
        <span>CD「現実をカットアップしてみた」にショートver.を収録</span>
      </p>
      <p><img src="https://whiteless.works/images/cd_002_planisphere.jpg" alt="Planisphere" style={{ width: 96, height:
          96 }} loading="lazy" /><span> </span><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png"
          alt="現実をカットアップしてみた" style={{ width: 96, height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.youtube.com/watch?v=tp-UAMO69qQ" target="_blank" rel="noopener"><span>この動画を YouTube
            で見る</span></a></p>
      <hr /><h3 id="CHAiNSAW" data-id="CHAiNSAW"><span>CHAiNSAW</span></h3>
      <p><a href="https://www.youtube.com/watch?v=_8ThGMimXTk" target="_blank" rel="noopener"><img
            src="https://whiteless.works/images/bms_chainsaw.jpg" alt="CHAiNSAW" loading="lazy" /></a></p>
      <p><span>CD「Planisphere」にフルver.を収録</span><br />
        <span>CD「現実をカットアップしてみた」にショートver.を収録</span>
      </p>
      <p><img src="https://whiteless.works/images/cd_002_planisphere.jpg" alt="Planisphere" style={{ width: 96, height:
          96 }} loading="lazy" /><span> </span><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png"
          alt="現実をカットアップしてみた" style={{ width: 96, height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.youtube.com/watch?v=_8ThGMimXTk" target="_blank" rel="noopener"><span>この動画を YouTube
            で見る</span></a></p>
      <hr /><h3 id="Busy-Factory" data-id="Busy-Factory"><span>Busy Factory</span></h3>
      <p><a href="https://www.youtube.com/watch?v=p2dy2LkOAzs" target="_blank" rel="noopener"><img
            src="https://whiteless.works/images/movie_003_busyfactory.jpg" alt="Busy Factory" loading="lazy" /></a>
      </p>
      <p><span>CD「Planisphere」にフルver.を収録</span><br />
        <span>CD「現実をカットアップしてみた」にショートver.を収録</span>
      </p>
      <p><img src="https://whiteless.works/images/cd_002_planisphere.jpg" alt="Planisphere" style={{ width: 96, height:
          96 }} loading="lazy" /><span> </span><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png"
          alt="現実をカットアップしてみた" style={{ width: 96, height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.youtube.com/watch?v=p2dy2LkOAzs" target="_blank" rel="noopener"><span>この動画を YouTube
            で見る</span></a></p>
      <hr /><h3 id="現実をカットアップしてみた" data-id="現実をカットアップしてみた"><span>現実をカットアップしてみた</span></h3>
      <p><a href="https://www.youtube.com/watch?v=zsQD9_drLbY" target="_blank" rel="noopener"><img
            src="https://whiteless.works/images/movie_001_cutup.png" alt="現実をカットアップしてみた" loading="lazy" /></a></p>
      <p><span>CD「現実をカットアップしてみた」にロングver.とショートver.を収録</span></p>
      <p><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png" alt="現実をカットアップしてみた" style={{ width: 96,
          height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.youtube.com/watch?v=zsQD9_drLbY" target="_blank" rel="noopener"><span>この動画を YouTube
            で見る</span></a></p>
      <hr /><h3 id="Θrbit" data-id="Θrbit"><span>Θrbit</span></h3>
      <p><span>映像制作: アド</span></p>
      <p><a href="https://www.nicovideo.jp/watch/sm29679480" target="_blank" rel="noopener"><img
            src="https://i.imgur.com/zJy4BmY.jpg" alt="Θrbit" loading="lazy" /></a></p>
      <p><span>CD「Planisphere」にアルバムver.を収録</span><br />
        <span>CD「現実をカットアップしてみた」にショートver.を収録</span>
      </p>
      <p><img src="https://whiteless.works/images/cd_002_planisphere.jpg" alt="Planisphere" style={{ width: 96, height:
          96 }} loading="lazy" /><span> </span><img src="https://yutabms.net/assets/images/cds_cutup_jacket.png"
          alt="現実をカットアップしてみた" style={{ width: 96, height: 96 }} loading="lazy" /></p>
      <p><a href="https://www.nicovideo.jp/watch/sm29679480" target="_blank"
          rel="noopener"><span>この動画をニコニコ動画で見る</span></a></p>
    </>
  );
};

export default MovieList;
