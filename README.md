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
