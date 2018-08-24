(function($){
  const btn = $('#reward-btn')
  const pop = $('#reward-pop')
  const closeIcon = $('#reward-close-btn')
  btn.on('click', function(){
    pop.show()
  })
  closeIcon.on('click', function(){
    pop.hide()
  })
})(jQuery)
