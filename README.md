# Hustle24.io 

A blog of Ideas, rants, and ocassionally something useful.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* Windows, Linux or Mac OS X
* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](http://bundler.io/)
* [Jekyll](https://jekyllrb.com/)

From the root of the project execute:

```
gem install bundler
```

Install dependicies:

```
bundle install
```

### Start the project

```
bundle exec jekyll serve
```

### Note about service worker

The service worker code is located in the following files:
 * ./hustle24-sw.js <~~~ service worker
 * _layouts/layout.html <~~~ register service worker inline JS