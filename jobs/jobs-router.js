const router = require("express").Router();
const Jobs = require("../jobs/jobs-helpers");

//GET /api/jobs ---> get jobs
router.get("/", (req, res, next) => {
  Jobs.getJobs()
    .then((jobs) => {
      console.log(jobs);
      if (jobs) {
        res.status(200).json(jobs);
      } else {
        res.status(404).json({ message: "no jobs in database" });
      }
    })
    .catch((err) => next(err));
});

//POST /api/jobs --> post a job
router.post("/", (req, res, next) => {
  Jobs.postJob(req.body)
    .then((job) => {
      res.status(201).json(job);
    })
    .catch((err) => next(err));
});
