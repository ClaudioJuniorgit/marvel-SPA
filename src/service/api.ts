class ApiService {
  variables = import.meta.env

  async get(path: string, limit: number = 20) {
    return fetch(
      `${this.variables.VITE_BASE_URL}${path}?limit=${limit}&ts=${this.variables.VITE_TS}&apikey=${this.variables.VITE_API_KEY}&hash=${this.variables.VITE_HASH}`
    )
      .then((res: any) => {
        return res.json()
      })
      .then((res: any) => {
        return res.data.results
      })
      .catch((err: any) => {
        console.error(err)
      })
  }
}

export const apiService = new ApiService()
