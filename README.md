# FishTankScale
This application will be used to determine whether or not the contents of a fish tank are suitable. Determing fish compatibility, water temperature, water ph, water hardness, and tank capacity will be the key features of this application. The main goal for this application is to help all levels of aquarium owners better understand if their fish tank is setup properly and provides the fish with everything they need.
## Specification Deliverable
This is the beginning of my Specification Deliverable
### Elevator Pitch
The perfect tool for people who want a fish tank but know nothing about fish. There are many complicated aspects to owning a fish tank of any size. What fish will work together? What temperature should the water be? Can I put a crab with shrimp? How high should the ph be? There are many questions a beginner fish tank owner might have. But with my application, FishTankScale, it will be easier than ever to be able to have your own fish tank. FishTankScale performs all these tasks for you plus more. Simply input your tank size, filter type, fish species, and the number of fish you want, and the application will assess your setup, providing suggestions for any necessary adjustments. It is easy to use and a great way for all levels of fish tank owners to better plan out their next aquarium.
### Design
![This is an image of what the first version FishTankScale application could look like.](https://github.com/kobycut/startup/blob/main/Screenshot%202024-09-10%20190151.png)
### Key Features
+ Display of current Fish Tank
+ Ability to add and remove fish from the tank
+ Cautions about current tank displayed
+ Ability to add a filter
+ Display of recommended water specifications such as ph, temperature, and hardness.
+ Ability to add a tank
+ Ability to change filter options, such as to display in Celsius instead of Fahrenheit
### Technologies
+ I am going to use the required technologies in the following ways:
+ HTML - One HTML page, used to display the application.
+ CSS - Makes the application adaptable to different devices and provides style to display.
+ JavaScript - Used for all buttons and different actions the user can perform on the screen.
+ React - Reactive to user's actions on webpage such as pressing the drop down menues to choose from and adding fish to the tank.
+ Service - Provides the service in the backend. Enables storing fish tank choices, recieving filter/tank choices, and updating the recommended values.
  - Lordicon - This outside API will provide an animated Icon for my homepage to make it lively.
+ DB/Login - Keep track of users choices in the database.
+ WebSocket - Keeps the values displayed on the screen updated in real time between the user and the server.
## HTML Deliverable
This is the beginning of my HTML Deliverable.
For this deliverable I built out my website using HTML.
- [x] **HTML pages** - Made an HTML page that allows for testing out fish tank requirements and compatibilities. Only one page needed for my startup.
- [x] **Links** - There is only one necessary page so there are no links to other pages on my website. However there is a link to my github as well as to a few articles that could be useful to the user.
- [x] **Text** - Multiple uses of text. Used to describe the webpage and do things such as selecting a tank, filter, or fish.
- [x] **Images** - Used images for a favicon as well as for a title on the webpage.
- [x] **DB/Login** - Each time a specification such as a tank, filter, or fish is added, the database provides suggestions and whether or not the fish tank is compatible. Added a login to remember users tanks. The database will hold the user information and remember their choices.
- [x] **WebSocket** - As the user puts in various specifications, the suggestions and tank compatibility will update in real time through communicating with the server and the database.
## CSS Deliverable
In this deliverable I finalized the style for the website.
- [x] **Header, footer, and main content body** - The header, footer, and the main content body have been formatted to increase readability and functionality.
- [x] **Navigation elements** - I updated the css to make the links into nicer looking boxes that can easily be navigated. This was done on the helpful articles section of my website.
- [x] **Responsive to window resizing** - Using flex the website is able to fit and look nice in any screen format/size.
- [x] **Application elements** - The components of my website are formatted and spaced out in a way that looks pleasing.
- [x] **Application text content** - Font of all my text is Roboto, this keeps the text consistent and looking nice.
- [x] **Application images** - The image has been formatted with flex to adjust size to any screen as well as added some CSS to make it look better. 

## React deliverable

For this deliverable I used JavaScript and React so that the application completely works for a single user. I also added placeholders for future technology.

- [x] **Bundled and transpiled** - done!
- [x] **Components** - Login, tank, and alerts all have basic functionality to improve on and mock for full websocket functionality.
  - [x] **login** - Option to login which takes you to the login page and if logged in you can save your tank for future use.
  - [x] **database** - Logging in uses local storage, will switch to database in the future.
  - [x] **WebSocket** - Setting the alerts I did manually, in the future this will be done by the websocket.
  - [x] **application logic** - The fish in the tank change based on which ones you put in. Also can increment and decrement how many of each fish. Also the alerts change based on the tank conditions. Not all alert functionality is complete.
- [x] **Router** - Routing between login and tank is done.
- [x] **Hooks** - Used to update logic and allow react to change the visuals based on different things.

## Service deliverable



For this deliverable I added backend endpoints that receives login information.

- [x] **Node.js/Express HTTP service** - done!
- [x] **Static middleware for frontend** - done!
- [x] **Calls to third party endpoints** - Calls a daily fact generator in the login page to display a random daily fact.
- [x] **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for login.
- [x] **Frontend calls service endpoints** - I did this using the fetch function.

## DB/Login deliverable

For this deliverable I login and register the user using the database and it stores the info there.

- [x] **MongoDB Atlas database created** - done!
- [x] **Stores data in MongoDB** - done!
- [x] **User registration** - Creates a new account in the database.
- [x] **existing user** - Allows for existing users to login and use their account
- [x] **Use MongoDB to store credentials** - Stores the user and their login
- [x] **Restricts functionality** - You can only perform the save tank function if logged in.

## WebSocket deliverable

For this deliverable I used webSocket to show who is using the application in real time.

- [x] **Backend listens for WebSocket connection** - done!
- [x] **Frontend makes WebSocket connection** - done!
- [x] **Data sent over WebSocket connection** - done!
- [x] **WebSocket data displayed** - Displays once you are logged in in the top right corner. Stays a certain size in order to limit the space it takes. Updates in realtime to all other users when someone creates a new account, logs in, or logs out with different messages representing each scenario. My startup is complete!! I'm going to celebrate by going skateboarding :))) Have a great christmas break!!!
