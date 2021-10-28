{
    info: {
        id: "Video",
        description: "A simple plugin for displaying videos in Bagel.js"
    },
    plugin: {
        types: {
            assets: {
                videos: {
                    args: {
                        preload: {
                            required: false,
                            default: "metadata",
                            check: value => {
                                if (! ["metadata", "some", "all"].includes(value)) {
                                    return "Oh no! That's not a valid option. It has to be either \"metadata\", \"some\" or \"all\".";
                                }
                            },
                            types: ["string"],
                            description: "How the video should be preloaded. Either \"metadata\", \"some\" or \"all\". \"some\" will load enough to be able to play the video without buffering (assuming no unexpected increases in network requests) and \"all\" will load the whole video. This should only really be used in specific situations like loading screens and for short videos."
                        }
                    },
                    init: (asset, ready, game, plugin, index) => {
                        let video = document.createElement("video");

                        Bagel.internal.render.texture.new(asset.id, game.internal.renderer.blankTexture, game);
                        ((video, ready, asset, plugin, currentWas, game) => {
                            video.onloadeddata = _ => {
                                video.pause();
                                video.muted = false;
                                video.currentTime = 0;
                                video.onloadeddata = null;
                            };
                            video[asset.preload == "metadata"? "onloadedmetadata" : "oncanplaythrough"] = _ => {
                                if (! video.paused) {
                                    video.pause();
                                }
                                video.muted = false;
                                video.currentTime = 0;

                                let canvas = document.createElement("canvas");
                                let ctx = canvas.getContext("2d");
                                canvas.width = video.videoWidth;
                                canvas.height = video.videoHeight;
                                ctx.drawImage(video, 0, 0);

                                Bagel.internal.saveCurrent();
                                Bagel.internal.current = {...currentWas};
                                Bagel.internal.render.texture.update(asset.id, canvas, game);
                                Bagel.internal.loadCurrent();

                                video.oncanplaythrough = null;
                                video.onloadedmetadata = null;

                                ready({
                                    ...asset,
                                    video: video,
                                    internal: {
                                        canvas: canvas,
                                        ctx: ctx,
                                        pluginProxy: currentWas
                                    }
                                });
                            };
                        })(video, ready, asset, plugin, {...Bagel.internal.current}, game);
                        if (asset.preload == "metadata") {
                            video.preload = "metadata";
                        }

                        if (asset.preload == "all") {
                            ((video, asset) => {
                                fetch(asset.src).then(res => res.blob().then(res => {
                                    video.src = URL.createObjectURL(res);
                                    video.load();

                                    // Play it for a frame or so. This means the first frame is loaded
                                    video.muted = true; // Mute it so it can auto play
                                    (video => {
                                        video.play().catch(() => {
                                            video.pause();
                                        });
                                    })(video);
                                }));
                            })(video, asset);
                        }
                        else {
                            video.src = asset.src;
                            video.load();

                            // Play it for a frame or so. This means the first frame is loaded
                            video.muted = true; // Mute it so it can auto play
                            (video => {
                                video.play().catch(() => {
                                    video.pause();
                                });
                            })(video);
                        }

                    },
                    get: "video",
                    description: "A video. Creates an image asset with the same id that updates as it plays."
                }
            }
        },
        methods: {
            game: {
                playVideo: {
                    fn: {
                        obArg: false,
                        args: {
                            id: {
                                required: true,
                                types: ["string"],
                                description: "The id of the video to play."
                            },
                            loop: {
                                required: false,
                                default: false,
                                types: ["boolean"],
                                description: "If the video should loop or not."
                            },
                            startTime: {
                                required: false,
                                default: 0,
                                types: ["number"],
                                description: "The starting time for the video in seconds."
                            },
                            muted: {
                                required: false,
                                default: false,
                                types: ["boolean"],
                                description: "If the video is muted or not."
                            }
                        },
                        fn: (game, args, plugin) => {
                            let video = game.get.asset.video(args.id);
                            video.video.loop = args.loop;
                            video.video.currentTime = args.startTime;

                            let internalPlugin = game.internal.plugins.Internal;
                            if (internalPlugin.vars.audio.autoPlay) {
                                try {
                                    video.video.muted = args.muted;
                                }
                                catch {
                                    internalPlugin.vars.audio.autoPlay = false;
                                }
                            }

                            if (internalPlugin.vars.audio.autoPlay) {
                                ((args, internalPlugin, video, plugin, game) => {
                                    video.video.play().catch(() => {
                                        video.video.pause();

                                        internalPlugin.vars.audio.autoPlay = false;

                                        video.video.muted = true;
                                        video.video.play().catch(video => video.pause()); // Play it muted
                                        plugin.vars.queue.push(video); // Queue it to be unmuted

                                        plugin.vars.createUnmute(game);
                                    });
                                })(args, internalPlugin, video, plugin, game);
                            }
                            else {
                                video.video.muted = true;
                                video.video.play(); // Play it muted
                                plugin.vars.queue.push(video); // Queue it to be unmuted

                                plugin.vars.createUnmute(game);
                            }
                        }
                    }
                },
                stopVideo: {
                    fn: {
                        obArg: false,
                        args: {
                            id: {
                                required: true,
                                types: ["string"],
                                description: "The id of the video to stop."
                            }
                        },
                        fn: (game, args, plugin) => {
                            game.get.asset.video(args.id).video.pause();
                        }
                    }
                }
            }
        },
        scripts: {
            main: (plugin, game) => {
                let autoPlay = game.internal.plugins.Internal.vars.audio.autoPlay;
                if (autoPlay != plugin.vars.prevAutoPlay) {
                    plugin.vars.prevAutoPlay = autoPlay;
                    if (autoPlay) { // Unmute the queued
                        for (let i in plugin.vars.queue) {
                            plugin.vars.queue[i].video.muted = false;
                        }
                        plugin.vars.queue = [];
                    }
                }

                let videos = game.internal.assets.assets.videos;
                for (let i in videos) {
                    let video = videos[i];
                    let videoInternal = video.internal;
                    let canvas = videoInternal.canvas;
                    let ctx = videoInternal.ctx;

                    if (! video.video.paused) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(video.video, 0, 0);

                        Bagel.internal.saveCurrent();
                        Bagel.internal.current = {...videoInternal.pluginProxy};
                        Bagel.internal.render.texture.update(video.id, canvas, game);
                        Bagel.internal.loadCurrent();
                    }
                }
            }
        }
    },
    vars: {
        prevAutoPlay: true,
        queue: [],
        createUnmute: game => {
            let builtIn = game.internal.plugins.Internal;
            let current = Bagel.internal.current;
            Bagel.internal.saveCurrent();
            current.plugin = builtIn;
            current.pluginProxy = false;

            builtIn.vars.audio.createUnmute(builtIn, game);

            Bagel.internal.loadCurrent();
        }
    }
};
