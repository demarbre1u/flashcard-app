# Flashcard App

## Introduction

<p align="center">
  <img src="https://github.com/demarbre1u/FlashCard_App/blob/master/screenshots/Screen01.png?raw=true" width="175" title="Screen 1" alt="Screen 1">
  <img src="https://github.com/demarbre1u/FlashCard_App/blob/master/screenshots/Screen02.png?raw=true" width="175" title="Screen 2" alt="Screen 2">
  <img src="https://github.com/demarbre1u/FlashCard_App/blob/master/screenshots/Screen03.png?raw=true" width="175" title="Screen 3" alt="Screen 3">
  <img src="https://github.com/demarbre1u/FlashCard_App/blob/master/screenshots/Screen04.png?raw=true" width="175" title="Screen 4" alt="Screen 4">
  <img src="https://github.com/demarbre1u/FlashCard_App/blob/master/screenshots/Screen05.png?raw=true" width="175" title="Screen 5" alt="Screen 5">
</p>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

It is a simple flashcard application made with [Angular](https://angular.io/).

Available features : 

- Create a new collection of flashcard
- Create a new flashcard in a given collection
- Delete a flashcard from a given collection
- See the flashcards in a given collection
- Delete a collection of flashcard
- Change the app's theme

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

To build the app so it can be used on an android device, you can clone [this repository](https://github.com/demarbre1u/Flashcard_App_Cordova), and then build the app like so :

`
ng build --prod --base-href . --output-path ../Flashcard_App_Cordova/www/
`

Once this is done, follow the instructions on the other repository to run your app on an android device.
