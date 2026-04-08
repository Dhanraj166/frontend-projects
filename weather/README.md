<FILE filename="README.md" size="2180 bytes"># Weather App

A simple and clean weather application built using HTML, CSS, and JavaScript.
This project fetches real-time weather data for any city using the OpenWeatherMap API.

---

## Features

- Search weather by entering city name
- Displays current temperature in Celsius
- Shows city name
- Changes weather icon based on temperature
- Clean and modern gradient UI design
- Basic error handling for invalid city names

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- OpenWeatherMap API

---

## Project Structure

weather-app/
│
├── index.html
├── README.md
└── images/
    ├── clear.png
    ├── mist.png
    ├── clouds.png
    └── snow.png

---

## How to Use

1. Open the index.html file in any modern web browser
2. Type the name of any city in the search box
3. Click the search button
4. The current temperature and city name will be displayed
5. A weather icon will appear based on the temperature

**Note:** Internet connection is required to fetch weather data.

---

## JavaScript Functions Explanation

The weather logic is written using vanilla JavaScript with the Fetch API.

### Main Variables

- `input` → Gets the city name from the text field
- `btn` → Search button
- `temp` → Element to display temperature
- `city` → Element to display city name
- `weatherIcon` → Element to change the weather image

### Event Listener (Button Click)

When the search button is clicked, the following steps are executed:

1. **Input Validation**
   - Reads the city name entered by the user
   - Removes extra spaces using `trim()`
   - If the input is empty, it shows "Please enter a city name" and stops

2. **API Call**
   - Uses `fetch()` to send a request to OpenWeatherMap API
   - Includes the city name and API key in the URL
   - Requests data in metric units (Celsius)

3. **Response Handling**
   - Checks if the response is successful
   - If the city is not found, it throws an error "City not found"

4. **Data Processing**
   - Extracts the temperature and rounds it to the nearest whole number
   - Updates the temperature and city name on the screen

5. **Weather Icon Logic**
   - Changes the icon based on current temperature:
     - Temperature > 40°C     → clear.png
     - Temperature ≥ 30°C    → mist.png
     - 0°C ≤ Temperature < 30°C → clouds.png
     - Temperature < 0°C     → snow.png

6. **Error Handling**
   - Catches any errors (invalid city, network issues, etc.)
   - Displays the error message in the city field

---

## Notes

- This app is for learning purposes
- The weather icons are chosen based only on temperature (not actual weather condition)
- You must create an `images` folder and add the four image files for icons to work properly
- The API key is already included in the code

---

## Author

Dhanraj S  
Frontend Developer  
GitHub: https://github.com/Dhanraj166


