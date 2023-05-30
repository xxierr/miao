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

