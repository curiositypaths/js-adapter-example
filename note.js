class Note {
  constructor(noteOBJ) {
    this.title = noteOBJ.title
    this.body = noteOBJ.body
    this.id = noteOBJ.id
  }

  render() {
    document.getElementById('container').innerHTML += `<li data-id='${this.id}'>Title: ${this.title} and Body: ${this.body}<li>`
  }
}