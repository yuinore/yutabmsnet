import React from 'react';
import { NavLink } from 'react-router-dom/dist';

interface Props {
  fullsize: boolean;
  permalink: string;
}

function News20261024(props: Props): JSX.Element {
  const fullsize = props.fullsize;
  const permalink = props.permalink;

  // 近い内になんとかする
  // 今日だけは DRY をやめる
  if (fullsize) {
    return (
      <div>
        <h3>2026/10/24 更新</h3>
        <div className='paragraph'>
          BOF22 に参戦し、BMS を公開しました。<></>
          以下のページよりダウンロードできます。<></>
          <a href='https://manbow.nothing.sh/event/event.cgi?action=More_def&num=421&event=152' target='_blank'>
            https://manbow.nothing.sh/event/event.cgi?action=More_def&num=421&event=152
          </a>
        </div>
        <div className='paragraph'>
          また、10 月 25 日（日）に開催の M3-2026 秋 で、この楽曲のシングル CD を 200 円で頒布します。<></>
          スペースナンバーは「第一展示場 O-04a」です。<></>
          旧譜も可能な限り準備して持って行きたいと思っています。<></>
          あと、今回もちゃんとお品書きを作りたいという意思はあります。宜しくお願いします。
        </div>
        <h4>Tracklist</h4>
        <div className='paragraph'>
          01. 恋
          <br />
          02. 恋 (off vocal)
          <br />
          03. 恋 (Game Size)
          <br />
        </div>
        <div className='paragraph'>
          <img src='/assets/images/noid_jacket_1024px.jpg' />
        </div>
        <div className='paragraph'>
          ※ 情報は制作中のものです。収録内容は変更になる可能性があります。
        </div>
        <div className='paragraph'>
          ※ 現時点でダウンロード販売の予定はございません。ご注意ください。
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>2026/10/24 更新</h3>
        <div className='paragraph'>
          10 月 25 日（日）に開催の M3-2026 秋 で、CD を頒布します。<></>
          スペースナンバーは「第一展示場 O-04a」です。
        </div>
        <div>
          <NavLink to={permalink} className='clickable-thumbnail'>
            <img src='/assets/images/noid_jacket_1024px.jpg' />
          </NavLink>
        </div>
        <NavLink to={permalink} className='text-show-more'>
          続きを見る
        </NavLink>
      </div>
    );
  }
}

export default News20261024;
