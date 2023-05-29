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
		return this.header.next;
	  } else {
		return null;
	  }
	}
  
	getLast() {
	  if (!this.isEmpty()) {
		return this.trailer.prev;
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
		return null;
	  }
	  const first = this.header.next;
	  this.header.setNext(first.getNext());
	  first.getNext().setPrev(this.header);
	  first.setNext(null);
	  first.setPrev(null);
	  this.size--;
	  return first.getElement();
	}
  
	getElements() {
	  const elements = [];
	  let current = this.header.next;
	  while (current !== this.trailer) {
		elements.push(current.getElement());
		current = current.getNext();
	  }
	  return elements;
	}

	
	  
	
}
  
// Queue class
class Queue {
	constructor() {
	  this.list = new DoubleLinkedList();
	  this.front = null;
	  this.rear = null;
	  this.updateVisualization();
	}
  
	isEmpty() {
	  return this.list.isEmpty();
	}
  
	size() {
	  return this.list.getSize();
	}
  
	enqueue(element) {
	  this.list.addLast(element);
	  this.front = this.list.getFirst();
	  this.rear = this.list.getLast();
	  this.updateVisualization();
	}
  
	dequeue() {
	  if (this.isEmpty()) {
		console.log('Queue is empty');
		return null;
	  }
	  const dequeuedElement = this.list.removeFirst();
	  this.front = this.list.getFirst();
	  this.rear = this.list.getLast();
	  this.updateVisualization();
	  return dequeuedElement;
	}
  
	getFront() {
	  if (this.isEmpty()) {
		console.log('Queue is empty');
		return null;
	  }
	  return this.front.getElement();
	}
  
	getRear() {
	  if (this.isEmpty()) {
		console.log('Queue is empty');
		return null;
	  }
	  return this.rear.getElement();
	}

	clearlist() {
		while (!this.isEmpty()) {
		  this.dequeue();
		}
		this.front = null;
		this.rear = null;
		this.updateVisualization();
	  }
	  
	  
	updateVisualization() {
		const queueContainer = document.querySelector('.visualisation');
		queueContainer.innerHTML = '';
	  
		const elements = this.list.getElements();
		
		const linesContainer = document.createElement('div');
		linesContainer.className = 'lines-container';
		queueContainer.appendChild(linesContainer);
	  
		for (let i = 0; i < elements.length; i++) {
		  const element = elements[i];
	  
		  const box = document.createElement('div');
		  box.className = 'box';
		  box.textContent = element;
		  queueContainer.appendChild(box);
	  
		  if (i !== elements.length - 1) {
			const line = document.createElement('div');
			line.className = 'line';
			linesContainer.appendChild(line);
		  }
		}
	  }

	  
}
  var cnt =0;
// Event listener for the form submission
document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
	const input = document.querySelector('.ele1');
	const element = parseInt(input.value);
	if(cnt>30){
		const paragraph = document.querySelector('.overflow');
		paragraph.textContent = "";
		 newText = "Queue overflow";  
		paragraph.textContent = newText;

		setTimeout(() => {
		  paragraph.textContent = paragraph.textContent.replace(newText, '');
		}, 4000);
	}
	else if (!isNaN(element) && element!=' ') {
	  queue.enqueue(element);
	  cnt++;
	  input.value = '';
	}
  });
// Create an instance of the Queue class
const queue = new Queue();




// Event listener for the dequeue action
document.querySelector('.pop').addEventListener('click', function () {
    if (!queue.isEmpty()) {
        queue.dequeue();
		cnt--;
        updateVisualization1();
    }

});

document.querySelector('.clear').addEventListener('click', function () {
	cnt=0;
	queue.clearlist();
  });

// Modified updateVisualization() function
function updateVisualization1() {
    const queueContainer = document.querySelector('.visualisation');
    const linesContainer = document.querySelector('.lines-container');

    if (queueContainer.firstChild) {
        queueContainer.removeChild(queueContainer.firstChild);
    }

    if (linesContainer && linesContainer.firstChild) {
        linesContainer.removeChild(linesContainer.firstChild);
    }
}


	document.querySelector('.Size').addEventListener('click', (e) => {
		const paragraph = document.querySelector('.par');
		paragraph.textContent = "";
		 newText = "Size is: "+cnt;  
		paragraph.textContent = newText;

		setTimeout(() => {
		  paragraph.textContent = paragraph.textContent.replace(newText, '');
		}, 3000);
	  });
