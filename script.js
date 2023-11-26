class Books{
    constructor(title,author,availablity){
        this.title = title;
        this.author = author;
        this.availablity = availablity;
    }
}

class LMembers{
    constructor(name,email){
        this.cartItems = [];
        this.name = name;
        this.email = email;
    }
    borrowBook(nameOfBook){
        this.cartItems.push({
            nameOfBook
        })
    }
    returnBook(nameOfBook){
        this.cartItems = this.cartItems.filter((item)=>{
            return item!=nameOfBook;
        })
    }
    getBookList(){
        return this.cartItems;
    }
}

class LStaff{
    constructor(name, email){
        this.name = name
        this.email = email
    }
}

var lStaff = new LStaff('Hari', 'hari@gmail.com')
console.log("Library staff Name: "+lStaff.name+", email: "+lStaff.email)

var lMember = new LStaff('Easwaran', 'easwaran@gmail.com')
console.log("Library Member Name: "+lMember.name+", email: "+lMember.email)

var whiteTiger = new Books('White Tiger','Aravind',1)
var chessForAll = new Books('Chess for All','Vishwanath Anand',1)
var DSA = new Books('DSA','Samantha',1)
var harryPotter = new Books('Harry Potter','JKR',1)

console.log("Books added: ",whiteTiger, chessForAll, DSA, harryPotter)

