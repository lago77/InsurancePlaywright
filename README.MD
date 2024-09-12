# Creating a playwright project with a mock frontend to test
This a simple and rudimentary project I build to get practice with playwright and cucumber-js. The project is
separated into two project directories: InsureFrontend and InsureAutomation.

1) InsureFrontend is a react app that simulates an insurance portal for a user to register and apply policies. It uses cookies to maintain a persistent state and it's imperfect. I just set up something simple to run the playwright scenarios.
   Installation
   ------------
   a) In the root directory run "npm install"

   b) CD into the insure-app directory and enter "npm start"

2) InsureAutomation is the playwright and cucumber automation project that will test the functionality of the InsureFrontend app It consists of two types of features: A registration and a login feature. Each feature has a positive and negative test case. 

  Installation
  ------------
  a)In the root directory run "npm install"

  b)Run the command "npm run test"
