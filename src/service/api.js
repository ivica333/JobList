import axios from 'axios';

export default {
  getAllJobs() {
    return axios.get('data.json')
  }
}