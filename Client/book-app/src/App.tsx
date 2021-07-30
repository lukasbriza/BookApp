
import React, {Component}from 'react';
import {BookList} from './components/bookList/BookList';
import BookListMenu from './components/bookListMenu/BookListMenu';
import { getAll, removeByID, getBook} from "./settings/fetchAgent";
import settings from "./settings/settings";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
      showRefresher: false,
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
      return {booksToShow: data, showRefresher: false}
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
          data = await getBook(urlID)

          //error handle
          if(data.Error=="ERROR"){
            console.log("error");
            alert("Nebyla nalezena žádná kniha. Zkuste znovu."); 
          } else {

          //result
            await this.setState(()=>{
              return {booksToShow: data,
                      showRefresher: true}
            }) 
            console.log("APP: findBook() sucess.");
          }
          break;
    
      case "Name":
          //find by name
          const urlName:findBookProps = settings.serverUrl+"/book/findName/"+value;
          data = await getBook(urlName);

          //error handle
          if(data.Error=="ERROR"){
            console.log("error");
            alert("Nebyla nalezena žádná kniha. Zkuste znovu."); 
          } else {
            
          //result
            await this.setState(()=>{
              return {booksToShow: data,
                showRefresher: true}
            }) 
            console.log("APP: findBook() sucess.");
          }
          break;

      case "Author":
          //find by author
          const urlAuthor:findBookProps = settings.serverUrl+"/book/findAuthor/"+value;
          data = await getBook(urlAuthor);

          //error handle
          if(data.Error=="ERROR"){
            console.log("error");
            alert("Nebyla nalezena žádná kniha. Zkuste znovu."); 
          } else {
            
          //result
            await this.setState(()=>{
              return {booksToShow: data,
                showRefresher: true}
            }) 
            console.log("APP: findBook() sucess.");
          }
          break;

      default:
          alert("Zadána neplatná volba.");
    }
  }
  //////////////////////////////////////////////////
  render() {
    return (
      <Router>
        <bookContext.Provider value={this.state}>
          <div className="App">
            <section className="bookAppWrapper">
              <BookListMenu/>
              <BookList/>
            </section>
          </div>
        </bookContext.Provider>
      </Router>
    );
  }
}

export default App;
