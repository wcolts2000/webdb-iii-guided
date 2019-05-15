# WebDB Guided III Review

## SQL REVIEW

- joins (inner left)
- table aliasing
- aggregate functions with grouping
- pagination
- concatenation
- is null (is not null)

## Schema

- structure of ....
  - database
  - table
- create tables
- add columns to tables

## Migrations

- run `npx knex init` to generate a `.knexfile.js`
- modify `knexfile.js` to configure our db connection
- remove staging and production config from `knexfile.js` (to remove unneeded noise for now)
- make a migration for each db schema changes
