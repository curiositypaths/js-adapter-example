document.addEventListener("DOMContentLoaded", function(event) {
    var noteAdapater = generateAdapter('http://localhost:3000/api/v1/notes')
    var notes = []
    noteAdapater.fetchResourceIndex()
    .then( notesJSON=>notesJSON.forEach(noteJSON=>{
      var note = new Note(noteJSON)
      notes.push(note)
    }) )
    .then( () => {
      notes.forEach( note => {
        note.render()
      })
    } ).then( () => {
           })
    // .then( () => {
    //   var lis = Array.from(document.getElementsByTagName('LI'))
    //   lis.forEach( li => {
    //     li.addEventListener('click',deleteLi)
    //   })
    // } )
    document.getElementById('container').addEventListener('click',deleteLi)

   

    function deleteLi(event) {
      debugger
      if (event.target.dataset.id) {
        noteAdapater.deleteResource(event.target.dataset.id).then()
      }      
    }
});

form.addEventListener('submit',function() {
  title = 
  body = 
  createResource({title,body}).then()
})