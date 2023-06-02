class MySet{
  ele = []
  size = 0

  add(val){
    if(!this.has(val)) {
      this.ele.push(val)
      this.size++
    }
  }

  delete(val){
    if(this.has(val)){
      var idx = this.ele.indexOf(val)
      this.ele.splice(idx,1)
      this.size--
    }
  }

  has(val){
    return this.ele.includes(val)
  }
}

class MyMap{
  key = []
  value = []
  size = 0

  set(k,v){
    var kidx = this.key.indexOf(k)
    if(kidx >= 0) this.value[kidx] = v
    else {
      this.key.push(k)
      this.value.push(v)
      this.size++
    }
  }

  get(k){
    var kidx = this.key.indexOf(k)
    if(kidx >= 0) return this.value[kidx]
  }

  has(v){
    if(this.key.includes(k)) return true
    else return false
  }

  delete(k){
    var kidx = this.key.indexOf(k)
    if(kidx >= 0){
      this.key.splice(kidx,1)
      this.value.splice(kidx,1)
      this.size--
      return true
    }
    return false
  }
}

class Vector{
  constructor(re,im){
    this.x = re
    this.y = im
    this.length = Math.sqrt(this.x * this.x + this.y * this.y)
  }

  plus(vec){
    var re = this.x + vec.x
    var im = this.y + vec.y
    return new Vector(re,im)
  }

  minus(vec){
    var re = this.x - vec.x
    var im = this.y - vec.y
    return new Vector(re,im)
  }
}

class Complex{
  constructor(re,im){
    this.real = re
    this.imag = im
  }

  plus(c){
    return new Complex(this.real + c.reL , this.imag + c.imag)
  }

  minus(c){
    return new Complex(this.real - c.real , this.imag - c.imag)
  }

  mul(c){
    var re = this.real * c.real - this.imag * c.imag
    var im = this.real * c.imag + this.imag * c.real
    return new Complex(re,im)
  }
  
  div(c){
    var hper = new Complex(this.real, -this.imag)
    var fenzi = this.mul(hper)
    var fenmu = c.mul(hper)
    var re = fenzi.real / fenmu.real
    var im = fenmu.imag / fenmu.real
    return new Complex(re,im)
  }
}

class Stack{
  head = null
  size = 0
  push(val){
    var node = {val: val, next: null}
    this.size++
    if(this.head == null){
      this.head = node
      return
    }else {
      node.next = this.head
      this.head = node
      return
    }
  }

  pop(){
    if(this.head == null) return undefined
    this.size--
    var res = this.head.val
    this.head = this.head.next
    return res
  }
}

class Queue{
  vals = []
  size = 0

  add(val){
    this.vals.push(val)
    this.size++
  }

  pop(){
    this.size--
    return this.vals.shift()
  }
}

class LinkedList{
  head = null
  tail = null
  size = 0

  append(val){
    var node = {val, next: null}
    this.size++
    if(this.head == null){
      this.head = this.tail = node
      return
    }else {
      this.tail.next = node
      this.tail = node
      return
    }
  }

  prepend(val){
    var node = {val, next: null}
    this.size++
    if(this.head == null){
      this.head = this.tail = node
      return
    }else {
      node.next = this.head
      this.head = node
      return
    }
  }

  at(idx){
    var p = this.head
    var c = 0
    while(c<idx){
      p = p.next
      c++
    }
    return p.val
  }
}


class PriorityQueue{
  constructor(){
    this._heap = []
  }

  _swap(i,j){
    var t = this._heap[i]
    this._heap[i] = this._heap[j]
    this._heap[j] = t
  }

  _heapUp(pos){
    if(pos == 0) return
    var parent_pos = (pos-1) >> 1 //pos位置的结点元素的父节点位置
    if(this._heap[pos] > this._heap[parent_pos]){
      this._swap(pos,parent_pos)
      this._heapUp(parent_pos)
    }
  }

  _heapDown(pos){
    var leftpos = 2*pos + 1
    var rightpos = 2*pos + 2
    var maxidx = pos
    if(leftpos < this._heap.length && this._heap[leftpos] > this._heap[maxidx]){
      maxidx = leftpos
    }
    if(rightpos < this._heap.length && this._heap[rightpos] > this._heap[maxidx]){
      maxidx = rightpos
    }
    if(maxidx != pos){
      this._swap(maxidx,pos)
      this._heapDown(maxidx)
    }
  }

  push(val){
    this._heap.push(val)
    this._heapUp(this._heap.length - 1)
    return this
  }

  pop(){
    if(this._heap.length == 0) return undefined
    if(this._heap.length == 1) return this._heap.pop()
    var res = this._heap[0]
    var last = this._heap.pop()
    this._heap[0] = last
    this._heapDown(0)
    return res
  }

  peek(){
    return this._heap[0]
  }

  get size(){
    return this._heap.length
  }
}
