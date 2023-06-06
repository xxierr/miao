var xxierr = {
  compact: function(array){
    return array.filter(it => {
      if(it) return it
    })
  },

  chunk: function(array,n){
    var res = []
    while(array.length > n){
      res.push(array.slice(0,n))
      array = array.slice(n)
    }
    if(array) res.push(array)
    return res
  },

  fill: function(array,char,start = 0,end = array.length){
    while(start<end){
      array[start++] = char
    }
    return array
  },

  drop: function(array,n = 1){
    return array.slice(n)
  },

  findIndex: function(array,target){
    for(var i=0 ; i<array.length ; i++){
      var item = array[i]
      if(typeof item === 'object' && !Array.isArray(item)){
        if(typeof target === 'function'){
          if(target(item)) return i
        }
        else if(typeof target === 'object' && !Array.isArray(target)){
          if(Object.keys(item).join('') == Object.keys(target).join('') && Object.values(item).join('') == Object.values(target).join('')) return i
        }
        else if(Array.isArray(target) && target.length == 2 && item[target[0]] == target[1]) return i
        else if(typeof target === 'string' && item[target]) return i
      }
      if(typeof item === 'string' || typeof item === 'boolean' || typeof item === 'number'){
        if(item == target) return i
      }
    }
    return -1
  },

  findLastIndex: function(array,target){
    for(var i=array.length-1 ; i>=0 ; i--){
      var item = array[i]
      if(typeof item === 'object' && !Array.isArray(item)){
        if(typeof target === 'function'){
          if(target(item)) return i
        }
        else if(typeof target === 'object' && !Array.isArray(target)){
          if(Object.keys(item).join('') == Object.keys(target).join('') && Object.values(item).join('') == Object.values(target).join('')) return i
        }
        else if(Array.isArray(target) && target.length == 2 && item[target[0]] == target[1]) return i
        else if(typeof target === 'string' && item[target]) return i
      }
      if(typeof item === 'string' || typeof item === 'boolean' || typeof item === 'number'){
        if(item == target) return i
      }
    }
    return -1
  },

  flatten: function(array){
    return array.flat()
  },

  flattenDeep: function(array){
    var res = array
    while(res.join('') != res.flat().join('')){
      res = res.flat()
    }
    return res.flat()
  },

  flattenDepth: function(array,depth){
    return array.flat(depth)
  },

  fromPairs: function(pairs){
    var res = {}
    for(var kv of pairs){
      res[kv[0]] = kv[1]
    }
    return res
  },

  toPairs: function(object){
    if(typeof object === 'map' || typeof object === 'set') return object
    else if(typeof object === 'object' && !Array.isArray(object)) return Object.entries(object)
  },

  head: function(array){
    return array[0]
  },

  indexOf: function(array, value, fromIndex = 0){
    var len = array.length
    var idx = array.slice(fromIndex).indexOf(value)
    if(fromIndex<-len) fromIndex = fromIndex%len
    if(idx != -1 && fromIndex >= 0) return idx + fromIndex
    else if(idx != -1 && fromIndex < 0) return idx + fromIndex + len
    else return -1
  },

  lastIndexOf: function(array, value, fromIndex = array.length){
    var idx = array.slice(0,fromIndex+1).lastIndexOf(value)
    if(idx != -1) return idx
    else return -1
  },

  inital: function(array){
    var arr = array
    arr.pop()
    return arr
  },

  join: function(array,char){
    return array.join(char)
  },

  last: function(array){
    return array.at(-1)
  },

  pull: function(array,...value){
    var values = new Set([...value])
    return array.filter(it => {
      if(!values.has(it)) return it
    })
  },

  reverse: function(array){
    return array.reverse()
  },

  every: function(set,target){
    if(set == null) return true
    for(var i=0 ; i<set.length ; i++){
      var item = set[i]
      if(typeof item === 'object' && !Array.isArray(item)){
        if(typeof target === 'function'){
          if(!target(item)) return false
        }
        else if(typeof target === 'object' && !Array.isArray(target)){
          if(Object.keys(item).join('') != Object.keys(target).join('') || Object.values(item).join('') != Object.values(target).join('')) return false
        }
        else if(Array.isArray(target) && target.length == 2 && item[target[0]] != target[1]) return false
        else if(typeof target === 'string' && !item[target]) return false
      }
      if(typeof item === 'string' || typeof item === 'boolean'){
        if(item != target) return false
      }
    }
    return true
  }
}
// var users = [
//   { 'user': 'barney', 'age': 36, 'active': false },
//   { 'user': 'fred',   'age': 40, 'active': false }
// ];
// console.log(xxierr.every(users, 'active'))