exports.seed = function (knex) {
  return knex("jobs").insert([
    {
      name: "Session1",
      cluster: "Edge Node [Atlanta]",
      model: "3DUNet",
      dataset: "Samples1",
      date: "12/09/2021",
      status: "Finished",
    },
  ]);
};
