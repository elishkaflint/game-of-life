# The Game of Life

___

## Summary

The Game of Life is a zero-player game developed by John Conway. It takes an initial configuration of living and dead cells positioned in a grid, which then evolves regularly based on a simple set of rules (see next section). Read more about it [here!](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
___

## Rules

* The game evolves in turns, commonly known as 'ticks'.
* All changes occur at the same time.
* Any live cell with 2 or 3 live neighbours survives until next tick.
* Any live cell with less than 2 live neighbours dies (underpopulation).
* Any live cell with more than 3 live neighbours dies (overpopulation).
* Any dead cell with exactly 3 neighbours becomes a live cell (reproduction).
___

## Credits

Developed by Elishka Flint, with a bit of help on the React front-end from [John Forster](https://github.com/JohnForster).

___

## Technical

### Tech/Frameworks Used

Javascript, Jasmine, React

### Using the Application

#### Either clone the repo and launch:

```
$ git clone https://github.com/elishkaflint/game-of-life.git
$ cd game-of-life
$ open index.html
```

#### Or visit the site:

The app is deployed on Heroku

____

## Process

#### Approach:

* Broke the task down into simple steps:
  - Model
    * ensure a single cell can complete a set of actions (eg check how many living cells surround it)
    * mutate a single cell based on the game's rules
    * mutate a row based on the game's rules
    * mutate a whole grid based on the game's rules
    * Used TDD to work through each of the above elements
  - View
    * understand how to render and mutate a very simple 2 x 2 array grid using React in the browser
    * extend into a more complex visualisation
    * front-end written without TDD as it was my first project using React
