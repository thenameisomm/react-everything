import Card from "./components/Card.jsx"

function App() {
  const book1 = {
  title: "The Almanack of Naval Ravikant",
  year: 2025,
  image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg",
  subtitle: "A guide to wealth and happiness",
  edition: "1st"
}
const book2 = {
  title: "Atomic Habits",
  year: 2018,
  image: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
  subtitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  edition: "1st"
}
  return (
    <>
      <Card book={book1}/>
      <Card book={book2}/>
    </>
  )
}

export default App