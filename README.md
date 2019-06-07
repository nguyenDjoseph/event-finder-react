# Event Finder in React
This application queries a city for upcoming events, and shows the current weather at that city.  Uses Node, Express, React (bootstrapped w/ create-react-app), Ticketmaster's API, Google's geolocation API, Darksky's API, and React MaterialUI/Materialize for styling.
## Prereqs
I'm currently using Node v10.10.0 and npm v6.4.1 (I'm using yarn as my package manager but npm should work just fine). There should also be a .env file in the root of the folder that holds all the API keys. 
## Installation
Clone the repo, then install the necessary dependencies using the following command:  
``` npm i ```  
## Running the server and application
We need to spin up the server and the React application. To spin up the server use the command:  
``` npm run server ```  
Then we need to start the React app by using the command (in another instance of the terminal):  
``` npm start ```  
The application should now be running on http://localhost:3000/,  
Note: Make sure to have a .env file or the app won't work.