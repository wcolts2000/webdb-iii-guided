exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { role_id: 1, name: "sam" },
        { role_id: 1, name: "lisa" },
        { role_id: 3, name: "tommy" }
      ]);
    });
};
