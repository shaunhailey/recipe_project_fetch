let button = document.getElementById('Search')

button.addEventListener('click', () => {
  // get the search term
  let searchTerm = document.getElementById('searchBox').value
  console.log(searchTerm)

  // search the API
  let URL = `https://crossorigin.me/http://www.recipepuppy.com/api/?q=${searchTerm}`

  const ul = document.querySelector('ul')

  const promise = fetch(URL).then(response => response.json()).then(data => {
    console.log(data.results)
    for (var i = 0; i < data.length; i++) {
      let item = data[i]
    }
  })
})
//
