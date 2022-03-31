// let city = document.getElementById("name").value;
let book = {
     fetchBook: function(bookName){
      
    },
      displayBook: function(data){
          console.log(data);
        const {name} = data;
        const {authors} = data["volumeInfo"];
       // const {authors}= data["volumeInfo"]["author"]
        //  const{title,publishedDate,description} = data["volumeInfo"];
        // // const{thumbnail}=data["volumeInfo"]["imageLinks"];
        // console.log(title,publishedData,description);
        console.log(data);
      } 
}

document.querySelector(".searchBook").addEventListener("click", () => {
    const title = document.querySelector("#name").value;
    if(title){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
        .then((response) => response.json())
        .then((data) => displayBook(data));
    }
})

const displayBook = (data) => {
    const result = data.items;
    const table = document.querySelector("#table");
    let h1 = document.querySelector("#Special-H1");

    let title2 = document.querySelector("#name").value;
    
    h1.innerHTML += `<h1>Search Result For ${title2}</h1> `
    result.forEach(book => {
        title = book.volumeInfo.title;
         author = book.volumeInfo.authors[0];
        description = book.volumeInfo.description;
        bookCover = book.volumeInfo.imageLinks.thumbnail;

        table.innerHTML += 
        ` <div id="table-item">
            <div id="left">
                <img src="${bookCover}";
            </div>
            <div id="right">
                <h1>Title: ${title}</h1>
                <h4><strong>Written By ${author}</strong></h4>
                <p>${description}</p>    
           
            </div>
        </div>`;
    });
}
 // <h1>Title : ${title} by  ${author} </h1>
      // <p>
                //     ${sentence} 
                // </p>