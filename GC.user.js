// ==UserScript==
// @name         GC Premium Free
// @description  Adiciona funcionalidade para Gamers Club
// @version      0.3
// @author       Rafael
// @grant        GM_webRequest
// @grant        GM_xmlhttpRequest
// @match        *://gamersclub.com.br/*
// @downloadURL  https://github.com/rafasouzabr/GCFree/raw/master/GC.user.js
// @updateURL    https://github.com/rafasouzabr/GCFree/raw/master/GC.user.js
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    ISSUBSCRIBER = true;

	setInterval(function(){
         if ( document.getElementById('gameModalReadyBalls').style.display != "none" && $("#clock").text() <> "") {
             lobby.setGameReady();
             console.log('Ready Pronto');
        }
         if ( document.getElementsByClassName('preready-block').length > 0 ) {
             setPreReady();
             console.log('Pre-ready pronto');
         }
    },500); //change 500 to the time in MS to wait before each run.	

})();
