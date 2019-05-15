exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", function(tbl) {
    // primary keys are by default added with this line
    tbl.increments(); // generates our primary key as id automatically

    tbl
      .string("name", 128) // this will generate a varchar(128) by default. Note sqlite ignores the size restraint, but other dbs will respect it
      .notNullable() // makes it require or NOT NULL
      .unique(); // add a unique constraint and index automatically

    tbl.timestamps(true, true); // gives us a created_at and a updated_at field
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles"); // this is always the opposite of the up method
};
