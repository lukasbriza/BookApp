
import React from 'react';
import {BookList} from './components/bookList/BookList';
import {Home} from './components/homePage/Home';
import BookListMenu from './components/bookListMenu/BookListMenu';
import { Menu } from "./components/menu/Menu";
import { getAll, removeByID, getBook, updateBook, addBook } from "./settings/fetchAgent";
import settings from "./settings/settings";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { setCookies, readCookies } from './settings/cookies';
import { LogIn } from './components/login/LogIn';
//////////////////
//CONTEXT IMPORT//
import {bookContext} from './settings/bookContext';
//////////////////

class App extends React.Component<any,any> {
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
    this.setUser = this.setUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);

    //main state here
    this.state = {
      showRefresher: false,
      booksToShow: [],
      isLogged: false,
      redirect: null,
      userName: null,

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
      setUser: this.setUser,
      logOutUser: this.logOutUser
    }
  }
  ///////////////////////////////////////////////////
  //FUNCTIONS//

  componentDidMount(){
    let cookies:any = readCookies();
    
    // 1) má účet v cookies a je přihlášený
      if(cookies.isLogged === "true" && this.state.redirect === null){
        setCookies({
          userName: cookies.userName,
          isLogged: true,
        });
        this.setState(()=>{
          return {userName: cookies.userName, isLogged: true, redirect: false}
        });
        this.getAllBooks();
        
    // 2) má účet v cookies a není přihlášený => stav po odhlášení
      } else if(cookies.isLogged === "false" && this.state.redirect === null){
          alert('nejsi prihlasen');
          this.setState(()=>{return {redirect: true}});
    // 3) nemá cookies
      } else if(this.state.redirect === null) {
          alert('nemas cookies');
          this.setState(()=>{return {redirect: true}});
      }
  }
////////////////////////////////////////////////////////////////////////////
  async getAllBooks(){
    let cookies:any = readCookies();

    const url:string = settings.serverUrl+"/book/all/"+cookies.userName;
    let data = await getAll(url);
    let books = data.books;
    if(books.length===0){ 
      this.setState(()=>{
        return {booksToShow: null, showRefresher: false}
      });
    }else{
      this.setState(()=>{
        return {booksToShow: books, showRefresher: false}
      });
    }

    console.log("APP: getAllBooks() sucess.");
  }

  async removeBook(id:id){
    

    const url:string = settings.serverUrl+"/book/remove/"+id+"/"+this.state.userName;
    await removeByID(url);
    await this.getAllBooks();

    console.log("APP: removeBook() sucess.");
  }

  async findBook(value:findBookProps, option:findBookProps){
    let data:any;
    
    switch (option) {
      case "Id":
          //find by id
          const urlID:findBookProps = settings.serverUrl+"/book/findId/"+value+"/"+this.state.userName;  
          data = await getBook(urlID)

          if(data.Error==="ERROR"){
            console.log("error");
            alert("Nebyla nalezena žádná kniha. Zkuste znovu."); 
          } else {

          //result
            await this.setState(()=>{
              return {booksToShow: [data],
                      showRefresher: true}
            }) 
            console.log("APP: findBook() sucess.");
          }
          break;
    
      case "Name":
          //find by name
          const urlName:findBookProps = settings.serverUrl+"/book/findName/"+value+"/"+this.state.userName;
          data = await getBook(urlName);

          if(data.Error==="ERROR"){
            console.log("error");
            alert("Nebyla nalezena žádná kniha. Zkuste znovu."); 
          } else {
            
          //result
            await this.setState(()=>{
              return {booksToShow: [data],
                showRefresher: true}
            }) 
            console.log("APP: findBook() sucess.");
          }
          break;

      case "Author":
          //find by author
          const urlAuthor:findBookProps = settings.serverUrl+"/book/findAuthor/"+value+"/"+this.state.userName;
          data = await getBook(urlAuthor);

          if(data.Error==="ERROR"){
            console.log("error");
            alert("Nebyla nalezena žádná kniha. Zkuste znovu."); 
          } else {
            
          //result
            await this.setState(()=>{
              return {booksToShow: [data],
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

    const url:string = settings.serverUrl + "/book/update?id="+ id + "&name=" + name + "&author=" + author + "&description=" + description + "&user=" + this.state.userName;
    data = await updateBook(url);
    //získat editované záznamy zpět
    if(data.ERROR){
      console.log(data.ERROR);
      alert("Vyskytl se error.");
    } else {
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

    const url:string = settings.serverUrl + "/book/add/"+this.state.userName;
    await addBook(url,dataObj);
    this.getAllBooks();
  }

  setUser(userName:string){
    this.setState(()=>{
      return{
        isLogged: true,
        redirect: false,
        userName: userName
      }
    })
  }

  logOutUser(){
    this.setState(()=>{
      return{
        isLogged: false,
        redirect:true,
        userName:null
      }
    })
  }

  //////////////////////////////////////////////////
  render() {
    //render correct components
    let result:any;
    if(this.state.redirect === true){
      result = (<Redirect to="/login" />)
    } else {
      result = (
        <>
          <Menu/>
          <section className="bookAppWrapper">
            <BookListMenu/>
            <BookList/>
          </section>
        </>
      )
    }
    return (
        <bookContext.Provider value={this.state}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LogIn} />
              <Route path={'/(.+)'} render={() => (
                <Route path="/bookApp">
                  {result}
                </Route>
              )}/>
            </Switch>
          </div>
        </bookContext.Provider>
    );
  }
}

export default App;
