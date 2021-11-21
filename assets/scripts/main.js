/*
TODO
Add part preloading assets to Bagel.js, fix issue where the video doesn't load in time
Use more compression on ogg files. Maybe even 0 quality is enough? Doesn't save too much space compared to 3 though
MP3 versions
webP icons
Next and previous buttons

Bugs
Buttons behave weirdly on touchscreens
Too many textures. Doesn't seem to increase when changing between submenus???

Sounds to include (be careful about duplicates) (exclude some that don't work well)

Statement still stands (10:51)
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
            color: "white",
            duration: 2.357483
        },
        {
            src: "dinnerServed",
            color: "#615339",
            duration: 5.648254
        },
        {
            src: "badMeals",
            color: "#28c8ff",
            duration: 3.947392
        },
        {
            src: "notDoingIt",
            color: "#eccaa5",
            duration: 1.683447
        },
        {
            src: "buyHouseKey",
            color: "black",
            duration: 4.893605
        },
        {
            src: "soup",
            color: "white",
            duration: 7.04
        },
        {
            src: "thatsMe",
            name: "That's Me",
            color: "#f2e8d8",
            duration: 2.914104
        },
        {
            src: "metricPumpkin",
            color: "white",
            duration: 3.552653
        },
        {
            src: "triangleScamo",
            color: "#e8e2db",
            duration: 6.965986
        },
        {
            src: "homelessApplication",
            color: "#7a88aa",
            duration: 2.589025
        },
        {
            src: "wordReference",
            color: "#f3dbd9",
            duration: 2.345215
        },
        {
            src: "crazyRoom",
            color: "#6ee2fe",
            duration: 3.424943
        },
        {
            src: "tableSeason",
            color: "#e1c1af",
            duration: 3.192744
        },
        {
            src: "vCard",
            name: "V-Card",
            color: "#5a7e95",
            duration: 6.989206
        },
        {
            src: "pinballMachine",
            img: "CrazyRoom",
            color: "#6ee2fe",
            duration: 4.098322
        },
        {
            src: "sitAtTable",
            color: "#ffdd77",
            duration: 3.436553
        },
        {
            src: "barrelBlast",
            color: "white",
            duration: 4.574331
        },
        {
            src: "conversationPiece",
            color: "#034aa4",
            duration: 2.414875
        },
        {
            src: "associateWithDead",
            color: "#d2b59a",
            duration: 5.13161
        },
        {
            src: "wbamo",
            name: "WBAMO!",
            iconSize: 0.95,
            color: "white",
            duration: 2.890884
        },
        {
            src: "whiteGuy",
            color: "#868686",
            duration: 1.985306
        },
        {
            src: "donkeyKong",
            color: "#c68860",
            duration: 1.451247
        },
        {
            src: "fnafStop",
            name: "FNAF Stop",
            color: "#0482f8",
            duration: 2.075283
        },
        {
            src: "hateSex",
            name: "You Hate Sex Too?",
            color: "#ffd266",
            duration: 2.995374
        },
        {
            src: "consumption",
            color: "#c57e25",
            duration: 2.252336
        },
        {
            src: "minecraft",
            color: "#00d9ff",
            duration: 3.889342
        },
        {
            src: "creditScore",
            color: "#c14b43",
            duration: 2.960544
        },
        {
            src: "tapWater",
            color: "black",
            duration: 2.554195
        },
        {
            src: "leadPaint",
            color: "#ad9e9b",
            duration: 5.34059
        },
        {
            src: "beans",
            color: "#0276ed",
            duration: 2.716735
        },
        {
            src: "killInteresting",
            name: "Kill to be Interesting",
            color: "#fedf90",
            duration: 4.353741
        },
        {
            src: "contributingToSociety",
            iconSize: 0.95,
            color: "black",
            duration: 6.536417
        },
        {
            src: "heySociety",
            img: "ContributingToSociety",
            iconSize: 0.95,
            color: "black",
            duration: 14.165624
        },
        {
            src: "smokingBad",
            color: "#79898b",
            duration: 3.842902
        },
        {
            src: "marioBrosCigarettes",
            img: "SmokingBad",
            color: "#79898b",
            duration: 6.893479
        },
        {
            src: "chaperoneNo",
            name: "Chaperone: No!",
            color: "#525b7f",
            duration: 0.963628
        },
        {
            src: "toadMoment",
            color: "white",
            duration: 2.786167
        },
        {
            src: "futureScott",
            color: "#454e5a",
            duration: 8.068934
        },
        {
            src: "200Nes",
            name: "200 NES",
            color: "#52daff",
            duration: 2.565805
        },
        {
            src: "fridgeUnplugged",
            color: "#6d3c02",
            duration: 4.191202
        },
        {
            src: "integrity",
            color: "#52daff",
            duration: 4.365351
        },
        {
            src: "sonicSpinball",
            color: "#52daff",
            duration: 3.227574
        },
        {
            src: "scottNo",
            name: "Scott: No!",
            color: "#a0b3ce",
            iconSize: 0.9,
            duration: 1.149388
        },
        {
            src: "madden08",
            name: "Madden 08",
            color: "#044fb2",
            iconSize: 0.95,
            duration: 3.250794
        },
        {
            src: "definition",
            color: "#a0a5b8",
            duration: 3.065034
        },
        {
            src: "finalBreath",
            color: "#767d91",
            duration: 6.246168
        },
        {
            src: "ringtone",
            color: "white",
            duration: 8.817392
        },
        {
            src: "911Here",
            color: "#474355",
            duration: 3.520726
        },
        {
            src: "911CallBack",
            color: "#a08f81",
            duration: 3.503311
        },
        {
            src: "firstUseAnalogy",
            color: "#c49904",
            duration: 5.209977
        },
        {
            src: "calledIt",
            color: "#0600fa",
            duration: 1.962086
        },
        {
            src: "topAlcohol",
            img: "ThumbPlacement",
            color: "white",
            duration: 1.520907
        },
        {
            src: "thumbPlacement",
            color: "white",
            duration: 2.856054
        }
    ];

    for (let i in sounds) {
        let sound = sounds[i];
        let src = sound.src;
        sound.soundAsset = "Sound." + capitalizeFirstCharacter(src);
        if (sound.img) {
            sound.imageAsset = "Sound." + sound.img;
        }
        else {
            sound.imageAsset = sound.soundAsset;
        }

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
                bottom: 800,
                width: 450,
                height: 100
            },

            {
                type: "button",
                color: "#EFEFEF",
                onClick: {
                    submenu: "searchBox",
                    animation: {
                        direction: "up"
                    }
                },
                y: 45,
                size: 60
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
        y: 750
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
        y: 750
    });

    let soundPageCount = 0;
    let count = 0;
    let vCount = 0;
    let x = 75;
    let y = 140;
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
                sound: sound.soundAsset
            }
        };
        if (! sound.noIcon) {
            button.icon = sound.imageAsset;
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
            y = 140;
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

    const icons = sounds.map(sound => (sound.noIcon || sound.img)? null : ({
        id: sound.imageAsset,
        src: "assets/imgs/png/soundIcons/" + sound.src + ".png",
        webP: "assets/imgs/webP/soundIcons/" + sound.src + ".webp"
    })).filter(value => value != null);
    const soundAssets = sounds.map(sound => ({
        id: sound.soundAsset,
        src: "assets/snds/mp3/" + sound.src + ".mp3",
        ogg: "assets/snds/ogg/" + sound.src + ".ogg",
        ...(sound.duration? {duration: sound.duration} : {})
    }));

    /*
    const getDurationsSub = sounds => {
        for (let i in sounds) {
            if (true) { // sounds[i].duration == null
                if (sounds[i].duration == game.get.asset.snd(sounds[i].asset).duration) {
                    console.log(i + " " + sounds[i].asset + ": " + game.get.asset.snd(sounds[i].asset).duration);
                }
                else {
                    console.log("Mismatch. " + i + " " + sounds[i].asset + ": " + game.get.asset.snd(sounds[i].asset).duration + " vs provided " + sounds[i].duration);
                }
            }
        }
    };
    const getDurations = _ => {
        (sounds => {
            let interval = setInterval(_ => {
                if (game.loaded) {
                    getDurationsSub(sounds);
                    clearInterval(interval);
                }
            }, 50);
        })(sounds);
    };
    getDurations();
    */

    return Bagel.init({
        id: "soundboard",
        state: "menu",
        vars: {
            sounds: sounds
        },
        game: {
            plugins: [
                {
                    src: "assets/plugins/gui.js"
                }
            ],
            assets: {
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
                    id: "Menu",
                    type: "GUI",
                    submenu: "main0",
                    submenus: {
                        ...soundMenus,
                        searchBox: {
                            elements: [
                                {
                                    type: "button",
                                    color: "#EFEFEF",
                                    size: 60
                                }
                            ]
                        },
                        searchResults: {
                            elements: []
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
                mode: "preload",
                skip: false,
                animation: {
                    game: {
                        plugins: [
                            {
                                src: "assets/plugins/video.js"
                            }
                        ],
                        assets: {
                            imgs: [
                                {
                                    id: "Logo",
                                    src: "assets/imgs/icons/256x256.png",
                                    webP: "assets/imgs/icons/webP/256x256.webp"
                                }
                            ],
                            videos: [
                                {
                                    id: "HeyAll",
                                    src: "assets/videos/heyAll.mp4",
                                    preload: "all"
                                }
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
                                scripts: {
                                    init: [
                                        {
                                            code: (me, game) => {
                                                game.playVideo("HeyAll");

                                                me.vars.video = game.get.asset.video("HeyAll");
                                                me.vars.logo = game.get.sprite("Logo");
                                                me.vars.progressText = game.get.sprite("ProgressText");
                                            },
                                            stateToRun: "loading"
                                        }
                                    ],
                                    main: [
                                        {
                                            code: (me, game) => {
                                                if (me.vars.video.video.paused) {
                                                    if (me.vars.hasPlayed) {
                                                        me.alpha -= 0.075;
                                                        if (me.alpha == 0) {
                                                            if (me.vars.delayTick == 5) {
                                                                if (game.vars.loading.progress == 100) {
                                                                    let progressText = me.vars.progressText;
                                                                    if (progressText.visible) {
                                                                        progressText.text = "100%";
                                                                    }
                                                                    else {
                                                                        game.vars.loading.done = true;
                                                                    }
                                                                }
                                                                else {
                                                                    let logo = me.vars.logo;
                                                                    logo.visible = true;
                                                                    logo.width = 225;
                                                                    logo.height = 225;

                                                                    let progressText = me.vars.progressText;
                                                                    progressText.visible = true;
                                                                    progressText.text = Math.floor(game.vars.loading.progress) + "%";
                                                                }
                                                            }
                                                            else {
                                                                me.vars.delayTick++;
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    me.vars.hasPlayed = true;
                                                }
                                            },
                                            stateToRun: "loading"
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
                                            code: (me, game) => {
                                                me.vars.parent = game.get.sprite("HeyAll");
                                            },
                                            stateToRun: "loading"
                                        }
                                    ],
                                    main: [
                                        {
                                            code: me => {
                                                me.alpha = me.vars.parent.alpha;
                                            },
                                            stateToRun: "loading"
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
                                            code: (me, game) => {
                                                me.vars.parent = game.get.sprite("HeyAll");
                                            },
                                            stateToRun: "loading"
                                        }
                                    ],
                                    main: [
                                        {
                                            code: me => {
                                                me.alpha = me.vars.parent.alpha;
                                            },
                                            stateToRun: "loading"
                                        }
                                    ]
                                },
                                text: "By Hedgehog125"
                            },

                            {
                                id: "Logo",
                                img: "Logo",
                                alpha: 0,
                                vars: {
                                    tick: 0
                                },
                                scripts: {
                                    main: [
                                        {
                                            code: (me, game) => {
                                                if (me.visible) {
                                                    if (game.vars.loading.progress == 100) {
                                                        me.alpha -= 0.05;
                                                        if (me.alpha == 0) {
                                                            game.vars.loading.done = true;
                                                        }
                                                    }
                                                    else {
                                                        if (me.alpha != 1) {
                                                            me.alpha += 0.05;
                                                        }
                                                    }
                                                    me.angle += ((Math.sin(me.vars.tick / 72.5)) * 2.5);
                                                    me.vars.tick++;
                                                }
                                            },
                                            stateToRun: "loading"
                                        }
                                    ]
                                },
                                visible: false
                            },
                            {
                                id: "ProgressText",
                                type: "text",
                                text: "",
                                size: 30,
                                color: "#EFEFEF",
                                alpha: 0,
                                scripts: {
                                    main: [
                                        {
                                            code: (me, game) => {
                                                if (game.vars.loading.progress == 100) {
                                                    me.alpha -= 0.05;
                                                }
                                                else {
                                                    if (me.alpha != 1) {
                                                        me.alpha += 0.05;
                                                    }
                                                }
                                            },
                                            stateToRun: "loading"
                                        }
                                    ]
                                },
                                y: 600
                            }
                        ]
                    },
                    state: "loading"
                }
            }
        }
    });
})();
