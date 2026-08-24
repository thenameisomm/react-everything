function Card({book}) {
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt="Book cover"
          src={book.image}
        />
      </div>

      <div className="flex flex-col items-center md:items-start">
        
        <span className="text-2xl font-medium">
          {book.title}
        </span>

        <span className="font-medium text-sky-500">
          {book.subtitle}
        </span>

        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>{book.edition}</span>
          <span>·</span>
          <span>{book.year}</span>
        </span>

      </div>
    </div>
  )
}

export default Card