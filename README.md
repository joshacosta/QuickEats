# Steps to run project with Ionic Framework and Cordova #

## Some info about Ionic Framework ##
Ionic Framework is a development framework that utilizes Angular to create applications. With it's library of pre-created UI components, ability for cross-platform development, native functionality for devices, and lightweight frontend SDK, it is a solid framework for maintainable web and phone applications. Further information and its robust documentation can be found [here](https://ionicframework.com/docs "here").

## Download Node ##
You will need to download the most current version of node.
Here is the [link](https://nodejs.org/en/download/ "link") to download the installer. 
You can download either the "LTS" or most "Current" build. The only difference is that the most current build helps with faster build times during development. 

## Install Ionic ##
Now, in a command prompt, run this line: 

`npm install -g ionic`

You can run this in a MacOS terminal, the command prompt, or in the prompt of your IDE of choice. Note*: I personally use VSCode and find it easiest to develop with for Ionic and Angular. IF you are using MacOS, you will need to include "sudo" before every command. 

After that, run this line as well:

`npm install -g ionic cordova`

Cordova is a powerful tool for providing access to a phone's native functionalities, such as GPS, camera access, barcode/QR scanning, navigation, and even more. 


## Downloading the project ##
You can either clone the github repo via the command prompt, or you can simply download the files and unzip them to your chosen directory (e.g. a "Projects" or "Capstone" folder).

## Installing further dependencies for project ##
Okay, so with those earlier lines we ran, we globablly installed dependencies for Ionic and Cordova. These allow us to set the foundation for being able to create Ionic projects. Now, we're going to run lines that are project-specific. In your command line interface (CLI), navigate to the folder that you just downloaded onto your machine. Run this line:

`npm install`

You'll see it do its thing. It will probably taking awhile, it's importing a shit load of files and dependencies. Once it's finished, if you check, you'll notice there is a "node_modules" folder. You'll never find this folder in the repositories of other Ionic projects, because its simply too large to include in the repo. So you'll repeat this line for every project you download in order to create the proper dependencies to run it. 


## Installing Cordova Plugin for Launch Navigator ## 
This is the plugin that allows developers to connect a phone's navigation capabilities to an application. Run these lines in your project folder:

`ionic cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator`

`npm install @ionic-native/launch-navigator`

After these lines, you'll notice a "plugins" folder with the Launch Navigator plugin includes. 

## Running the project ##
At this point, that finishes the dependencies needed to run this project. Run the project with this line:

`ionic serve`

Now, a server will run your project and its view. However, if you download the "Ionic Devapp" for your application, you'll be able to run the application directly from your phone. This is used for native-functionality testing that use Cordova. As long as the machine and your phone are on the same network, you'll see your project in the devapp. Another thing about ionic serve, is its ability to allow for quick easy development while the server is running still. Any changes made in any src file will automatically reflect in the live view. Here is the line to run with the devapp:

`ionic serve --devapp`

While these "ionic serve"s are running, DO NOT close your IDE window or command prompt. You'll need to terminate the serve process with "CTRL + C". Doing so will prevent processes from stacking up on your machine, which can take up a lot of resources on your machine. However, if you forget, no biggie. You'll just have to restart your machine. 

That's it! Please message me if you have any issues, in the case that I missed something for the setup process. 

*If you would like to create a new project and expirament, run this line to create a new Ionic project: 

`ionic start AppName Template Type --type=ionic-angular`

Template Types: 
- "sidemenu": creates new app with a side menu navigation
- "tabs": creates new app with bottom tab navigation 
- "blank": creates a new, blank app
- "super": creates a high-functional app that showcases many uses for Ionic
- "tutorial": creates an app that features a tutorial for Ionic Framework 
