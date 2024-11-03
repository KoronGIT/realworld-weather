export const weatherConfig = {
    Settings: {
        latitude: 40.7143, // default position is set to NY, USA. informations can be found on https://open-meteo.com/en/docs
        longitude: -74.006,
        timeBetweenUpdates: 60000 * 10, // 60000 (milliseconds) * 10 = 10 Minutes. Please note!!!: https://open-meteo.com/en/terms
        timeToTransition: 5,
    },
};