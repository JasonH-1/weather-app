const API_KEY = "57731f9806a747b3af1185906250801";
const BASE_URL = "https://api.weatherapi.com/v1"; // Use https

export const fetchWeather = async (location) => {
  try {
    const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=1&aqi=no&alerts=no`);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
