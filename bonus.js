function getBooks(ids) {

    const api = "https://boolean-spec-frontend.vercel.app/freetestapi/books/"

    const request = ids.map((id) => fetch(api + id).then(response => response.json()))

   Promise.all(request)
   .then(result => console.log(result))

}

getBooks(["1","2","3"])



