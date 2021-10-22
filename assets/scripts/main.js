/*
TODO
Crop hey all to 1:1
Add preloading to Bagel.js, fix issue where the video doesn't load in time

Sounds to include (be careful about duplicates) (exclude some that don't work well)
Toad moment
https://www.youtube.com/watch?v=THYGqi4yIio
https://www.youtube.com/watch?v=xzaqI0JHDsA
https://www.youtube.com/watch?v=UT6AdRNKKy0
https://www.youtube.com/watch?v=us_J6Pkom9k
https://www.youtube.com/watch?v=yD2pdiovGLk

*/


const game = (_ => {
    return Bagel.init({
        id: "soundboard",
        state: "intro",
        vars: {},
        game: {
            plugins: [
                {
                    src: "assets/plugins/gui.js"
                },
                {
                    src: "assets/plugins/video.js"
                }
            ],
            assets: {
                videos: [
                    {
                        id: "HeyAll",
                        src: "assets/videos/heyAll.mp4"
                    }
                ],
                imgs: [

                ]
            },
            sprites: [
                {
                    id: "HeyAll",
                    img: "HeyAll",
                    width: 250,
                    height: 250,
                    vars: {
                        delayTick: 0
                    },
                    request: {
                        intro: {
                            videos: ["HeyAll"]
                        }
                    },
                    scripts: {
                        init: [
                            {
                                code: me => {
                                    game.playVideo("HeyAll");

                                    me.vars.video = game.get.asset.video("HeyAll");
                                },
                                stateToRun: "intro"
                            }
                        ],
                        main: [
                            {
                                code: me => {
                                    if (me.vars.video.video.paused) {
                                        me.alpha -= 0.075;
                                        if (me.alpha == 0) {
                                            me.vars.delayTick++;
                                            if (me.vars.delayTick == 15) {
                                                game.state = "menu";
                                            }
                                        }
                                    }
                                },
                                stateToRun: "intro"
                            }
                        ]
                    }
                },

                {
                    id: "Menu",
                    type: "GUI",
                    submenu: "main",
                    submenus: {
                        main: {
                            elements: [
                                {
                                    type: "button",
                                    color: "red",
                                    size: 50
                                }
                            ]
                        }
                    },
                    stateToActivate: "menu"
                }
            ]
        },
        width: 450,
        height: 800,
        config: {
            display: {
                backgroundColor: "#202020",
                renderer: "canvas",
                antialiasing: true
            }
        }
    });
})();
