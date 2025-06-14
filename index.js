const myLibrary = [];
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const form = document.querySelector("form");
const savebutton = document.getElementById('savebutton');

function Book(title,author,pages,read)
{
    this.id = crypto.randomUUID() ,
    this.title = title ,
    this.author = author ,
    this.pages = pages ,
    this.read = read
};


function pushtolib(title,author,pages,read) 
{
  const book = new Book(title,author,pages,read);
  myLibrary.push(book);
};

openButton.addEventListener("click", () => {
    modal.showModal()
})

closeButton.addEventListener("click", () => {
    modal.close()
})

form.addEventListener("submit" , (e) => {
    e.preventDefault();

    const newTitle = title.value;
    const newAuthor = author.value;
    const newPages = pages.value;
    const isRead = read.checked;

    pushtolib(newTitle,newAuthor,newPages,isRead);

    form.reset();
    modal.close();
})