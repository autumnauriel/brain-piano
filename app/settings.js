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
          "name": "blink_both",
          "class": "Event",
          "params": {
            "keycode": "Space"
          },
        },
        {
          "name": "blink_left",
          "class": "Event",
          "params": {
            "keycode": "ArrowLeft"
          },
        },
        {
          "name": "blink_right",
          "class": "Event",
          "params": {
            "keycode": "ArrowRight"
          },
        },
        {
          "name": "ui",
          "class":UI,
          "params": {},
        },
        {
          "name": "document",
          "class": "DOM",
          "params": {},
        }
      ],
      "edges": [
        {
          "source": {
            "node": "blink_both",
            "port": "default"
          },
          "target": {
            "node": "ui",
            "port": "select"
          }
        },
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