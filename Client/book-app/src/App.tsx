
import React from 'react';
import {BookList} from './components/bookList/BookList';
import {Home} from './components/homePage/Home';
import BookListMenu from './components/bookListMenu/BookListMenu';
import { Menu } from "./components/menu/Menu";
import { getAll, removeByID, getBook, updateBook, addBook } from "./settings/fetchAgent";
import settings from "./settings/settings";
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
//////////////////
//CONTEXT IMPORT//
import {bookContext} from './settings/bookContext';
//////////////////

const history = createBrowserHistory();

class App extends React.Component {
  //constructor and binding
  constructor(props:any){
    super(props);

    this.getAllBooks = this.getAllBooks.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.findBook = this.findBook.bind(this);
    this.bookOverview = this.bookOverview.bind(this);
    this.showEditPage = this.showEditPage.bind(this);
    this.bookEdit = this.bookEdit.bind(this);
    this.addBooks = this.addBooks.bind(this);

    //main state here
    this.state = {
      refreshed: false,
      showRefresher: false,
      booksToShow: null,

      //temporary data
      showBook: {
          id:null,
          name:null,
          author: null,
          description: null
      },

      editableBook:{
          editable: false,
          id: null,
          name: null,
          author: null,
          description: null
      },

      //provided functions here
      actualiseBooks: this.getAllBooks,
      removeBook: this.removeBook,
      findBook: this.findBook,
      showOverview: this.bookOverview,
      showEditPage: this.showEditPage,
      editBook: this.bookEdit,
      addBook: this.addBooks,
    }
  }
  ///////////////////////////////////////////////////
  //FUNCTIONS//
  
  async componentDidMount(){
    const url:string = settings.serverUrl+"/book/all";
    let data = await getAll(url);
    console.log(data);

    if(data.books === null){
      this.setState(()=>{
        return {refreshed: true, booksToShow: null}
      });
    } else {
      this.setState(()=>{
        return {refreshed: true, booksToShow: data}
      });
    }

    console.log("APP: ComponenDidMound sucess.");
  }

  async getAllBooks(){
    const url:string = settings.serverUrl+"/book/all";
    let data = await getAll(url);
    
    if(data.books === null){
      this.setState(()=>{
        return {booksToShow: null, showRefresher: false}
      });
    }else{
      this.setState(()=>{
        return {booksToShow: data, showRefresher: false}
      });
    }

    console.log("APP: getAllBooks() sucess.");
  }

  async removeBook(id:id){
    const url:string = settings.serverUrl+"/book/remove/"+id;
    await removeByID(url);
    await this.getAllBooks();

    console.log("APP: removeBook() sucess.");
  }

  async findBook(value:findBookProps, option:findBookProps){
    let data:any;
    
    switch (option) {
      case "Id":
          //find by id
          const urlID:findBookProps = settings.serverUrl+"/book/findId/"+value;  
          data = await getBook(urlID)

          if(data.Error==="ERROR"){
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

          if(data.Error==="ERROR"){
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

          if(data.Error==="ERROR"){
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

  bookOverview(propsObj:bookOverviewProps){
    this.setState(()=>{
      return {
        showBook: {
          id: propsObj.id,
          name: propsObj.name,
          author: propsObj.author,
          description: propsObj.description
        }}
    });
  }

  showEditPage(objProps:editPageProps){
    this.setState(()=>{
      return {
        editableBook:{
          editable: false,
          id: objProps.id,
          name: objProps.name,
          author: objProps.author,
          description: objProps.description,
        }
      }
    })
  }

  async bookEdit(objProps:editPageProps){
    //získat editované záznamy
    let id = objProps.id;
    let name = objProps.name;
    let author = objProps.author;
    let description = objProps.description;

    if(description === null || description === undefined || description === ""){
      description = "";
    }
    //poslat update na server
    let data;
    const url:string = settings.serverUrl + "/book/update?id="+ id + "&name=" + name + "&author=" + author + "&description=" + description;
    data = await updateBook(url);
    //získat editované záznamy zpět
    if(data.ERROR){
      console.log(data.ERROR);
      alert("Vyskytl se error.");
    } else {
      console.log(data);
      this.getAllBooks();
    }
  }

  async addBooks(objProps:addBookProps){
    let name = objProps.name;
    let author = objProps.author;
    let description = objProps.description;

    let dataObj:any = {
      name: name,
      author: author,
      description: description
    }

    const url:string = settings.serverUrl + "/book/add";
    await addBook(url,dataObj);
    this.getAllBooks();
  }
  //////////////////////////////////////////////////
  render() {
    return (
      <Router history={history}>
        <bookContext.Provider value={this.state}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bookApp">
                <Menu/>
                <section className="bookAppWrapper">
                  <BookListMenu/>
                  <BookList/>
                </section>
              </Route>
            </Switch>
          </div>
        </bookContext.Provider>
      </Router>
    );
  }
}

export default App;
