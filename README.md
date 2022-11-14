# Team Profile Generator

## User Story

```md
AS A new developer
I WANT to create a command line prompt that will generate an html document filled with all of the details gathered by the prompt
SO THAT one can have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

clone the github repo at https://github.com/ColeS82/Team_Profile_Generator.  With node js make sure you are in the same directories as the index.js file.  type "npm i".  

## usage

Type node index and you should see prompts.

## Mock-Up
![animation showing the steps to fill out the promted information from the commandline.](./assets/images/Untitled_%20Nov%2013%2C%202022%2011_52%20PM.gif)

![Picture showing the webpage generated from the prompts.](./images/README_demo.gif)

## Test 

type npm test in the command line

## Links
app repo: 
https://github.com/ColeS82/Team_Profile_Generator





