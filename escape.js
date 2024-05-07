document.onkeydown = function (e) {
  if (e == null) { // ie 
    keycode = event.keyCode;
  } else { // mozilla 
    keycode = e.which;
  }
  if (keycode == 27) { // escape, close box, esc 
    // Go back one page
    history.back()
  }
};