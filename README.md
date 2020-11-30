# Javascript Coding Challenges

![Version](https://img.shields.io/github/package-json/v/403-html/javascript-coding-challenges)
![Last commit](https://img.shields.io/github/last-commit/403-html/javascript-coding-challenges)
![Jest version](<https://img.shields.io/badge/testing%20library-jest%20(%5E26.6.3)-blue>)
![Language](https://img.shields.io/github/languages/top/403-html/javascript-coding-challenges)

## Description

> Sample coding challanges. You can write and test it right away.

A repository designed to store programming tasks. Due to the added tests, it is possible to control your own capabilities.

It's not perfect, so if you see a bug in the solution or within tests, it will be great if you share your thoughts on the subject, e.g. as an issue or creating a PR.

## How to work with it

First, you have to clone project

```
git clone https://github.com/403-html/javascript-coding-challenges.git
```

Then search for intresting challenge, for example `prime-number`.
Read the `README.md` in that folder. Write you solution in this folder.

At the end of your file export your function

```
module.exports = name_of_your_function
```

Go to folder `__tests__` in that folder, there will be test file (named in our example `isPrime.spec.js`). Change the first line from

```
const isPrime = require('../isPrime')
```

to

```
const isPrime = require('../name_of_your_file')
```

## Contributors

> Author: Tymoteusz '403-html' Stępień
