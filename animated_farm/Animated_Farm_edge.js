/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Background',
                            type: 'image',
                            rect: ['-1px', '0px', '1017px', '678px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Background.png",'0px','0px']
                        },
                        {
                            id: 'Back_MTNs',
                            type: 'image',
                            rect: ['-1px', '147px', '1017px', '362px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Back_MTNs.png",'0px','0px']
                        },
                        {
                            id: 'MTN_Cloud_1',
                            symbolName: 'MTN_Cloud_1',
                            type: 'rect',
                            rect: ['845', '196', '171', '205', 'auto', 'auto']
                        },
                        {
                            id: 'MTN_Cloud_2',
                            type: 'group',
                            rect: ['194', '272', '367', '228', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Cloud_Blue_2',
                                type: 'image',
                                rect: ['0px', '0px', '360px', '191px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Cloud_Blue_2.png",'0px','0px']
                            },
                            {
                                id: 'Cloud_White_1',
                                type: 'image',
                                rect: ['7px', '37px', '360px', '191px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Cloud_White_1.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'Front_MTNs',
                            type: 'image',
                            rect: ['-1px', '229px', '1017px', '326px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Front_MTNs.png",'0px','0px']
                        },
                        {
                            id: 'Windmill',
                            symbolName: 'Windmill',
                            type: 'rect',
                            rect: ['229', '302', '152', '234', 'auto', 'auto']
                        },
                        {
                            id: 'Grass',
                            type: 'image',
                            rect: ['0px', '497px', '1016px', '78px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Grass.png",'0px','0px']
                        },
                        {
                            id: 'Water',
                            type: 'image',
                            rect: ['0px', '562px', '1016px', '115px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Water.png",'0px','0px']
                        },
                        {
                            id: 'River',
                            symbolName: 'River',
                            type: 'rect',
                            rect: ['-10', '563', '1015', '114', 'auto', 'auto']
                        },
                        {
                            id: 'Horse',
                            type: 'image',
                            rect: ['48px', '463', '63px', '34px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Horse.png",'0px','0px']
                        },
                        {
                            id: 'Cloud_Blue_1',
                            symbolName: 'Cloud_Blue_1',
                            type: 'rect',
                            rect: ['1026', '176', '174', '73', 'auto', 'auto']
                        },
                        {
                            id: 'Cloud_2',
                            symbolName: 'Cloud_2',
                            type: 'rect',
                            rect: ['1028px', '56px', '235', '111', 'auto', 'auto']
                        },
                        {
                            id: 'Cloud_1',
                            symbolName: 'Cloud_1',
                            type: 'rect',
                            rect: ['1028px', '11', '235', '111', 'auto', 'auto']
                        },
                        {
                            id: 'Bird_2',
                            symbolName: 'Bird_2',
                            type: 'rect',
                            rect: ['1063px', '158', '50', '18', 'auto', 'auto']
                        },
                        {
                            id: 'Bird_1',
                            symbolName: 'Bird_1',
                            type: 'rect',
                            rect: ['1125px', '206', '76', '27', 'auto', 'auto']
                        },
                        {
                            id: 'Cow_2',
                            symbolName: 'Cow_2',
                            type: 'rect',
                            rect: ['590px', '500px', '63', '51', 'auto', 'auto'],
                            autoOrient: false
                        },
                        {
                            id: 'Cow_1',
                            symbolName: 'Cow_1',
                            type: 'rect',
                            rect: ['485px', '495px', '69', '53', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1016px', '677px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 65000,
                    autoPlay: true,
                    data: [
                        [
                            "eid134",
                            "location",
                            0,
                            45000,
                            "linear",
                            "${Cow_2}",
                            [[621.5, 525.5, 0, 0, 0, 0,0],[519.78, 522.85, -126.24, 0, -146.65, 0,101.76],[438.55, 525.5, 0, 0, 0, 0,183.05]]
                        ],
                        [
                            "eid62",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Cloud_2}",
                            '1028px',
                            '1028px'
                        ],
                        [
                            "eid120",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${Cow_1}",
                            [[519.5, 521.5, 0, 0, 0, 0,0],[433.57, 526.29, -200.83, -3.23, -141.88, -2.28,86.13],[284.06, 517.72, 0, 0, 0, 0,235.91]]
                        ],
                        [
                            "eid63",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Cloud_2}",
                            '56px',
                            '56px'
                        ]
                    ]
                }
            },
            "Cow_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['15px', '34px', '9px', '18px', 'auto', 'auto'],
                            id: 'Cow_1_Leg_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Cow_1_Leg_1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-7'], [0, 0, 0], [1, 1, 1]],
                            id: 'Cow_1_Leg_2',
                            type: 'image',
                            rect: ['22px', '35px', '9px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cow_1_Leg_2.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['20'], [0, 0, 0], [1, 1, 1]],
                            id: 'Cow_1_Leg_3',
                            type: 'image',
                            rect: ['44px', '35px', '10px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cow_1_Leg_3.png', '0px', '0px']
                        },
                        {
                            rect: ['52px', '35px', '10px', '18px', 'auto', 'auto'],
                            id: 'Cow_1_Leg_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Cow_1_Leg_4.png', '0px', '0px']
                        },
                        {
                            rect: ['11px', '2px', '58px', '41px', 'auto', 'auto'],
                            id: 'Cow_1_Base',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Cow_1_Base.png', '0px', '0px']
                        },
                        {
                            rect: ['-6px', '1px', '27px', '28px', 'auto', 'auto'],
                            id: 'Cow_2_Head3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Cow_2_Head3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '69px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid112",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_1_Leg_4}",
                            '0deg',
                            '-7deg'
                        ],
                        [
                            "eid116",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${Cow_1_Leg_4}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid106",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_1_Leg_3}",
                            '0deg',
                            '26deg'
                        ],
                        [
                            "eid111",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${Cow_1_Leg_3}",
                            '26deg',
                            '0deg'
                        ],
                        [
                            "eid91",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${Cow_1_Leg_2}",
                            '21px',
                            '23px'
                        ],
                        [
                            "eid96",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${Cow_1_Leg_2}",
                            '23px',
                            '21px'
                        ],
                        [
                            "eid77",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Head3}",
                            '-2px',
                            '1px'
                        ],
                        [
                            "eid83",
                            "top",
                            1500,
                            1500,
                            "linear",
                            "${Cow_2_Head3}",
                            '1px',
                            '-2px'
                        ],
                        [
                            "eid107",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${Cow_1_Leg_3}",
                            '47px',
                            '44px'
                        ],
                        [
                            "eid110",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${Cow_1_Leg_3}",
                            '44px',
                            '47px'
                        ],
                        [
                            "eid85",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_1_Leg_1}",
                            '0deg',
                            '22deg'
                        ],
                        [
                            "eid90",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${Cow_1_Leg_1}",
                            '22deg',
                            '0deg'
                        ],
                        [
                            "eid86",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${Cow_1_Leg_1}",
                            '16px',
                            '14px'
                        ],
                        [
                            "eid89",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${Cow_1_Leg_1}",
                            '14px',
                            '16px'
                        ],
                        [
                            "eid78",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Head3}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid84",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${Cow_2_Head3}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid113",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${Cow_1_Leg_4}",
                            '52px',
                            '53px'
                        ],
                        [
                            "eid117",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${Cow_1_Leg_4}",
                            '53px',
                            '52px'
                        ],
                        [
                            "eid92",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_1_Leg_2}",
                            '0deg',
                            '-16deg'
                        ],
                        [
                            "eid95",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${Cow_1_Leg_2}",
                            '-16deg',
                            '0deg'
                        ],
                        [
                            "eid76",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Head3}",
                            '-4px',
                            '-6px'
                        ],
                        [
                            "eid82",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${Cow_2_Head3}",
                            '-6px',
                            '-4px'
                        ]
                    ]
                }
            },
            "Cow_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['43px', '28px', '10px', '20px', 'auto', 'auto'],
                            id: 'Cow_2_Leg_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Cow_2_Leg_2.png', '0px', '0px']
                        },
                        {
                            rect: ['48px', '28px', '10px', '20px', 'auto', 'auto'],
                            id: 'Cow_2_Leg_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Cow_2_Leg_1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['16'], [0, 0, 0], [1, 1, 1]],
                            id: 'Cow_2_Leg_4',
                            type: 'image',
                            rect: ['19px', '28px', '9px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cow_2_Leg_4.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-12'], [0, 0, 0], [1, 1, 1]],
                            id: 'Cow_2_Leg_3',
                            type: 'image',
                            rect: ['23px', '28px', '9px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cow_2_Leg_3.png', '0px', '0px']
                        },
                        {
                            rect: ['11px', '0px', '52px', '36px', 'auto', 'auto'],
                            id: 'Cow_2_Base',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Cow_2_Base.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-13'], [0, 0, 0], [1, 1, 1]],
                            id: 'Cow_Head_12',
                            type: 'image',
                            rect: ['0px', '6px', '23px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cow_Head_12.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '51px']
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: true,
                    data: [
                        [
                            "eid126",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_Head_12}",
                            '0deg',
                            '-13deg'
                        ],
                        [
                            "eid157",
                            "rotateZ",
                            1500,
                            1750,
                            "linear",
                            "${Cow_Head_12}",
                            '-13deg',
                            '0deg'
                        ],
                        [
                            "eid127",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Leg_4}",
                            '19px',
                            '17px'
                        ],
                        [
                            "eid152",
                            "left",
                            1500,
                            1750,
                            "linear",
                            "${Cow_2_Leg_4}",
                            '17px',
                            '19px'
                        ],
                        [
                            "eid129",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Leg_3}",
                            '0deg',
                            '-12deg'
                        ],
                        [
                            "eid155",
                            "rotateZ",
                            1500,
                            1750,
                            "linear",
                            "${Cow_2_Leg_3}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid130",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Leg_3}",
                            '23px',
                            '25px'
                        ],
                        [
                            "eid154",
                            "left",
                            1500,
                            1750,
                            "linear",
                            "${Cow_2_Leg_3}",
                            '25px',
                            '23px'
                        ],
                        [
                            "eid137",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Leg_1}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid151",
                            "rotateZ",
                            1500,
                            1750,
                            "linear",
                            "${Cow_2_Leg_1}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid139",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Leg_2}",
                            '43px',
                            '42px'
                        ],
                        [
                            "eid148",
                            "left",
                            1500,
                            1750,
                            "linear",
                            "${Cow_2_Leg_2}",
                            '42px',
                            '43px'
                        ],
                        [
                            "eid136",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Leg_1}",
                            '48px',
                            '49px'
                        ],
                        [
                            "eid150",
                            "left",
                            1500,
                            1750,
                            "linear",
                            "${Cow_2_Leg_1}",
                            '49px',
                            '48px'
                        ],
                        [
                            "eid128",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Leg_4}",
                            '0deg',
                            '16deg'
                        ],
                        [
                            "eid153",
                            "rotateZ",
                            1500,
                            1750,
                            "linear",
                            "${Cow_2_Leg_4}",
                            '16deg',
                            '0deg'
                        ],
                        [
                            "eid138",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${Cow_2_Leg_2}",
                            '0deg',
                            '30deg'
                        ],
                        [
                            "eid149",
                            "rotateZ",
                            1500,
                            1750,
                            "linear",
                            "${Cow_2_Leg_2}",
                            '30deg',
                            '0deg'
                        ],
                        [
                            "eid125",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${Cow_Head_12}",
                            '3px',
                            '6px'
                        ],
                        [
                            "eid156",
                            "top",
                            1500,
                            1750,
                            "linear",
                            "${Cow_Head_12}",
                            '6px',
                            '3px'
                        ]
                    ]
                }
            },
            "Windmill": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Windmill_Base',
                            type: 'image',
                            rect: ['23px', '58px', '105px', '176px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Windmill_Base.png', '0px', '0px']
                        },
                        {
                            id: 'Windmill_Spin',
                            type: 'image',
                            rect: ['0px', '0px', '152px', '137px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Windmill_Spin.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '152px', '234px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${Windmill_Spin}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "River": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Ripple_2_Animation',
                            symbolName: 'Ripple_2_Animation',
                            rect: ['536', '0', '400', '114', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Ripple_1_Animation',
                            symbolName: 'Ripple_1_Animation',
                            rect: ['0', '0', '432', '114', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Flower_4_Animation',
                            symbolName: 'Flower_4_Animation',
                            rect: ['975', '52', '40', '23', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Flower_3_Animation',
                            symbolName: 'Flower_3_Animation',
                            rect: ['941', '11', '34', '20', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Flower_2_Animation',
                            symbolName: 'Flower_2_Animation',
                            rect: ['479', '64', '41', '22', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Flower_1_Animation',
                            symbolName: 'Flower_1_Animation',
                            rect: ['444', '28', '35', '22', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1015px', '114px']
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Ripple_1_Animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Ripple_1',
                            rect: ['-427px', '0px', '432px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Ripple_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '432px', '114px']
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    data: [
                        [
                            "eid29",
                            "left",
                            0,
                            6000,
                            "linear",
                            "${Ripple_1}",
                            '1030px',
                            '-427px'
                        ]
                    ]
                }
            },
            "Ripple_2_Animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Ripple_2',
                            rect: ['-930px', '0px', '400px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Ripple_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '114px']
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "left",
                            3000,
                            6000,
                            "linear",
                            "${Ripple_2}",
                            '496px',
                            '-930px'
                        ]
                    ]
                }
            },
            "Flower_1_Animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Flower_1',
                            rect: ['588px', '0px', '35px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Flower_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "left",
                            0,
                            7000,
                            "linear",
                            "${Flower_1}",
                            '588px',
                            '-477px'
                        ]
                    ]
                }
            },
            "Flower_2_Animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Flower_2',
                            rect: ['554px', '0px', '41px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Flower_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '41px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 7500,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "left",
                            500,
                            7000,
                            "linear",
                            "${Flower_2}",
                            '554px',
                            '-518px'
                        ]
                    ]
                }
            },
            "Flower_3_Animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Flower_3',
                            rect: ['87px', '0px', '34px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Flower_3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '34px', '20px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid35",
                            "left",
                            1000,
                            7000,
                            "linear",
                            "${Flower_3}",
                            '87px',
                            '-979px'
                        ]
                    ]
                }
            },
            "Flower_4_Animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Flower_4',
                            rect: ['61px', '0px', '40px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Flower_4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '23px']
                        }
                    }
                },
                timeline: {
                    duration: 8500,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "left",
                            1500,
                            7000,
                            "linear",
                            "${Flower_4}",
                            '61px',
                            '-1024px'
                        ]
                    ]
                }
            },
            "Bird_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '76px', '27px', 'auto', 'auto'],
                            id: 'Bird_1',
                            type: 'image',
                            autoOrient: 'true',
                            fill: ['rgba(0,0,0,0)', 'images/Bird_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '76px', '27px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "location",
                            0,
                            5000,
                            "linear",
                            "${Bird_1}",
                            [[38, 13.5, 0, 0, 0, 0,0],[-320.05, 131.94, -536.56, -52.13, -511.17, -49.66,383.98],[-742.67, -120.89, -561.59, -173.37, -523.46, -161.6,883.64],[-1216.17, -108.34, 0, 0, 0, 0,1361.88]]
                        ]
                    ]
                }
            },
            "Bird_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '50px', '18px', 'auto', 'auto'],
                            id: 'Bird_2',
                            type: 'image',
                            autoOrient: 'true',
                            fill: ['rgba(0,0,0,0)', 'images/Bird_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '18px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "location",
                            1000,
                            5000,
                            "linear",
                            "${Bird_2}",
                            [[25, 9, 0, 0, 0, 0,0],[-346.83, -26.44, -447.98, 88.4, -503.13, 99.29,376.94],[-758.4, 134.55, -609.42, 0, -474.37, 0,823.12],[-1122.16, 9, 0, 0, 0, 0,1213.99]]
                        ]
                    ]
                }
            },
            "Cloud_Blue_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Cloud_Blue_1',
                            rect: ['0px', '0px', '174px', '73px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cloud_Blue_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '174px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 25000,
                    autoPlay: true,
                    data: [
                        [
                            "eid43",
                            "left",
                            0,
                            25000,
                            "linear",
                            "${Cloud_Blue_1}",
                            '0px',
                            '-1234px'
                        ]
                    ]
                }
            },
            "Cloud_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Cloud_2',
                            rect: ['0px', '0px', '235px', '111px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cloud_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '235px', '111px']
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: true,
                    labels: {
                        "Start": 10000
                    },
                    data: [
                        [
                            "eid53",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${Cloud_2}",
                            '-863px',
                            '-1291px'
                        ],
                        [
                            "eid57",
                            "left",
                            10000,
                            30000,
                            "linear",
                            "${Cloud_2}",
                            '0px',
                            '-1281px'
                        ]
                    ]
                }
            },
            "Cloud_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Cloud_1',
                            rect: ['0px', '0px', '235px', '111px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cloud_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '235px', '111px']
                        }
                    }
                },
                timeline: {
                    duration: 65000,
                    autoPlay: true,
                    data: [
                        [
                            "eid46",
                            "left",
                            0,
                            65000,
                            "linear",
                            "${Cloud_1}",
                            '0px',
                            '-1234px'
                        ]
                    ]
                }
            },
            "MTN_Cloud_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Cloud_Blue_3',
                            rect: ['0px', '15px', '171px', '181px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cloud_Blue_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Cloud_White_2',
                            rect: ['8px', '24px', '163px', '181px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cloud_White_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '171px', '205px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid72",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${Cloud_White_2}",
                            '24px',
                            '37px'
                        ],
                        [
                            "eid74",
                            "top",
                            4000,
                            4000,
                            "linear",
                            "${Cloud_White_2}",
                            '37px',
                            '24px'
                        ],
                        [
                            "eid73",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${Cloud_Blue_3}",
                            '15px',
                            '28px'
                        ],
                        [
                            "eid75",
                            "top",
                            4000,
                            4000,
                            "linear",
                            "${Cloud_Blue_3}",
                            '28px',
                            '15px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Animated_Farm_edgeActions.js");
})("EDGE-65018862");
