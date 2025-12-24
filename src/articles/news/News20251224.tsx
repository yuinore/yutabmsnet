import React from 'react';
import { NavLink } from 'react-router-dom/dist';

interface Props {
  fullsize: boolean;
  permalink: string;
}

function News20251224(props: Props): JSX.Element {
  const fullsize = props.fullsize;
  const permalink = props.permalink;

  // 近い内になんとかする
  // 今日だけは DRY をやめる
  if (fullsize) {
    return (
      <div>
        <h3>2025/12/24 更新</h3>
        <div className='paragraph'>
          12 月 31 日に開催される C107 2日目 の 南地区 b-03ab Yu^ta's Laboratory
          にて、オリジナル曲のピアノ楽譜を 1000 円で頒布いたします。
        </div>
        <div className='paragraph'>
          会場でお待ちしております！
        </div>
        <div className='paragraph'>
          <img src='/assets/images/c107_sample_1.jpg' />
        </div>
        <div className='paragraph'>
          <img src='/assets/images/c107_sample_2.png' />
        </div>
        <div className='paragraph'>
          <img src='/assets/images/c107_sample_3_text.jpg' />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>2025/12/24 更新</h3>
        <div className='paragraph'>
          12 月 31 日に開催される C107 2日目 の 南地区 b-03ab Yu^ta's Laboratory
          にて、オリジナル曲のピアノ楽譜を 1000 円で頒布いたします。
        </div>
        <div className='paragraph'>
          会場でお待ちしております！
        </div>
        <div className='paragraph'>
          <NavLink to={permalink} className='clickable-thumbnail'>
            <img src='/assets/images/c107_sample_1.jpg' />
          </NavLink>
          <NavLink to={permalink} className='clickable-thumbnail'>
            <img src='/assets/images/c107_sample_2.png' />
          </NavLink>
          <NavLink to={permalink} className='clickable-thumbnail'>
            <img src='/assets/images/c107_sample_3_text.jpg' />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default News20251224;
