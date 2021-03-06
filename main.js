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
      let list = document.createElement('li')
      let image = document.createElement('img')
      let anchor = document.createElement('anchor')
      list.appendChild(list)
      let listContent = document.createTextNode.data.item
      anchor.href = data.item.href
      list.textContent = data.item.title
      image.src = data.item.thumbnail
      if (data.item.thumbnail === '') {
        image.src = 'http://via.placeholder.com/100x100'
      }
      section.appendChild(uls)
      anchor.appendChild(anchor)
      list.appendChild(list)
      image.appendChild(image)
    }
  })
})
