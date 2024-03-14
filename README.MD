# Regex validate PIN code

## Requisites

- Write a function that checks the pin
- The pin must be exactly 4 or 6 digits (no letters or floats)
- If pin is valid return `true`, else return `false`

## How’re we going to do it?

- Find out what regex is in JS
- I found out what it is
- We need to use `\d` to find digits `[0-9]`
- We use `\d{4}` and `\d{6}` to test for 4 and 6 digits
- We use the anchors `^` and `$` to indicate start and end of string
- Since we have two things we test for, we need alteration in form of `|`
- At last we employ the `.test()` method to see if the pin matches with the filter we’ve set up
