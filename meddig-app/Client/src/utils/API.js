import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // Gets all symptoms
    getQuestions: function() {
      return axios.get("/api/symptoms");
    },
  
     // Save Evidence to backend api
  postAnswers: function(answers) {
    console.log(answers)
    return axios.post("/api/symptoms", answers);

  },
  callTriage: function(answers) {
    console.log(answers)
    return axios.post ("/api/triage", answers);
  }
};
