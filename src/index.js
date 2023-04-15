import React from "react";
import ReactDOM from "react-dom/client";

// own path
import "./index.css";

import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
    alert(book.author + ": " + book.title);
  };
  return (
    <>
      <div className="main-title">Amazon Best Sellers</div>
      <section className="booklist">
        {books.map((item, idx) => {
          return <Book {...item} key={item.id} getBook={getBook} index={idx} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

/* <EventExamples /> */

// // basic component
// const Greeting = () => {
//   return (
//     <React.Fragment>
//       <div className="someValue">
//         <h3>hello people</h3>
//         <ul>
//           <li>Kinat</li>
//           <li>Tria</li>
//           <li>Subekti</li>
//         </ul>
//       </div>
//       <label htmlFor="name">Name : </label>
//       <input type="text" name="name" id="name" />
//       <Person />
//       <Message />
//     </React.Fragment>
//   );
// };

// // nest component
// const Message = () => {
//   return <p>This is my message</p>;
// };
// const Person = () => <h2>Subekti</h2>;

// const EventExamples = () => {
//   const handleForm = () => {
//     console.log("Form changed!");
//   };
//   const handleButton = () => {
//     alert("Button clicked!");
//   };
//   const handleSubmitForm = (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log("Form submitted!");
//   };
//   return (
//     <div>
//       <h2>Form Input</h2>
//       <form>
//         <input onChange={handleForm} type="text" name="example" id=" example" />
//         <button onClick={handleSubmitForm} type="submit">
//           Submit
//         </button>
//         <button onClick={handleButton}>Click Me</button>
//       </form>
//     </div>
//   );
// };

// root.render(<Greeting />);
