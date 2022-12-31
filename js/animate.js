
function getCss(elem, prop) {

  var getStyle = window.getComputedStyle(elem)
  var getValue = getStyle.getPropertyValue(prop)

  return getValue

}

function move() {

	var elem = document.querySelectorAll('[data-animation]')
	var prop = elem[0].dataset.animation
	var to = elem[0].dataset.animationTo
	var time = elem[0].dataset.animationTime
	var current_value = parseInt(getCss(elem[0], prop))
	var step = (to - current_value) / (30 * time)

	var int = setInterval(function() {	

		elem[0].style.setProperty(prop, (current_value + step) + 'px')
					
		current_value = parseInt(getCss(elem[0], prop))

		setTimeout(function(){

			var stop = time * 1000
						
			clearInterval(int)

		}, stop)
				
	}, 33.3333333)

}