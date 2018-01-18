
$(() => {

  let loaded = false

  $('#peopleButton').click(() => {
    if(!loaded) {
     loaded = true
    $.ajax({
        type: 'GET',
        url: 'https://swapi.co/api/people' //'results' attribute is gained from here
      }).done((res) => {
        let people = res.results
        for(p of people) {
          $('#tableBody').append(createTableRow(p))
        }
        
      })
    }
  })

  $('#starshipButton').click(() => {
    if(!loaded) {
      loaded = true
      $.ajax({
        type: 'GET',
        url: 'https://swapi.co/api/starships'
      }).done((res) => {
        let ships = res.results
        for(star of ships) {
          $('#tableBody').append(createTableRowStar(star))
        }
        
      })

    }
  })

  function createTableRow(person) {
    let row = $(`<tr></tr>`)
    let name = $(`<td>${person.name}</td>`)
    let height = $(`<td>${person.height}</td>`)
    let birth = $(`<td>${person.birth_year}</td>`)

    row.append(name, height, birth)
    return row;
  
  }

  function createTableRowStar(starship) {
    let row = $(`<tr></tr>`)
    let model = $(`<td>${starship.model}</td>`)
    let manufacturer = $(`<td>${starship.manufacturer}</td>`)
    let starName = $(`<td>${starship.name}</td>`)
  
    
    row.append(model, manufacturer, starName)

    return row

  }



  $('#clearButton').click(() => {
    $('#tableBody').empty();
    loaded = false;
  })

})