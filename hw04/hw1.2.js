function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostES5.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}


class PostES6 {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date){
        super(author, text, date)
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}


let attPostES5 = new AttachedPostES5('John', 'abc', '01.01.2022');
console.log(attPostES5);
attPostES5.edit('cdef');
console.log(attPostES5);
attPostES5.makeTextHighlighted();
console.log(attPostES5);

let attPostES6 = new AttachedPostES6('John', 'abc', '01.01.2022');
console.log(attPostES6);
attPostES6.edit('cdef');
console.log(attPostES6);
attPostES6.makeTextHighlighted();
console.log(attPostES6);
