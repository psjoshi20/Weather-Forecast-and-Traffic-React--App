 Welcome -

Table of Contents
User Story -

 Features:
// 1. Allow the user to choose a date and time, then show a list of locations with traffic cam
// photos for the specified date and time. (API 1: Traffic Images)

// 2. Show the list of locations from API 1 (Traffic Images) only has lat/long without name, use a
// reverse geocoding service (API 2: Weather Forecast) to display more user friendly location
// names
// 3. When the user selects a location from the list, show the traffic cam photo, and also the
// weather info for that location from API 2 (Weather Forecast) (or the nearest available
// weather info depending on what API 2 can return)
// As the location information are returned in latitude and longitude format, you are required to look for
// an API that does reverse geo-coding to show its human readable names instead.


What are you supposed to do?
// ● Create a frontend application based on the requirements and mock-up above
// ● Create proper UI components for the application
// ● Handle the responsiveness of the UI in the application
// ● Create the necessary CSS styling ensure the interface is aesthetically pleasing
// ● Develop an application with good user-experience (UX)
// ● Feel free to change the design of the application if you have a better idea
// ● You will be asked to showcase and explain to us some of your development

1. Concept- A realtime weather application in React using the Fetch API and geolocation
Once we get our data in our app we will be able to see information like temperature, location, humidity, wind speed and direction. These we will draw from one of the many free weather data sources available on data.gov.sg.
 

2. Project Setup
create a new React project using the following command in our Terminal / Bash.-
 create-react-app weather-traffic-website> This will create a new React app called weather-traffic-website  in our current directory using the create-react-app boilerplate package.
 install React-Bootstrap, Bootstrap  using our computer's terminal or our editor's integrated one (I am using VS Code).
 Delete unwanted files .
 Clear out index.css and App.css .
 add .gitignore files before commiting project into GIT Repo.
 initialtiate git repo for the porject.  Follow all instructions from github.
 project structure -
 public folder - sample json dats from APIs
 project folder - 
     src - 
          apis-
          assets- images, icons.
          Components - project component and styling for that component
          App.js -  This is the file for App Component. App Component is the main component in React which acts as a container for all other components.
          App.css
          index.js
          index.css

3. Initialisation & Basic Styling
  create Functional  App Component to render OUr ther React Componets. create Mock UI
  Components needed -  Input date and time, display traffic camera locations (area/city)
  Select City/area/location and then  dispaly weather, display traffic 
 
4. Getting Our API data And Adding It To Our Project
   Visit data.gov.sg - search for the required API 
   API 1 -->  "https://api.data.gov.sg/v1/transport/traffic-images"
   API 2 -->  "https://api.data.gov.sg/v1/environment/4-day-weather-forecast "
   API 3 --> "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"

5. Fetching Our Data
we now need a way to get our weather data. For that, we will create a function called getWeatherData
we now need a way to get our Traffic  data. For that, we will create a function called getTrafficData
we now need a way to get our Areametadatga data. For that, we will create a function called getAreaData



6. Getting The Traffic Camera's Position


7. Adding Placeholder for Date and Time inout Data And Styling Our Container

8. Passing Data To Our Components: 
9. Passing Data To Our Components: 
10. Passing Data To Our Components: 
