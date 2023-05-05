
//Node class
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

class DoublyLinkedList {

	//function of DoublyLinkedList class
	constructor() {
	  this.header = new Node(null, null, null);
	  this.trailer = new Node(null, this.header, null);
	  this.header.setNext(this.trailer);
	  this.size = 0;
	}
	
	isEmpty() {
	  return this.size === 0;
	}
	
	first() {
	  if (this.isEmpty()) {
		return null;
	  }
	  return this.header.getNext().getElement();
	}
	
	last() {
	  if (this.isEmpty()) {
		return null;
	  }
	  return this.trailer.getPrev().getElement();
	}
	
	addFirst(e) {
	  this.addBetween(e, this.header, this.header.getNext());
	}
	
	addLast(e) {
	  this.addBetween(e, this.trailer.getPrev(), this.trailer);
	}
	
	showList() {
	  let temp = this.header.getNext();
	  let list = [];
  
	  while (temp !== this.trailer) {
		list.push(temp.getElement());
		temp = temp.getNext();
	  }
  
	  console.log(list);
	}
	
	addBetween(e, predecessor, successor) {
	  let newNode = new Node(e, predecessor, successor);
	  predecessor.setNext(newNode);
	  successor.setPrev(newNode);
	  this.size++;
	}
	
	concatenate(list2) {
	  let yourNode = list2.header.getNext();
	  let myNode = this.trailer.getPrev();
	  myNode.setNext(yourNode);
	  this.trailer = list2.trailer;
	}
  }
  


  //.........................................................................

  class Queue {
	constructor() {
	  this.list = new DoublyLinkedList();
	  this.size = 0;
	}
  
	push(element) {
	  this.list.addLast(element);
	  this.size++;
	}
  
	pop() {
	  if (this.isEmty()) {
		console.log("Queue Empty");
		return null;
	  }
	  const temp = this.list.getFirst();
	  this.list.removeFirst();
	  this.size--;
	  return temp;
	}
  
	show() {
	  this.list.showList();
	}
  
	isEmty() {
	  return this.size === 0;
	}
  
	Size() {
	  return this.size;
	}
  }


  const button = document.querySelector('.Prova');
//   console.log(button);

button.addEventListener('click', (event)=>{
	event.preventDefault();
	 var q1 = new Queue();
     q1.push('a');
	 q1.push(2);
	 q1.show();
})
