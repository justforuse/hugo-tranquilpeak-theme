(function($){
  // language buttons
  const enBtn = $('#en-version')
  const cnBtn = $('#cn-version')
  // go to english version
  enBtn.on('click', function(){
    const currentUrl = window.location.href
    window.location.href = currentUrl.replace('zh-cn', 'en-us')
  })
  // go to chinese version
  cnBtn.on('click', function(){
    const currentUrl = window.location.href
    window.location.href = currentUrl.replace('en-us', 'zh-cn')
  })
  
})(jQuery);
