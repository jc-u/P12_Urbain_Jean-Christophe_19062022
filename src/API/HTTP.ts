/* A class that is used to fetch data from an API. */
abstract class HTTP <T> {
  protected async get(url: string): Promise<T> {
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => {console.log(data)
        return data.data
        
      })
      .catch(error => console.log("Erreur : " + error));
  }
}

export default HTTP

