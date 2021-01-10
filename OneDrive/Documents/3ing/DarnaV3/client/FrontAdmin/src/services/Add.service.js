import axios from "axios";

const API_URL = "http://localhost:9094/api/";

class AddService {
  

  addProjet(type_publication,description_publication) {
    return axios.post(API_URL + "publication", {
        type_publication,
        description_publication,
      
        });
  }

  addPresentation(description_presentation) {
    return axios.post(API_URL + "presentation", {
        description_presentation
      
        });
  }

  addObjectif(description_objectif) {
    return axios.post(API_URL + "objectif", {
      description_objectif
      
        });
  }

  addSponsor(formData) {
    // for (var value of data.values()) {
    //   console.log(value);

    //   }
    const data = formData.get('intitule_sponsor')
    const logo = formData.get('logo')
      // console.log("value",data.get('logo'))
      // debugger;
    return axios.post(API_URL + "sponsor", {
      data,
      logo
      
        });
  }

  addHelp(comment_aider,pk_aider, volontariat) {
    return axios.post("http://localhost:9094/Aider/saveAider", {
      comment_aider,
      pk_aider,
      volontariat
      
        });
  }

  addAction(formData) {
    return axios.post("http://localhost:9094/api/saveaction", formData);
  }

}

export default new AddService();
