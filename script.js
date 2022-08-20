/* window.addEventListener('load', function (e) {
  console.log('NumLock: ' + e.KeyboardEvent.getModifierState('NumLock') + '\nCapsLock: ' + e.KeyboardEvent.getModifierState('CapsLock') + '\nScrollLock: ' + e.KeyboardEvent.getModifierState('Scroll'));
}); */

window.addEventListener("keydown", function (event) {
  //console.log('NumLock: ' + event.getModifierState('NumLock') + '\nCapsLock: ' + event.getModifierState('CapsLock') + '\nScrollLock: ' + event.getModifierState('ScrollLock'));
  console.log("event.getModifierState('AltGraph'): " + event.getModifierState('AltGraph') + "\ncode: " + event.code + "\nkey: " + event.key + "\nlocation: " + event.location + "\nwhich: " + event.which + "\nevent.altKey: " + event.altKey + "\nevent.ctrlKey: " + event.ctrlKey);

  if (event.code) {
    event.preventDefault();
  }

  if (event.code === 'MetaLeft') {
    let element = document.getElementById("k096");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Escape') {
    let element = document.getElementById("k001");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'ShiftLeft') {
    let element = document.getElementById("k076");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'ShiftRight') {
    let element = document.getElementById("k089");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'ControlLeft') {
    let element = document.getElementById("k095");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'ControlRight') {
    let element = document.getElementById("k102");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'AltLeft') {
    let element = document.getElementById("k097");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'AltRight') {
    let element = document.getElementById("k099");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Backspace') {
    let element = document.getElementById("k030");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Tab') {
    let element = document.getElementById("k038");
    element.classList.remove("active");
    element.classList.add("pressed");
  } 

  if (event.code === 'ContextMenu') {
    let element = document.getElementById("k101");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'BracketLeft') {
    let element = document.getElementById("k049");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'BracketRight') {
    let element = document.getElementById("k050");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Backquote') {
    let element = document.getElementById("k017");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Minus') {
    let element = document.getElementById("k028");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Equal') {
    let element = document.getElementById("k029");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Quote') {
    let element = document.getElementById("k070");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Backslash') {
    let element = document.getElementById("k071");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Comma') {
    let element = document.getElementById("k085");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Period') {
    let element = document.getElementById("k086");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Slash') {
    let element = document.getElementById("k087");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'IntlRo') {
    let element = document.getElementById("k088");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'IntlBackslash') {
    let element = document.getElementById("k077");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad0') {
    let element = document.getElementById("k106");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad1') {
    let element = document.getElementById("k091");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad2') {
    let element = document.getElementById("k092");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad3') {
    let element = document.getElementById("k093");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad4') {
    let element = document.getElementById("k073");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad5') {
    let element = document.getElementById("k074");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad6') {
    let element = document.getElementById("k075");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad7') {
    let element = document.getElementById("k055");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad8') {
    let element = document.getElementById("k056");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Numpad9') {
    let element = document.getElementById("k057");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'NumpadDivide') {
    let element = document.getElementById("k035");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'NumpadMultiply') {
    let element = document.getElementById("k036");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'NumpadSubtract') {
    let element = document.getElementById("k037");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'NumpadAdd') {
    let element = document.getElementById("k058");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'NumpadDecimal') {
    let element = document.getElementById("k107");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'NumpadEnter') {
    let element = document.getElementById("k094");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Space') {
    let element = document.getElementById("k098");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'ArrowLeft') {
    let element = document.getElementById("k103");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'ArrowUp') {
    let element = document.getElementById("k090");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'ArrowRight') {
    let element = document.getElementById("k105");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'ArrowDown') {
    let element = document.getElementById("k104");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F1') {
    let element = document.getElementById("k002");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F2') {
    let element = document.getElementById("k003");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F3') {
    let element = document.getElementById("k004");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F4') {
    let element = document.getElementById("k005");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F5') {
    let element = document.getElementById("k006");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F6') {
    let element = document.getElementById("k007");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F7') {
    let element = document.getElementById("k008");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F8') {
    let element = document.getElementById("k009");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F9') {
    let element = document.getElementById("k010");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F10') {
    let element = document.getElementById("k011");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F11') {
    let element = document.getElementById("k012");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'F12') {
    let element = document.getElementById("k013");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit0') {
    let element = document.getElementById("k027");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit1') {
    let element = document.getElementById("k018");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit2') {
    let element = document.getElementById("k019");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit3') {
    let element = document.getElementById("k020");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit4') {
    let element = document.getElementById("k021");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit5') {
    let element = document.getElementById("k022");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit6') {
    let element = document.getElementById("k023");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit7') {
    let element = document.getElementById("k024");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit8') {
    let element = document.getElementById("k025");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Digit9') {
    let element = document.getElementById("k026");
    element.classList.remove("active");
    element.classList.add("pressed");
  }  

  if (event.code === 'KeyA') {
    let element = document.getElementById("k060");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyB') {
    let element = document.getElementById("k082");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyC') {
    let element = document.getElementById("k080");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyD') {
    let element = document.getElementById("k062");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyE') {
    let element = document.getElementById("k041");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyF') {
    let element = document.getElementById("k063");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyG') {
    let element = document.getElementById("k064");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyH') {
    let element = document.getElementById("k065");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyI') {
    let element = document.getElementById("k046");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyJ') {
    let element = document.getElementById("k066");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyK') {
    let element = document.getElementById("k067");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyL') {
    let element = document.getElementById("k068");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyM') {
    let element = document.getElementById("k084");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyN') {
    let element = document.getElementById("k083");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyO') {
    let element = document.getElementById("k047");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyP') {
    let element = document.getElementById("k048");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyQ') {
    let element = document.getElementById("k039");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyR') {
    let element = document.getElementById("k042");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyS') {
    let element = document.getElementById("k061");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyT') {
    let element = document.getElementById("k043");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyU') {
    let element = document.getElementById("k045");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyV') {
    let element = document.getElementById("k081");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyW') {
    let element = document.getElementById("k040");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyX') {
    let element = document.getElementById("k079");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyY') {
    let element = document.getElementById("k044");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'KeyZ') {
    let element = document.getElementById("k078");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Semicolon') {
    let element = document.getElementById("k069");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  /* if (event.code === 'PrintScreen') {    
    let element = document.getElementById("k014");
    element.classList.remove("active");
    element.classList.add("pressed");
  } */

  if (event.code === 'Pause') {
    let element = document.getElementById("k016");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Insert') {
    let element = document.getElementById("k031");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Home') {
    let element = document.getElementById("k032");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'PageUp') {
    let element = document.getElementById("k033");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Delete') {
    let element = document.getElementById("k052");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'End') {
    let element = document.getElementById("k053");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'PageDown') {
    let element = document.getElementById("k054");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'CapsLock') {
    let element = document.getElementById("k059");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'ScrollLock') {
    let element = document.getElementById("k015");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'NumLock') {
    let element = document.getElementById("k034");
    element.classList.remove("active");
    element.classList.add("pressed");
  }

  if (event.code === 'Enter') {
    let element = document.getElementById("k051");
    element.classList.remove("active");
    element.classList.add("pressed");
    element = document.getElementById("k072");
    element.classList.remove("active");
    element.classList.add("pressed");    
  }
});

window.addEventListener("keyup", function (event) {
  if (event.code === 'Enter') {
    let element = document.getElementById("k051");
    element.classList.remove("pressed");
    element.classList.add("active");
    element = document.getElementById("k072");
    element.classList.remove("pressed");
    element.classList.add("active");    
  }

  if (event.code === 'MetaLeft') {
    let element = document.getElementById("k096");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Escape') {
    let element = document.getElementById("k001");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'ShiftLeft') {
    let element = document.getElementById("k076");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'ShiftRight') {
    let element = document.getElementById("k089");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'ControlLeft') {
    let element = document.getElementById("k095");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'ControlRight') {
    let element = document.getElementById("k102");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'AltLeft') {
    let element = document.getElementById("k097");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'AltRight') {
    let element = document.getElementById("k099");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Backspace') {
    let element = document.getElementById("k030");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Tab') {
    let element = document.getElementById("k038");
    element.classList.remove("pressed");
    element.classList.add("active");
  } 

  if (event.code === 'ContextMenu') {
    let element = document.getElementById("k101");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'BracketLeft') {
    let element = document.getElementById("k049");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'BracketRight') {
    let element = document.getElementById("k050");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Backquote') {
    let element = document.getElementById("k017");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Minus') {
    let element = document.getElementById("k028");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Equal') {
    let element = document.getElementById("k029");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Quote') {
    let element = document.getElementById("k070");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Backslash') {
    let element = document.getElementById("k071");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Comma') {
    let element = document.getElementById("k085");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Period') {
    let element = document.getElementById("k086");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Slash') {
    let element = document.getElementById("k087");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'IntlRo') {
    let element = document.getElementById("k088");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'IntlBackslash') {
    let element = document.getElementById("k077");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad0') {
    let element = document.getElementById("k106");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad1') {
    let element = document.getElementById("k091");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad2') {
    let element = document.getElementById("k092");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad3') {
    let element = document.getElementById("k093");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad4') {
    let element = document.getElementById("k073");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad5') {
    let element = document.getElementById("k074");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad6') {
    let element = document.getElementById("k075");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad7') {
    let element = document.getElementById("k055");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad8') {
    let element = document.getElementById("k056");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Numpad9') {
    let element = document.getElementById("k057");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'NumpadDivide') {
    let element = document.getElementById("k035");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'NumpadMultiply') {
    let element = document.getElementById("k036");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'NumpadSubtract') {
    let element = document.getElementById("k037");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'NumpadAdd') {
    let element = document.getElementById("k058");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'NumpadDecimal') {
    let element = document.getElementById("k107");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'NumpadEnter') {
    let element = document.getElementById("k094");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Space') {
    let element = document.getElementById("k098");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'ArrowLeft') {
    let element = document.getElementById("k103");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'ArrowUp') {
    let element = document.getElementById("k090");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'ArrowRight') {
    let element = document.getElementById("k105");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'ArrowDown') {
    let element = document.getElementById("k104");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F1') {
    let element = document.getElementById("k002");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F2') {
    let element = document.getElementById("k003");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F3') {
    let element = document.getElementById("k004");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F4') {
    let element = document.getElementById("k005");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F5') {
    let element = document.getElementById("k006");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F6') {
    let element = document.getElementById("k007");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F7') {
    let element = document.getElementById("k008");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F8') {
    let element = document.getElementById("k009");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F9') {
    let element = document.getElementById("k010");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F10') {
    let element = document.getElementById("k011");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F11') {
    let element = document.getElementById("k012");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'F12') {
    let element = document.getElementById("k013");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit0') {
    let element = document.getElementById("k027");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit1') {
    let element = document.getElementById("k018");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit2') {
    let element = document.getElementById("k019");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit3') {
    let element = document.getElementById("k020");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit4') {
    let element = document.getElementById("k021");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit5') {
    let element = document.getElementById("k022");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit6') {
    let element = document.getElementById("k023");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit7') {
    let element = document.getElementById("k024");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit8') {
    let element = document.getElementById("k025");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Digit9') {
    let element = document.getElementById("k026");
    element.classList.remove("pressed");
    element.classList.add("active");
  }  

  if (event.code === 'KeyA') {
    let element = document.getElementById("k060");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyB') {
    let element = document.getElementById("k082");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyC') {
    let element = document.getElementById("k080");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyD') {
    let element = document.getElementById("k062");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyE') {
    let element = document.getElementById("k041");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyF') {
    let element = document.getElementById("k063");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyG') {
    let element = document.getElementById("k064");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyH') {
    let element = document.getElementById("k065");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyI') {
    let element = document.getElementById("k046");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyJ') {
    let element = document.getElementById("k066");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyK') {
    let element = document.getElementById("k067");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyL') {
    let element = document.getElementById("k068");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyM') {
    let element = document.getElementById("k084");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyN') {
    let element = document.getElementById("k083");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyO') {
    let element = document.getElementById("k047");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyP') {
    let element = document.getElementById("k048");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyQ') {
    let element = document.getElementById("k039");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyR') {
    let element = document.getElementById("k042");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyS') {
    let element = document.getElementById("k061");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyT') {
    let element = document.getElementById("k043");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyU') {
    let element = document.getElementById("k045");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyV') {
    let element = document.getElementById("k081");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyW') {
    let element = document.getElementById("k040");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyX') {
    let element = document.getElementById("k079");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyY') {
    let element = document.getElementById("k044");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'KeyZ') {
    let element = document.getElementById("k078");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Semicolon') {
    let element = document.getElementById("k069");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'PrintScreen') {
    let element = document.getElementById("k014");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Pause') {
    let element = document.getElementById("k016");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Insert') {
    let element = document.getElementById("k031");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Home') {
    let element = document.getElementById("k032");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'PageUp') {
    let element = document.getElementById("k033");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'Delete') {
    let element = document.getElementById("k052");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'End') {
    let element = document.getElementById("k053");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'PageDown') {
    let element = document.getElementById("k054");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'CapsLock') {
    let element = document.getElementById("k059");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'ScrollLock') {
    let element = document.getElementById("k015");
    element.classList.remove("pressed");
    element.classList.add("active");
  }

  if (event.code === 'NumLock') {
    let element = document.getElementById("k034");
    element.classList.remove("pressed");
    element.classList.add("active");
  }
});

/*
onkeydown="findKey(event)"
function findKey(e)
{
  console.log("keyCode for the key pressed: " + e.code + "\n");
}
 KeyboardEvent
keydown, keypress, keyup
addEventListener

getModifierState()
Returns a boolean(true/false). The value true indicates the on state of these keys, CapsLock, NumLock, Alt, Control, Shift, Meta, etc.

UIEvent

Event 
event.key
event.location
event.which (deprecated)
event.code

The properties, event.altKey, event.ctrlKey, event.shiftKey, and so on help detect if a modifier key has been pressed.







Exemplo de código que eu poderia usar:

document
  .addEventListener("keydown", function(event) {
    if (event.altKey && event.ctrlKey && event.shiftKey) {
      console.log("Good Bye!");
      document.getElementById(
        "result"
      ).innerHTML = `<b>ALT SHIFT CONTROL</b> is a custom combination to say GOODBYE!`;
    }
  });

*/