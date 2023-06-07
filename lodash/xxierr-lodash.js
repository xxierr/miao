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

  initial: function(array){
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
      if(typeof item === 'string' || typeof item === 'boolean' || typeof item === 'number'){
        if(typeof target === 'function'){
          if(!target(item)) return false
        }
        else if(item != target) return false
      }
    }
    return true
  },

  some: function(set,target){
    for(var i=0 ; i<set.length ; i++){
      var item = set[i]
      if(typeof item === 'object' && !Array.isArray(item)){
        if(typeof target === 'function'){
          if(target(item)) return true
        }
        else if(typeof target === 'object' && !Array.isArray(target)){
          if(Object.keys(item).join('') == Object.keys(target).join('') && Object.values(item).join('') == Object.values(target).join('')) return true
        }
        else if(Array.isArray(target) && target.length == 2 && item[target[0]] == target[1]) return true
        else if(typeof target === 'string' && item[target] != null) return true
      }
      if(typeof item === 'string' || typeof item === 'boolean' || typeof item === 'number'){
        if(typeof target === 'function'){
          if(target(item)) return true
        }
        else if(item == target) return true
      }
    }
    return false
  },

  countBy: function(sets, iteratee = _.identity){
    var res = new Map()
    for(var item of sets){
      var c = 0
      var key = ""
      if(typeof iteratee === 'string') key = item[iteratee]
      else if(typeof iteratee === 'function') key = iteratee(item)
      var value = res.get(key)
      if(value) {
        c = value
        res.delete(key)
      }
      res.set(key,++c)
    }
    return Object.fromEntries(res)
  },

  groupBy: function(sets, iteratee = _.identity){
    var res = new Map()
    for(var item of sets){
      var c = []
      var key = ""
      if(typeof iteratee === 'string') key = item[iteratee]
      else if(typeof iteratee === 'function') key = iteratee(item)
      var value = res.get(key)
      if(value) {
        c = value
        res.delete(key)
      }
      c.push(item)
      res.set(key,c)
    }
    return Object.fromEntries(res)
  },

  keyBy: function(array, iteratee){
    var res = {}
    for(var item of array){
      if(typeof iteratee === 'string') res[item[iteratee]] = item
      else if(typeof iteratee === 'function') res[iteratee(item)] = item
    }
    return res
  },

  forEach: function(set, iteratee){
    var res = null
    if(Array.isArray(set)) {
      res = []
      set.forEach(it => {
        iteratee(it)
        res.push(it)
      })
      return res
    }
    else if(typeof set === 'object') {
      res = {}
      Object.entries(set).forEach(it => {
        var kv = [...it]
        iteratee(...it)
        res[kv[0]] = kv[1]
      })
      return res
    }
  },

  map: function(set, iteratee){
    var res = []
    if(Array.isArray(set)) {
      if(typeof iteratee === 'function' && (typeof set[0] != 'object' || Array.isArray(set[0]))) return set.map(it => iteratee(it,set.indexOf(it),set))
      if(typeof set[0] === 'object' && !Array.isArray(set[0]) ){
        if(typeof iteratee === 'string'){
          set.forEach(it => {
            res.push(eval('it' + '.' + iteratee))
          })
          return res
        }
        if(typeof iteratee === 'function'){
          return set.map(it => iteratee(it,set.indexOf(it),set))
        }
      }
    }else if(typeof set === 'object' && !Array.isArray(set)) {
      var values = Object.values(set)
      return values.map(it => iteratee(it,values.indexOf(it),values))
    }
  },

  filter: function(set,target){
    var res = []
    for(var i=0 ; i<set.length ; i++){
      var item = set[i]
      if(typeof item === 'object' && !Array.isArray(item)){
        if(typeof target === 'function'){
          if(target(item)) res.push(item)
        }
        else if(typeof target === 'object' && !Array.isArray(target)){
          var tkeys = Object.keys(target)
          for(var tk of tkeys){
            if(item[tk] != target[tk]) return res
          }
          res.push(item)
        }
        else if(Array.isArray(target) && target.length == 2 && item[target[0]] == target[1]) res.push(item)
        else if(typeof target === 'string' && item[target]) res.push(item)
      }
      if(typeof item === 'string' || typeof item === 'boolean' || typeof item === 'number'){
        if(typeof target === 'function'){
          if(target(item)) res.push(item)
        }
        else if(item == target) res.push(item)
      }
    }
    return res
  },

  reduce: function(set, iteratee , init = 0){
    if(Array.isArray(set)) return set.reduce(eval(iteratee), init)
    else if(typeof set === 'object') {
      var kvs = Object.entries(set)
      kvs.forEach(kv => {iteratee(init, kv[1], kv[0])} )
      return init
    }
  },

  reduceRight: function(set, iteratee , init = 0){
    if(Array.isArray(set)) return set.reduceRight(eval(iteratee), init)
    else if(typeof set === 'object') {
      var kvs = Object.entries(set).reverse()
      kvs.forEach(kv => {iteratee(init, kv[1], kv[0])} )
      return init
    }
  },

  size: function(set){
    if(typeof set === 'object' && !Array.isArray(set) ) return Object.keys(set).length
    else return set.length
  },

  sortBy: function(set, ...iteratees){
    var iteratees = [...iteratees]
    if(Array.isArray(iteratees.flat())) iteratees = iteratees.flat()
    if(Array.isArray(set)){
      if(typeof set[0] === 'object' && !Array.isArray(set[0])){
        var sortby = null
        for(var item of iteratees){
          if(typeof item === 'function'){
            sortby = (it) => {
              return function(a,b){
                var a1 = it(a)
                var b1 = it(b)
                return a1 < b1 ? -1 : 1
              }
            }
          }
          if(typeof item === 'string'){
            sortby = (it) => {
              return function(a,b){
                var a1 = a[it]
                var b1 = b[it]
                return a1 < b1 ? -1 : 1
              }
            }
          }
          if(sortby) set.sort(sortby(item))
          sortby = null
        }    
      }
    }
    return set
  },

  sample: function(set){
    if(Array.isArray(set)){
      var idx = Math.floor(Math.random() * set.length)
      return set[idx]
    }
  },

  // isUndefined: function(){

  // }
}
//console.log(xxierr.sample([1, 2, 3, 4]))