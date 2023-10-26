import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

/** get all questions */
export function getQuestions(req, res) {
  Questions.find()
    .then((q) => {
      res.json(q);
    })
    .catch((error) => {
      res.json({ error });
    });
}

/** insert all questions */
export function insertQuestions(req, res) {
  Questions.insertMany({ questions, answers })
    .then(() => {
      res.json({ msg: "Data Saved Successfully...!" });
    })
    .catch((error) => {
      res.json({ error });
    });
}

/** Delete all Questions */
export function dropQuestions(req, res) {
  Questions.deleteMany()
    .then(() => {
      res.json({ msg: "Questions Deleted Successfully...!" });
    })
    .catch((error) => {
      res.json({ error });
    });
}

/** get all result */
export function getResult(req, res) {
  Results.find()
    .then((r) => {
      res.json(r);
    })
    .catch((error) => {
      res.json({ error });
    });
}

/** post all result */
export function storeResult(req, res) {
  const { username, result, attempts, points, achieved } = req.body;
  if (!username && !result) {
    res.json({ error: "Data Not Provided...!" });
    return;
  }

  const resultData = {
    username,
    result,
    attempts,
    points,
    achieved,
  };

  Results.create(resultData)
    .then(() => {
      res.json({ msg: "Result Saved Successfully...!" });
    })
    .catch((error) => {
      res.json({ error });
    });
}

/** delete all result */
export function dropResult(req, res) {
  Results.deleteMany()
    .then(() => {
      res.json({ msg: "Result Deleted Successfully...!" });
    })
    .catch((error) => {
      res.json({ error });
    });
}
