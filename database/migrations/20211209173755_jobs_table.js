exports.up = function (knex) {
  return knex.schema.createTable("jobs", (tbl) => {
    tbl.increments();
    tbl.string("name", 128).notNull();
    tbl.string("cluster", 128).notNull();
    tbl.string("model", 128).notNull();
    tbl.string("dataset", 128).notNull();
    tbl.date("date").notNull();
    tbl.string("status", 128).notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("jobs");
};
