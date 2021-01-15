import React, {useState} from 'react';
import './App.css';
import Book from './components/Book/Book';

function App() {
  const [books, setBooks]  = useState(
    [
      {
        id: 0,
        name: "A descoberta do mundo",
        author: "Clarice Lispector",
        pages:"480"
      },
    
      {
        id: 1,
        name: "Genero e desigualdades",
        author: "Flávia Biroli",
        pages:"210"
      }
    ]
  );

  // const onHandleSubmit = () => {
  //   let newBooks = [...books,
  //     {
  //       id: books.length + 1,
  //       name: "Dom Casmurro",
  //       author: "Machado de Assis",
  //       pages: 232
  //     }
  //   ];
  //   setBooks(newBooks);
  // }

  const [showBooks, setShowBooks] = useState(true);
  const [style, setStyle] = useState({
    backgroundColor: 'green',
    color: 'white'
  });


  const onBooksSubmit = (event) => {

    event.preventDefault();
    let newBooks = [...books,
      {
        id: books.length + 1,
        name: event.target.name.value,
        author: event.target.author.value,
        pages: event.target.pages.value
      }
    ];
    setBooks(newBooks);
  }

  const onToogleBooks = () => {
    setShowBooks(!showBooks);

    let newStyle = {...style};
    if (style.backgroundColor === 'green') {
      newStyle.backgroundColor = 'red';
    } else {
      newStyle.backgroundColor = 'green';
    };
    setStyle(newStyle);
  }

  const deleteBookHandler = (index) => {
    let newBooks = books.slice(); //ou ..= [...books]
    newBooks.splice(index, 1);
    setBooks( newBooks);
    // console.log(books);
  }

  const alterBookSubmit = (event) => {
    event.preventDefault();

    let booksList = books.slice();
    const book = booksList.find(element => element.name === event.target.name .value);
    console.log(book);
    book.name = event.target.name.value;
    book.author = event.target.author.value;
    book.pages = event.target.pages.value;
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Livros</h1>
        <form onSubmit={onBooksSubmit}>
          <input type="text" id="name" placeholder="Digite o nome do livro"/>
          <input type="text" id="author" placeholder="Digite o nome do autor(a)"/>
          <input type="text" id="pages" placeholder="Número de páginas"/>
          <input type="submit" value="Cadastrar"/>
        </form>
        
        <form onSubmit={alterBookSubmit}>
          <input type="text" id="name" placeholder="Digite o nome do livro"/>
          <input type="text" id="author" placeholder="Digite o nome do autor(a)"/>
          <input type="text" id="pages" placeholder="Digite o numero de paginas"/>
          <input type="submit" value="Alterar"/>
        </form>

        {/* <button onClick={onHandleSubmit} >Adiciona um livro</button> */}

        <button style={style} onClick={onToogleBooks}>Mostrar/Esconder Livros</button>
        {showBooks ?
          books.map( (book, index) =>{
            return(
              <Book name={book.name}
                    author={book.author} 
                    pages={book.pages}
                    click={() => deleteBookHandler(index)}
                    >Este é um bom livro</Book>
            );
          })
          : null
        }
        
      </header>
    </div>
  );
}

export default App;
