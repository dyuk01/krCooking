class VRButton {
    static createButton(renderer) {
      const button = document.createElement('button');
  
      function showEnterVR( /*device*/) {
        let currentSession = null;
  
        async function onSessionStarted(session) {
          session.addEventListener('end', onSessionEnded);
          await renderer.xr.setSession(session);
          button.textContent = 'EXIT VR';
          currentSession = session;
        }
  
        function onSessionEnded(/*event*/) {
          currentSession.removeEventListener('end', onSessionEnded);
          button.textContent = 'ENTER VR';
          currentSession = null;
        }
  
        button.style.display = '';
        button.style.cursor = 'pointer';
        button.style.left = 'calc(50% - 50px)';
        button.style.width = '100px';
  
        button.textContent = 'ENTER VR';
        button.onmouseenter = function() {
          button.style.opacity = '1.0';
        };
        button.onmouseleave = function() {
          button.style.opacity = '0.5';
        };
  
        button.onclick = function() {
          if (currentSession === null) {
            const sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor' ] };
            navigator.xr.requestSession('immersive-vr', sessionInit).then(onSessionStarted);
          } else {
            currentSession.end();
          }
        };
  
      }
  
      function showWebXRNotFound() {
        button.textContent = 'VR NOT SUPPORTED';
        button.style.cursor = 'auto';
        button.onmouseenter = null;
        button.onmouseleave = null;
        button.onclick = null;
      }
  
      function stylizeElement(element) {
        element.style.position = 'absolute';
        element.style.bottom = '20px';
        element.style.padding = '12px 6px';
        element.style.border = '1px solid #fff';
        element.style.borderRadius = '4px';
        element.style.background = 'rgba(0,0,0,0.1)';
        element.style.color = '#fff';
        element.style.font = 'normal 13px sans-serif';
        element.style.textAlign = 'center';
        element.style.opacity = '0.5';
        element.style.outline = 'none';
        element.style.zIndex = '999';
      }
  
      if ('xr' in navigator) {
        button.id = 'VRButton';
        stylizeElement(button);
        navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
          supported ? showEnterVR() : showWebXRNotFound();
        }).catch(showWebXRNotFound);
  
        return button;
      } else {
        const message = document.createElement('a');
        message.href = 'https://immersiveweb.dev/';
        message.innerHTML = 'WEBXR NOT AVAILABLE';
        message.style.left = 'calc(50% - 90px)';
        message.style.width = '180px';
        message.style.textDecoration = 'none';
        stylizeElement(message);
        return message;
      }
    }
  }
  
  export { VRButton };
  