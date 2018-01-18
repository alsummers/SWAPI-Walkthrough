
$(() => {
    let loaded = false
    $('#infoButton').click(() => {
      if(!loaded) { 
        $.ajax({   ///Ajax is a jQuery method /// API is inside and object notation
        type: 'GET',
        url: 'https://swapi.co/api/people'
      }).done((res) => {
        let people = res.results
        for(p of people) {
         $('#tableBody').append(createTableRow(p));    //   tableBody.append(person) Adds person to html list--but isn't formated in the table rows
        }
      })
    }
      
    })

    function createTableRow(person) {
        let row = $(`<tr></tr>`); ///Jquery element creates an object that represents HTML element
        let name = $(`<td>${person.name}</td>`);
        let height = $(`<td>${person.height}</td>`);
        let birth = $(`<td>${person.birth_year}</td>`); /// use console log to look up properties of {person}
        let hair = $(`<td>${person.hair_color}</td>`)

        row.append(name)
        row.append(height)
        row.append(birth)
        row.append(hair)

        return row


    }
  
  })