{
    "version": "LAYASCENE3D:02",
    "data": {
        "type": "Scene3D",
        "props": {
            "name": "GameScene",
            "ambientColor": [
                0.5188679,
                0.4576806,
                0.4576806
            ],
            "reflectionDecodingFormat": 0,
            "reflectionIntensity": 1,
            "ambientMode": 0,
            "ambientSphericalHarmonicsIntensity": 1,
            "lightmaps": [],
            "enableFog": false,
            "fogStart": 0,
            "fogRange": 300,
            "fogColor": [
                0.5,
                0.5,
                0.5
            ]
        },
        "child": [
            {
                "type": "Camera",
                "instanceID": 0,
                "props": {
                    "name": "Main Camera",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        9.35,
                        -8
                    ],
                    "rotation": [
                        0,
                        0.9063079,
                        0.4226183,
                        0
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ],
                    "clearFlag": 1,
                    "orthographic": false,
                    "orthographicVerticalSize": 10,
                    "fieldOfView": 60,
                    "enableHDR": true,
                    "nearPlane": 0.3,
                    "farPlane": 1000,
                    "viewport": [
                        0,
                        0,
                        1,
                        1
                    ],
                    "clearColor": [
                        0.1921569,
                        0.3019608,
                        0.4745098,
                        0
                    ]
                },
                "components": [
                    {
                        "type": "Animator",
                        "layers": [
                            {
                                "name": "Base Layer",
                                "weight": 0,
                                "blendingMode": 0,
                                "states": [
                                    {
                                        "name": "empty",
                                        "clipPath": "Assets/Art/Animation/Camera/empty-empty.lani"
                                    },
                                    {
                                        "name": "camera_win",
                                        "clipPath": "Assets/Art/Animation/Camera/camera_win-camera_win.lani"
                                    }
                                ]
                            }
                        ],
                        "cullingMode": 0,
                        "playOnWake": true
                    }
                ],
                "child": []
            },
            {
                "type": "DirectionLight",
                "instanceID": 1,
                "props": {
                    "name": "Directional Light",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        -7.5,
                        20.8,
                        -13
                    ],
                    "rotation": [
                        0.7520872,
                        -0.3472738,
                        0.07724967,
                        -0.5547957
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ],
                    "intensity": 1,
                    "lightmapBakedType": 0,
                    "color": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "instanceID": 2,
                "props": {
                    "name": "BackGround",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        -7.450581E-09,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "MeshSprite3D",
                        "instanceID": 3,
                        "props": {
                            "name": "Quad",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                -10.5,
                                0
                            ],
                            "rotation": [
                                -0.7071068,
                                0,
                                0,
                                -0.7071068
                            ],
                            "scale": [
                                100,
                                100.0001,
                                100.0001
                            ],
                            "meshPath": "Library/unity default resources-Quad.lm",
                            "enableRender": true,
                            "materials": [
                                {
                                    "path": "Assets/Art/Material/Common/pingk02.lmat"
                                }
                            ]
                        },
                        "components": [],
                        "child": []
                    },
                    {
                        "type": "MeshSprite3D",
                        "instanceID": 4,
                        "props": {
                            "name": "Quad",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                1.6,
                                -6
                            ],
                            "rotation": [
                                -0.7071068,
                                0,
                                0,
                                -0.7071068
                            ],
                            "scale": [
                                5,
                                2,
                                5
                            ],
                            "meshPath": "Library/unity default resources-Quad.lm",
                            "enableRender": true,
                            "materials": [
                                {
                                    "path": "Assets/Art/Material/Common/pink.lmat"
                                }
                            ]
                        },
                        "components": [],
                        "child": []
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 5,
                "props": {
                    "name": "map",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "instanceID": 6,
                "props": {
                    "name": "CommonBoard",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        -0.01,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "MeshSprite3D",
                        "instanceID": 7,
                        "props": {
                            "name": "color_board",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                0,
                                0
                            ],
                            "rotation": [
                                -8.146034E-08,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ],
                            "meshPath": "Assets/Art/Model/Common/Common_board-board_color.lm",
                            "enableRender": true,
                            "materials": [
                                {
                                    "path": "Assets/Art/Material/Common/white.lmat"
                                }
                            ]
                        },
                        "components": [
                            {
                                "type": "PhysicsCollider",
                                "restitution": 0,
                                "friction": 0.5,
                                "rollingFriction": 0,
                                "shapes": [
                                    {
                                        "type": "BoxColliderShape",
                                        "center": [
                                            0,
                                            0,
                                            0
                                        ],
                                        "size": [
                                            4.6,
                                            1.92366E-06,
                                            8.1
                                        ]
                                    }
                                ],
                                "isTrigger": false
                            }
                        ],
                        "child": []
                    },
                    {
                        "type": "MeshSprite3D",
                        "instanceID": 8,
                        "props": {
                            "name": "frame_board_1",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                0,
                                0
                            ],
                            "rotation": [
                                -8.146034E-08,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ],
                            "meshPath": "Assets/Art/Model/Common/Common_board-board_frame_1.lm",
                            "enableRender": true,
                            "materials": [
                                {
                                    "path": "Assets/Art/Material/Common/white.lmat"
                                }
                            ]
                        },
                        "components": [],
                        "child": []
                    },
                    {
                        "type": "MeshSprite3D",
                        "instanceID": 9,
                        "props": {
                            "name": "frame_board_2",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                0,
                                0
                            ],
                            "rotation": [
                                -8.146034E-08,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ],
                            "meshPath": "Assets/Art/Model/Common/Common_board-board_frame_2.lm",
                            "enableRender": true,
                            "materials": [
                                {
                                    "path": "Assets/Art/Material/Common/white.lmat"
                                }
                            ]
                        },
                        "components": [],
                        "child": []
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 10,
                "props": {
                    "name": "Pen_2",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        1.5,
                        0
                    ],
                    "rotation": [
                        -0.08583169,
                        0.01513445,
                        -0.1729875,
                        -0.9810603
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "instanceID": 11,
                "props": {
                    "name": "Effect",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        1.27,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": [
                    {
                        "type": "ShuriKenParticle3D",
                        "instanceID": 12,
                        "props": {
                            "name": "Win",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                0,
                                0
                            ],
                            "rotation": [
                                0.7071068,
                                0,
                                0,
                                -0.7071068
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ],
                            "main": {
                                "randomSeed": 0,
                                "bases": {
                                    "isPerformanceMode": true,
                                    "duration": 1,
                                    "looping": false,
                                    "startLifetimeType": 2,
                                    "startLifetimeConstant": 2.2,
                                    "startLifetimeConstantMin": 1.5,
                                    "startLifetimeConstantMax": 2.2,
                                    "startSpeedType": 2,
                                    "startSpeedConstant": 15,
                                    "startSpeedConstantMin": 2,
                                    "startSpeedConstantMax": 15,
                                    "startSizeType": 2,
                                    "startSizeConstant": 0.6,
                                    "startSizeConstantMin": 0.3,
                                    "startSizeConstantMax": 0.6,
                                    "startRotationType": 2,
                                    "startRotationConstant": 6.283185,
                                    "startRotationConstantMax": 6.283185,
                                    "gravityModifier": 0.4,
                                    "scaleMode": 0,
                                    "maxParticles": 1000
                                },
                                "vector3s": {
                                    "startSizeConstantSeparate": [
                                        0.6,
                                        1,
                                        1
                                    ],
                                    "startSizeConstantMinSeparate": [
                                        0.3,
                                        1,
                                        1
                                    ],
                                    "startSizeConstantMaxSeparate": [
                                        0.6,
                                        1,
                                        1
                                    ],
                                    "startRotationConstantSeparate": [
                                        1,
                                        -1,
                                        -6.283185
                                    ],
                                    "startRotationConstantMaxSeparate": [
                                        1,
                                        -1,
                                        -6.283185
                                    ]
                                }
                            },
                            "emission": {
                                "bases": {
                                    "enable": true,
                                    "emissionRate": 0
                                },
                                "bursts": [
                                    {
                                        "time": 0,
                                        "min": 0,
                                        "max": 80
                                    }
                                ]
                            },
                            "shape": {
                                "shapeType": 1,
                                "bases": {
                                    "enable": true,
                                    "radius": 0.01,
                                    "angle": 0.2466927
                                }
                            },
                            "sizeOverLifetime": {
                                "bases": {
                                    "enable": true
                                },
                                "size": {
                                    "type": 0,
                                    "gradient": {
                                        "sizes": [
                                            {
                                                "key": 0,
                                                "value": 1
                                            },
                                            {
                                                "key": 0.7823691,
                                                "value": 1
                                            },
                                            {
                                                "key": 1,
                                                "value": 0
                                            }
                                        ]
                                    },
                                    "gradientX": {
                                        "sizes": [
                                            {
                                                "key": 0,
                                                "value": 1
                                            },
                                            {
                                                "key": 0.7823691,
                                                "value": 1
                                            },
                                            {
                                                "key": 1,
                                                "value": 0
                                            }
                                        ]
                                    },
                                    "gradientMax": {
                                        "sizes": [
                                            {
                                                "key": 0,
                                                "value": 1
                                            },
                                            {
                                                "key": 0.7823691,
                                                "value": 1
                                            },
                                            {
                                                "key": 1,
                                                "value": 0
                                            }
                                        ]
                                    },
                                    "gradientXMax": {
                                        "sizes": [
                                            {
                                                "key": 0,
                                                "value": 1
                                            },
                                            {
                                                "key": 0.7823691,
                                                "value": 1
                                            },
                                            {
                                                "key": 1,
                                                "value": 0
                                            }
                                        ]
                                    }
                                }
                            },
                            "textureSheetAnimation": {
                                "bases": {
                                    "enable": true
                                },
                                "vector2s": {
                                    "tiles": [
                                        3,
                                        3
                                    ]
                                },
                                "frame": {
                                    "type": 2,
                                    "constant": 8.9991,
                                    "constantMax": 8.9991
                                },
                                "startFrame": {
                                    "type": 0
                                }
                            },
                            "renderer": {
                                "bases": {
                                    "renderMode": 1
                                },
                                "resources": {
                                    "material": "Assets/Art/Effect/Materials/end.lmat"
                                }
                            }
                        },
                        "components": [],
                        "child": []
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 13,
                        "props": {
                            "name": "Tui",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                0.1,
                                0
                            ],
                            "rotation": [
                                0,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "ShuriKenParticle3D",
                                "instanceID": 14,
                                "props": {
                                    "name": "Nova",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        0,
                                        0,
                                        0
                                    ],
                                    "rotation": [
                                        0.7071068,
                                        0,
                                        0,
                                        -0.7071068
                                    ],
                                    "scale": [
                                        1.5,
                                        1.5,
                                        1.5
                                    ],
                                    "main": {
                                        "randomSeed": 1.297694E+09,
                                        "bases": {
                                            "isPerformanceMode": true,
                                            "duration": 1,
                                            "looping": false,
                                            "startLifetimeType": 2,
                                            "startLifetimeConstant": 0.5,
                                            "startLifetimeConstantMin": 0.2,
                                            "startLifetimeConstantMax": 0.5,
                                            "startSpeedConstant": 0,
                                            "startSpeedConstantMax": 0,
                                            "startSizeType": 2,
                                            "startSizeConstant": 3,
                                            "startSizeConstantMin": 2,
                                            "startSizeConstantMax": 3,
                                            "threeDStartRotation": true,
                                            "startRotationType": 2,
                                            "startRotationConstantMin": 6.283185,
                                            "simulationSpeed": 1.66,
                                            "scaleMode": 0,
                                            "maxParticles": 500
                                        },
                                        "vector3s": {
                                            "startSizeConstantSeparate": [
                                                3,
                                                1,
                                                1
                                            ],
                                            "startSizeConstantMinSeparate": [
                                                2,
                                                1,
                                                1
                                            ],
                                            "startSizeConstantMaxSeparate": [
                                                3,
                                                1,
                                                1
                                            ],
                                            "startRotationConstantMinSeparate": [
                                                0,
                                                0,
                                                -6.283185
                                            ]
                                        },
                                        "vector4s": {
                                            "startColorConstant": [
                                                0.4980392,
                                                1,
                                                1,
                                                1
                                            ],
                                            "startColorConstantMax": [
                                                0.4980392,
                                                1,
                                                1,
                                                1
                                            ]
                                        }
                                    },
                                    "emission": {
                                        "bases": {
                                            "enable": true,
                                            "emissionRate": 0
                                        },
                                        "bursts": [
                                            {
                                                "time": 0,
                                                "min": 0,
                                                "max": 6
                                            }
                                        ]
                                    },
                                    "shape": {
                                        "shapeType": 3,
                                        "bases": {
                                            "enable": true,
                                            "radius": 0.01,
                                            "x": 0,
                                            "y": 0,
                                            "z": 0.2
                                        }
                                    },
                                    "colorOverLifetime": {
                                        "bases": {
                                            "enable": true
                                        },
                                        "color": {
                                            "type": 1,
                                            "gradient": {
                                                "alphas": [
                                                    {
                                                        "key": 0,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 0.312993,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 0
                                                    }
                                                ],
                                                "rgbs": [
                                                    {
                                                        "key": 0,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    },
                                                    {
                                                        "key": 0.4590066,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    }
                                                ]
                                            },
                                            "gradientMax": {
                                                "alphas": [
                                                    {
                                                        "key": 0,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 0.312993,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 0
                                                    }
                                                ],
                                                "rgbs": [
                                                    {
                                                        "key": 0,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    },
                                                    {
                                                        "key": 0.4590066,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "sizeOverLifetime": {
                                        "bases": {
                                            "enable": true
                                        },
                                        "size": {
                                            "type": 0
                                        }
                                    },
                                    "textureSheetAnimation": {
                                        "bases": {
                                            "enable": true
                                        },
                                        "vector2s": {
                                            "tiles": [
                                                3,
                                                3
                                            ]
                                        },
                                        "frame": {
                                            "type": 1,
                                            "overTime": {
                                                "frames": [
                                                    {
                                                        "key": 0,
                                                        "value": 0
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 8.9991
                                                    }
                                                ]
                                            },
                                            "overTimeMax": {
                                                "frames": [
                                                    {
                                                        "key": 0,
                                                        "value": 0
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 8.9991
                                                    }
                                                ]
                                            }
                                        },
                                        "startFrame": {
                                            "type": 0
                                        }
                                    },
                                    "renderer": {
                                        "bases": {
                                            "renderMode": 4
                                        },
                                        "resources": {
                                            "material": "Assets/Art/Effect/Materials/tui.lmat",
                                            "mesh": "Library/unity default resources-Quad.lm"
                                        }
                                    }
                                },
                                "components": [],
                                "child": []
                            }
                        ]
                    },
                    {
                        "type": "Sprite3D",
                        "instanceID": 15,
                        "props": {
                            "name": "Chou",
                            "active": true,
                            "isStatic": false,
                            "layer": 0,
                            "position": [
                                0,
                                0.1,
                                0
                            ],
                            "rotation": [
                                0,
                                0,
                                0,
                                -1
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ]
                        },
                        "components": [],
                        "child": [
                            {
                                "type": "ShuriKenParticle3D",
                                "instanceID": 16,
                                "props": {
                                    "name": "chou01",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        0,
                                        0,
                                        0
                                    ],
                                    "rotation": [
                                        0.7071068,
                                        0,
                                        0,
                                        -0.7071068
                                    ],
                                    "scale": [
                                        1.7,
                                        1.7,
                                        1.7
                                    ],
                                    "main": {
                                        "randomSeed": 3.84668E+09,
                                        "bases": {
                                            "isPerformanceMode": true,
                                            "looping": false,
                                            "startLifetimeConstant": 0.5,
                                            "startLifetimeConstantMax": 0.5,
                                            "startSpeedConstant": 0,
                                            "startSpeedConstantMax": 0,
                                            "startSizeConstant": 0.5,
                                            "startSizeConstantMax": 0.5,
                                            "startRotationType": 2,
                                            "startRotationConstant": 6.283185,
                                            "startRotationConstantMax": 6.283185,
                                            "simulationSpeed": 1.66,
                                            "scaleMode": 0,
                                            "maxParticles": 500
                                        },
                                        "vector3s": {
                                            "startSizeConstantSeparate": [
                                                0.5,
                                                1,
                                                1
                                            ],
                                            "startSizeConstantMaxSeparate": [
                                                0.5,
                                                1,
                                                1
                                            ],
                                            "startRotationConstantSeparate": [
                                                1,
                                                -1,
                                                -6.283185
                                            ],
                                            "startRotationConstantMaxSeparate": [
                                                1,
                                                -1,
                                                -6.283185
                                            ]
                                        }
                                    },
                                    "emission": {
                                        "bases": {
                                            "enable": true
                                        }
                                    },
                                    "colorOverLifetime": {
                                        "bases": {
                                            "enable": true
                                        },
                                        "color": {
                                            "type": 1,
                                            "gradient": {
                                                "alphas": [
                                                    {
                                                        "key": 0,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 0.312871,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 0
                                                    }
                                                ],
                                                "rgbs": [
                                                    {
                                                        "key": 0,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    },
                                                    {
                                                        "key": 0.4590677,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    }
                                                ]
                                            },
                                            "gradientMax": {
                                                "alphas": [
                                                    {
                                                        "key": 0,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 0.312871,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 0
                                                    }
                                                ],
                                                "rgbs": [
                                                    {
                                                        "key": 0,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    },
                                                    {
                                                        "key": 0.4590677,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": [
                                                            1,
                                                            1,
                                                            1
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "sizeOverLifetime": {
                                        "bases": {
                                            "enable": true
                                        },
                                        "size": {
                                            "type": 0,
                                            "gradient": {
                                                "sizes": [
                                                    {
                                                        "key": 0,
                                                        "value": 0
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 4
                                                    }
                                                ]
                                            },
                                            "gradientX": {
                                                "sizes": [
                                                    {
                                                        "key": 0,
                                                        "value": 0
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 4
                                                    }
                                                ]
                                            },
                                            "gradientMax": {
                                                "sizes": [
                                                    {
                                                        "key": 0,
                                                        "value": 0
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 4
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "renderer": {
                                        "bases": {
                                            "renderMode": 2
                                        },
                                        "resources": {
                                            "material": "Assets/Art/Effect/Materials/chou01.lmat"
                                        }
                                    }
                                },
                                "components": [],
                                "child": []
                            },
                            {
                                "type": "ShuriKenParticle3D",
                                "instanceID": 17,
                                "props": {
                                    "name": "chou02",
                                    "active": true,
                                    "isStatic": false,
                                    "layer": 0,
                                    "position": [
                                        0,
                                        0,
                                        0
                                    ],
                                    "rotation": [
                                        0.7071068,
                                        0,
                                        0,
                                        -0.7071068
                                    ],
                                    "scale": [
                                        1.5,
                                        1.5,
                                        1.5
                                    ],
                                    "main": {
                                        "randomSeed": 4.160837E+08,
                                        "bases": {
                                            "isPerformanceMode": true,
                                            "duration": 1,
                                            "startLifetimeConstant": 0.5,
                                            "startLifetimeConstantMax": 0.5,
                                            "startSpeedConstant": -2.5,
                                            "startSpeedConstantMax": -2.5,
                                            "startSizeConstant": 0.07,
                                            "startSizeConstantMax": 0.07,
                                            "startRotationType": 2,
                                            "startRotationConstant": 6.283185,
                                            "startRotationConstantMax": 6.283185,
                                            "simulationSpeed": 1.66,
                                            "scaleMode": 0,
                                            "maxParticles": 600
                                        },
                                        "vector3s": {
                                            "startSizeConstantSeparate": [
                                                0.07,
                                                1,
                                                1
                                            ],
                                            "startSizeConstantMaxSeparate": [
                                                0.07,
                                                1,
                                                1
                                            ],
                                            "startRotationConstantSeparate": [
                                                1,
                                                -1,
                                                -6.283185
                                            ],
                                            "startRotationConstantMaxSeparate": [
                                                1,
                                                -1,
                                                -6.283185
                                            ]
                                        }
                                    },
                                    "emission": {
                                        "bases": {
                                            "enable": true,
                                            "emissionRate": 70
                                        }
                                    },
                                    "shape": {
                                        "shapeType": 0,
                                        "bases": {
                                            "enable": true,
                                            "radius": 1.36
                                        }
                                    },
                                    "colorOverLifetime": {
                                        "bases": {
                                            "enable": true
                                        },
                                        "color": {
                                            "type": 1,
                                            "gradient": {
                                                "alphas": [
                                                    {
                                                        "key": 0,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 0.312871,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 0
                                                    }
                                                ]
                                            },
                                            "gradientMax": {
                                                "alphas": [
                                                    {
                                                        "key": 0,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 0.312871,
                                                        "value": 1
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 0
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "sizeOverLifetime": {
                                        "bases": {
                                            "enable": true
                                        },
                                        "size": {
                                            "type": 0,
                                            "gradient": {
                                                "sizes": [
                                                    {
                                                        "key": 0,
                                                        "value": 0
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 4
                                                    }
                                                ]
                                            },
                                            "gradientX": {
                                                "sizes": [
                                                    {
                                                        "key": 0,
                                                        "value": 0
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 4
                                                    }
                                                ]
                                            },
                                            "gradientMax": {
                                                "sizes": [
                                                    {
                                                        "key": 0,
                                                        "value": 0
                                                    },
                                                    {
                                                        "key": 1,
                                                        "value": 4
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "renderer": {
                                        "bases": {
                                            "renderMode": 1,
                                            "stretchedBillboardLengthScale": 3
                                        },
                                        "resources": {
                                            "material": "Assets/Art/Effect/Materials/chou02.lmat"
                                        }
                                    }
                                },
                                "components": [],
                                "child": []
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Sprite3D",
                "instanceID": 18,
                "props": {
                    "name": "PenHolder",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        2.5,
                        0,
                        7.5
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            },
            {
                "type": "Sprite3D",
                "instanceID": 19,
                "props": {
                    "name": "Pen",
                    "active": true,
                    "isStatic": false,
                    "layer": 0,
                    "position": [
                        0,
                        0,
                        0
                    ],
                    "rotation": [
                        0,
                        0,
                        0,
                        -1
                    ],
                    "scale": [
                        1,
                        1,
                        1
                    ]
                },
                "components": [],
                "child": []
            }
        ]
    }
}