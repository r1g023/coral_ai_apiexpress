const db = require("../database/dbConfig");

module.exports = {
  getJobs,
  postJob,
};

//GET ----> //API /api/jobs - Get new jobs
function getJobs() {
  return db("jobs").orderBy("id");
}

//POST ----> //API /api/jobs - Post a new job
async function postJob(job) {
  const [newUserObject] = await db("jobs").insert(job, [
    "id",
    "name",
    "cluster",
    "model",
    "dataset",
    "date",
    "status",
  ]);
  return newUserObject;
}
