var ChartGI3 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(GI3) UK real nDP per capita",

   "title": {
    "text": "Net domestic product",
    "subtitle":"Per capita. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/GI3.DataHub.GrowthInnovationGDPperCap.csv"},
  "height": 300,
  "width": 305,

   "encoding": {"x": {"field": "Date", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {

        "y": {"field": "Value", 

              "type": "quantitative", 
              "title":"",
              "scale": {"domain": [3000, 7000]},
               "axis": {"grid": false}
              }
            },

        
        "layer": [{"mark": {"type": "line", "color": "goldenrod"}},

                  {"transform": 

                      [{"filter": {"selection": "hover"}}], 

                        "mark": "point"}

      ]

    },

    {"mark": "rule", 

      "encoding": {
        "opacity": {
          "condition": {"value": 0.1, "selection": "hover"},
          "value": 0
        },

        "tooltip": [

          {"field": "Date", "type": "temporal", "format":"%B, %Y"},
          {"field": "Value", "title": "nDP", "type": "quantitative", "format": ",.0f"}

        ]

      },


      
      "selection": {
        "hover": {
          "type": "single",
          "fields": ["Date"],
          "nearest": true,
          "on": "mouseover",
          "empty": "none",
          "clear": "mouseout"

        }

      }

    }

  ]

};


vegaEmbed('#ChartGI3', ChartGI3, {"actions": false});