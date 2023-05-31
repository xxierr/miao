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

function Vector(){
  class Vector{
    constructor(re,im){
      this.re = re
      this.im = im
    }

    plus(vec){
      var re = this.re + vec.re
      var im = this.im + vec.im
      return new Vector(re,im)
    }

    minus(vec){
      var re = this.re - vec.re
      var im = this.im - vec.im
      return new Vector(re,im)
    }

    length(){
      return Math.sqrt(this.re ** 2 + this.im ** 2)
    }
  }
  function assert(b,string){
    if(!b) throw string
  }
  // 测试vector
  var a = new Vector(1,2)
  var b = new Vector(2,2)
  var c = a.plus(b)
  var d = a.minus(b)
  assert(c.x == 3, 'a+b的x应该为3')
  assert(c.y == 4, 'a+b的y应该为4')
  assert(d.x == -1, 'a-b的x应为-1')
  assert(d.y == 0, 'a-b的y应为0')
  assert(c.length == 5,'a+b的长度应为5')
}

class Complex{
  constructor(re,im){
    this.re = re
    this.im = im
  }

  plus(c){
    return new Complex(this.re + c.re , this.im + c.im)
  }

  minus(c){
    return new Complex(this.re - c.re , this.im - c.im)
  }

  mul(c){
    var re = this.re * c.re - this.im * c.im
    var im = this.re * c.im + this.im * c.re
    return new Complex(re,im)
  }
  
  div(c){
    var hper = new Complex(this.re, -this.im)
    var fenzi = this.mul(hper)
    var fenmu = c.mul(hper)
    var re = fenzi.re / fenmu.re
    var im = fenmu.im / fenmu.re
    return new Complex(re,im)
  }
}

class Stack{
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

  size(){
    return this.len
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
