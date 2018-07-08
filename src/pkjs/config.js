module.exports = [
  {
    "type": "heading",
    "defaultValue": "DigiTemp"
  },
  {
    "type": "text",
    "defaultValue": "Sony-like Watchface von Benni =)"
  },  
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Farben & Akku"
      },  /*  
      {
        "type": "color",
        "messageKey": "BLAAAAA",
        "defaultValue": "0x000000",
        "label": "Background Color"
      },  */
      {
        "type": "toggle",
        "messageKey": "ShowBattery",
        "label": "Akkustand anzeigen",
        "defaultValue": true
      },
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Temperatur (OpenWeatherMap)"
      },
      {
        "type": "toggle",
        "messageKey": "ShowTemperature",
        "label": "Temperatur anzeigen",
        "defaultValue": false
      },  /*
      {
        "type": "text",
        "messageKey": "OpenWeatherApiKey",
        "label": "OpenWeatherMap API key \n(Gratis unter https://openweathermap.org/appid)",
        "defaultValue": "32 Stellen Hex-Code"
      },
      {
        "type": "text",
        "messageKey": "CityName",
        "label": "Stadt wählen (OpenWeatherMap):",
        "defaultValue": "Wien"
      },  */
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Speichern"
  }
];