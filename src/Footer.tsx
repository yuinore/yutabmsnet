import React from 'react';
import {
  useLocation,
} from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"

function Footer(props : {title: string}): JSX.Element {
  const location = useLocation();
  const url = document.location.href.split('/').slice(0, 3).join('/') + location.pathname;

  return (
    <div>
      <TwitterShareButton
        url={url}
        title={props.title}
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <FacebookShareButton url={url} title={props.title}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>
    </div>
  );
}

export default Footer;
