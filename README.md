# QuarantineCalories
count your calories during Quarantine!!



# Client for Quarantine Calories
This the sesction for the client setup instructions and overall architecture.

## Setup

The setup for this part is simple.
1. Install NodeJS, and Yarn on your computer
2. Download the packages for the client by running `yarn install`.
3. Compile and run the project using `yarn serve`

This will make sure that the client is installed and properly running on your computer.

## Architecture

### Entry point

The entry point of this project is the <em>main.js</em>, in the client folder. In there, it loads modules that will be used through the client. It also render the <em>App.vue</em> component.

The <em>App.vue</em> file is the main file for the client. It is responsible for rendering the NavBar and the Router.

### Router

The client is separated into views (<em>Home</em> and <em>Information</em>). There views are defined by the url and rendered by the router.
All routes descriptions are in <em>router.js</em>, and those include the URL extension and the conponents to render.

### Views

There are two views, home and information. Each of those are under the Views folder.

#### Home

Home is the view once the user has logged in. It has all the information of the calories. It has the components:
 * foodInfo
    * Is the component used to render the food name and calorie for the daily food intake information.

 * addItemForm
    * Used to add items to the daily intake.
    * Has two parts, a search bar to look for the food and a table to show the results and add the selected food.

 * weeklyCal
    * Render the weekly caloric intake, to form the weekly table  


The Home component gets the infomation of the user, and the calories and foods consumed before rendering the page to update. This way, every access has the updated information.

### Information

Information is the view with no logged user. It has the name of the project, a description of the goals, and a logIn and signIn form. Both forms are in their respective components.
