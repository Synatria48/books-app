const Book = ({ author, title, description, srcImg, getBook, index, id }) => {
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <div className="book-idx">
        <span>{`#${++index}`}</span>
      </div>
      <img src={srcImg} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>{author.toLocaleUpperCase()}</h4>
      <button onClick={getSingleBook} style={{ marginTop: "1rem" }}>
        Details
      </button>
      {/* <div style={{ marginTop: "1rem" }}>{children}</div> */}
    </article>
  );
};

export default Book;
