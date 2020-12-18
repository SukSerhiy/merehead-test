import axios from 'axios'

class Api {
  constructor({
    host,
  }) {
    this.axios = axios.create({
      baseURL: host,
    })
  }

  async getUsers() {
    return this.axios
      .get('/api/users')
  }

  async createUser({ name, surname, desc }) {
    return this.axios
      .post('/api/users', {
        name,
        surname,
        desc,
      })
  }

  async editUser(id, { name, surname, desc }) {
    return this.axios
      .put(`/api/user/${id}`, {
        name,
        surname,
        desc,
      })
  }

  async deleteUser(id) {
    return this.axios
      .delete(`/api/user/${id}`)
  }
}

export default Api
