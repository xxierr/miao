class MySet{
  ele = []

  add(val){
    if(!this.has(val)) this.ele.push(val)
  }

  remove(val){
    if(this.has(val)){
      var idx = this.ele.indexOf(val)
      this.ele.splice(idx,1)
    }
  }

  has(val){
    return this.ele.includes(val)
  }

  size(val){
    return this.ele.length
  }
}

class MyMap{
  #key = []
  #value = []

  set(k,v){
    var kidx = this.#key.indexOf(k)
    if(kidx >= 0) this.#value[kidx] = v
    else {
      this.#key.push(k)
      this.#value.push(v)
    }
  }

  get(k){
    var kidx = this.#key.indexOf(k)
    if(kidx >= 0) return this.#value[kidx]
  }

  has(v){
    if(this.#key.includes(k)) return true
    else return false
  }

  delete(k){
    var kidx = this.#key.indexOf(k)
    if(kidx >= 0){
      this.#key.splice(kidx,1)
      this.#value.splice(kidx,1)
      return true
    }
    return false
  }

  size(){
    return this.#key.length
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
  constructor(){
    this.size = len
  }
  head = null
  len = 0
  push(val){
    var node = {val, next: null}
    len++
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
    var node = {val, next: null}
    if(this.head == null) return undefined
    len--
    var res = this.head.val
    this.head = this.head.next
    return res
  }
}

class Queue{
  vals = []

  add(val){
    this.vals.push(val)
  }

  pop(){
    return this.val.shift()
  }

  size(){
    return this.vals.length
  }
}

class LinkedList{
  head = null
  tail = null

  append(val){
    var node = {val, next: null}
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
    return p
  }

  size(){
    var p = this.head
    var len = 0
    while(p){
      len++
      p = p.next
    }
    return len
  }
}

