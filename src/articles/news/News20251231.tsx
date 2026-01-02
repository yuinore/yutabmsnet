import React from 'react';
import { NavLink } from 'react-router-dom/dist';

interface Props {
  fullsize: boolean;
  permalink: string;
}

function News20251231(props: Props): JSX.Element {
  const fullsize = props.fullsize;
  const permalink = props.permalink;

  // 近い内になんとかする
  // 今日だけは DRY をやめる
  if (fullsize) {
    return (
      <div>
        <h3>2025/12/31 更新</h3>
        <div className='paragraph'>
          新作 BMS「white * cocoa」を公開しました。<></>
          画面最下部のリンクからダウンロードできます。<></>
        </div>
        <div className='paragraph'>
          <table>
            <tr style={{ color: '#00CC33' }}>
              <th>Beginner</th>
              <td>☆4</td>
            </tr>
            <tr style={{ color: '#3399FF' }}>
              <th>Normal</th>
              <td>☆6</td>
            </tr>
            <tr style={{ color: '#EEBB00' }}>
              <th>Hyper</th>
              <td>☆8</td>
            </tr>
            <tr style={{ color: '#CC3355' }}>
              <th>Another</th>
              <td>☆10</td>
            </tr>
            <tr style={{ color: '#AA66CC' }}>
              <th>Insane</th>
              <td>★0 (NEW!)</td>
            </tr>
          </table>
        </div>
        <div className='paragraph'>
          <img src='/assets/images/white_cocoa_stagefile.png' />
        </div>
        <div className='paragraph'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/uCqh3OUeoaA'
            title='YouTube video player'
            // frameBorder='0'
            style={{ border: 'none' }}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
        <div className='paragraph'>
          <a
            href='https://yuinore.moe/bms/yuta_white_cocoa.zip'
            target='_blank'
          >
            ダウンロード
          </a>
        </div>
        <hr />
        <div className='paragraph'>
          2026/1/2 追記 : 発狂差分を追加しました。1 月 2 日
          より前にダウンロードした方は、こちらから差分のみをダウンロードできます。
        </div>
        <div className='paragraph'>
          <a
            href='https://yuinore.moe/bms/__05_white_cocoa-ins.bms'
            target='_blank'
          >
            ダウンロード (差分のみ)
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>2025/12/31 更新</h3>
        <div className='paragraph'>
          新作 BMS「white * cocoa」を公開しました。
        </div>
        <NavLink to={permalink} className='clickable-thumbnail'>
          <img src='/assets/images/white_cocoa_stagefile.png' />
        </NavLink>
        <div className='paragraph'>
          <NavLink to={permalink} className='clickable-thumbnail'>
            詳細を見る
          </NavLink>
        </div>
      </div>
    );
  }
}

export default News20251231;
