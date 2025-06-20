// ==UserScript==
// @name         Google2Brave
// @namespace    https://github.com/saku-bruh/google2brave-userscript
// @version      1.0
// @description  Automatically redirects google to brave search
// @author       saku
// @match        https://www.google.*/*
// @match        https://google.*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const url = new URL(location.href);
  if (!url.searchParams.has('q')) return;

  if (url.searchParams.has('tbm')) return;

  const brave = new URL('https://search.brave.com/search');
  brave.searchParams.set('q', url.searchParams.get('q'));

  if (url.searchParams.has('hl')) {
    brave.searchParams.set('lang', url.searchParams.get('hl'));
  }

  location.replace(brave.toString());
})();
