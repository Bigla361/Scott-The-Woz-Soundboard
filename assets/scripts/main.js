/*
TODO
Add part preloading assets to Bagel.js, fix issue where the video doesn't load in time
MP3 versions
webP icons
Next and previous buttons

Bugs
Too many textures. Doesn't seem to increase when changing between submenus???

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
            src: "photoChannelDrink",
            iconSize: 0.8,
            color: "white"
        },
        {
            src: "dinnerServed",
            color: "#615339"
        },
        {
            src: "badMeals",
            color: "#28c8ff"
        },
        {
            src: "notDoingIt",
            color: "#eccaa5"
        },
        {
            src: "buyHouseKey",
            color: "black"
        },
        {
            src: "soup",
            color: "white"
        },
        {
            src: "thatsMe",
            name: "That's Me",
            color: "#f2e8d8"
        },
        {
            src: "metricPumpkin",
            color: "white"
        },
        {
            src: "triangleScamo",
            color: "#e8e2db"
        },
        {
            src: "homelessApplication",
            color: "#7a88aa"
        },
        {
            src: "wordReference",
            color: "#f3dbd9"
        },
        {
            src: "crazyRoom",
            color: "#6ee2fe"
        },
        {
            src: "tableSeason",
            color: "#e1c1af"
        },
        {
            src: "vCard",
            name: "V-Card",
            color: "#5a7e95"
        },
        {
            src: "pinballMachine",
            color: "#6ee2fe"
        },
        {
            src: "sitAtTable",
            color: "#ffdd77"
        },
        {
            src: "barrelBlast",
            color: "white"
        },
        {
            src: "conversationPiece",
            color: "#034aa4"
        },
        {
            src: "associateWithDead",
            color: "#d2b59a"
        },
        {
            src: "wbamo",
            name: "WBAMO!",
            iconSize: 0.95,
            color: "white"
        },
        {
            src: "whiteGuy",
            color: "#868686"
        },
        {
            src: "donkeyKong",
            color: "#c68860"
        },
        {
            src: "fnafStop",
            name: "FNAF Stop",
            color: "#0482f8"
        },
        {
            src: "hateSex",
            name: "You Hate Sex Too?",
            color: "#ffd266"
        },
        {
            src: "consumption",
            color: "#c57e25"
        },
        {
            src: "minecraft",
            color: "#00d9ff"
        },
        {
            src: "creditScore",
            color: "#c14b43"
        },
        {
            src: "tapWater",
            color: "black"
        },
        {
            src: "leadPaint",
            color: "#ad9e9b"
        },
        {
            src: "beans",
            color: "#0276ed"
        },
        {
            src: "killInteresting",
            name: "Kill to be Interesting",
            color: "#fedf90"
        },
        {
            src: "contributingToSociety",
            iconSize: 0.95,
            color: "black"
        },
        {
            src: "heySociety",
            iconSize: 0.95,
            color: "black"
        },
        {
            src: "smokingBad",
            color: "#79898b"
        },
        {
            src: "marioBrosCigarettes",
            color: "#79898b"
        },
        {
            src: "chaperoneNo",
            name: "Chaperone: No!",
            color: "#525b7f"
        },
        {
            src: "toadMoment",
            color: "white"
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

    const soundMenus = {};
    const baseSubmenu = {
        hoverText: {
            color: "#EFEFEF"
        },
        elements: [
            {
                type: "image",
                color: "#303030",
                x: 225,
                bottom: 800,
                width: 450,
                height: 118.75
            }
        ]
    };
    const nextButton = currentPage => ({
        type: "button",
        icon: "NextButton",
        size: 75,
        color: "white",
        onClick: {
            submenu: "main" + (currentPage + 1)
        },
        x: 375,
        y: 737.5
    });
    const previousButton = currentPage => ({
        type: "button",
        icon: "PreviousButton",
        size: 75,
        color: "white",
        onClick: {
            submenu: "main" + (currentPage - 1),
            animation: {
                direction: "left"
            }
        },
        x: 75,
        y: 737.5
    });

    let soundPageCount = 0;
    let count = 0;
    let vCount = 0;
    let x = 75;
    let y = 125;
    let soundMenu = Bagel.internal.deepClone(baseSubmenu);
    let buttons = soundMenu.elements;
    for (i in sounds) {
        let sound = sounds[i];
        let button = {
            type: "button",
            color: sound.color? sound.color : "red",
            onClick: element => {
                game.playSound(element.vars.sound);
            },
            onHover: sound.name,
            size: 75,
            iconSize: 0.65,
            x: x,
            y: y,
            vars: {
                sound: sound.asset
            }
        };
        if (! sound.noIcon) {
            button.icon = sound.asset;
            if (sound.iconSize) button.iconSize = sound.iconSize;
        }
        buttons.push(button);

        x += 100;
        count++;
        if (count == 4) {
            x = 75;
            y += 100;
            count = 0;
            vCount++;
        }
        if (vCount == 6 || i == (sounds.length - 1)) {
            let newSubmenu = vCount == 6;
            count = 0;
            vCount = 0;
            y = 125;
            if (newSubmenu) {
                buttons.push(nextButton(soundPageCount));
            }
            soundMenus["main" + soundPageCount] = soundMenu;
            soundPageCount++;
            if (newSubmenu) {
                soundMenu = Bagel.internal.deepClone(baseSubmenu);
                buttons = soundMenu.elements;
                buttons.push(previousButton(soundPageCount));
            }
        }
    }

    const icons = sounds.map(sound => (! sound.noIcon)? ({
        id: sound.asset,
        src: "assets/imgs/png/soundIcons/" + sound.src + ".png"
    }) : null).filter(value => value != null);
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
                    ...icons,

                    {
                        id: "PreviousButton",
                        src: "assets/imgs/png/previousArrow.png",
                        webP: "assets/imgs/webP/previousArrow.webp",
                    },
                    {
                        id: "NextButton",
                        src: "assets/imgs/png/nextArrow.png",
                        webP: "assets/imgs/webP/nextArrow.webp",
                    }
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
                    y: 590,
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
                    submenu: "main0",
                    submenus: soundMenus,
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
