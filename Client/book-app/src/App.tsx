import * as React from "react";
import {BookList} from './components/bookList/BookList';
import BookListMenu from './components/bookListMenu/BookListMenu';




function App() {
  return (
    <div className="App">
      <section className="bookAppWrapper">
        <BookListMenu/>
        <BookList/>
      </section>
    </div>
  );
}

export default App;
