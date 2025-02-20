var ChartM2 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M2) CPIH annual rate (%), 1989-2021",

   "title": {
    "text": "Inflation",
    "subtitle":"CPIH annual % change. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M2.DataHub.MonetaryCPIHAnnRate.csv"},
  "height": 300,
  "width": 305,
  
  "encoding": {"x": {"field": "Month", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {

        "y": {"field": "Value", 

              "type": "quantitative", 
              "title":"",
              
               "axis": {"grid": false}
              }
            },

        
        "layer": [{"mark": {"type": "line", "color": "darkblue"}},

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

          {"field": "Month", "title": "Date", "type": "temporal", "format":"%B, %Y"},
          {"field": "Value", "title": "CPIH", "type": "quantitative", "format": ""}

        ]

      },


      
      "selection": {
        "hover": {
          "type": "single",
          "fields": ["Month"],
          "nearest": true,
          "on": "mouseover",
          "empty": "none",
          "clear": "mouseout"

        }

      }

    }

  ]

};


vegaEmbed('#ChartM2', ChartM2, {"actions": false});