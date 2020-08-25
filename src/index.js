class Stack {
  count = 0;
  item = [];
  constructor() {

  }
  peek() {
    if (this.item.length === 0)
      throw 'Stack is empty';
    console.log(this.item[this.item.length - 1]);
  }
  pop() {
    if (this.item.length === 0)
      throw 'Stack is empty';
    this.item.pop();
    this.count--;
  }
  push(value) {
    this.item.push(value);
    this.count++;
  }
  get count() {
    return this.count;

  }
}
const stack = new Stack();
