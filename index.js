const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20 
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


const longBooks = books.filter((book) => book.pages > 300)
const longBooksTitle = longBooks.map(book => book.title)

console.log(longBooks)
console.log(longBooksTitle)


const avabileBooks = structuredClone(books)
const discountedBooks = avabileBooks.map((cur) => {
    let prezzo = cur.price.slice(0, - 1)
    cur.price = (Number(prezzo) * 0.8) + cur.price.slice(-1)
    return cur
})


console.log(avabileBooks)
console.log(discountedBooks)


const fullPricedBook = discountedBooks.filter((cur) => {
   return cur.price.slice(0, - 1) % 1 === 0  
})


console.log(fullPricedBook)


