(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: false,
        skipLength: 30,
        controlsHideTime: 3000,
        id: "conscriptbeats@gmail.com",
        devKey: "AIzaSyBWTQ-Cj5oqiczNkpQQ6HL_z47aKN9B4Rc",
        showLatestChannel: false,
        channels: [
            {
                type: "playlist",
                id: "PLeKrmy0gHn40XZCVLrG3cIDCjYKMdwjA_",
                title: "Fortnite"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));