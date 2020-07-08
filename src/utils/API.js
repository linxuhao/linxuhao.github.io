import axios from "axios";
import projects from "../utils/projects"

const headers = {
  "Content-Type": "application/json"
};
const burl = "https://us-central1-personalpagedb.cloudfunctions.net";

export default {
  
  /*getComments: function(){
    return axios.get(`${burl}/getComments`, {}, { headers: headers });
  },
  addComment: function(comment){
    return axios.post(`${burl}/addComment`, {comment}, { headers: headers });
  }

  getProjects: function(){
    return axios.get(`${burl}/getProjects`, {}, { headers: headers });
  }*/

  getProjects: function(){
    return projects;
  }

};