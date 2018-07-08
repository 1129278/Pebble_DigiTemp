#include <pebble.h>

#define SETTINGS_KEY 1

// A structure containing our settings
typedef struct ClaySettings {
  bool ShowBattery;
  bool ShowTemperature;
//  int TemperatureLevel;  // actually not a clay setting, but needs to be saved
} __attribute__((__packed__)) ClaySettings;