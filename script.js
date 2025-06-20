// ==UserScript==
// @name         Google2Brave
// @namespace    https://github.com/saku-bruh/google2brave-userscript
// @version      1.1
// @description  Automatically redirects google to brave search
// @author       saku
// @match        https://www.google.*/*
// @match        https://google.*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const safePath   = /^(?:\/(?:search|webhp)?|\/?$|\/#)/;
  if (!safePath.test(location.pathname)) return;

  const src = new URL(location.href);
  const query = src.searchParams.get('q');

  let dest;
  if (query) {
    const brave = new URL('https://search.brave.com/search');
    brave.searchParams.set('q', query);

    if (src.searchParams.has('hl')) {
      brave.searchParams.set('lang', src.searchParams.get('hl'));
    }
    dest = brave.toString();
  } else {
    dest = 'https://search.brave.com/';
  }

  location.replace(dest);
})();
