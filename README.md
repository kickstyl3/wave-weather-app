  # **Wave-Weather**
  Wave is an online weather website, focused on providing accurate and fast data. The idea of this project is to provide an ad-free, non-profit website. Our main focus is to make finding your favorite city as easy as possible and provide you with the information you need. 
You can type in the search bar your favourite city and we will provide you with the current weather data there.
Would you like more information about the next 5 days, 8 hours or just to check out on the details for your favorite city? You can Sign Up fast and easy and make your experience even better!
## Back-End
- Created with **Express**
- NoSQL Database with **MongoDB** + **Mongoose**
- **MongoDB Atlas** used for storing data
- **Bcrypt** used for password-hashing
- **JWT-Token** used for creating and storing user data
## Front-End
- Created with **Angular**
- **Cookies** used for authentication
- **Moment** used for formatting date and time
- **AuthGuard** used for protecting routes
- **AuthInterceptor** used for sending important data along with requests
- **AuthService** used for authentication functionality
- **WeatherService** used for sending requests to weather api
- **UtilityService** used for business logic
## How to start the project
- **Download**/**Clone** the project
- Go to **front-end** folder
- Run **Command Prompt** (**CMD**)
- Type in **npm install** to install the required dependencies
- Go to **server** folder
- Create a **.env** file in the **server** folder
- **Copy/Paste** the variables listed below and enter the correct values:
  - DB_USER=**_Enter your MongoDBAtlas username_**
  - DB_PASSWORD=**_Enter your MongoDBAtlas password_**
  - privateKey=**_Enter a private key_** <- **by your choice**
  - authCookieName=**_x-auth-token_** <- **leave it like this**
  - secretKey=**_Enter a secret key_** <- **by your choice**
  - weatherApiKey=**_9c85e6c571254afe351305dbc491b85a_**
  - geocodingApiKey=**_2ba1408f936341ec83f082cde6f1e2d1_**
  - databaseUrl=**_Enter your Database URL Address_**
  - PORT=**_Enter a PORT by your choice_**
- Go to **front-end** folder
- Run **Command Prompt** (**CMD**)
- Type in **ng serve** and press **Enter**
- Angular is now running...
- Go to **server** folder
- Run **Command Prompt** (**CMD**)
- Type in **npm start** and press **Enter**
- Express is now running...
- You are ready to explore!
