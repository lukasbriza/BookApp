import React from 'react';
import Book from './components/book/book';

function App() {
  return (
    <div className="App">
      <Book id={"test"} name={"Book name"} author={"Author name"} description={"some description"}/>
    </div>
  );
}

export default App;
