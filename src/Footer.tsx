import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"

function Footer(): JSX.Element {
  return (
    <div>
      <TwitterShareButton
        url={document.location.href}
        title={document.title}
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <FacebookShareButton url={document.location.href} title={document.title}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>
    </div>
  );
}

export default Footer;
