//4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
const books = [
    {title: "The Hunger Games", author: "Suzanne Collins", year: 2008},
    {title: "The Help", author: "Kathryn Stockett", year: 2009},
    {title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005},
    {title: "The Martian", author: "Andy Weir", year: 2011},
    {title: "Gone Girl", author: "Gillian Flynn", year: 2012},
    {title: "The Fault in Our Stars", author: "John Green", year: 2012},
    {title: "The Nightingale", author: "Kristin Hannah", year: 2015},
    {title: "Ready Player One", author: "Ernest Cline", year: 2011},
    {title: "The Girl on the Train", author: "Paula Hawkins", year: 2015},
    {title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", year: 2010}
  ];
  
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => ({...book, author: book.author.toUpperCase()}));
  
  console.log(filteredBooks);
  