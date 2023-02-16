/*
In this file, you have an array of records available to you defined in records.js,
called allRecords.

You also have a method available to you defined in recordStoreHtmlMethods.js, called
recordStoreHtmlMethods.fillRecordContainer()

This method takes in an array of records, like allRecords, and populates the
HTML page with those records.
*/

// Write a function that takes in an array and a callback, and returns a new array.
// The new array should contain all of the elements from the original array for which
// the result of callback(element) is truthy.
const filter = (array, callback) => {}

// Display only the albums that came out after the given year.
const onlySongsAfterYear = (year) => {}

// Display only the album whose title matches the given title.
const findByTitle = (title) => {}

// Display the albums sorted from the earliest year to the most recent.
const sortByYear = () => {}

// Sort the albums alphabetically by title.
const sortByTitle = () => {}

// Sort the albums by their length. Note that the length of an
// album is stored as a string in this format: "45:05", meaning
// 45 minutes and 5 seconds. It may be helpful to define a helper
// function called "convertTimestampToSeconds", which converts a
// minutes/seconds string to a number of seconds like this:
// "00:30" => 30
// "01:13" => 73
// "02:01" => 121
// The .split() method will be useful here.
const sortByLength = () => {}

// Display only the albums that came out before the given year.
const onlySongsBeforeYear = (year) => {}

// Display only the records that were made by the given artist.
const filterByArtist = (genre) => {}

// Display only the records which contain the given genre in
// their "genres" array.
const filterByGenre = (genre) => {}

// Sort the albums alphabetically, ignoring the word "the". For
// example, "The Dark Side of the Moon" should count as starting
// with "D" instead of "T".
// This is another one where writing a helper function might help.
const sortByTitleIgnoringThe = (genre) => {}

// Display only the albums released in the given decade. You can
// format a decade as a string like this: "80s", "90s", "00s", "10s"
const displayByDecade = (decade) => {}

// Display only the records which contain the given genre in their
// "genres" array. Sort the results by earliest to most recent.
const filterByGenreAndSortByYear = (genre) => {}