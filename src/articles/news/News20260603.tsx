import React from 'react';
import { NavLink } from 'react-router-dom/dist';

interface Props {
  fullsize: boolean;
  permalink: string;
}

function News20260603(props: Props): JSX.Element {
  const fullsize = props.fullsize;
  const permalink = props.permalink;

  // 近い内になんとかする
  // 今日だけは DRY をやめる
  if (fullsize) {
    return (
      <div>
        <h3>2026/6/3 更新</h3>
        <div className='paragraph'>
          Now in the Castle Age の beatoraja 向けの BGA を追加しました。<></>
          以下のリンクよりダウンロードできます。<></>
        </div>
        <div className='paragraph'>
          <a
            href='https://yuinore.moe/bms/yuta_castleage_20260603.zip'
            target='_blank'
          >
            ダウンロード
          </a>
        </div>
        <div className='paragraph'>
          なお、古いアーカイブは Yu^ta's BMS Complete Drive
          からダウンロードできます。
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>2026/6/3 更新</h3>
        <div className='paragraph'>
          Now in the Castle Age の beatoraja 向けの BGA を追加しました。
        </div>
        <NavLink to={permalink} className='text-show-more'>
          続きを見る
        </NavLink>
      </div>
    );
  }
}

export default News20260603;
