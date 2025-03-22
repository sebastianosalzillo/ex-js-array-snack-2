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
  




  const authors = books.map(b => b.author)

let areAuthorsAdultsCount = books.forEach((cur => {
    let count = 0

    if (cur.author.age >= 18) count ++
    return count
    
}))

const areAuthorsAdults = areAuthorsAdultsCount === books.length + 1 
console.log(areAuthorsAdults)


let authorsOrdine = areAuthorsAdults ? authors.sort((a, b) => a.age - b.age) : authors.sort((a, b) => b.age - a.age);

console.log(authorsOrdine)


const ages = books.map(b => b.author.age)

const agesSum = ages.reduce((acc, cur) => acc += cur)

console.log(agesSum)


const etaMedia = agesSum / (ages.length + 1)

console.log(etaMedia)




