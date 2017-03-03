# Foundationify [![devDependency Status](https://david-dm.org/lukebussey/foundationify/dev-status.svg)](https://david-dm.org/lukebussey/foundationify#info=devDependencies)


Foundationify is a Shopify theme framework with all [Foundation](http://foundation.zurb.com/) 5 CSS and JavaScript available. You get a streamlined Grunt-based workflow that concatenates and minifies all your CSS, lints your JS, and lossessly compresses your theme's images.

See a working demo at http://foundationify.myshopify.com/

## Requirements

Requires Bower and Grunt.

## Getting Started

1. Checkout project.
2. Run `npm install && bower install`.
3. Run `grunt build`.
4. JS, CSS, images and font files will be built into the /assets folder

### Working with Shopify Theme Kit

Shopify provides a live-uploading tool that Foundationify is compatible with. Install [Theme Kit](https://shopify.github.io/themekit/) and run `theme watch` alongside Foundationify's `grunt live` command to have auto-uploading SCSS compilation be performed.
