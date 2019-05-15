exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl.string("name", 128).notNullable();

    // Foreign Key example
    tbl
      .integer("role_id") // the field to be added to our users table
      .unsigned() // included because some DBMS need it
      .references("id") // the primary key in the parent table
      .inTable("roles") // the name of the primary table
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
