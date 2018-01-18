
$(() => {

  let loaded = false

  $('#peopleButton').click(() => {
    $('#name').text('Name')
    $('#dataOne').text('Height')
    $('#dataTwo').text('Weight')
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
    $('#name').text('Name')
    $('#dataOne').text('Model')
    $('#dataTwo').text('Manufacturer')
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
    let starName = $(`<td>${starship.name}</td>`)
    let model = $(`<td>${starship.model}</td>`)
    let manufacturer = $(`<td>${starship.manufacturer}</td>`)
    
  
    
    row.append(starName, model, manufacturer,)

    return row

  }



  $('#clearButton').click(() => {
    $("#name").text(null);
    $("#dataOne").text(null);
    $("#dataTwo").text(null);
    $('#tableBody').empty();
    loaded = false;
  })

  $("#searchPersonForm").submit((e) => {
    e.preventDefault(); // prevents reloading upon clicking
    
    let input = $('#inputName').val()
    $('#inputName').val('')

    $.get(`https://swapi.co/api/people/?search=${input}`)
      .done((res) => {
        let person = res.results[0];
        $('#personInfoPanel').text(`${person.height}`)
      })
  })

})