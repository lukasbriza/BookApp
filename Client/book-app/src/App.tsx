
import React, {Component}from 'react';
import {BookList} from './components/bookList/BookList';
import BookListMenu from './components/bookListMenu/BookListMenu';
import { getAll, removeByID, getBook} from "./settings/fetchAgent";
import settings from "./settings/settings";

//////////////////
//CONTEXT IMPORT//
import {bookContext} from './settings/bookContext';
//////////////////


class App extends React.Component {
  //constructor and binding
  constructor(props:any){
    super(props);

    this.getAllBooks = this.getAllBooks.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.findBook = this.findBook.bind(this);
    //main state here
    this.state = {
      refreshed: false,
      booksToShow: null,

      //provided functions here
      actualiseBooks: this.getAllBooks,
      removeBook: this.removeBook,
      findBook: this.findBook,
    }
  }
  ///////////////////////////////////////////////////
  //functions//
  
  async componentDidMount(){
    const url:string = settings.serverUrl+"/book/all";
    let data = await getAll(url);

    await this.setState(()=>{
      return {refreshed: true, booksToShow: data}
    });

    await console.log("APP: ComponenDidMound sucess.");
  }

  async getAllBooks(){
    const url:string = settings.serverUrl+"/book/all";
    let data = await getAll(url);
    
    this.setState(()=>{
      return {booksToShow: data}
    });

    console.log("APP: getAllBooks() sucess.");
  }

  async removeBook(id:id){
    const url:string = settings.serverUrl+"/book/remove/"+id;
    await removeByID(url);
    await this.getAllBooks();

    console.log("APP: removeBook() sucess.");
  }

  async findBook(value:findBookProps, option:findBookProps){
    //volat render all books ????? uvidíme
    let data:any;
    
    switch (option) {
      case "Id":
        //find by id
        const urlID:findBookProps = settings.serverUrl+"/book/findId/"+value;  
        data = await getBook(urlID);

        await this.setState(()=>{
          return {booksToShow: data}
        });
        //no return value case
        if(data===[]){
          alert("Nebyla nalezena žádná kniha. Zkuste znovu.");
          this.getAllBooks();
        }
        break;
    
      case "Name":
        //find by name
        const urlName:findBookProps = settings.serverUrl+"/book/findName/"+value;
        data = await getBook(urlName);

        await this.setState(()=>{
          return {booksToShow: data}
        });
        //no return value case
        if(data===[]){
          alert("Nebyla nalezena žádná kniha. Zkuste znovu.");
          this.getAllBooks();
        }
        break;
      case "Author":
        //find by author
        const urlAuthor:findBookProps = settings.serverUrl+"/book/findAuthor/"+value;
        data = await getBook(urlAuthor);

        await this.setState(()=>{
          return {booksToShow: data}
        });
        //no return value case
        if(data===[]){
          alert("Nebyla nalezena žádná kniha. Zkuste znovu.");
          this.getAllBooks();
        }
        break;
      default:
        alert("Zadána neplatná volba.");
    }
  }
  //////////////////////////////////////////////////
  render() {
    return (
      <bookContext.Provider value={this.state}>
        <div className="App">
          <section className="bookAppWrapper">
            <BookListMenu/>
            <BookList/>
          </section>
        </div>
      </bookContext.Provider>
    );
  }
}

export default App;
