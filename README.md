# jQuery Twitter Plugin

A jQuery plugin for working with the Twitter Search API to put twitter searches on websites. jQuery.twitter has a simple syntax that follows the Twitter Search API URL parameters.

In addition to supporting the default Twitter Search API URL parameters, $.twitter() and $.fn.twitter() also support five options for filtering out mentions and retweets and for handling no results cases client side.

```$.fn.twitter``` creates a ```<ul>``` of tweets for you, and puts it in the DOM. This plugin comes with a static ```$.twitter``` which ```$.fn.twitter``` uses under the hood for doing twitter searches.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/boazsender/jQuery-Twitter-Plugin/master/dist/jquery.twitter.min.js
[max]: https://raw.github.com/boazsender/jQuery-Twitter-Plugin/master/dist/jquery.twitter.js

In the browser:

```
<script src="http://code.jquery.com/jquery.js"></script>
<script src="jquery.twitter.min.js"></script>
<style type="text/css">
  .twitter-posts li {margin-bottom: 10px; font-size: 12px; clear: both; list-style-type:none;}
  .twitter-posts li img {float:left; margin:0px 10px 10px 0px;border:1px solid #c2c2c2; -moz-box-shadow: 0px 0px 4px #c2c2c2; -webkit-box-shadow: 0px 0px 4px #c2c2c2; box-shadow: 0px 0px 4px #c2c2c2;}
  .twitter-posts li a {text-decoration:none; color: #009;}
</style>
<script>
  $('myselector').twitter({from: 'boazsender', replies: false})
</script>
```

## Examples
You can see a pretty thorough overview of this plugins usage from [this Gist](http://bl.ocks.org/1813727).

### Simple Syntax:
Passing in a string to the plugin simply performs a search with that string.

```
$('selector').twitter('search terms');
```

### Verbose Syntax:
There are lots of options, so you could do something more like:

```
$('selector').twitter({
  // From this person
  from : 'BoazSender',
  // Include @replies?
  replies : false,
  // All of these words
  ands : 'jquery bocoup',
  // Any of these words	
  ors : 'gangster javascript',
  // None of these words
  nots : 'dirty words',
  // don't include user avatars in the list.
  avatar : false
});
```

## Documentation
The jQuery Twitter Plugin provides two methods and a public default options object:

### Static Method
$.twitter(options, callback)

_**options**: the string or object used to configure the search_

_**callback**: the function to run when the results come back from twitter. Three arguments are passed to this callback(tweets, query, exclusionsExp)_

This method allows you to get twitter results and work with the JSON response. Fore example:

```
$.twitter({from: 'BoazSender', replies : false}, function(tweets){
  console.log(tweets);
});
```

### jQuery Collection Method
$.fn.twitter(options, callback)

_**options**: the string or object used to configure the search_

_**callback**: the function to run when the results come back from twitter. One boolean is passed to this callback. True if tweets were injected, False if no tweets were returned_

This method uses $.twitter() internally to go and get the tweets you ask for, and render them in a ```<ul>``` within each element in the jQuery collection you call it on. For example:

  ```
  $('selector').twitter('search terms', function(tweets){
    if(tweets){
      console.log('Tweets have been added');
    }else{
      console.log('Zero tweets retruned, no tweets added to the page'); 
    }
  });
  ```

### Default Options Object
$.twitter.options

This is the publicly available object that $.twitter() and $.fn.twitter() use to configure twitter searches. You can override it at the beginning of your code to prevent yourself from repeating configurations unnecessarily. For example:

```
// Default all twitter lists to exclude @replies and dirty words
$.twitter.options.replies = false; 

// Set a whole bunch of defaults at once

$.extend($.twitter.options, {
  replies : false,
  retweets : false,
  limit : 20,
  nots : 'dirty words'
});
```

### Standard Twitter Search API options
You can pass the following default Twitter Search API Parameters to $.fn.twitter() as properties of the options object:

* **q**: Default query
* **ands**: All of these words
* **phrase**: This exact phrase
* **ors**: Any of these words
* **nots**: None of these word
* **tag**: This hashtag
* **lang**: Written in language
* **from**: From this person
* **to**: To this person
* **ref**: Referencing this person
* **near**: Near this place
* **within**: Within this distance
* **units**: Distance unit (miles or kilometers)
* **since**: Since this date
* **until**: Until this date
* **tude**: Attitude: '?' or ':)' or ':('
* **filter**: Containing**: 'links'
* **include**: Include retweet?**: 'retweets'
* **rpp**: Results per page

### Non Standard Options
In addition to supporting the default Twitter Search API URL parameters, $.fn.twitter() also supports five of it's own options for filtering out mentions and retweets and for handling no results cases client side.

* **limit**: Number of tweets to get. Maps to and supersedes rpp (results per page).
* **exclusions**: Space delimited list of strings (eg: '_ s gr @b'). Use this to exclude tweets containing strings that are part of a word
* **avatar**: Include user avatars? true by default. (Boolean)
* **notFoundText**: Text to display if no results are found
* **replies**: Include replies? (Boolean)
* **retweets**: Include retweets (Boolean)

## Contributing
To get started contributing to jQuery.twitter.js, install [grunt](https://github.com/cowboy/grunt) globally (```$ npm install grunt -g ```).

This project generally follows [Idiomatic.js](https://github.com/rwldrn/idiomatic.js) from Rick Waldron, take care to maintain the existing coding style. Add *unit tests* and *written documentation* for any new or changed functionality, and make sure all your code passes this project's grunt. This project's [gruntfile](https://github.com/boazsender/jQuery-Twitter-Plugin/blob/master/grunt.js) was generated with ```$ grunt init:jquery```.

Do not edit files in the "dist" directory as they are generated via grunt. You'll find source code in the "src" subdirectory. Work inside of the src directory, and use grunt to concat/min/test/lint the code before making a pull request. Running ```$ grunt watch``` from the root of this project will do this for you as you go.

## Release History

* 2012/01/22 - v0.2.1 - Added callback support to .fn.twitter
* 2012/01/22 - v0.2.0 - Moved to grunt based project organization and concat/min/lint/test, started passing lint.
* 2012/01/21 - v0.1.1 - Upgraded to jQuery 1.7.1, fixed classname bug, got rid of all globals.
* 2011/08/11 - v0.1.0 - Initial release.

## License
Copyright (c) 2012 Boaz Sender  
Licensed under the MIT, GPL licenses.
http://code.bocoup.com/license/

jQuery-Twitter depends on [JavaScript Linkify - v0.3](http://benalman.com/projects/javascript-linkify) from "Cowboy" Ben Alman.

Some of jQuery-Twitter's regexps adapted from http://userscripts.org/scripts/review/7122

This project is built with "Cowboy" Ben Alman's [Grunt](https://github.com/cowboy/grunt).

## Authors

* [Boaz Sender](http://github.com/boazsender)
* [Rick Waldron](http://github.com/rwldrn)
* [Nick Cammarata](http://github.com/ncammarata)
* [Irene Ros](http://github.com/iros)
* [Tyom Semonov](https://github.com/tyom)
* [Adam Sontag](http://github.com/ajpiano)
* [Tyler Craft](http://github.com/tylercraft)
