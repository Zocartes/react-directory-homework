import axios from "axios";

export default {
  employeeSearch: function () {
    return axios.get(
      "https://randomuser.me/api/?inc=picture,name,cell,email,picture,dob&nat=us&results=10"
    );
  },
};
