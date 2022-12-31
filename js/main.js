var crossed = [false, false, false, false]
var body = document.querySelector('body')
        
document.addEventListener('scroll', (e) => {

  var trans_tabs = document.querySelectorAll('section')
  var container = document.querySelectorAll('.container')
          
  if(!crossed[0] && trans_tabs[1].getBoundingClientRect().top < 0) {
    container[3].classList.remove('container_scrolled')
    crossed[0] = true
  } else if(!crossed[1] && trans_tabs[2].getBoundingClientRect().top < 0) {
    container[4].classList.remove('container_scrolled')
    crossed[1] = true
  } else if(!crossed[2] && trans_tabs[3].getBoundingClientRect().top < 0) {
    container[5].classList.remove('container_scrolled')
    crossed[2] = true
  } else if(!crossed[3] && trans_tabs[4].getBoundingClientRect().top < 0) {
    container[6].classList.remove('container_scrolled')
    crossed[3] = true
  }
          
})

document.addEventListener('click', (e) => {

  var tab_content = document.querySelectorAll('.tab_content')
  var current = document.querySelector('.tab_current')

  if (e.target.id == 'tab_01' || e.target.id == 'mobile_tab_01') {
    current.classList = 'tab_content'
    setTimeout(function() { tab_content[0].classList = 'tab_content tab_current' }, 10);
  } else if (e.target.id == 'tab_02' || e.target.id == 'mobile_tab_02') {
    current.classList = 'tab_content'
    setTimeout(function() { tab_content[1].classList = 'tab_content tab_current' }, 10);
  } else if (e.target.id == 'tab_03' || e.target.id == 'mobile_tab_03') {
    current.classList = 'tab_content'
    setTimeout(function() { tab_content[2].classList = 'tab_content tab_current' }, 10);
  } else {
    return
  }
        
})

document.addEventListener('click', (e) => {
          
  var mobile_menu = document.querySelector('.mobile_nav_wrapper')
  var backgr = document.querySelector('.mobile_nav_back')
  var close = document.getElementById('close_menu')
          
  if(e.target.id == 'mobile_toggler') {
    backgr.classList.toggle('hidden')
    setTimeout(function() {
              
      close.classList.add('close_clicked')
      mobile_menu.classList.toggle('show')
      backgr.classList.toggle('fade_in')
            
    }, 10)
  } else if(e.target.id == 'close_menu') {
    mobile_menu.classList.toggle('show')
    backgr.classList.toggle('fade_in')
    setTimeout(function() {
              
      close.classList.remove('close_clicked')
      backgr.classList.toggle('hidden')

    }, 1000)
  } else {
    return
  }
})