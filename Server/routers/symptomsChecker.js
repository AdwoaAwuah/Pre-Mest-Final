const router = require("express").Router();
const sypmtomCheckerController = require("../controllers/symptomsController");

router.get("/api/symptoms", (req, res) => {
  console.log("symptom checker is getting called");
  return sypmtomCheckerController.questionsPost({ body: [] }, res);
});

router.post("/api/symptoms", (req, res) => {
  return sypmtomCheckerController.questionsPost(req, res);
});

router.post("/api/triage", (req, res) => {
  return sypmtomCheckerController.callTriage(req, res);
});

module.exports = router;
