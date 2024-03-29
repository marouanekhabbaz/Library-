// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  let numberOfBooks= 0 ;
  for (let i=0; i < books.length ; i++){
    numberOfBooks++
  }
  return numberOfBooks
}

function getTotalAccountsCount(accounts) {
  let numberOfaccounts= 0 ;
  for (let i=0; i < accounts.length ; i++){
    numberOfaccounts++
  }
  return numberOfaccounts
}

function getBooksBorrowedCount(books) {
  let numberOfBorrowed= 0;
  let borrowed = books.filter((book) => book.borrows[0].returned === false );
  for (let i=0 ; i< borrowed.length ; i++ ){
    numberOfBorrowed++
  }
  return numberOfBorrowed
}


// function getMostCommonGenres(books) {
//   let getLenghtAndGenre = books.map((book)=>{
//     let returnedObject = {} ;
//     returnedObject.name=book.genre;
//     returnedObject.count = book.borrows.length
//     return returnedObject
//   })
//   let sortedList = getLenghtAndGenre.sort((objA, objB)=> objB.count - objA.count);
//   let result = sortedList.slice(0,5)
//   return result 
//  }
// function getMostCommonGenres(books){
//   let result= []; 
//   for(let i=0 ; i< books.length ; i++){
//     let bookGenre = books[i].genre;
//     let genreAndCount ={};
//     let count=0; 
//     for (let j=0; j< books.length ; j++){
//       if ( books[j].genre === bookGenre){
//         count++;
//         genreAndCount.name= bookGenre;
//         genreAndCount.count= count ;
//       } 
//     }  result.push(genreAndCount);
// }  let resultSorted =  result.sort((objA, objB)=> objB.count - objA.count);
// return resultSorted.slice(0,5)
// }
function getMostCommonGenres(books){
  let result= []; 
  for(let i=0 ; i< books.length ; i++){
    let bookGenre = books[i].genre;
    let genreAndCount ={};
    let count=0; 
    for (let j=0; j< books.length ; j++){
      if ( books[j].genre === bookGenre){
        count++;
        genreAndCount.name= bookGenre;
        genreAndCount.count= count ;
      } 
    }  result.push(genreAndCount);
} 
let resultSorted =  result.sort((objA, objB)=> objB.count - objA.count);
let removeDuplicate =resultSorted.filter((thing, index, self)=> index === self.findIndex((t) => (
    t.count === t.count && t.name === thing.name
  )));

return removeDuplicate.slice(0,5)
}



function getMostPopularBooks(books) {
  let getLenghtAndGenre = books.map((book)=>{
    let returnedObject = {} ;
    returnedObject.name=book.title;
    returnedObject.count = book.borrows.length; 
    return returnedObject
  })
  let sortedList = getLenghtAndGenre.sort((objA, objB)=> objB.count - objA.count);
  let result = sortedList.slice(0,5)
  return result 
}

function getMostPopularAuthors(books, authors) {
  let allObject=[];
   for (let i=0 ; i <authors.length ; i++ ){
        let object ={};
        let authorsName = authors[i].name.first + " " + authors[i].name.last;
  
      let booksOfAuthor = books.filter((book)=> book.authorId === authors[i].id);
      let count = booksOfAuthor.reduce((acc ,book) => acc + book.borrows.length , 0);
      let returnedObject = {} ;
            returnedObject.name= authorsName; 
            returnedObject.count = count; 
    allObject.push(returnedObject)
  }
  let sortedArray= allObject.sort((objA, objB)=> objB.count - objA.count);
  return  sortedArray.slice(0,5)
};




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
