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
        <h4>試聴 (2026/4/26 追記)</h4>
        <div className='paragraph'>
          <iframe
            width='100%'
            height='166'
            style={{ border: 0 }}
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2307912116&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
          ></iframe>
          <div
            style={{
              fontSize: '10px',
              color: '#cccccc',
              lineBreak: 'anywhere',
              wordBreak: 'normal',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontFamily:
                'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
              fontWeight: 100,
            }}
          >
            <a
              href='https://soundcloud.com/strawberry-mint-chocolate'
              title='Strawberry Mint Chocolate'
              target='_blank'
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              Strawberry Mint Chocolate
            </a>{' '}
            ·{' '}
            <a
              href='https://soundcloud.com/strawberry-mint-chocolate/crossfade-m3-2026-t-08b'
              title='ﾎﾊﾞｷﾞ Crossfade 【M3-2026春 T-08b】'
              target='_blank'
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              ﾎﾊﾞｷﾞ Crossfade 【M3-2026春 T-08b】
            </a>
          </div>
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
