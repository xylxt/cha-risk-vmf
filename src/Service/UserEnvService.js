export class UserEnvService {
  constructor () {
    this.axios = require('axios')
  }

  getUserEnvAR () {
    return this.axios.get('/api/userEnv')
  }
}
