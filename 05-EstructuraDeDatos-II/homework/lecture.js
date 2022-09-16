function LinkedList() {
    this.head = null;
}

function Node(data) {
    this.data = data
    this.next = null
}

//--------------------------------------------------------
LinkedList.prototype.add = function(data) {
    let node = new Node(data)
    let current = this.head 

    if(!current) {  // !current ------> current === null
        this.head = node 
        return node 
    }

    while(current.next) {
        current = current.next 
    }

    current.next = node
    return node
}

//-------------------------------------------------------

LinkedList.prototype.getAll = function(){
    current = this.head 
	if(!current){
        console.log('La lista esta vacia!')
		return
	}
	while(current){
        console.log(current.data); // 5, 9, 2
		current = current.next;
	}
	return
};

let nuevoNodo = new LinkedList()
nuevoNodo.add(5)
nuevoNodo.add(9)
nuevoNodo.add(2)

console.log(nuevoNodo)


