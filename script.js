// ==UserScript==
// @name         Google2Brave
// @namespace    https://github.com/saku-bruh/google2brave-userscript
// @version      1.2.1
// @description  Automatically redirects Google Search (now with web, images, news, videos redirect support) to Brave Search
// @license      MIT
// @author       saku-bruh (sakmaballs on greasyfork)
// @match        https://www.google.*/*
// @match        https://google.*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const safePath = /^(?:\/(?:search|webhp)?|\/?$|\/#)/;
  if (!safePath.test(location.pathname)) return;

  const src   = new URL(location.href);
  const query = src.searchParams.get('q');

  if (!query) {
    location.replace('https://search.brave.com/');
    return;
  }

  let vertical = 'search';
  const udm = src.searchParams.get('udm');
  const tbm = src.searchParams.get('tbm');

  if (udm === '2' || tbm === 'isch') {          // Google Images > Brave Images
    vertical = 'images';
  } else if (udm === '7' || tbm === 'vid') {    // Google Videos > Brave Videos
    vertical = 'videos';
  } else if (tbm === 'nws') {                   // Google News > Brave News
    vertical = 'news';
  }

  const dest = new URL(`https://search.brave.com/${vertical}`);
  dest.searchParams.set('q', query);

  if (src.searchParams.has('hl')) {
    dest.searchParams.set('lang', src.searchParams.get('hl'));
  }

  location.replace(dest.toString());
})();
