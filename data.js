var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.005280592755848801,
          "pitch": 0.16225820901650678,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3001114933307356,
        "pitch": -0.008428736396169256,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": 1.2669704604089294,
          "pitch": 0.1247668698397959,
          "rotation": 0.7853981633974483,
          "target": "0-entrance"
        },
        {
          "yaw": 0.8232576729444592,
          "pitch": 0.254013990156853,
          "rotation": 0,
          "target": "2-dinning"
        },
        {
          "yaw": 0.9415108859794721,
          "pitch": 0.05872107164649165,
          "rotation": 7.853981633974483,
          "target": "3-kitchen-op-1"
        },
        {
          "yaw": 0.9375180172452389,
          "pitch": 0.17565584953336355,
          "rotation": 1.5707963267948966,
          "target": "4-kitchen-op-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dinning",
      "name": "Dinning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6897387331611533,
          "pitch": 0.16002343735595304,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 2.317215618062308,
          "pitch": 0.18081253296759314,
          "rotation": 4.71238898038469,
          "target": "2-dinning"
        },
        {
          "yaw": -0.4278567474733155,
          "pitch": 0.2455111504574603,
          "rotation": 0,
          "target": "5-walk-away"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-op-1",
      "name": "kitchen op 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.007324990190138436,
          "pitch": 0.09738026202504457,
          "rotation": 0,
          "target": "11-pantry"
        },
        {
          "yaw": -1.9421669381536937,
          "pitch": 0.05015365352290502,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -1.5671282682497605,
          "pitch": 0.45523988447646246,
          "rotation": 0.7853981633974483,
          "target": "2-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen-op-2",
      "name": "Kitchen op 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.028417006754992258,
          "pitch": 0.2572802704787094,
          "rotation": 0,
          "target": "11-pantry"
        },
        {
          "yaw": -1.9764774198271589,
          "pitch": 0.028851324260894984,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -1.927956493490262,
          "pitch": 0.5198049954444013,
          "rotation": 0.7853981633974483,
          "target": "2-dinning"
        },
        {
          "yaw": -1.173961094582923,
          "pitch": 0.10991469573818691,
          "rotation": 0,
          "target": "7-common-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-walk-away",
      "name": "walk away",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04485884404003215,
          "pitch": 0.3017400845061111,
          "rotation": 0,
          "target": "6-mb"
        },
        {
          "yaw": -0.9503698752906615,
          "pitch": 0.2790931008466675,
          "rotation": 4.71238898038469,
          "target": "8-common-2"
        },
        {
          "yaw": -2.2701354958765716,
          "pitch": 0.26717077871073336,
          "rotation": 1.5707963267948966,
          "target": "8-common-2"
        },
        {
          "yaw": 2.6310226879439966,
          "pitch": 0.36836427467825317,
          "rotation": 0,
          "target": "2-dinning"
        },
        {
          "yaw": -3.026388400055456,
          "pitch": 0.10906079755237741,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 2.9480190569485822,
          "pitch": 0.04765913600298077,
          "rotation": 4.71238898038469,
          "target": "0-entrance"
        },
        {
          "yaw": 2.327050999077871,
          "pitch": 0.0644707784150178,
          "rotation": 4.71238898038469,
          "target": "3-kitchen-op-1"
        },
        {
          "yaw": 2.2018448755045625,
          "pitch": 0.06688494795267808,
          "rotation": 4.71238898038469,
          "target": "4-kitchen-op-2"
        },
        {
          "yaw": 0.8339378632051879,
          "pitch": 0.20074227752774298,
          "rotation": 7.853981633974483,
          "target": "10-tiolet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-mb",
      "name": "MB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9571391673774592,
          "pitch": 0.06839211179246263,
          "rotation": 4.71238898038469,
          "target": "9-mb-tiolet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-common-1",
      "name": "common 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9793048943537634,
          "pitch": 0.11632624647957002,
          "rotation": 0,
          "target": "5-walk-away"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-common-2",
      "name": "common 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8428900798731096,
          "pitch": 0.15851200697386325,
          "rotation": 4.71238898038469,
          "target": "5-walk-away"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-mb-tiolet",
      "name": "MB tiolet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7227079366545635,
          "pitch": 0.1725326085673018,
          "rotation": 2.356194490192345,
          "target": "6-mb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-tiolet",
      "name": "tiolet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1705618764247063,
          "pitch": 0.16658392973791614,
          "rotation": 1.5707963267948966,
          "target": "5-walk-away"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pantry",
      "name": "pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2461601083298781,
          "pitch": 0.3628147028440818,
          "rotation": 4.71238898038469,
          "target": "3-kitchen-op-1"
        },
        {
          "yaw": -1.3417441743403327,
          "pitch": 0.08144459055910858,
          "rotation": 4.71238898038469,
          "target": "4-kitchen-op-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
