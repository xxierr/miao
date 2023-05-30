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