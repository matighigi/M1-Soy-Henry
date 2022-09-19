//Alternativa ejercicio numero 1:

function LinkedList() {
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  //-------------------------------------------------------
  //metodo add sin aplicar el return
  LinkedList.prototype.add = function (value) {
    let node = new Node(value);
    
  
    if (!this.head) {
      this.head = node;
    }
     else {
      let current = this.head;
      while (current.next) {
      current = current.next;
      }
      current.next = node;
     }
  };
  //-------------------------------------------------------

  LinkedList.prototype.remove = function () {
    let current = this.head 


    if (!this.head) {
        return null
    }

    else if(!current.next) {
        let aux = this.head.value
        this.head = null
        return aux
    }

    while(current.next.next) {
        current = current.next
    }
    let value = current.next.value
    current.next = null
    return value
  }
  //--------------------------------------------------------

  //ALternativa ejercicio 2:

  function HashTable() {
    this.numBuckets = 35
    this.buckets = []
  }
  
  HashTable.prototype.hasKey = function(key) {
    let index = this.hash(key)
    return !!this.buckets[index][key]  
  }
  