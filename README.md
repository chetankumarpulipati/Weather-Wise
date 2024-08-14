# WeatherWise

WeatherWise is a React application that allows users to search for weather information by city name. It fetches weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

## Features
- Search for weather information by city name
- Display current temperature, weather description, humidity, and wind speed
- Handle invalid city names with error messages
- Responsive design for mobile and desktop

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/chethankumarpulipati/weatherwise.git
    cd weatherwise
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```env
    REACT_APP_API_KEY=your_openweathermap_api_key
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a city name in the search bar and click "Search" to view the weather information.

## Project Structure

- `src/App.js`: Main application component
- `src/components/WeatherSearch.js`: Component for searching weather by city name
- `src/components/WeatherDisplay.js`: Component for displaying weather information
- `src/App.css`: CSS styles for the application

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.