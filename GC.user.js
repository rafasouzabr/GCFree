// ==UserScript==
// @name         GC Premium Free
// @description  Adiciona funcionalidade para Gamers Club
// @version      0.2
// @author       Rafael
// @grant        GM_webRequest
// @grant        GM_xmlhttpRequest
// @match        *://gamersclub.com.br/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @downloadURL  https://github.com/rafasouzabr/GCFree/raw/master/GC.user.js
// @updateURL    https://github.com/rafasouzabr/GCFree/raw/master/GC.user.js
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    ISSUBSCRIBER = true;

	setInterval(function(){
         if ( $("#rankedModals .game-modal-footer #gameModalReadyBalls").css("display") != "none" && $("#clock").text() != "" && $("#rankedModals #gameModalReady #gameModalReadyBtn button.game-modal-ready-button").length > 0) {
             lobby.setGameReady();
             console.log('Ready Pronto');
        }
         if ( $("#lobbyModal .preready-block").length > 0 && $("#lobbyModal .preready-timer").text() != "" && $("#lobbyModal #setPlayerReady").length > 0 && $("#lobbyModal .preready-player-ready").length == 0) {
             setPreReady();
             console.log('Pré-Ready pronto');
         }
    },500);

})();
