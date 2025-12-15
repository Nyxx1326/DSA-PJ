// =======================
// STACK – UNDO / REDO
// =======================
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }
}

// =======================
// LINKED LIST – CART
// =======================
class CartNode {
  constructor(item) {
    this.item = item; // { name, price, qty }
    this.next = null;
  }
}

class CartLinkedList {
  constructor() {
    this.head = null;
  }

  addOrUpdate(item) {
    if (!this.head) {
      this.head = new CartNode(item);
      return;
    }

    let cur = this.head;
    let prev = null;

    while (cur) {
      if (cur.item.name === item.name) {
        cur.item.qty = item.qty;
        return;
      }
      prev = cur;
      cur = cur.next;
    }

    prev.next = new CartNode(item);
  }

  remove(name) {
    if (!this.head) return;

    if (this.head.item.name === name) {
      this.head = this.head.next;
      return;
    }

    let cur = this.head;
    while (cur.next) {
      if (cur.next.item.name === name) {
        cur.next = cur.next.next;
        return;
      }
      cur = cur.next;
    }
  }

  getTotal() {
    let total = 0;
    let cur = this.head;
    while (cur) {
      total += cur.item.price * cur.item.qty;
      cur = cur.next;
    }
    return total;
  }
}
