document.addEventListener('init', function(event) {
  var page = event.target;
  //情報ページ表示時の初期設定
  if (page.id === 'info-page') {
    console.log(page.data.test);
    
    document.getElementById("info-title").innerHTML = page.data.title;
    document.getElementById("info-img").src = page.data.img;
    document.getElementById("info-detail").innerHTML = page.data.detail;
  }
});

function onClickInfo(title,detail,img){
    var options = {};
    options.data = {};
    options.animation = 'slide';
    options.data.title = title;
    options.data.detail = detail;
    options.data.img = img;
    console.log( options.data.img);
    NatNavi.pushPage('info.html', options);
};

