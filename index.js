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
const lib = document.getElementById("lib");
let num = 1;

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

function printlib(newTitle,newAuthor,newPages,isRead){
    const div = document.createElement("div");
    const h2title = document.createElement("h2");
    const h2author = document.createElement("h2");
    const h2page = document.createElement("h2");
    const h2read = document.createElement("h2");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    div.classList.add("book", `book-${num}`);
    h2title.classList.add("h2title");
    h2author.classList.add("h2author");
    h2page.classList.add("h2page");
    h2read.classList.add("h2read");
    checkbox.classList.add("h2readcheckbox");

    h2title.innerText = `Title: ${newTitle}`;
    h2author.innerText = `Author: ${newAuthor}`;
    h2page.innerText = `Pages: ${newPages}`;
    h2read.innerText = `Read?`
    checkbox.checked = isRead;
    lib.appendChild(div);
    div.appendChild(h2title);
    div.appendChild(h2author);
    div.appendChild(h2page);
    div.appendChild(h2read);
    div.appendChild(checkbox);
    num++
}

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

    printlib(newTitle,newAuthor,newPages,isRead);
})