import {UI} from "./UI.js"

        
        export const settings = {
  "name": "Blink",
  "devices": [
    "EEG"
  ],
  "author": "Garrett Flynn",
  "description": "A staring contest (with yourself...)",
  "categories": [
    "train"
  ],
  "image": "/_dist_/applets/EEG/blink/img/feature.png",
  "instructions": "Coming soon...",
  "graphs": [
    {
      "nodes": [
        {
          "name": "blink_left",
          "class": "Event",
          "params": {
            "keycode": "ArrowLeft"
          },
          "ports": {
            "keycode": {
              "data": "Space",
              "input": {
                "type": "string"
              },
              "output": {
                "type": null
              }
            },
            "default": {
              "data": false,
              "input": {
                "type": "boolean"
              },
              "output": {
                "type": "boolean"
              }
            }
          }
        },
        {
          "name": "blink_right",
          "class": "Event",
          "params": {
            "keycode": "ArrowRight"
          },
          "ports": {
            "keycode": {
              "data": "Space",
              "input": {
                "type": "string"
              },
              "output": {
                "type": null
              }
            },
            "default": {
              "data": false,
              "input": {
                "type": "boolean"
              },
              "output": {
                "type": "boolean"
              }
            }
          }
        },
        {
          "name": "ui",
          "class":UI,
          "params": {},
          "ports": {
            "left": {
              "output": {
                "type": null
              }
            },
            "right": {
              "output": {
                "type": null
              }
            },
            "element": {
              "input": {
                "type": null
              },
              "output": {}
            }
          }
        },
        {
          "name": "document",
          "class": "DOM",
          "params": {},
          "ports": {
            "element": {
              "input": {
                "type": null
              },
              "output": {}
            },
            "opacity": {
              "input": {
                "type": "number"
              },
              "output": {
                "type": null
              },
              "data": 1,
              "min": 0,
              "max": 1,
              "step": 0.01
            },
            "containerStyle": {},
            "setupHTML": {},
            "parentNode": {},
            "html": {
              "input": {
                "type": "HTML"
              },
              "output": {
                "type": null
              },
              "data": "<div id='content'></div>"
            },
            "style": {
              "input": {
                "type": "CSS"
              },
              "output": {
                "type": null
              },
              "data": ".brainsatplay-ui-container {\n\twidth: 100%;\n\theight: 100%;\n}"
            },
            "deinit": {
              "input": {},
              "output": {}
            },
            "responsive": {
              "input": {},
              "output": {
                "type": null
              }
            },
            "content": {
              "edit": false,
              "input": {},
              "output": {
                "type": null
              }
            }
          }
        }
      ],
      "edges": [
        {
          "source": {
            "node": "blink_left",
            "port": "default"
          },
          "target": {
            "node": "ui",
            "port": "left"
          }
        },
        {
          "source": {
            "node": "blink_right",
            "port": "default"
          },
          "target": {
            "node": "ui",
            "port": "right"
          }
        },
        {
          "source": {
            "node": "ui",
            "port": "element"
          },
          "target": {
            "node": "document",
            "port": "content"
          }
        }
      ]
    }
  ],
  "version": "0.0.38",
  "display": {
    "production": false,
    "development": false
  },
  "intro": {
    "title": false,
    "mode": "solo",
    "login": null,
    "domain": null,
    "session": null,
    "spectating": false
  },
  "connect": true
};