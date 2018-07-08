#include <pebble.h>

#define SETTINGS_KEY 1

// A structure containing our settings
typedef struct ClaySettings {
  bool ShowBattery;
  bool ShowTemperature;
} __attribute__((__packed__)) ClaySettings;