# Rewards App

### Summary

Created from `sails new rewards` ([See Sails.js framework](http://sailsjs.org)) using Node.js and configured for PostgreSQL to be a simple CRUD app in a traditional Rails/MVC style.

Uses jQuery and Bootstrap for styling (no client-side javascript).

###  Requirements

* Node.js installed (v6.3+ recommended - both NPM and YARN package-management are supported)
* PostgreSQL installed and running with defaults (v9.6+ recommended)
* Any modern Internet browser (Firefox, IE, Chrome etc.)


###  Instructions

*NOTE: All instructions that follow will be regarding the setup of the web-application which resides under `/webapp`.
The root directory allows for database, build scripts and documentation to be kept separate to this.*

1. Run `git clone git://github.com/rpocklin/sails-rewards.git`
1. Run `cd sails-rewards/webapp`
1. Run `npm i`             (alternatively you can run `yarn install`)
1. Run `npm run createdb`   (will create a rewards database and tables)
1. Run `sails lift`        (runs db migrations and starts the development server)
1. Navigate to `http:/localhost:1337` in your preferred browser.
1. Have fun with rewards!
 
*NOTE: You may also run `npm run start` or `npm run debug` to start the development server, but this will not update any database tables if you have made schema changes.*
### Testing

1. Run `npm run test` to run all unit tests.

There are 2 types of unit tests - **Model** and **Controller** tests.

**Model** tests are found in `test/integration/models`
**Controller** tests are found in `test/integration/controllers`


### TODO
1. Remove password from `webapp/config/connections.js` and `db/createdb.sql` (ie. don't check into source control)
1. Add build scripts / scripts for artifact packaging / production deployment
1. Add Functional tests (using Nightwatch / Protractor / CodeConceptJS)
1. Update unit tests to use *mocha-chai* assertions
1. Improve test fixture code / data
1. Separate templating from API (JSON / REST API with a separate Single Page App - Angular / React etc.)
1. Componentise web-app (flash message, list , create, edit components)
1. Improve UI Design and styling
1. Add field-level validation / client side tips / help
1. Auto-hide flash messages
1. Add symbology with ionicons for actions
1. Update to E2015 coding standards (consider using Trails.js / HAPI)
1. Add code coverage checks, report and eslint tools
