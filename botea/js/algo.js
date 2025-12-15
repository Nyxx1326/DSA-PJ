/* =====================================================
  STACK – UNDO / REDO (DSA)
===================================================== */
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(JSON.parse(JSON.stringify(item))); // deep copy
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

/* =====================================================
  LINKED LIST – SHOPPING CART (DSA)
===================================================== */
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

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.item.name === item.name) {
        current.item.qty = item.qty;
        return;
      }
      prev = current;
      current = current.next;
    }

    prev.next = new CartNode(item);
  }

  remove(name) {
    if (!this.head) return;

    if (this.head.item.name === name) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.item.name === name) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  getTotal() {
    let total = 0;
    let current = this.head;

    while (current) {
      total += current.item.price * current.item.qty;
      current = current.next;
    }
    return total;
  }

  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.item);
      current = current.next;
    }
    return arr;
  }

  clear() {
    this.head = null;
  }
}

/* =====================================================
  QUICK SORT – SORT BY NAME (DSA)
===================================================== */
function quickSortByName(arr, asc = true) {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        const cond = asc
            ? arr[i].name.localeCompare(pivot.name) < 0
            : arr[i].name.localeCompare(pivot.name) > 0;

        cond ? left.push(arr[i]) : right.push(arr[i]);
    }

    return [
        ...quickSortByName(left, asc),
        pivot,
        ...quickSortByName(right, asc)
    ];
}


/* =====================================================
  BUBBLE SORT – SORT BY PRICE (DSA)
===================================================== */
function bubbleSortByPrice(arr, asc = true) {
    const a = [...arr];

    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            const swap = asc
                ? a[j].price > a[j + 1].price
                : a[j].price < a[j + 1].price;

            if (swap) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    return a;
}


/* =====================================================
  KMP SEARCH – SEARCH BY NAME (DSA)
===================================================== */
function KMPSearch(data, keyword) {
  keyword = keyword.toLowerCase();

  return data.filter(item =>
    item.name.toLowerCase().includes(keyword)
  );
}
