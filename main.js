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



const authors = books.map((cur) => cur.author)
console.log(authors)


const areAuthorsAdults  = authors.every(cur => cur.age >= 18)
console.log(areAuthorsAdults)


authors.sort((a,b) => areAuthorsAdults ? a.age - b.age : b.age - a.age)

console.log(authors)
let somma = authors.map((cur) => cur.age).reduce((acc, n) => {  return acc = acc + n},0)
const ages = somma / authors.length

console.log(ages)  