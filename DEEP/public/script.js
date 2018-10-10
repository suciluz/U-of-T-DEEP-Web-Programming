var data

$(document).ready( () => {
  console.log($('.header').html())

  $.ajax({
    url: '/API/data',
    type: 'GET',
    success: (result) => {
      console.log("GET Request successful!")
      data = result;
      console.log(data);
    },
    error: () => {
      console.log("GET Request failed")
    }
  })

})
//document is the highest tier of the DOM
//jQuery to look for header class and show the html of it
//jQuery minimizes the computational things that are associated with using DOM manipulations
//and to simplify get and post requests

// function checkDOM() {
//   var someElement = document.getElementById("firstID")
//   console.log(someElement)
// }

postRequest = () => {
  $.ajax({
    type: 'POST',
    url: '/API/data',
    data: data,
    success: (result) => {
      console.log(result)
    },
    error: () => {
      console.log("sshssdfdfsfd");
    }
  })
}
