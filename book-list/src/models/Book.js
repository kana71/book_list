
export default class Book {

    static fromDocument(doc) {
        const book = new Book(''); 

        const data = doc.data(); 
        
        book.id = doc.id; 
        book.name = data.name; 
        book.author = data.author; 
        book.isbn = data.isbn; 

        return book 
    }




    constructor(name, author, isbn) {
        // this.id = new Date().getTime(); 
        this.id = null;
        this.name = name; 
        this.author = author; 
        this.isbn = isbn;
    }
}