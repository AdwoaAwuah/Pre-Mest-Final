const axios = require("axios");
const config = require("../helpers/config");

module.exports = {
  questions: function (req, res) {
    // console.log(req.params)
    axios
      .get("https://api.infermedica.com/covid19/symptoms", {
        headers: {
          "App-Id": config.APP_ID,
          "App-Key": config.APP_KEY,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        //  console.log("response", response)
        //  console.log("response data", response.data)
      })
      .catch((exception) => {
        console.log(exception.errors);
      });
  },
  questionsPost: function (req, res) {
    // console.log(req, "controller req")
    console.log(req.body, "controller req body");
    axios({
      url: "https://api.infermedica.com/covid19/diagnosis",
      method: "POST",
      headers: {
        "App-Id": config.APPid,
        "App-Key": config.APPkey,
        "Content-Type": "application/json",
      },
      data: {
        sex: "male",
        age: { value: 20, unit: "month" },
        evidence: req.body,
        //  [
        //   // {"id": "s_47", "choice_id": "present", "source": "initial"},
        //   // {"id": "s_22", "choice_id": "present", "source": "initial"},
        //   // {"id": "p_81", "choice_id": "absent"},
        //   // { "id": 's_1780', "choice_id": 'present', "source": "initial" },
        //   //   {
        //   //     "id": "s_1193",
        //   //     "choice_id": "present",

        //   //   },
        //   //   {
        //   //     "id": "s_488",
        //   //     "choice_id": "present"
        //   //   },
        //   //   {
        //   //     "id": "s_418",
        //   //     "choice_id": "present"
        //   //  }
        // ]
      },
      extras: {
        enable_triage_5: true,
        interview_mode: "triage",
      },
    })
      .then((response) => {
        return res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        //   console.log('Show error notification!');
      });
  },
  callTriage: function (req, res) {
    console.log(req.body, "controller req body");
    axios({
      url: "https://api.infermedica.com/covid19/triage",
      method: "POST",
      headers: {
        "App-Id": config.APPid,
        "App-Key": config.APPkey,
        "Content-Type": "application/json",
      },
      data: {
        sex: "male",
        age: { value: 20, unit: "month" },
        evidence: req.body,
        // [
        //   // {"id": "s_47", "choice_id": "present", "source": "initial"},
        //   // {"id": "s_22", "choice_id": "present", "source": "initial"},
        //   // {"id": "p_81", "choice_id": "absent"},
        //   // { "id": 's_1780', "choice_id": 'present', "source": "initial" },

        // //   {
        // //     "id": "s_1193",
        // //     "choice_id": "present",

        // //   },
        // //   {
        // //     "id": "s_488",
        // //     "choice_id": "present"
        // //   },
        // //   {
        // //     "id": "s_418",
        // //     "choice_id": "present"
        // //  }

        // ]
      },
      extras: {
        enable_triage_5: true,
        interview_mode: "triage",
      },
    })
      .then((response) => {
        console.log("call triage response", response);
        return res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
