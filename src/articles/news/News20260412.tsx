import React from 'react';
import { NavLink } from 'react-router-dom/dist';

interface Props {
  fullsize: boolean;
  permalink: string;
}

function News20260412(props: Props): JSX.Element {
  const fullsize = props.fullsize;
  const permalink = props.permalink;

  // 近い内になんとかする
  // 今日だけは DRY をやめる
  if (fullsize) {
    return (
      <div>
        <h3>2026/4/12 更新</h3>
        <div className='paragraph'>
          4 月 26 日に開催される M3-2026 春 の第一展示場 T-08b にて、シングル CD
          を 500
          円で頒布いたします。今回はちゃんとお品書きも作ります。宜しくお願いします。
        </div>
        <h4>Tracklist</h4>
        <div className='paragraph'>
          01. The Blue Bird
          <br />
          02. The Blue Bird (Reml cover)
          <br />
          03. The Blue Bird (instrumental)
          <br />
          04. The Blue Bird (off vocal)
          <br />
          05. The Blue Bird (Game Size)
          <br />
        </div>
        <h4>Bonus Tracks (Game Size)</h4>
        <div className='paragraph'>
          06. Sweets &hearts; (Reml & Suzuki Tsudumi cover)
          <br />
          07. In and Out
          <br />
          08. Proline
          <br />
        </div>
        <div className='paragraph'>
          ※ 情報は制作中のものです。収録内容は変更になる可能性があります。
        </div>
        <div className='paragraph'>
          ※ 現時点でダウンロード販売の予定はございません。ご注意ください。
        </div>
        <div className='paragraph'>
          <img src='/assets/images/hobak_jacket_768px.png' />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>2026/4/12 更新</h3>
        <div className='paragraph'>
          4 月 26 日に開催される M3-2026 春 の第一展示場 T-08b にて、シングル CD
          を 500 円で頒布いたします。
        </div>
        <div>
          <NavLink to={permalink} className='clickable-thumbnail'>
            <img src='/assets/images/hobak_jacket_768px.png' />
          </NavLink>
        </div>
        <NavLink to={permalink} className='text-show-more'>
          続きを見る
        </NavLink>
      </div>
    );
  }
}

export default News20260412;
