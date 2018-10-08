export class BillConfigService {
  constructor () {
    this.axios = require('axios')
  }

  getFormConfigAR(formCode) {
    return this.axios.get('/api/FormConfig/'+formCode)
  }

  getSpreadConfigAR(tableCode) {
    return this.axios.get('/api/SpreadConfig/'+tableCode)
  }
}