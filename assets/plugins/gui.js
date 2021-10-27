{
    info: {
        id: "BagelGUI",
        description: "A customisable plugin for creating GUIs in Bagel.js."
    },
    plugin: {
        scripts: {
            init: (plugin, game) => {
                game.add.asset.snd({
                    id: ".BagelGUI.click",
                    src: "data:audio/mpeg;base64,//OAxAAAAAAAAAAAAFhpbmcAAAAPAAAAAwAABBIAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBg0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ////////////////////////////////////////////AAAAUExBTUUzLjk5cgRuAAAAAAAAAAA1CCQCzSEAAeAAAAQSSYAuqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/zoMQAEnACyvdAAACoh3exu8jLeoIAgcKAgCAYLggCAIHCgIAhggGIPv5cEFg+D+sH/Lg4CHDHKHP/E4PghrBwMcEAQygY//BB3//+UBAEAx/KAhlAQcmYqIp0mTVUZDWGgyrJEUQYImG/BhWy0KoEQVVjZUyyAxi+zMxAcDuX+WiWnPTQwFZ4BkIgoSlO0HWRLRa6sZiyXtxgTnQ+IAlwFSpHstGDFzlpJ1J2pzS2mZiuluTRlbS2DUE23jTFgFMVrERfV4GUv7edHTZbTQ3CYA37KYccp4lAmlpzMpkEOspbRYs7LIi8j8MQbxBMzxd8NvvB7KbTgw4yl1W5P67sEQS7sYhl3Zx/ZbS7xUzi6X+TZJFYkkYszmT+NETCdJdz7uFIpTWyjsNSdyauojEpdBNNLm408Oz/87DE4loUgqsfmMAkgxuzs47j+VGWS1u8Uf913bjdZa8ehyAaaIu7EXJhhwZC4VK+0ifZr0F/j++Y/vHW6WVZwzAUWZ7FrTIbUonIxGL0OUt+9G5e5cXmm3gp+aBnEQfaROjKqF/Zl/ZQ+smaVSuk8zSmJNFZVG2Gv9BMO/dpccfkF6/er5y/LC67MYfWchq4/0fVrKAIu7lfHLva4zAQE2q//1VFBQEBKMzKuGAhVCgJqs+qAnVAVL/6vxmKMx///9VTqr/V9VXjMUZvgYCAQNP9YKrBX8S8ShsSgrEVZ0RBwRPg1Bp5U7rBUeGpUNiU78RBwRPUIoilTusFR4KqTEFNRTMuOTkuM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/zYMTZGtmybx/DGACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg=="
                });
                game.add.asset.snd({
                    id: ".BagelGUI.clickUp",
                    src: "data:audio/mpeg;base64,//OAxAAAAAAAAAAAAFhpbmcAAAAPAAAABAAABMkATk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn/////////////////////////////////AAAAUExBTUUzLjk5cgRuAAAAAAAAAAA1CCQDLCEAAeAAAATJpqKjmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/zoMQAFogGux9BAAC6qruoVWtAv0iG8oCDgQcUBA4Jz8pLg+D+IAQd5cHwfB/rP/BAEDkoGPxACYPg+D5+GPUCAIA+/8HwQBAEAQBMH/h/8EAQBB3UCAPg+H/wQDH8HwfD8uD4Pg+qushml2hmlAYBrCAMEjTYbZgXKSJMQKAAkRyGgr9CoNCahLjLRnVAAhorQiAL13knoq8qAdYdH1rCt6FqmTC2dsHT1HCMoc2jWLUjdBRNoyJv4RMO0+0ZrvFNRFbrNnkWi/kVZar+lnZySwWwG4+ixJ1YkCQ+8pbp5BEMtK0x06WUrt+hjNymv+3B3YjhSwzfl+pU8dytnvDLdWPVbMpuUdPNWprdLVi9irfi0sqU17Ofj8Oyrct1AT9y2td13+c+7WpqbfJqlpatarGeX5Xf7rD/86DE0Up0bqMfmsAAw5zWN6btVKDKzU7yzzKbyps6amyrU1/uWWOOP8paa13k1DVLjTV7tumz7llnhjZyws6t1pfMyHcons7H42c6avS27mprVaNVbUzS/vdL3u/5l3+5fv7N/qaMNZRoSaM02g0LO2aTFcDsQUEAsfvVoGoStQqLLLRgFURCVLcDdYiz5huShkdWIiu/qVSyzERIxDHQ0pUtZNFTUECvRA6UymyVysMPMABBJfQHFAUZwC8TIEEyk3udBhrpMhGCRxJYZOULpBco1Sk7HGyX0/l6VsgUOZnGH2U2MI0A8GLUeKwWfCoQ8E0F/6BprcYalVlOdmj4tNyf6VXuLTLIuC/LorRbMhlMYw1BN2yzJs8dd2zGcZmTN3lUWlUzOQ3H4CpuPEw6G8qsZxtNxgFx//OwxNNQVC56/5jICGCqtSrclTdpucj0tjkRoKGIwTcd2njO6CtVptyqNXJuK0t2kpst61lv+a139Y6nN092prC19Ncls5QzfIlc3CL8BS+tasZXvm3RityJRaIxGw+0pj0Na7jvWWst/v//////UpprXcqYjJN1BQCkqkxBTUUzLjk5LjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/8xDE8QAAA/wBwAAAqqqqqqqqqqqqqqqqqg=="
                });
                game.add.asset.snd({
                    id: ".BagelGUI.touch",
                    src:  "data:audio/mpeg;base64,//OAxAAAAAAAAAAAAFhpbmcAAAAPAAAABAAABP0ASkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn/////////////////////////////////AAAAUExBTUUzLjk5cgRuAAAAAAAAAAA1CCQDKiEAAeAAAAT9uAw0pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/zoMQAEjkqnedDMACyMBL0ufxEQvkRC3REREKgYACCEe7JpkEIy7Jp3Ed7Jp3vezyad7+9nkyd7BMmH8uf8Tg+8uD4f/l///Ln/5d//h///rB9//g+z7q7iFlKYTSjQDSknrKLQgSoGlObS2JMhgJeYvuY7AQqCdmwWOKDMmn7BoHzfVVVDBTsLMmppKqLp0vOKCTvSCZkpdHXbYjEnpVuWSqo6TdY6z5ur2PA3FrEqV1EYgu8tyumPPoyarCXtXFGr8QhiZqr8pX8uxX4koFKn9eB8HDaw7rWJFKXioqVfzRW6vxFrMeu5RKAaDjxU8JmvtRDCV2s7eEsvZyCV49gGxGsaOrQvzT1XFsZczpYai2PYeyq3GyRSXSh3n8sSyN237rWKSKdhqLdhtiVC9kzIIlEpq69DRb/86DE406karb/mMAFHbtWq4NWxKsdSq9Wpq3JuxT27ff5X7T3+U+X2/yntXm4vk5WpFjMzsGWX6qVJdG5dlTRyHoL7Wz/Gl7rKm3KvrV8cfpr8Zw5vm+/vt/G9V5re6lXCtV5KptKs5xLtdN7LRLNNperiCirq5ChNOZN0QkNyLgShrjSgaOXwEQpl1LzMZFtXeJAWG2ugwCMCNzUA833wAgJFXiAwSlUnkYugAJmMGF1gGAPCykUA0eGnu4YEOjRSYWOGAildqzYmsuUy5iUvmJQAQcyg7MCIzJAUw00r8huy/cNv9U28b9Oy0iBBCHGPhRiiWYIThCaZeuGOoyQ7WYu15yXHdWd9Z6msOrSf+Mpywm2TF6mlNJAaDCEAQJmBCbMc6sImYkzqn5TydmE5FtTFmXQHCpN//PAxNRcDG6O/5nYDVKDH5bfR9WU0pr5ggqBA8oDTAQqCi/xcpSpqVz8LlBLOfbs5VZXujdmZpdX5qLSKjpb0upn9qw66lmtflMqp05X1a6/rouqyKIwwBQqKvq+Evp6ksmbcY7m78VoYzhVr5T7cG3l0W5dptdpH/ll+zVtWfx5LUJyri9r6yHdWgjThQG12U2M5TSRrGgXNn3///3/P////99pfGdgs1VMQU1FVUxBTUUzLjk5LjNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//MQxPIAAAP8AcAAAFVVVVVVVVVVVVVVVVU="
                });
            }
        },

        types: {
            sprites: {
                GUI: {
                    description: "Creates and manages a GUI.",
                    args: {
                        submenu: {
                            required: true,
                            check: (value, ob) => {
                                if (ob.submenus[value] == null) {
                                    return "Oh no! That submenu doesn't seem to exist. Make sure it's added in the \"submenus\" argument.";
                                }
                            },
                            types: ["string"],
                            description: "The id of the submenu to start in."
                        },
                        submenus: {
                            required: true,
                            subcheck: {
                                elements: {
                                    required: true,
                                    types: ["array"],
                                    check: value => {
                                        value.internal = {
                                            dontClone: true
                                        };
                                    },
                                    checkEach: true,
                                    subcheck: {
                                        type: {
                                            required: true,
                                            types: ["string"],
                                            description: "The type of element."
                                        },
                                        visible: {
                                            required: false,
                                            default: true,
                                            types: ["boolean"],
                                            description: "If the element is visible or not."
                                        },
                                        fixedToCamera: {
                                            required: false,
                                            default: false,
                                            types: ["boolean"],
                                            description: "If the element should be fixed to the camera or not. This will mean it won't move when the camera moves. It will reattatch temporarily for an animation though."
                                        },

                                        x: {
                                            required: false,
                                            types: [
                                                "number",
                                                "string",
                                                "function"
                                            ],
                                            description: "The x position of the element."
                                        },
                                        y: {
                                            required: false,
                                            types: [
                                                "number",
                                                "string",
                                                "function"
                                            ],
                                            description: "The y position of the element."
                                        },
                                        left: {
                                            required: false,
                                            types: [
                                                "number",
                                                "function"
                                            ],
                                            description: "The x position of the left side of the element."
                                        },
                                        top: {
                                            required: false,
                                            types: [
                                                "number",
                                                "function"
                                            ],
                                            description: "The y position of the top of the element."
                                        },
                                        right: {
                                            required: false,
                                            types: [
                                                "number",
                                                "function"
                                            ],
                                            description: "The x position of the right side of the element."
                                        },
                                        bottom: {
                                            required: false,
                                            types: [
                                                "number",
                                                "function"
                                            ],
                                            description: "The y position of the bottom of the element."
                                        },

                                        internal: {
                                            required: false,
                                            types: ["object"],
                                            description: "Stores some internal values."
                                        }
                                    },
                                    ignoreUseless: true,
                                    arrayLike: true,
                                    description: "The elements for this submenu."
                                },
                                scroll: {
                                    required: false,
                                    default: {},
                                    types: ["object"],
                                    subcheck: {
                                        x: {
                                            required: false,
                                            subcheck: {
                                                min: {
                                                    required: true,
                                                    types: ["number"],
                                                    description: "The minimum camera x when scrolling. The left-most side of the submenu."
                                                },
                                                max: {
                                                    required: true,
                                                    types: ["number"],
                                                    description: "The maximum camera x when scrolling. The right-most side of the submenu."
                                                }
                                            },
                                            types: ["object"],
                                            description: "Options for scrolling horizontally."
                                        },
                                        y: {
                                            required: false,
                                            subcheck: {
                                                min: {
                                                    required: true,
                                                    types: ["number"],
                                                    description: "The minimum camera y when scrolling. The top of the submenu."
                                                },
                                                max: {
                                                    required: true,
                                                    types: ["number"],
                                                    description: "The maximum camera y when scrolling. The bottom of the submenu."
                                                }
                                            },
                                            types: ["object"],
                                            description: "Options for scrolling horizontally."
                                        }
                                    },
                                    description: "Scrolling options for this submenu."
                                },
                                camera: {
                                    required: false,
                                    default: {},
                                    subcheck: {
                                        x: {
                                            required: false,
                                            default: 0,
                                            types: ["number"],
                                            description: "The x position."
                                        },
                                        y: {
                                            required: false,
                                            default: 0,
                                            types: ["number"],
                                            description: "The y position."
                                        }
                                    },
                                    types: ["object"],
                                    description: "The initial camera position for this submenu."
                                },

                                init: {
                                    required: false,
                                    types: ["function"],
                                    description: "A function that runs when this submenu is switched to, after the animation has completed. It's called with the menuSprite and game objects."
                                },
                                main: {
                                    required: false,
                                    types: ["function"],
                                    description: "A function that runs when this submenu is active, after the animation has completed. Called with the menuSprite and game objects."
                                },
                                animationInit: {
                                    required: false,
                                    types: ["function"],
                                    description: "A function that runs as soon as this submenu is switched to, when the animation first starts. Called with the menuSprite, animationVars, submenuChangeAnimation and game."
                                },
                                animationMain: {
                                    required: false,
                                    types: ["function"],
                                    description: "A function that runs as soon as this submenu is active, when the animation is active. It's called with the menuSprite, animationVars, submenuChangeAnimation and game."
                                },

                                hoverText: {
                                    required: false,
                                    types: ["object"],
                                    default: {},
                                    subcheck: (_ => {
                                        let subcheck = Bagel.internal.deepClone(Bagel.internal.plugin.plugin.types.sprites.text.args);
                                        subcheck.fixedToCamera = {
                                            required: false,
                                            default: true,
                                            types: ["boolean"],
                                            description: "If the hover text should be fixed to the camera or not. You'll almost always want this to be true (the default)."
                                        };
                                        delete subcheck.text;
                                        let defaults = {
                                            x: game.width / 2,
                                            bottom: game.height - 10
                                        };
                                        for (let i in defaults) {
                                            subcheck[i].default = defaults[i];
                                        }
                                        return subcheck;
                                    })(),
                                }
                            },
                            types: ["object"],
                            arrayLike: true,
                            description: "The submenus in this menu. The key is the id and the value is an object."
                        },

                        stateToActivate: {
                            required: true,
                            types: ["string"],
                            description: "The game state that this submenu is active."
                        }
                    },
                    cloneArgs: null,
                    check: (menuSprite, game, check, plugin) => {
                        for (let c in menuSprite.submenus) {
                            let elements = menuSprite.submenus[c].elements;
                            for (let i in elements) {
                                let type = elements[i].type;
                                if (plugin.vars.types.elements[type] == null) {
                                    return "Huh, the type " + JSON.stringify(type) + " doesn't seem to exist. It has to be one of these:\n"
                                    + Object.keys(plugin.vars.types.elements).map(value => " • " + JSON.stringify(value) + " -> " + plugin.vars.types.elements[value].description).join("\n") + "\nCheck you haven't mispelt it and that you added the GUIElement asset.";
                                }
                            }
                        }

                        let internal = menuSprite.internal;
                        internal.initialSubmenu = menuSprite.submenu;
                        internal.plugin = plugin;
                        ((menuSprite, plugin) => {
                            menuSprite.internal.finishAnimation = _ => {
                                plugin.vars.finishAnimation(menuSprite, plugin);
                            };
                        })(menuSprite, plugin);

                        menuSprite.scripts.main.push({
                            code: (me, game) => {
                                let internal = me.internal;
                                let plugin = internal.plugin;
                                let animationJustTriggered = false;
                                if (internal.queuedSubmenuChangeAnimation) {
                                    me.submenu = internal.queuedSubmenuChangeAnimation[0];
                                    internal.submenuChangeAnimation = internal.queuedSubmenuChangeAnimation[1];
                                    me.animationActive = true;
                                    internal.queuedSubmenuChangeAnimation = null;
                                    animationJustTriggered = true;
                                }

                                if (me.submenu != me.internal.lastSubmenu) {
                                    plugin.vars.initMenu(me, plugin);
                                    internal.lastSubmenu = me.submenu;
                                }

                                let animation = internal.submenuChangeAnimation;
                                if (animation) {
                                    let method = me.internal.plugin.vars.types.animations[animation.type].menuSprite.main;
                                    if (method) {
                                        method(me, animation, internal.animationVars, internal.finishAnimation, game, me.vars.plugin);
                                    }

                                    let submenuOb = me.submenus[me.submenu];
                                    if (animationJustTriggered && submenuOb.animationInit) {
                                        submenuOb.animationInit(me, internal.animationVars, internal.submenuChangeAnimation, game);
                                    }
                                }
                            },
                            stateToRun: menuSprite.stateToActivate
                        });

                        for (let c in menuSprite.submenus) {
                            let elements = menuSprite.submenus[c].elements;
                            for (let i in elements) {
                                let element = elements[i];

                                let type = Bagel.internal.getTypeOf(element);
                                if (type != "object") {
                                    return "Huh, sprite.elements item " + i + " is " + Bagel.internal.an(type) + "type. It should be an object.";
                                }

                                let elementJSON = plugin.vars.types.elements[element.type];

                                let where = "Game.game.sprites item " + menuSprite.idIndex + ".elements item " + i;
                                check({
                                    ob: element,
                                    where: where,
                                    syntax: {
                                        ...elementJSON.args,
                                        ...plugin.vars.checks.ignoreElement
                                    }
                                });

                                element.submenu = c;

                                if (elementJSON.check) {
                                    let output = elementJSON.check(element, check, where, menuSprite, plugin, game);
                                    if (output) return output;
                                }
                            }
                        }
                    },
                    init: (menuSprite, game, plugin) => {
                        let internal = menuSprite.internal;
                        internal.spriteElements = [];
                        internal.previousSpriteElements = [];
                        internal.spriteElementQueue = [];
                        internal.hoverTextSprite = null;
                        internal.hoverText = "";

                        menuSprite.camera = {
                            x: 0,
                            y: 0
                        };
                        menuSprite.animationActive = false;

                        internal.getFutureID = ((game, findID, menuSpriteID) =>
                            id => findID(menuSpriteID, game, id)
                        )(game, plugin.vars.findID, menuSprite.id);
                    },
                    tick: (menuSprite, game, plugin) => {
                        let internal = menuSprite.internal;
                        let submenuOb = menuSprite.submenus[menuSprite.submenu];

                        Bagel.internal.current.pluginProxy = true;
                        if (internal.submenuChangeAnimation) {
                            if (submenuOb.animationMain) {
                                submenuOb.animationMain(menuSprite, internal.animationVars, internal.submenuChangeAnimation, game);
                            }
                        }
                        else {
                            if (submenuOb.main) {
                                submenuOb.main(menuSprite, game);
                            }

                            let scrollOptions = submenuOb.scroll;
                            if (scrollOptions.x) {
                                if (Math.sign(game.input.scrollDelta.x) == 1) {
                                    if (menuSprite.camera.x < scrollOptions.x.max) {
                                        menuSprite.camera.x = Math.min(menuSprite.camera.x + game.input.scrollDelta.x, scrollOptions.x.max);
                                    }
                                }
                                else {
                                    if (menuSprite.camera.x > scrollOptions.x.min) {
                                        menuSprite.camera.x = Math.max(menuSprite.camera.x + game.input.scrollDelta.x, scrollOptions.x.min);
                                    }
                                }
                            }
                            if (scrollOptions.y) {
                                if (Math.sign(game.input.scrollDelta.y) == 1) {
                                    if (menuSprite.camera.y < scrollOptions.y.max) {
                                        menuSprite.camera.y = Math.min(menuSprite.camera.y + game.input.scrollDelta.y, scrollOptions.y.max);
                                    }
                                }
                                else {
                                    if (menuSprite.camera.y > scrollOptions.y.min) {
                                        menuSprite.camera.y = Math.max(menuSprite.camera.y + game.input.scrollDelta.y, scrollOptions.y.min);
                                    }
                                }
                            }
                        }

                        for (let i in internal.spriteElementQueue) {
                            let data = internal.spriteElementQueue[i];
                            let code = data.code;
                            delete data.code;

                            let sprite = plugin.vars.makeSpriteElement(data.data, menuSprite, plugin, data.element, data.originalElement, data.a, data.linkedElements, data.where);
                            code(sprite, menuSprite, plugin);
                        }
                        internal.spriteElementQueue = [];
                    },
                    listeners: {
                        events: {
                            delete: menuSprite => {
                                let internal = menuSprite.internal;
                                for (let i in internal.spriteElements) {
                                    let element = internal.spriteElements[i];
                                    if (element) {
                                        element.delete();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        methods: {
            sprite: {
                animateSubmenuChange: {
                    fn: {
                        fn: (menuSprite, args, game, plugin) => {
                            if (args.submenu == menuSprite.submenu) return;

                            for (let i in args.optionalValues) {
                                if (args.animation[i] == null) {
                                    args.animation[i] = args.optionalValues[i];
                                }
                            }
                            for (let i in args.defaultOverwrites) {
                                let key = args.defaultOverwrites[i];
                                args.animation[key] = args.optionalValues[key];
                            }

                            let menuSpriteInternal = menuSprite.internal;
                            menuSpriteInternal.queuedSubmenuChangeAnimation = [
                                args.submenu,
                                args.animation
                            ];
                            menuSpriteInternal.animationVars = {
                                internal: {dontClone: true}
                            };
                            menuSprite.internal.previousSpriteElements = [...menuSprite.internal.spriteElements];
                        },
                        args: {
                            submenu: {
                                required: true,
                                types: ["string"],
                                description: "The submenu to switch to."
                            },
                            animation: {
                                required: true,
                                types: ["object"],
                                description: "The animation object. The arguments depend on the animation but the \"type\" argument is always required."
                            },

                            optionalValues: {
                                required: false,
                                default: {},
                                types: ["object"],
                                description: "Allows required arguments to be made optional by using the value set here when unspecficied. For example, a button has a colour so a default can be set like this: menuSprite.animateSubmenuChange(..., ..., {color: element.color});"
                            },
                            defaultOverwrites: {
                                required: false,
                                default: [],
                                types: ["array"],
                                description: "The arguments that should be overwritten because they've defaulted to a value that isn't specific to this instance."
                            }
                        },
                        obArg: false,
                        appliesTo: ["GUI"]
                    }
                }
            }
        },
        listeners: {
            prepState: (state, game, plugin) => {
                for (let i in game.game.sprites) {
                    let menuSprite = game.game.sprites[i];
                    if (menuSprite) {
                        if (menuSprite.type == "GUI") {
                            let internal = menuSprite.internal;
                            if (menuSprite.stateToActivate == state) {
                                if (! internal.initialized) {
                                    internal.initialSubmenu = menuSprite.submenu;
                                    internal.lastSubmenu = menuSprite.submenu;

                                    plugin.vars.initMenu(menuSprite, plugin, ! internal.previouslyInitialized);
                                    internal.previouslyInitialized = true;
                                }
                            }
                            else {
                                menuSprite.submenu = internal.initialSubmenu;
                                internal.initialized = false;

                                for (i in internal.spriteElements) {
                                    let element = internal.spriteElements[i];
                                    if (element) {
                                        element.delete();
                                    }
                                }
                                internal.spriteElements = [];
                            }
                        }
                    }
                }
            }
        }
    },
    vars: {
        initMenu: (menuSprite, plugin, initial) => {
            let internal = menuSprite.internal;
            internal.spriteElementQueue = [];
            internal.hoverText = "";
            internal.hoverTextSprite = null;

            let submenuOb = menuSprite.submenus[menuSprite.submenu];
            let game = menuSprite.game;
            internal.initialElements = Bagel.internal.deepClone(submenuOb.elements);
            if (initial) {
                for (let c in menuSprite.submenus) {
                    let elements = menuSprite.submenus[c].elements;
                    for (let i in elements) {
                        let element = elements[i];
                        let handler = plugin.vars.types.elements[element.type];

                        if (handler.preload) {
                            handler.preload(element, game, plugin);
                        }
                    }
                }
                if (game.internal.assets.loading != 0) return; // Something is loading
            }

            let animation = internal.submenuChangeAnimation;
            let animationHandler = animation? plugin.vars.types.animations[animation.type] : {};

            let previousSubmenu = menuSprite.submenus[internal.lastSubmenu];
            previousSubmenu.camera.x = menuSprite.camera.x;
            previousSubmenu.camera.y = menuSprite.camera.y;
            menuSprite.camera.x = submenuOb.camera.x;
            menuSprite.camera.y = submenuOb.camera.y;



            let spriteElements = internal.spriteElements;
            let animationSprites;
            if (animation) {
                let methods = animationHandler;
                if (methods.menuSprite.init) {
                    Bagel.internal.saveCurrent();
                    Bagel.internal.current.sprite = menuSprite;
                    animationSprites = methods.menuSprite.init(menuSprite, animation, internal.animationVars, game, plugin, internal.finishAnimation);
                    if (animationSprites) {
                        if (! Array.isArray(animationSprites)) animationSprites = [animationSprites];
                    }


                    Bagel.internal.loadCurrent();
                }
            }
            for (let i in spriteElements) {
                let spriteElement = spriteElements[i];
                if (spriteElement) {
                    let vars = spriteElement.vars;
                    vars.old = true;
                    if (vars.spriteElementID == 0) {
                        if (vars.element.fixedToCamera) {
                            vars.element.x += menuSprite.camera.x;
                            vars.element.y += menuSprite.camera.y;
                            vars.element.fixedToCamera = false;
                        }
                        else {
                            vars.element.x -= previousSubmenu.camera.x - menuSprite.camera.x;
                            vars.element.y -= previousSubmenu.camera.y - menuSprite.camera.y;
                        }
                    }
                    vars.animationInitialized = false;
                    vars.elementAnimationVars = {};
                }
            }
            for (i in internal.initialElements) {
                let element = Bagel.internal.deepClone(internal.initialElements[i]);
                let originalElement = Bagel.internal.deepClone(element);

                let handler = plugin.vars.types.elements[element.type];
                let spriteDatas = typeof handler.spriteDatas == "function"?
                handler.spriteDatas(element, game, menuSprite.internal.getFutureID, menuSprite, plugin)
                : handler.spriteDatas;
                if (spriteDatas == null) spriteDatas = [];
                else {
                    if (! Array.isArray(spriteDatas)) spriteDatas = [spriteDatas];
                }

                let spriteElements = menuSprite.internal.spriteElements;
                let linkedElements = [];
                for (let a in spriteDatas) {
                    let data = spriteDatas[a];

                    plugin.vars.makeSpriteElement(data, menuSprite, plugin, element, originalElement, a, linkedElements, "the plugin BagelGUI element type " + element.type + ".spriteDatas item " + a);
                }
            }

            for (let i in animationSprites) {
                let data = animationSprites[i];
                data.id = plugin.vars.findID(menuSprite.id, game);
                if (! data.vars) data.vars = {};
                data.vars.menuSprite = menuSprite;
                data.vars.plugin = plugin;
                data.vars.animation = animation;
                data.vars.animationVars = internal.animationVars;
                data.vars.isAnimationSprite = true;

                if (! data.scripts) data.scripts = {};
                if (! data.scripts.init) data.scripts.init = [];

                data.scripts.init.splice(0, 0, { // Replace the delete function
                    code: plugin.vars.process.element.overrideDelete,
                    stateToRun: game.state
                });

                let sprite = game.add.sprite(data, "the " + Bagel.internal.th(parseInt(i)) + " sprite created by the " + JSON.stringify(animation.type) + " animation in menuSprite.init");

                plugin.vars.addSpriteElement(sprite, menuSprite);
            }
            internal.initialized = true;
        },
        /*
        deleteMenu: (menuSprite, plugin) => {
            let elements = menuSprite.internal.spriteElements;
            for (let i in elements) {
                if (elements[i]) {
                    elements[i].delete();
                }
            }
            menuSprite.internal.spriteElements = [];
        },
        */

        findID: (base, game, min = 0) => {
            let i = 0;
            while (true) {
                let id = base + "#" + i;
                if (! game.get.sprite(id, true)) {
                    if (min == 0) return id;
                    min--;
                }
                i++;
            }
        },
        queueMakeSpriteElement: (code, data, menuSprite, plugin, element, originalElement, a = 0, linkedElements = [], where = "the function BagelUI.vars.makeSpriteElement") => {
            menuSprite.internal.spriteElementQueue.push({
                data: data,
                element: element,
                originalElement: originalElement,
                a: a,
                linkedElements: linkedElements,
                where: where,
                code: code
            });
        },
        makeSpriteElement: (data, menuSprite, plugin, element, originalElement, a = 0, linkedElements = [], where = "the function BagelUI.vars.makeSpriteElement") => {
            let game = menuSprite.game;
            let internal = menuSprite.internal;
            let animation = internal.submenuChangeAnimation;
            let animationHandler = animation? plugin.vars.types.animations[animation.type] : {};

            data.id = plugin.vars.findID(menuSprite.id, game);
            if (! data.vars) data.vars = {};
            data.vars.element = element;
            data.vars.originalElement = originalElement? originalElement : Bagel.internal.deepClone(element);
            data.vars.spriteElementID = a;
            data.vars.animation = animation;
            data.vars.animationVars = internal.animationVars;
            data.vars.menuSprite = menuSprite;
            data.vars.plugin = plugin;
            data.vars.elementAnimationVars = {};
            data.vars.linkedElements = linkedElements;
            data.vars.old = false;
            data.visible = false;
            if (animationHandler.hideNew) {
                data.vars.element.visible = false;
            }

            if (! data.scripts) data.scripts = {};
            if (! data.scripts.init) data.scripts.init = [];
            if (! data.scripts.main) data.scripts.main = [];

            if (data.minProcess) {
                data.scripts.init.splice(0, 0, {
                    code: plugin.vars.process.element.minInit,
                    stateToRun: game.state,
                    affectVisible: false
                });
                data.scripts.main.splice(0, 0, {
                    code: plugin.vars.process.element.minMain,
                    stateToRun: game.state
                });
            }
            else {
                data.scripts.init.splice(0, 0, {
                    code: plugin.vars.process.element.init,
                    stateToRun: game.state,
                    affectVisible: false
                });
                data.scripts.main.splice(0, 0, {
                    code: plugin.vars.process.element.main,
                    stateToRun: game.state
                });
            }

            let c = data.minProcess? 0 : 1;
            while (c < data.scripts.init.length) {
                let script = data.scripts.init[c];
                if (typeof script == "object") {
                    if (script.stateToRun == null) script.stateToRun = game.state;
                    script.affectVisible = false;
                }
                else if (typeof script == "function") {
                    data.scripts.init[c] = {
                        code: script,
                        stateToRun: game.state,
                        affectVisible: false
                    };
                }
                c++;
            }


            c = data.minProcess? 0 : 1;
            while (c < data.scripts.main.length) {
                let script = data.scripts.main[c];
                if (typeof script == "object") {
                    if (script.stateToRun == null) script.stateToRun = game.state;
                }
                else if (typeof script == "function") {
                    data.scripts.main[c] = {
                        code: script,
                        stateToRun: game.state
                    };
                }
                c++;
            }

            let tagTypes = ["minProcess", "deleteOnOtherDelete"];
            data.vars.tags = {};
            for (c in tagTypes) {
                if (data.hasOwnProperty(tagTypes[c])) {
                    data.vars.tags[tagTypes[c]] = data[tagTypes[c]];
                    delete data[tagTypes[c]];
                }
            }
            let sprite = game.add.sprite(data, where);

            plugin.vars.addSpriteElement(sprite, menuSprite);
            linkedElements.push(sprite);
            return sprite;
        },
        addSpriteElement: (sprite, menuSprite) => {
            let spriteElements = menuSprite.internal.spriteElements;
            let index = 0;
            while (index < spriteElements.length) {
                if (spriteElements[index] == null) break;
                index++;
            }
            spriteElements[index] = sprite;
            return index;
        },
        finishAnimation: (menuSprite, plugin) => {
            let internal = menuSprite.internal;
            let spriteElements = internal.spriteElements;
            let animationHandler = internal.submenuChangeAnimation? plugin.vars.types.animations[internal.submenuChangeAnimation.type] : {};
            internal.submenuChangeAnimation = null;
            menuSprite.animationActive = false;

            let toDelete = internal.previousSpriteElements;
            for (let i in toDelete) {
                if (toDelete[i]) {
                    delete spriteElements[spriteElements.findIndex(value => value && value.id == toDelete[i].id)];
                    toDelete[i].delete();
                }
            }

            for (let i in spriteElements) {
                if (spriteElements[i]) {
                    if (spriteElements[i].vars.isAnimationSprite) {
                        spriteElements[i].delete();
                        delete spriteElements[i];
                    }
                    else {
                        let element = spriteElements[i].vars.element;
                        let originalElement = spriteElements[i].vars.originalElement;
                        element.x = originalElement.x;
                        element.y = originalElement.y;
                        if (originalElement.fixedToCamera) {
                            element.fixedToCamera = true;
                        }

                        if (animationHandler.hideNew) {
                            element.visible = originalElement.visible;
                        }
                    }
                }
            }
            internal.previousSpriteElements = [];
            menuSprite.camera.x = 0;
            menuSprite.camera.y = 0;

            if (menuSprite.submenus[menuSprite.submenu].init) {
                Bagel.internal.current.pluginProxy = true;
                menuSprite.submenus[menuSprite.submenu].init(menuSprite, menuSprite.game);
            }
        },

        process: {
            element: {
                overrideDelete: me => {
                    me.internal.delete = me.delete;
                    (me => {
                        me.delete = _ => {
                            let menuSprite = me.vars.menuSprite;
                            let index = menuSprite.internal.spriteElements.findIndex(value => value && value.id == me.id);
                            if (index != -1) {
                                delete menuSprite.internal.spriteElements[index];
                            }
                            index = menuSprite.internal.previousSpriteElements.findIndex(value => value && value.id == me.id);
                            if (index != -1) {
                                delete menuSprite.internal.previousSpriteElements[index];
                            }

                            if (me.vars.linkedElements && (! me.vars.dontDeleteOthers)) {
                                for (let i in me.vars.linkedElements) {
                                    if (i == 0 || me.vars.linkedElements[i] == null) continue;
                                    if (me.vars.linkedElements[i].vars.tags.deleteOnOtherDelete) {
                                        me.vars.linkedElements[i].vars.dontDeleteOthers = true;
                                        me.vars.linkedElements[i].delete();
                                    }
                                }
                            }

                            me.internal.delete();
                        };
                    })(me);
                },
                hideIfOffScreen: me => {
                    let visible = me.vars.element.visible;
                    if (me.x > game.width / 2) {
                        if (me.left > game.width) {
                            visible = false;
                        }
                    }
                    else {
                        if (me.right < 0) {
                            visible = false;
                        }
                    }

                    if (me.y > game.height / 2) {
                        if (me.top > game.height) {
                            visible = false;
                        }
                    }
                    else {
                        if (me.bottom < 0) {
                            visible = false;
                        }
                    }

                    me.visible = visible;
                },
                initElementPosition: me => {
                    if (me.vars.spriteElementID == 0) {
                        if (me.width == null) me.width = me.game.width;
                        if (me.height == null) me.height = me.game.height;

                        let element = me.vars.element;
                        if (element.hasOwnProperty("x") && element.x != "centered") {
                            me.x = element.x;
                        }
                        else if (element.hasOwnProperty("right")) {
                            me.right = element.right;
                        }
                        else if (element.hasOwnProperty("left")) {
                            me.left = element.left;
                        }
                        else if (element.hasOwnProperty("x")) {
                            me.x = element.x;
                        }

                        if (element.hasOwnProperty("y") && element.y != "centered") {
                            me.y = element.y;
                        }
                        else if (element.hasOwnProperty("bottom")) {
                            me.bottom = element.bottom;
                        }
                        else if (element.hasOwnProperty("top")) {
                            me.top = element.top;
                        }
                        else if (element.hasOwnProperty("y")) {
                            me.y = element.y;
                        }

                        element.x = me.x;
                        element.y = me.y;
                        me.vars.originalElement.x = me.x;
                        me.vars.originalElement.y = me.y;
                    }
                },
                minInit: me => {
                    me.vars.plugin.vars.process.element.overrideDelete(me);
                    let menuSprite = me.vars.menuSprite;
                    let element = me.vars.element;
                    me.vars.plugin.vars.process.element.initElementPosition(me);
                    if (element.fixedToCamera) {
                        me.x = element.x;
                        me.y = element.y;
                    }
                    else {
                        me.x = element.x - me.vars.menuSprite.camera.x;
                        me.y = element.y - me.vars.menuSprite.camera.y;
                    }
                    me.vars.plugin.vars.process.element.hideIfOffScreen(me);
                },
                init: me => {
                    me.vars.plugin.vars.process.element.minInit(me);
                    if (me.vars.animation) {
                        let element = me.vars.element;
                        if (element.fixedToCamera) {
                            element.x += me.vars.menuSprite.camera.x;
                            element.y += me.vars.menuSprite.camera.y;
                            element.fixedToCamera = false;
                        }

                        let method = me.vars.plugin.vars.types.animations[me.vars.animation.type].elements.create;
                        if (method) {
                            method(element, me.vars.animation, me.vars.menuSprite, me.game, me.vars.plugin, me);
                        }
                    }
                },
                minMain: me => {
                    let animationOb = me.vars.menuSprite.internal.submenuChangeAnimation;
                    me.vars.active = (! animationOb) && me.visible;
                    me.vars.plugin.vars.process.element.hideIfOffScreen(me);
                    if (me.vars.active) {
                        me.layer.bringToFront();
                    }
                },
                main: me => {
                    let element = me.vars.element;
                    let animationOb = me.vars.menuSprite.internal.submenuChangeAnimation;
                    me.vars.active = (! animationOb) && me.visible;
                    if (animationOb) {
                        let methods = me.vars.plugin.vars.types.animations[animationOb.type].elements;
                        let animation = me.vars.menuSprite.internal.submenuChangeAnimation;
                        if (! me.vars.animationInitialized) {
                            if (methods.init) {
                                methods.init(element, animation, me.vars.menuSprite.internal.animationVars, me.vars.menuSprite, me.game, me.vars.plugin, me);
                            }
                            me.vars.animationInitialized = true;
                        }
                        if (methods.main) {
                            methods.main(element, animation, me.vars.menuSprite.internal.animationVars, me.vars.menuSprite.internal.finishAnimation, me.vars.menuSprite, me.game, me.vars.plugin, me);
                        }
                    }
                    if (element.fixedToCamera) {
                        me.x = element.x;
                        me.y = element.y;
                    }
                    else {
                        me.x = element.x - me.vars.menuSprite.camera.x;
                        me.y = element.y - me.vars.menuSprite.camera.y;
                    }
                    me.vars.plugin.vars.process.element.hideIfOffScreen(me);

                    if (me.vars.active) {
                        me.layer.bringToFront();
                    }
                }
            }
        },

        types: {
            animations: {
                scroll: {
                    elements: {
                        create: (element, animation, menuSprite, game, plugin, sprite) => {
                            sprite.vars.animationVars.notEmpty = true;
                            let initial;
                            let xMove = 0;
                            let yMove = 0;
                            if (animation.direction == "left") {
                                initial = element.x;
                                xMove = -game.width;
                            }
                            else if (animation.direction == "right") {
                                initial = element.x;
                                xMove = game.width;
                            }
                            else if (animation.direction == "up") {
                                initial = element.y;
                                yMove = -game.height;
                            }
                            else {
                                initial = element.y;
                                yMove = game.height;
                            }

                            if (animation.stillCamera) {
                                if (! animation.scrollOld) {
                                    sprite.vars.elementAnimationVars.initialPosition = initial;
                                    element.visible = false;
                                    element.x -= xMove;
                                    element.y -= yMove;
                                }
                            }
                            else {
                                element.x += xMove;
                                element.y += yMove;
                            }
                        },
                        init: (element, animation, animationVars, menuSprite, game, plugin, sprite) => {
                            if (animation.stillCamera && sprite.vars.old == animation.scrollOld) {
                                if (animation.scrollOld) {
                                    let initial;
                                    if (animation.direction == "left" || animation.direction == "right") {
                                        initial = element.x;
                                    }
                                    else {
                                        initial = element.y;
                                    }
                                    sprite.vars.elementAnimationVars.initialPosition = initial;
                                }
                                if (animation.scrollOld) {
                                    sprite.layer.bringToFront();
                                }
                                else {
                                    element.visible = sprite.vars.originalElement.visible;
                                }
                            }
                        },
                        main: (element, animation, animationVars, finishAnimation, menuSprite, game, plugin, sprite) => {
                            if (animation.stillCamera && sprite.vars.old == animation.scrollOld) {
                                let moved;
                                let initial = sprite.vars.elementAnimationVars.initialPosition;
                                if (animation.direction == "left" || animation.direction == "right") {
                                    element.x += animationVars.vel;
                                    moved = element.x - initial;
                                }
                                else {
                                    element.y += animationVars.vel;
                                    moved = element.y - initial;
                                }

                                if (animation.scrollOld) {
                                    if (animation.direction == "left") {
                                        if (moved <= -game.width) {
                                            element.x = initial - game.width;
                                            animationVars.finished = true;
                                        }
                                    }
                                    else if (animation.direction == "right") {
                                        if (moved >= game.width) {
                                            element.x = initial + game.width;
                                            animationVars.finished = true;
                                        }
                                    }
                                    else if (animation.direction == "up") {
                                        if (moved <= -game.height) {
                                            element.y = initial - game.height;
                                            animationVars.finished = true;
                                        }
                                    }
                                    else if (animation.direction == "down") {
                                        if (moved >= game.height) {
                                            element.y = initial + game.height;
                                            animationVars.finished = true;
                                        }
                                    }
                                }
                                else {
                                    if (animation.direction == "left") {
                                        if (moved <= 0) {
                                            element.x = initial;
                                            animationVars.finished = true;
                                        }
                                    }
                                    else if (animation.direction == "right") {
                                        if (moved >= 0) {
                                            element.x = initial;
                                            animationVars.finished = true;
                                        }
                                    }
                                    else if (animation.direction == "up") {
                                        if (moved <= 0) {
                                            element.y = initial;
                                            animationVars.finished = true;
                                        }
                                    }
                                    else if (animation.direction == "down") {
                                        if (moved >= 0) {
                                            element.y = initial;
                                            animationVars.finished = true;
                                        }
                                    }
                                }
                            }
                        }
                    },
                    menuSprite: {
                        init: (menuSprite, animation, animationVars) => {
                            if (! animation.stillCamera) {
                                if (animation.direction == "left" || animation.direction == "right") {
                                    animationVars.initialCameraPosition = menuSprite.camera.x;
                                }
                                else {
                                    animationVars.initialCameraPosition = menuSprite.camera.y;
                                }
                            }

                            if (animation.direction == "left" || animation.direction == "up") {
                                animationVars.vel = -5;
                            }
                            else {
                                animationVars.vel = 5;
                            }
                        },
                        main: (menuSprite, animation, animationVars, finish) => {
                            let game = menuSprite.game;
                            if (animation.direction == "left") {
                                animationVars.vel -= game.width / 125;
                            }
                            else if (animation.direction == "right") {
                                animationVars.vel += game.width / 125;
                            }
                            else if (animation.direction == "up") {
                                animationVars.vel -= game.height / 125;
                            }
                            else {
                                animationVars.vel += game.height / 125;
                            }

                            if (animation.stillCamera) {
                                if (animationVars.finished || (! animationVars.notEmpty)) { // Finish the animation if the submenu is empty
                                    finish();
                                }
                            }
                            else {
                                let moved;
                                if (animation.direction == "left" || animation.direction == "right") {
                                    menuSprite.camera.x += animationVars.vel;
                                    moved = menuSprite.camera.x - animationVars.initialCameraPosition;
                                }
                                else {
                                    menuSprite.camera.y += animationVars.vel;
                                    moved = menuSprite.camera.y - animationVars.initialCameraPosition;
                                }

                                if (animation.direction == "left") {
                                    if (moved <= -game.width) {
                                        menuSprite.camera.x = animationVars.initialCameraPosition - game.width;
                                        finish();
                                    }
                                }
                                else if (animation.direction == "right") {
                                    if (moved >= game.width) {
                                        menuSprite.camera.x = animationVars.initialCameraPosition + game.width;
                                        finish();
                                    }
                                }
                                else if (animation.direction == "up") {
                                    if (moved <= -game.height) {
                                        menuSprite.camera.y = animationVars.initialCameraPosition - game.height;
                                        finish();
                                    }
                                }
                                else if (animation.direction == "down") {
                                    if (moved >= game.height) {
                                        menuSprite.camera.y = animationVars.initialCameraPosition + game.height;
                                        finish();
                                    }
                                }
                            }
                            animationVars.vel *= 0.9;
                        }
                    },
                    args: {
                        direction: {
                            required: false,
                            default: "right",
                            types: ["string"],
                            check: value => {
                                if (! [
                                    "left",
                                    "right",
                                    "up",
                                    "down"
                                ].includes(value)) {
                                    return "Oh no! This must be either \"left\", \"right\", \"up\" or \"down\".";
                                }
                            },
                            description: "The direction for either the camera to scroll (so the elements scroll the opposite way). Or either the old or new elements (depends on \"scrollOld\") to scroll (if \"stillCamera\" is true). Either \"left\", \"right\", \"up\" or \"down\"."
                        },
                        stillCamera: {
                            required: false,
                            default: false,
                            types: ["boolean"],
                            description: "If the camera shouldn't move and either the new or old elements should move instead or not. If set to true and \"scrollOld\" set to false, you'll want a new background to cover up the old elements."
                        },
                        scrollOld: {
                            required: false,
                            default: false,
                            types: ["boolean"],
                            description: "Only applies when \"stillCamera\" is true. Determines if the old or new elements should move."
                        }
                    },
                    description: "Either the camera, new elements or old elements scroll in one of four directions to reveal the elements in another submenu."
                },
                triangleScroll: {
                    elements: {
                        main: (element, animation, animationVars, finish, menuSprite, game, plugin, sprite) => {
                            if (animationVars.covered && (! animationVars.coveredDone)) {
                                if (sprite.vars.old) {
                                    sprite.delete();
                                }
                                else {
                                    element.visible = sprite.vars.originalElement.visible;
                                    sprite.layer.bringToFront();
                                }
                            }
                        }
                    },
                    menuSprite: {
                        init: (menuSprite, animation, animationVars, game, plugin, finish) => {
                            let dir = animation.direction;
                            if (dir == "left" || dir == "right") {
                                animationVars.triangleWidth = game.height / 2;
                                animationVars.triangleHeight = game.height;
                            }
                            else {
                                animationVars.triangleWidth = game.width / 2;
                                animationVars.triangleHeight = game.width;
                            }

                            return {
                                type: "canvas",
                                fullRes: true,
                                width: animationVars.triangleWidth,
                                height: animationVars.triangleHeight,
                                mode: "static",
                                vars: {
                                    dir: dir,
                                    vel: 0,
                                    finish: finish
                                },
                                clones: {
                                    prerender: (me, game, ctx, canvas) => {
                                        ctx.fillStyle = "black";
                                        if (me.cloneID == 0) {
                                            let dir = me.vars.dir;
                                            if (dir == "left" || dir == "right") {
                                                me.width = game.width * 1.25;
                                                me.height = game.height;
                                            }
                                            else {
                                                me.width = game.width;
                                                me.height = game.height * 1.25;
                                            }

                                            ctx.fillRect(0, 0, 1, 1);
                                        }
                                        else {
                                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                                            ctx.beginPath();
                                            ctx.moveTo(0, 0);
                                            ctx.lineTo(canvas.width, 0);
                                            ctx.lineTo(canvas.width, canvas.height / 2);
                                            ctx.lineTo(0, 0);
                                            ctx.fill();

                                            ctx.beginPath();
                                            ctx.moveTo(0, canvas.height);
                                            ctx.lineTo(canvas.width, canvas.height);
                                            ctx.lineTo(canvas.width, canvas.height / 2);
                                            ctx.lineTo(0, canvas.height);
                                            ctx.fill();

                                            me.vars.otherClone = game.get.sprite(me.parent.cloneIDs[0]);
                                        }
                                    },
                                    scripts: {
                                        main: [
                                            (me, game) => {
                                                me.layer.bringToFront();

                                                let dir = me.vars.dir;
                                                if (dir == "left") {
                                                    if (me.cloneID == 0) {
                                                        me.left = me.parent.right;
                                                    }
                                                    else {
                                                        me.left = me.vars.otherClone.right;
                                                    }
                                                    if (me.right < 0) {
                                                        if (me.cloneID == 1) {
                                                            me.parent.vars.done = true;
                                                        }
                                                    }
                                                }
                                                else if (dir == "right") {
                                                    if (me.cloneID == 0) {
                                                        me.right = me.parent.left;
                                                    }
                                                    else {
                                                        me.right = me.vars.otherClone.left;
                                                    }
                                                    if (me.left > game.width) {
                                                        if (me.cloneID == 1) {
                                                            me.parent.vars.done = true;
                                                        }
                                                    }
                                                }
                                                else if (dir == "up") {
                                                    if (me.cloneID == 0) {
                                                        me.top = me.parent.y + (me.parent.width / 2);
                                                    }
                                                    else {
                                                        me.y = me.vars.otherClone.bottom + (me.width / 2);
                                                    }
                                                    if (me.bottom < 0) {
                                                        if (me.cloneID == 1) {
                                                            me.parent.vars.done = true;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (me.cloneID == 0) {
                                                        me.bottom = me.parent.y - (me.parent.width / 2);
                                                    }
                                                    else {
                                                        me.y = me.vars.otherClone.top - (me.width / 2);
                                                    }

                                                    if (me.top > game.height) {
                                                        if (me.cloneID == 1) {
                                                            me.parent.vars.done = true;
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                scripts: {
                                    init: [
                                        {
                                            code: (me, game) => {
                                                let dir = me.vars.dir;
                                                if (dir == "left") {
                                                    me.angle = -90;
                                                    me.left = game.width;
                                                }
                                                else if (dir == "right") {
                                                    me.right = 0;
                                                }
                                                else if (dir == "up") {
                                                    me.angle = 0;
                                                    me.y = game.height + (me.width / 2);
                                                }
                                                else {
                                                    me.y = -(me.width / 2);
                                                    me.angle = 180;
                                                }

                                                me.clone({
                                                    width: 1,
                                                    height: 1,
                                                    angle: 90,
                                                    fullRes: false,
                                                    updateRes: false
                                                });

                                                me.clone(); // Inverted triangle
                                            },
                                            stateToRun: game.state
                                        }
                                    ],
                                    main: [
                                        {
                                            code: me => {
                                                let vars = me.vars;
                                                let dir = vars.dir;
                                                if (dir == "left" || dir == "up") {
                                                    vars.vel -= 5;
                                                }
                                                else {
                                                    vars.vel += 5;
                                                }

                                                if (dir == "left" || dir == "right") {
                                                    me.x += vars.vel;
                                                    if (dir == "left") {
                                                        if (me.right < 0) {
                                                            me.vars.animationVars.covered = true;
                                                        }
                                                    }
                                                    else {
                                                        if (me.left > game.width) {
                                                            me.vars.animationVars.covered = true;
                                                        }
                                                    }
                                                }
                                                else {
                                                    me.y += vars.vel;
                                                    if (dir == "up") {
                                                        if (me.bottom < 0) {
                                                            me.vars.animationVars.covered = true;
                                                        }
                                                    }
                                                    else {
                                                        if (me.top > game.height) {
                                                            me.vars.animationVars.covered = true;
                                                        }
                                                    }
                                                }
                                                vars.vel *= 0.9;

                                                if (me.vars.done) { // Set by clone
                                                    me.vars.finish(); // Also deletes animation sprites
                                                }
                                            },
                                            stateToRun: game.state
                                        }
                                    ]
                                },
                                prerender: (me, game, ctx, canvas) => {
                                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    ctx.fillStyle = "black";
                                    ctx.beginPath();
                                    ctx.moveTo(0, 0);
                                    ctx.lineTo(0, canvas.height);
                                    ctx.lineTo(canvas.width, canvas.height / 2);
                                    ctx.lineTo(0, 0);
                                    ctx.fill();
                                }
                            };
                        },
                        main: (menuSprite, animation, animationVars) => {
                            if (animationVars.covered) {
                                if (animationVars.waited) {
                                    animationVars.coveredDone = true;
                                }
                                else {
                                    animationVars.waited = true;
                                }
                            }
                        }
                    },
                    args: {
                        direction: {
                            required: false,
                            default: "right",
                            types: ["string"],
                            check: value => {
                                if (! [
                                    "left",
                                    "right",
                                    "up",
                                    "down"
                                ].includes(value)) {
                                    return "Oh no! This must be either \"left\", \"right\", \"up\" or \"down\".";
                                }
                            },
                            description: "The direction for the triangle to move. Either \"left\", \"right\", \"up\" or \"down\"."
                        }
                    },
                    hideNew: true,
                    description: "A fairly simple animation where a triangle covers up the screen before another triangle erases it and reveals the new submenu."
                },
                circle: {
                    elements: {
                        create: (element, animation, menuSprite, game, plugin, sprite) => {
                            if (animation.direction == "open") {
                                sprite.vars.animationVars.notEmpty = true;
                                sprite.vars.elementAnimationVars.initialPosition = element.y;
                                element.y += game.height;
                            }
                        },
                        init: (element, animation, animationVars, menuSprite, game, plugin, sprite) => {
                            if (animation.direction == "close" && sprite.vars.old) {
                                sprite.vars.elementAnimationVars.initialPosition = element.y;
                                if (sprite.bottom < 0) {
                                    sprite.vars.originalElement.visible = false;
                                }
                            }
                        },
                        main: (element, animation, animationVars, finishAnimation, menuSprite, game, plugin, sprite) => {
                            if (
                                (animation.direction == "open" && (! sprite.vars.old) && animationVars.circleDone)
                                || (animation.direction == "close" && sprite.vars.old && (! animationVars.oldScrolled))
                            ) {
                                element.visible = sprite.vars.originalElement.visible;
                                let initial = sprite.vars.elementAnimationVars.initialPosition;
                                element.y += animationVars.vel;
                                let moved = element.y - initial;

                                if (animation.direction == "open") {
                                    if (moved <= 0) {
                                        element.y = initial;
                                        animationVars.finished = true;
                                    }
                                }
                                else {
                                    if (moved >= game.height) {
                                        animationVars.oldNearlyScrolled = true;
                                        element.visible = false;
                                    }
                                }
                            }

                            if (animation.direction == "close" && animationVars.oldScrolled && (! sprite.vars.old)) {
                                element.visible = sprite.vars.originalElement.visible;
                            }
                        }
                    },
                    menuSprite: {
                        init: (menuSprite, animation, animationVars) => {
                            let game = menuSprite.game;
                            if (animation.direction == "open") {
                                let previousSubmenu = menuSprite.submenus[menuSprite.internal.lastSubmenu];
                                animation.x -= previousSubmenu.camera.x;
                                animation.y -= previousSubmenu.camera.y;
                            }
                            else {
                                animation.x -= menuSprite.camera.x;
                                animation.y -= menuSprite.camera.y;
                            }
                            animation.x = Math.max(Math.min(animation.x, game.width), 0);
                            animation.y = Math.max(Math.min(animation.y, game.height), 0);
                            animationVars.vel = 3 * (animation.direction == "open"? -1 : 1);

                            let size = animation.direction == "open"? Math.max(game.width, game.height) * animation.resolution : 1;
                            return {
                                type: "canvas",
                                mode: "static",
                                x: animation.direction == "open"? animation.x : (game.width / 2),
                                y: animation.direction == "open"? animation.y : -(game.height / 2),
                                vars: {
                                    vel: 2,
                                    burstTick: 0,
                                    doneTick: 0,
                                    renderMode: animation.direction == "open"
                                },
                                fullRes: animation.direction == "open",
                                prerender: (me, game, ctx, canvas) => {
                                    if (me.vars.renderMode) {
                                        ctx.fillStyle = me.vars.animation.color;
                                        ctx.beginPath();
                                        let half = canvas.width / 2;
                                        ctx.arc(half, half, half, 0, Math.PI * 2);
                                        ctx.fill();

                                        me.updateRes = false;
                                        if (me.vars.animation.direction == "open") {
                                            me.width = me.vars.animation.initialSize;
                                        }
                                        else {
                                            me.width = me.vars.pendingWidth;
                                        }
                                        me.height = me.width;
                                    }
                                    else {
                                        ctx.fillStyle = me.vars.animation.color;
                                        ctx.fillRect(0, 0, 1, 1);

                                        me.updateRes = false;
                                        me.width = game.width;
                                        me.height = game.height;
                                        if (me.vars.animation.direction == "open") {
                                            me.x = game.width / 2;
                                            me.y = game.height / 2;

                                            let camera = me.vars.menuSprite.camera;
                                            me.width += camera.x;
                                            me.height += camera.y;
                                            me.x -= camera.x / 2;
                                            me.y -= camera.y / 2;
                                        }
                                    }
                                },
                                scripts: {
                                    main: [
                                        {
                                            code: (me, game) => {
                                                me.layer.bringToFront();
                                                if (me.vars.doneTick == 0) {
                                                    if (me.vars.animationVars.oldScrolled || me.vars.animation.direction == "open") {
                                                        if (me.vars.animation.direction == "close") {
                                                            if (! me.vars.oldScrolledWas) {
                                                                me.x = me.vars.animation.x;
                                                                me.y = me.vars.animation.y;
                                                                let squareWidth = Math.max(Math.max(me.x, game.width - me.x) * 2, Math.max(me.y, game.height - me.y) * 2);
                                                                me.vars.pendingWidth = Math.floor(Math.sqrt(Math.pow((squareWidth + 1) * 2, 2) / 2));
                                                                me.width = Math.max(game.width, game.height) * me.vars.animation.resolution;
                                                                me.height = me.width;
                                                                me.vars.renderMode = true;
                                                                me.updateRes = true;
                                                                me.fullRes = true;
                                                                me.vars.oldScrolledWas = true;
                                                            }
                                                        }

                                                        me.vars.burstTick++;
                                                        if (me.vars.burstTick == 15) {
                                                            me.vars.vel += 50;
                                                        }
                                                        else {
                                                            me.vars.vel++;
                                                        }

                                                        me.width += me.vars.vel * (me.vars.animation.direction == "open"? 1 : -1);
                                                        me.height = me.width;

                                                        if (me.vars.animation.direction == "open") {
                                                            let squareWidth = Math.floor(Math.sqrt(Math.pow(me.width, 2) * 2) / 2);
                                                            if (
                                                                me.x - (squareWidth / 2) <= 0
                                                                && me.x + (squareWidth / 2) >= game.width
                                                                && me.y - (squareWidth / 2) <= 0
                                                                && me.y + (squareWidth / 2) >= game.height
                                                            ) {
                                                                me.vars.doneTick = 1;
                                                                me.vars.renderMode = false;
                                                                me.width = 1;
                                                                me.height = 1;
                                                                me.updateRes = true;
                                                                me.fullRes = false;
                                                            }
                                                        }
                                                        else {
                                                            if (me.width <= 1) {
                                                                me.delete();
                                                                me.vars.animationVars.finished = true;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        me.y += me.vars.animationVars.vel;
                                                        if (me.vars.animation.direction == "close") {
                                                            if (me.y > game.height / 2) me.y = game.height / 2;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (me.vars.doneTick == 16) {
                                                        me.y += me.vars.animationVars.vel;
                                                    }
                                                    else if (me.vars.doneTick == 15) {
                                                        me.vars.doneTick++;
                                                        me.vars.animationVars.circleDone = true;
                                                    }
                                                    else {
                                                        me.vars.doneTick++;
                                                    }
                                                }
                                            },
                                            stateToRun: game.state
                                        }
                                    ]
                                },
                                width: size,
                                height: size
                            };
                        },
                        main: (menuSprite, animation, animationVars, finish) => {
                            if (animation.direction == "open") {
                                if (animationVars.finished || (animationVars.circleDone && (! animationVars.notEmpty))) { // Finish the animation if the submenu is empty
                                    finish();
                                }
                                else {
                                    if (animationVars.circleDone) {
                                        animationVars.vel -= game.height / 200;
                                    }
                                }
                            }
                            else {
                                if (animationVars.oldNearlyScrolled) {
                                    animationVars.oldScrolled = true;
                                }
                                if (animationVars.oldScrolled) {
                                    if (animationVars.finished) {
                                        finish();
                                    }
                                }
                                else {
                                    animationVars.vel += game.height / 200;
                                }
                            }
                        }
                    },
                    args: {
                        x: {
                            required: true,
                            types: ["number"],
                            description: "The x position of the circle."
                        },
                        y: {
                            required: true,
                            types: ["number"],
                            description: "The y position of the circle."
                        },
                        color: {
                            required: true,
                            types: ["string"],
                            description: "The colour of the circle, any HTML colour. e.g \"rgb(100, 50, 20)\" or \"#FF00FF\"."
                        },

                        direction: {
                            required: false,
                            default: "open",
                            check: value => {
                                if (! ["open", "close"].includes(value)) {
                                    return "Oh no! The direction has to be either \"open\" or \"close\".";
                                }
                            },
                            types: ["string"],
                            description: "The direction for the animation. Either \"open\" or \"close\"."
                        },
                        initialSize: {
                            required: false,
                            default: 1,
                            types: ["number"],
                            description: "For the open direction. The diameter of the circle when the animation starts."
                        },

                        resolution: {
                            required: false,
                            default: 0.5 / window.devicePixelRatio,
                            check: value => {
                                if (value <= 0) {
                                    return "Oh no! This has to be more than 0.";
                                }
                            },
                            types: ["number"],
                            description: "The resolution scale of the animation. 1 is the full resolution of the canvas, 2 is 2x supersampling, 0.5 is half resolution etc."
                        }
                    },
                    hideNew: true,
                    description: "A circle grows to fill the screen and the new elements slide on from the bottom."
                }
            },
            elements: {
                button: {
                    args: {
                        color: {
                            required: true,
                            types: ["string"],
                            description: "The colour of the button, any HTML colour. e.g \"rgb(100, 50, 20)\" or \"#FF00FF\"."
                        },
                        size: {
                            required: true,
                            types: ["number"],
                            description: "The height/diameter of the button. The width can be more than the height if the icon is wide."
                        },

                        width: {
                            required: false,
                            types: ["number"],
                            description: "The width of the button. If unspecficied it'll default to the size of the button."
                        },
                        icon: {
                            required: false,
                            types: ["string"],
                            description: "The ID of the image asset to use as an icon."
                        },
                        iconSize: {
                            required: false,
                            default: 0.85,
                            types: ["number"],
                            description: "The largest dimension of the image will be the button's current diameter multiplied by this number. The other dimension is calculated to keep the aspect ratio."
                        },
                        onClick: {
                            required: false,
                            types: [
                                "object",
                                "function"
                            ],
                            subcheck: {
                                submenu: {
                                    required: true,
                                    types: ["string"],
                                    description: "The submenu to switch to when it's clicked."
                                },

                                animation: {
                                    required: false,
                                    default: {},
                                    types: ["object"],
                                    description: "The animation to use for the transition."
                                }
                            },
                            description: "The action to happen when it's clicked. Set to an object with the \"submenu\" property set to the new submenu ID to change submenus. Set to a function to run code when it's clicked. It's called with the element, the sprite and the menuSprite."
                        },
                        onHover: {
                            required: false,
                            types: [
                                "string",
                                "function"
                            ],
                            description: "The action to happen when the button is hovered over. Either a message by setting it to a string or a function to run. It's called with the element, the sprite and the menuSprite."
                        },
                        shape: {
                            required: false,
                            default: "circle",
                            types: ["string"],
                            check: value => {
                                if (! ["circle", "square", "hardSquare"].includes(value)) {
                                    return "Hmm, " + JSON.stringify(value) + " isn't an option. It has to be either \"circle\", \"square\" or \"hardSquare\".";
                                }
                            },
                            description: "The shape of the button. Either \"circle\", \"square\" or \"hardSquare\". Button widths and heights might not match when using long icons but these still use the same shape names."
                        }
                    },
                    preload: (element, game) => {
                        if (element.icon) {
                            game.get.asset.img(element.icon);
                        }
                    },
                    check: (element, check, where, menuSprite, plugin, game) => {
                        if (typeof element.onClick == "object") {
                            let animation = element.onClick.animation;
                            if (animation.type == null) {
                                animation.type = "scroll";
                            }
                            let animationJSON = plugin.vars.types.animations[animation.type];
                            if (animationJSON == null) {
                                let types = Object.keys(plugin.vars.types.animations);
                                return "Oh no! The animation " + JSON.stringify(animation.type) + " doesn't seem to exist. It can only be one of these:\n" + types.reduce((total, item, index) =>
                                total + "  • "
                                + JSON.stringify(item)
                                + " -> "
                                + plugin.vars.types.animations[item].description
                                + (index == types.length - 1? "" : "\n"), "");
                            }

                            let syntax = {
                                ...plugin.vars.checks.animation,
                                ...animationJSON.args
                            };
                            let hasDefaults = ["x", "y", "color", "initialSize", "size"];
                            element.internal = {
                                setDefaults: []
                            };
                            for (let i in hasDefaults) {
                                let arg = hasDefaults[i];
                                if (syntax[arg]) {
                                    if (! animation.hasOwnProperty(arg)) {
                                        if (syntax[arg].required) {
                                            syntax[arg].required = false;
                                        }
                                        else {
                                            element.internal.setDefaults.push(arg);
                                        }
                                    }
                                }
                            }

                            check({
                                ob: element.onClick.animation,
                                where: where,
                                syntax: syntax
                            });
                        }
                    },
                    spriteDatas: (element, game, getFutureID, menuSprite, plugin) => {
                        const sprites = [];
                        sprites.push({
                            type: "canvas",
                            scripts: {
                                steps: {
                                    mouseUp: (me, game) => {
                                        let element = me.vars.element;
                                        if (! game.input.mouse.down) {
                                            if (me.vars.clicked) {
                                                if ((! me.vars.clickLock) || me.width == element.size) {
                                                    game.playSound(".BagelGUI.clickUp");
                                                    me.vars.clicked = false;
                                                    me.vars.clickResetting = true;
                                                    me.vars.clickLock = false;
                                                    me.vars.vel += 0.05;
                                                    if (typeof element.onClick == "object") {
                                                        let onClick = element.onClick;

                                                        me.vars.menuSprite.animateSubmenuChange(onClick.submenu, onClick.animation, {
                                                            x: element.x,
                                                            y: element.y,
                                                            initialSize: element.size,
                                                            size: element.size,
                                                            color: element.color
                                                        }, me.vars.element.internal.setDefaults);
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    mouseDown: (me, game) => {
                                        me.vars.vel -= 0.1;
                                        if (! me.vars.clicked) {
                                            game.playSound(".BagelGUI.click");
                                            me.vars.clicked = true;
                                            if (me.width < me.vars.maxSize) {
                                                me.vars.vel += 3;
                                            }
                                            else {
                                                me.vars.vel -= 0.3;
                                            }
                                            me.vars.clickResetting = false;
                                            if (typeof me.vars.element.onClick == "function") {
                                                me.vars.element.onClick(me.vars.element, me, me.vars.menuSprite);
                                            }
                                            else {
                                                me.vars.clickLock = true;
                                            }
                                        }
                                        if (typeof me.vars.element.onHover == "string") {
                                            me.vars.menuSprite.internal.hoverText = me.vars.element.onHover;
                                        }
                                    },
                                    mouseTouch: (me, game) => {
                                        me.vars.vel += 0.1;
                                        if (! me.vars.touched) {
                                            game.playSound(".BagelGUI.touch");
                                            if (typeof me.vars.element.onHover == "function") {
                                                me.vars.element.onHover(me.vars.element, me, me.vars.menuSprite);
                                            }
                                            me.vars.touched = true;
                                        }
                                        if (typeof me.vars.element.onHover == "string") {
                                            me.vars.menuSprite.internal.hoverText = me.vars.element.onHover;
                                        }
                                    }
                                },
                                init: [
                                    me => {
                                        me.clone();
                                    }
                                ],
                                main: [
                                    (me, game, step) => {
                                        let size = me.width;
                                        if (me.vars.active) {
                                            step("mouseUp");

                                            if (me.touching.mouseCircles() || me.vars.clickLock) {
                                                if ((game.input.mouse.down && (! game.input.touch.dragging)) || me.vars.clickLock) {
                                                    step("mouseDown");
                                                }
                                                else {
                                                    step("mouseTouch");
                                                }
                                            }
                                            else {
                                                me.vars.touched = false;
                                                me.vars.vel -= 0.09;
                                                if (me.width == me.vars.element.size) {
                                                    me.vars.clickResetting = false;
                                                }
                                            }
                                        }
                                        size += me.vars.vel;
                                        me.vars.vel *= 0.9;
                                        if (size > me.vars.maxSize) {
                                            size = me.vars.maxSize;
                                            me.vars.vel = 0;
                                        }
                                        if (! me.vars.touched) {
                                            if (size < me.vars.element.size) {
                                                size = me.vars.element.size;
                                                me.vars.vel = 0;
                                            }
                                        }
                                        if (size < me.vars.minSize) {
                                            size = me.vars.minSize;
                                            me.vars.vel = 0;
                                        }
                                        me.width = size;
                                        me.height = size;
                                    }
                                ]
                            },
                            width: element.size,
                            height: element.size,
                            fullRes: true,
                            vars: {
                                maxSize: element.size * 1.05,
                                minSize: element.size,
                                vel: 0,
                                touched: false,
                                clicked: false,
                                clickResetting: false,
                                clickLock: false
                            },
                            mode: "static",
                            prerender: (me, game, ctx, canvas) => {
                                me.updateRes = true;
                                let widthWas = me.width;
                                me.width = me.vars.maxSize;
                                me.height = me.width;
                                me.updateRes = false;
                                me.width = widthWas;
                                me.height = widthWas;

                                let element = me.vars.element;
                                ctx.fillStyle = element.color;
                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                                ctx.beginPath();
                                ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
                                ctx.fill();
                            },
                            clones: {
                                scripts: {
                                    main: [
                                        me => {
                                            me.x = me.parent.x;
                                            me.y = me.parent.y;

                                            let percentSize = ((me.parent.width - me.vars.element.size) / (me.vars.maxSize - me.vars.element.size));
                                            me.width = percentSize * me.vars.maxSize;
                                            me.height = me.width;
                                            me.alpha = percentSize * 0.05;

                                            if (me.width == 0 || me.parent.vars.clickResetting) {
                                                me.visible = false;
                                            }
                                            else {
                                                me.visible = true;
                                            }
                                        }
                                    ]
                                },
                                prerender: (me, game, ctx, canvas) => {
                                    me.updateRes = true;
                                    let widthWas = me.width;
                                    me.width = me.vars.maxSize;
                                    me.height = me.width;
                                    me.updateRes = false;
                                    me.width = widthWas;
                                    me.height = widthWas;

                                    ctx.fillStyle = "black";
                                    ctx.beginPath();
                                    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
                                    ctx.fill();
                                }
                            }
                        });
                        if (element.icon) {
                            sprites.push({
                                img: element.icon,
                                vars: {
                                    parent: getFutureID(0)
                                },
                                scripts: {
                                    init: [
                                        me => {
                                            me.vars.parent = me.game.get.sprite(me.vars.parent);

                                            me.vars.ratio = me.height / me.width;
                                        }
                                    ],
                                    main: [
                                        me => {
                                            me.x = me.vars.parent.x;
                                            me.y = me.vars.parent.y;

                                            let ratio = me.vars.ratio;
                                            if (ratio > 1) {
                                                me.height = me.vars.parent.width * me.vars.element.iconSize;
                                                me.width = me.height / ratio;
                                            }
                                            else {
                                                me.width = me.vars.parent.width * me.vars.element.iconSize;
                                                me.height = me.width * ratio;
                                            }

                                            me.visible = me.vars.parent.visible;
                                        }
                                    ]
                                },
                                minProcess: true,
                                deleteOnOtherDelete: true
                            });
                        }

                        if (element.onHover && (! menuSprite.internal.hoverTextSprite)) {
                            menuSprite.internal.hoverTextSprite = true;
                            let data = {
                                ...menuSprite.submenus[menuSprite.submenu].hoverText,
                                text: "",
                                type: "text",
                                visible: true
                            };
                            let element = {...data};
                            delete data.fixedToCamera;
                            data.scripts = {
                                main: [
                                    me => {
                                        let menuInternal = me.vars.menuSprite.internal;
                                        me.text = menuInternal.hoverText;
                                        menuInternal.hoverText = "";
                                    }
                                ]
                            };

                            plugin.vars.queueMakeSpriteElement((sprite, menuSprite) => {
                                menuSprite.internal.hoverTextSprite = sprite;
                            }, data, menuSprite, plugin, element);
                        }
                        return sprites;
                    },
                    description: "A simple button that can trigger a submenu change or code to run."
                },
                text: {
                    args: Bagel.internal.plugin.plugin.types.sprites.text.args,
                    spriteDatas: (element, game) => {
                        let copyArgs = Bagel.internal.plugin.plugin.types.sprites.text.args;
                        let args = {};
                        for (let i in copyArgs) {
                            if (element.hasOwnProperty(i)) {
                                args[i] = element[i];
                            }
                        }
                        return {
                            type: "text",
                            ...args
                        };
                    },
                    description: "Some simple text. Has an almost idential syntax to the sprite type."
                },
                image: {
                    args: {
                        ...Bagel.internal.plugin.plugin.types.sprites.sprite.args,
                        color: {
                            required: false,
                            types: ["string"],
                            description: "The colour to use instead of an image, any HTML colour. e.g \"rgb(100, 50, 20)\" or \"#FF00FF\"."
                        }
                    },
                    preload: (element, game) => {
                        if (! element.color) {
                            game.get.asset.img(element.img);
                        }
                    },
                    spriteDatas: (element, game) => {
                        let copyArgs = Bagel.internal.plugin.plugin.types.sprites.sprite.args;
                        let args = {};
                        for (let i in copyArgs) {
                            if (element.hasOwnProperty(i)) {
                                args[i] = element[i];
                            }
                        }
                        for (i in args.crop) {
                            if (args.crop[i] == null) delete args.crop[i];
                        }

                        if (element.color) {
                            let id = ".BagelGUI.color." + element.color;
                            if (! Bagel.internal.render.texture.get(id, game)) {
                                let canvas = document.createElement("canvas");
                                canvas.width = 1;
                                canvas.height = 1;
                                let ctx = canvas.getContext("2d");
                                ctx.fillStyle = element.color;
                                ctx.fillRect(0, 0, 1, 1);

                                Bagel.internal.render.texture.new(id, canvas, game, false, "static");
                            }
                            args.img = id;
                        }

                        return {
                            type: "sprite",
                            ...args
                        };
                    },
                    description: "Almost idential in syntax to the \"sprite\" sprite type, but you can set the \"color\" argument to an HTML colour instead of using an image if you want."
                }
            }
        },

        checks: {
            ignoreElement: {
                type: "ignore",
                visible: "ignore",
                fixedToCamera: "ignore",

                x: "ignore",
                y: "ignore",
                left: "ignore",
                top: "ignore",
                right: "ignore",
                bottom: "ignore",

                internal: "ignore",
                vars: {
                    required: false,
                    default: {},
                    types: ["object"],
                    description: "An object where you can store data for this element."
                }
            },

            animation: {
                type: {
                    required: false,
                    default: "scroll",
                    types: ["string"],
                    description: "The name of the animation to use."
                }
            }
        }
    }
}
/*
TODO
Optional element ids.
Improve onclick.
Width argument for buttons
Check animation in animateSubmenuChange but allow skipping checking
Fade effect option for hover text

= Low priority =
Clean up textures created once the menuSprite is deleted
Update Bagel.js to make hidden canvases unload and use a blank texture to start with. Or just reserve it somehow?

Set pluginProxy when making sprites

= Tweaks =
Move elements to submenus.<>.elements

Take sound assets from Bagel.js to reduce file size. (should they be loaded by default? Or the data urls could be stored in the internal plugin so they can be accessed)

Tidy up by using sub functions

Preload based on submenu?

Add in state to run for animation sprites

= Bugs =
Plain error when no submenus

animateSubmenuChange doesn't set defaults

The submenus to switch to for buttons aren't checked to see if they are valid

triangleScroll can be too short when vertical
Prevent scrolling when animation is active

Changing submenu manually doesn't delete old elements

Prepare icons during loading screen
Loading new animations and element types. Don't forget checks

Optimise texture usage by sharing the black circles. Need to prevent deletion when the canvas sprite that created it is deleted. Maybe load texture manually and use normal sprites? Copy canvas mode? How should copy canvas mode handle deleting the original sprite?
Optimise by sharing textures when the colors are the same

Should be a minimum amount of movement for touch scrolling
*/
