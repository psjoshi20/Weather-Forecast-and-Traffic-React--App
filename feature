// Features:
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

// What are you supposed to do?
// ● Create a frontend application based on the requirements and mock-up above
// ● Create proper UI components for the application
// ● Handle the responsiveness of the UI in the application
// ● Create the necessary CSS styling ensure the interface is aesthetically pleasing
// ● Develop an application with good user-experience (UX)
// ● Feel free to change the design of the application if you have a better idea
// ● You will be asked to showcase and explain to us some of your development

API-

API 1 -https://api.data.gov.sg/v1/transport/traffic-images


{
  "api_info": {
    "status": "healthy"
  },
  "items": [
    {
      "timestamp": "2021-02-26T16:00:30.712Z",
      "cameras": [
        {
          "timestamp": "2021-02-26T16:00:30.712Z",
          "camera_id": 0,
          "image_id": 0,
          "image": "string",
          "image_metadata": {
            "height": 0,
            "width": 0,
            "md5": "string"
          }
        }
      ]
    }
  ]
}


  "items": [
    {
      "timestamp": "2021-02-27T00:03:43+08:00",
      "cameras": [
        {
          "timestamp": "2021-02-27T00:03:43+08:00",
          "image": "https://images.data.gov.sg/api/traffic-images/2021/02/e093ebfd-a97c-47e7-b1b3-2563a8792ea2.jpg",
          "location": {
            "latitude": 1.361742,
            "longitude": 103.703341
          },
          "camera_id": "6714",
          "image_metadata": {
            "height": 480,
            "width": 640,
            "md5": "945ab7f4a14cc52eb116ee58fdb1c6c3"
          }
        },
        {
          "timestamp": "2021-02-27T00:03:43+08:00",
          "image": "https://images.data.gov.sg/api/traffic-images/2021/02/d921b0a1-4150-4792-86cc-0694c015093e.jpg",
          "location": {
            "latitude": 1.29531332,
            "longitude": 103.871146
          },
          "camera_id": "1001",
          "image_metadata": {
            "height": 240,
            "width": 320,
            "md5": "b3fdade24e5632e19366f758e5d8e25a"
          }
        },
        {
          "timestamp": "2021-02-27T00:03:43+08:00",
          "image": "https://images.data.gov.sg/api/traffic-images/2021/02/529c10a8-567d-4e3a-94c5-1235fb6a22da.jpg",
          "location": {
            "latitude": 1.319541067,
            "longitude": 103.8785627
          },
          "camera_id": "1002",
          "image_metadata": {
            "height": 240,
            "width": 320,
            "md5": "37250383363495e72d311b742d783266"
          }
        },

API 2- https://api.data.gov.sg/v1/environment/4-day-weather-forecast