import cookie from 'react-cookie';

function getDefaultLang() {
  let nav = window.navigator;
  const langList = ['en', 'zh'];
  const currentLang = cookie.load('btcchina_lang');
  if (currentLang && !langList.indexOf(currentLang)) {
    return 'en';
  }
  return cookie.load('btcchina_lang') || (nav.language || '').split('-')[0] || 'zh';
}

export default getDefaultLang;
