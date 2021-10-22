/*
TODO
Add part preloading assets to Bagel.js, fix issue where the video doesn't load in time
MP3 versions

Sounds to include (be careful about duplicates) (exclude some that don't work well)
Toad moment
https://www.youtube.com/watch?v=THYGqi4yIio
https://www.youtube.com/watch?v=xzaqI0JHDsA
https://www.youtube.com/watch?v=UT6AdRNKKy0
https://www.youtube.com/watch?v=us_J6Pkom9k
https://www.youtube.com/watch?v=yD2pdiovGLk

*/


const game = (_ => {
    const capitalizeFirstCharacter = word => word[0].toUpperCase() + word.slice(1, word.length);
    const sounds = [
        {
            src: "photoChannelDrink"
        },
        {
            src: "dinnerServed"
        },
        {
            src: "badMeals"
        },
        {
            src: "notDoingIt"
        },
        {
            src: "buyHouseKey"
        },
        {
            src: "soup"
        },
        {
            src: "thatsMe"
        },
        {
            src: "metricPumpkin"
        },
        {
            src: "triangleScamo"
        },
        {
            src: "homelessApplication"
        },
        {
            src: "wordReference"
        },
        {
            src: "crazyRoom"
        },
        {
            src: "tableSeason"
        },
        {
            src: "vCard",
            name: "V-Card"
        },
        {
            src: "pinballMachine"
        },
        {
            src: "sitAtTable"
        },
        {
            src: "barrelBlast"
        },
        {
            src: "conversationPiece"
        },
        {
            src: "associateWithDead"
        },
        {
            src: "wbamo"
        },
        {
            src: "whiteGuy"
        },
        {
            src: "donkeyKong"
        }
    ];
    for (let i in sounds) {
        let sound = sounds[i];
        let src = sound.src;
        sound.asset = "Sound." + capitalizeFirstCharacter(src);

        if (! sound.name) {
            let spaceName = "";
            for (let c in src) {
                let char = src[c];
                let lower = char.toLowerCase();
                if (char == lower) {
                    spaceName += char;
                }
                else {
                    spaceName += " " + lower;
                }
            }

            sound.name = spaceName.split(" ").map(value => capitalizeFirstCharacter(value)).join(" ");
        }
    }

    sounds.sort((a, b) => a.name.localeCompare(b.name));
    const buttons = [];
    let count = 0;
    let x = 75;
    let y = 150;
    for (i in sounds) {
        let sound = sounds[i];
        buttons.push({
            type: "button",
            color: "red",
            onClick: element => {
                game.playSound(element.vars.sound);
            },
            onHover: sound.name,
            size: 75,
            x: x,
            y: y,
            vars: {
                sound: sound.asset
            }
        });
        x += 100;
        count++;
        if (count == 4) {
            x = 75;
            y += 100;
            count = 0;
        }
    }

    const soundAssets = sounds.map(sound => ({
        id: sound.asset,
        src: "assets/snds/mp3/" + sound.src + ".mp3",
        ogg: "assets/snds/ogg/" + sound.src + ".ogg"
    }));

    return Bagel.init({
        id: "soundboard",
        state: "intro",
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

                ],
                snds: soundAssets
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
                    id: "IntroText1",
                    type: "text",
                    color: "#EFEFEF",
                    y: 550,
                    scripts: {
                        init: [
                            {
                                code: me => {
                                    me.vars.parent = game.get.sprite("HeyAll");
                                },
                                stateToRun: "intro"
                            }
                        ],
                        main: [
                            {
                                code: me => {
                                    me.alpha = me.vars.parent.alpha;
                                },
                                stateToRun: "intro"
                            }
                        ]
                    },
                    text: "Scott The Woz Soundboard (unofficial)"
                },
                {
                    id: "IntroText2",
                    type: "text",
                    color: "#EFEFEF",
                    y: 600,
                    scripts: {
                        init: [
                            {
                                code: me => {
                                    me.vars.parent = game.get.sprite("HeyAll");
                                },
                                stateToRun: "intro"
                            }
                        ],
                        main: [
                            {
                                code: me => {
                                    me.alpha = me.vars.parent.alpha;
                                },
                                stateToRun: "intro"
                            }
                        ]
                    },
                    text: "By Hedgehog125"
                },

                {
                    id: "Menu",
                    type: "GUI",
                    submenu: "main",
                    submenus: {
                        main: {
                            elements: buttons,
                            hoverText: {
                                color: "#EFEFEF"
                            }
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
            },
            loading: {
                mode: "preload" // TODO
            }
        }
    });
})();
