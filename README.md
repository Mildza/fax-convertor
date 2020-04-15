# Fax machine

Create a CLI Node.js app that will parse a file formatted like this:

```
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
```

Each entry is 4 lines long, and each line has 27 characters. The first 3 lines of each entry contain a number written using pipes and underscores, and the fourth line is blank. Each number should have 9 digits, all of which should be in the range 0-9.

The app should be able to parse this file and give actual numbers printed on the screen.

For the example above, the app should return this result:

```
->(task.txt) node app.js
123456789
```

```
->(task2.txt) node app.js
723456980
```
