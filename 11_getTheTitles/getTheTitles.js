const getTheTitles = function(bookList) {
    let bookArr = [];
    for (const books of bookList){
        bookArr.push(books.title);
    }
    return bookArr;
};

// Do not edit below this line
module.exports = getTheTitles;
