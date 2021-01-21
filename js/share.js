const url = 'https://hyoriinvic.github.io/buffet_type_test/';
const title = '[뷔페 유형 테스트] 애슐리 홈 뷔페 (딜리버리 서비스) ';
const hash = '%23buffet_type_test %23뷔페유형테스트 %23애슐리홈뷔페';

const fb = () => {
  window.open('https://www.facebook.com/sharer/sharer.php?u='
    + url + '&t=' + title + '' + hash,
    'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
const kakao = () => {
    Kakao.Link.sendCustom({
      templateId: 45235,   // 15번 항목에서 확인하였던 이벤트번호 등록 
      // templeteArgs: {
      //   'title': '[뷔페유형테스트]나는 뷔페에서 어떤 유형?',
      //   'description' : '#애슐리홈뷔페 #애슐리딜리버리'
      // }
    });
  return false;
}

const nv = () => {
  window.open('http://share.naver.com/web/shareView.nhn?url='
    + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}
const band = () => {
  window.open('https://band.us/plugin/share?url='
    + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}