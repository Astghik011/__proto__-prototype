// proto
// Task
// Write Pagination object that will get an array and pageSize, then will return the following.
// prevPage
// nextPage
// firstPage
// lastPage
// goToPage
// getPageItems
// const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split(""); 


const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");


const Pagination = {
    array: [],
    pageSize: 0,
    currentPage: 1,
    init(array, pageSize){
        let item = []
        for(let i = 0; i <= array.length; i++){
            if(item.length < pageSize && i < array.length) {
                item.push(array[i])
            } else {
                Pagination.array.push(item)
                item = []
                item.push(array[i])
            }
        }
        return Pagination.array
    },

    prevPage(){
        --this.currentPage
        return  this.getPageItems(this.currentPage)
    },

    nextPage(){
        ++this.currentPage
        return  this.getPageItems(this.currentPage)
    },

    firstPage(){
        return this.getPageItems(1)
    },

    lastPage(){
        let last = alphabetArray.length % 4 === 0 ? alphabetArray.length / 4 : 
        // Couldn't get the page size dynamically
               ((alphabetArray.length - (alphabetArray.length % 4)) / 4) + 1
        return this.getPageItems(last)
    },

    goToPage(page){
        return this.currentPage = page
    },

    getPageItems(page){
        let item = []
        this.currentPage = page || this.currentPage
        for(let i = 0; i < Pagination.array.length; i++){
            if(i >= this.currentPage-1 && i < this.currentPage) {
                item.push(Pagination.array[i])
            } 
        }
        return item
    }

}

console.log(Pagination.init(alphabetArray, 4)); 
console.log(Pagination.firstPage());
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"] 
console.log(Pagination.nextPage()); // add the current page by one 
 
console.log(Pagination.getPageItems()); // ["e", "f", "g", "h"] 
console.log(Pagination.nextPage()); // add the current page by one 
 
// console.log(Pagination.nextPage().nextPage()); // the ability to call chainable 
console.log(Pagination.prevPage());
console.log(Pagination.goToPage(3)); // current page must be set to 3
console.log(Pagination.getPageItems()); 
console.log(Pagination.prevPage());
console.log(Pagination.prevPage());
console.log(Pagination.nextPage());
console.log(Pagination.firstPage());
console.log(Pagination.lastPage());
console.log(Pagination.prevPage());




