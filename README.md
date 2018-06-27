# Launch

A personalized startpage that supports commands.

From [/r/startpages](https://www.reddit.com/r/startpages):

> A startpage is the page you first see when you open your browser. A custom startpage may have links to your favourite sites and maybe a search box for your favourite search engine.

## Features

- Quick access to personal favourite links
- Utilizes the dark [Solarized](http://ethanschoonover.com/solarized) colour palette
- Display current date and time
- Supports commands (see below for more details)

## Screenshot

![Launch in action.](https://raw.githubusercontent.com/haothitran/launch/master/assets/screenshot.png)

## Commands

Commands are shortcuts for quickly accessing or searching sites. If there is a `-command` but no query, you will be redirected to the specified site. Using the syntax `-command query` will search the specified site for the query. For example, use the command `-y` to be redirected to [YouTube](https://www.youtube.com/), and use `-y puppies` to search for videos of puppies.

However, `-r` is an exception. Rather than initiating a search throughout reddit, `-r query` will redirect you to the specified subreddit. For example, `-r battlestations` will take you to [/r/battlestations](https://www.reddit.com/r/battlestations).

- `-d` for [DuckDuckGo](https://duckduckgo.com/)
- `-r` for [reddit](https://www.reddit.com/)
- `-y` for [YouTube](https://www.youtube.com/)
- `-w` for [Wikipedia](https://en.wikipedia.org/)
- `-u` for [Userstyles](https://userstyles.org/)

Entering a query with no command will execute the default command which is to perform a search using [Google](https://www.google.ca/)'s search engine.

## Customizing

First, if you decide to use this startpage, be sure to personalize the links in `index.html` to your liking.

### Dates

Open `assets/date.js` in a text editor to change the name of months and the days of the week.

``` javascript
var monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
```

For example, displaying Janvier instead of January, or Dimanche instead of Sunday.

``` javascript
var weekdayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
```

### Search

Open `assets/search.js` in a text editor to change/add/remove commands.

``` javascript
case "-command":
  query = query.substr(3);
  window.location =
  "https://www.example.com/" +
  query.replaceChars(" ", "");
  break;
```

For example, lets create a command for [Tumblr](https://www.tumblr.com/) using `-t` as the key:

``` javascript
case "-t":
  query = query.substr(3);
  window.location =
  "https://www.tumblr.com/search/" +
  query.replaceChars(" ", "+");
  break;
```
