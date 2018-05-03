function generateAdapter(url) {
  return {
  createResource: function (body) {
  var config = {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(body)
  }
  return fetch(url,config).then( r=>r.json() )
},

updateResource: function (id,body) {
  var config = {
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(body)
  }
  return fetch(`${url}/${id}`,config).then( r=>r.json() )
},

deleteResource: function (id) {
  var config = {
    method:'DELETE'
  }
  return fetch(`${url}/${id}`,config).then( r=>r.json() )
},

fetchResourceIndex:function () {
  return fetch(url).then( r=>r.json() )
},

fetchResource:function (id) {
  return fetch(`${url}/${id}`).then( r=>r.json() )
}
}
}



// var resourceAdapter = {
//   createResource: function (url,body) {
//   var config = {
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify(body)
//   }
//   return fetch(url,config).then( r=>r.json() )
// },

// updateResource: function (url,body) {
//   var config = {
//     method:'PATCH',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify(body)
//   }
//   return fetch(url,config).then( r=>r.json() )
// },

// deleteResource: function (url) {
//   var config = {
//     method:'DELETE'
//   }
//   return fetch(url,config).then( r=>r.json() )
// },

// fetchResource:function (url) {
//   return fetch(url).then( r=>r.json() )
// }
// }


// imperative vs
// function createNote(title,body) {
//   function createNoteOnNetwork(url,body) {
//   var config = {
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify({title:title,body:body})
//   }
//   return fetch(url,config).then( r=>r.json() )
// }
// return createNoteOnNetwork(title,body)
// }

// declaritive
// function createNote(title,body) {
//   return resourceAdapter.createResource('http://localhost:3000/api/v1/notes',{title:title,body:body})
// }