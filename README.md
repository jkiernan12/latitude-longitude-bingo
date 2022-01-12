# LATITUDE - LONGITUDE BINGO
Mod 3 Group Project

## Table of Contents
  - [Visit the App!](#visit-the-app!)
  - [Abstract](#abstract)
  - [Code Architecture](#code-architecture-/technologies)
  - [Illustrations](#illustrations)
  - [Local Install + Setup](#local-install-+-setup)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Visit the App!
  - Visit the deployed app [here](https://latitude-longitude-bingo.herokuapp.com/)!

## Abstract
  - This project was created in order to allow us to experiment with setting up our own  backend API. Using a [CSV file of country data](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/blob/master/all/all.csv), we set up a PostgreSQL database, updated and modified it with Knex, and used Express.js to handle the server code. Then, we hosted the backend on Heroku (you can see our endpoint [here!](https://latitude-longitude-bingo-api.herokuapp.com/api/v1/countries)).
  - If you'd like to look at the backend repo, it's hosted on GitHub [here](https://github.com/jkiernan12/latitude-longitude-bingo-api)!

## Code Architecture / Technologies
  - Javascript / CSS / HTML
  - React
  - Express.js
  - Knex
  - PostgreSQL
  - Heroku
  - Cypress

## Illustrations

Use [https://gifcap.dev/](https://gifcap.dev/) to make GIFs

## Install + Setup
  - If you'd like to run this repo locally, clone it down to your machine:
  - `git clone git@github.com:jkiernan12/latitude-longitude-bingo.git`
  - `cd latitude-longitude-bingo`
  - Then, install the necessary dependencies:
  - `npm install`

## Contributors
  - [John Kiernan](https://github.com/jkiernan12)
  - [Anna Kummer](https://github.com/annamkummer)
  - [Nate Ewert-Krocker](https://github.com/newertkrocker)

## Wins

  - We were able to construct a functioning backend! All three contributors are trained primarily in frontend technologies, so creating our own database was a step outside our comfort zone. Now we can tentatively claim to be "full-stack" developers!
  - The game concept, a long-time dream of contributor Anna's dad, came together very nicely and resulted in a fun and engaging game.
  - Integrating the Leaflet maps in the game was a great success, resulting in a much more dynamic and engaging user experience.

## Challenges + Improvements

  - Updating and editing our database was new and challenging -- as stated above, all three of the contributors are mostly trained in front-end technologies.
  - Figuring out how the different pieces of the backend integrated and functioned together was a challenge -- but ultimately a success, as well.
  - In the future, we would love to implement multiple difficulty levels -- sub-regions, perhaps, or larger pools of countries -- or even player feedback with each bingo square selection.
  - Another possible (ambitious) extension would be multiplayer -- several users with different bingo boards being served the same set of coordinates, so an entire classroom of users could play together.
  - Finally, we'd like to try linking the countries in the bingo squares to their Wikipedia pages, so that players could learn more about the countries listed.

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html).
