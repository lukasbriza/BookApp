import React from 'react';
import Book from './components/book/book';
import getListData from './components/bookList/bookList';
//test
getListData('http://localhost:3000/book/all');

function App() {
  return (
    <div className="App">
      <Book id={"test"} name={"Book name"} author={"Author name"} description={"some description"}/>
    </div>
  );
}

export default App;
