const myLibrary = [];
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

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
