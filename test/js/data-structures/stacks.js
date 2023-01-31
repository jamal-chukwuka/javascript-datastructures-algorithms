class Stack {

    // Array is used to implement the class
    constructor(){
        this.items = [];
    }

    // Functions to be implemented
    push(element){
        this.items.push(element);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.item-this.size.length;
    }

    clear(){
        this.items = [];
    }

}

const stack = new Stack();

console.log(stack.isEmpty())

stack.push(5);