// Node class
class Node {
	constructor(element, prev, next) {
	  this.element = element;
	  this.prev = prev;
	  this.next = next;
	}
  
	getElement() {
	  return this.element;
	}
  
	getNext() {
	  return this.next;
	}
  
	getPrev() {
	  return this.prev;
	}
  
	setNext(n) {
	  this.next = n;
	}
  
	setPrev(p) {
	  this.prev = p;
	}
  }
  
  // DoublyLinkedList class
  class DoubleLinkedList {
	constructor() {
	  this.header = new Node(null, null, null);
	  this.trailer = new Node(null, this.header, null);
	  this.header.next = this.trailer;
	  this.size = 0;
	}
  
	getSize() {
	  return this.size;
	}
  
	isEmpty() {
	  return this.size === 0;
	}
  
	getFirst() {
	  if (!this.isEmpty()) {
		return this.header.next.getElement();
	  } else {
		return null;
	  }
	}
  
	getLast() {
	  if (!this.isEmpty()) {
		return this.trailer.prev.getElement();
	  } else {
		return null;
	  }
	}
  
	addFirst(data) {
	  this.addBetween(data, this.header, this.header.next);
	}
  
	addLast(data) {
	  this.addBetween(data, this.trailer.prev, this.trailer);
	}
  
	addBetween(data, predecessor, successor) {
	  const newNode = new Node(data, predecessor, successor);
	  successor.setPrev(newNode);
	  predecessor.setNext(newNode);
	  this.size++;
	}
  
	remove(node) {
	  const predecessor = node.getPrev();
	  const successor = node.getNext();
	  predecessor.setNext(successor);
	  successor.setPrev(predecessor);
	  this.size--;
	  return node.getElement();
	}
  
	removeFirst() {
	  if (this.isEmpty()) {
		return;
	  }
	  const first = this.header.next;
	  this.header.setNext(first.getNext());
	  first.getNext().setPrev(this.header);
	  first.setNext(null);
	  first.setPrev(null);
	  this.size--;
	}
  
	show() {
	  const arr = [];
	  if (!this.isEmpty()) {
		let temp = this.header.next;
		while (temp !== this.trailer) {
		  arr.push(temp.getElement());
		  temp = temp.getNext();
		}
	  }
	  console.log(arr);
	}
  }
  
  // Queue class
  class Queue {
	constructor() {
	  this.list = new DoubleLinkedList();
	  this.size = 0;
	}
  
	push(element) {
	  this.list.addLast(element);
	  this.size++;
	}
  
	pop() {
	  if (this.isEmpty()) {
		console.log("Queue Empty");
		return null;
	  }
	  const temp = this.list.getFirst();
	  this.list.removeFirst();
	  this.size--;
	  return temp;
	}
  
	show() {
	  this.list.show();
	}
  
	isEmpty() {
	  return this.size === 0;
	}
  
	Size() {
	  return this.size;
	}
  }
  
  const button = document.querySelector('.Push');
  
  button.addEventListener('click', (event) => {
	event.preventDefault();
	var q1 = new Queue();
	q1.push(1);
	q1.push(2);
	q1.push(3);
	q1.show();
	q1.pop();
	q1.show();
	q1.pop();
	q1.pop();
	q1.pop();
	console.log(q1.isEmpty());
	console.log(q1.Size());
	q1.push(5);
	console.log(q1.Size());
	
	
  });