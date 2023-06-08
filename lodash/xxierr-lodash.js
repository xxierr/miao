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

  isUndefined: function(value){
    return value === undefined
  },

  isNull: function(value){
    return value === null
  },

  isNil: function(value){
    return (value === undefined || value === null)
  },

  max: function(array){
    if(!array || array.length == 0) return undefined
    else return Math.max.apply(null,array)
  },

  min: function(array){
    if(!array || array.length == 0) return undefined
    else return Math.min.apply(null,array)
  },

  maxBy: function(array, iteratee){
    if(typeof array[0] === 'object' && !Array.isArray(array[0])){
      var arr = []
      var itetype = typeof iteratee
      if(itetype === 'function') arr = array.map(it => iteratee(it))
      if(itetype === 'string') arr = array.map(it => it[iteratee])
      if(!arr || arr.length == 0) return undefined
      else {
        var maxv = Math.max.apply(null,arr)
        var idx = arr.indexOf(maxv)
        return array[idx]
      }
    }
  },

  minBy: function(array, iteratee){
    if(typeof array[0] === 'object' && !Array.isArray(array[0])){
      var arr = []
      var itetype = typeof iteratee
      if(itetype === 'function') arr = array.map(it => iteratee(it))
      if(itetype === 'string') arr = array.map(it => it[iteratee])
      if(!arr || arr.length == 0) return undefined
      else {
        var maxv = Math.min.apply(null,arr)
        var idx = arr.indexOf(maxv)
        return array[idx]
      }
    }
  },

  round: function(num, precision = 0){
    var zhuan = 10**Math.abs(precision)
    if(precision > 0) return Math.round(num*zhuan)/zhuan
    else if(precision == 0) return Math.round(num)
    else if(precision < 0) return Math.round(num/zhuan)*zhuan
  },

  sumBy: function(array, iteratee){
    if(typeof array[0] === 'object' && !Array.isArray(array[0])){
      var arr = []
      var itetype = typeof iteratee
      if(itetype === 'function') arr = array.map(it => iteratee(it))
      if(itetype === 'string') arr = array.map(it => it[iteratee])
      if(!arr || arr.length == 0) return undefined
      else {
        return arr.reduce((a,b) => a+b)
      }
    }
  },

  flatMap: function(set, iteratee){
    var res = []
    if(Array.isArray(set)){
      if(typeof iteratee === 'function'){
        res = set.map(it => iteratee(it, set.indexOf(it) , set))
      }
    }
    return res.flat()
  },

  flatMapDepth: function(set, iteratee, depth = 1){
    var res = []
    if(Array.isArray(set)){
      if(typeof iteratee === 'function'){
        res = set.map(it => iteratee(it, set.indexOf(it) , set))
      }
    }
    return res.flat(depth)
  },

  get: function(object, path, defaultValue){
    var res = null
    if(typeof path === 'string') {
      try{
        res = eval('object' + '.' + path)
      }catch(e){
        res = undefined
      }
    }else if(Array.isArray(path)) {
      var p = ""
      var ob = object
      for(var key of path){
        if(ob[key]) {
          if(Array.isArray(ob)) p += '[' + key + ']'
          else p += '.' + key
          ob = ob[key]
        }
      }
      try{
        res = eval('object' + p)
      }catch(e){
        res = undefined
      }
    }
    if(res === undefined) return defaultValue
    else if(res) return res
  },

  has: function(object, path){
    if(Object.keys(object).length == 0) return false
    if(typeof path === 'string') {
      try{
        eval('object' + '.' + path)
      }catch(e){
        return false
      }
    }else if(Array.isArray(path)) {
      var p = ""
      var ob = object
      for(var key of path){
        if(ob[key]) {
          if(Array.isArray(ob)) p += '[' + key + ']'
          else p += '.' + key
          ob = ob[key]
        }
      }
      try{
        eval('object' + p)
      }catch(e){
        return false
      }
    }
    return true
  },

  mapKeys: function(object, iteratee){
    var res = {}
    var kvs = Object.entries(object)
    for(var kv of kvs){
      res[iteratee(kv[1], kv[0])] = kv[1]
    }
    return res
  },

  mapValues: function(object, iteratee){
    var s = typeof iteratee
    var res = {}
    var keys = Object.keys(object)
    if(s === 'function'){
      for(var k of keys){
        if(typeof object[k] === 'object' && !Array.isArray(object[k])) res[k] = iteratee(object[k], k , object) 
      }
    }
    if(s === 'string'){
      for(var k  of keys){
        if(typeof object[k] === 'object' && !Array.isArray(object[k])) {
          var v = object[k][iteratee]
          if(v != null) res[k] = v
        }
      }
    }
    return res
  },

  range: function(start=0, end, step){
    var res = []
    if(end === undefined){
      if(start<0) step = -1
      else step = 1
      end = Math.abs(start)
      start = 0
    }else if(end<start){
      if(step === undefined) return res
      else if(end<0) end = -end
    }else if(start<end && step === undefined) step = 1
    var num = start
    while(Math.abs(num)<end){
      if(step == 0 && res.length == end - Math.abs(num)) break
      res.push(num)
      num += step
    }    
    return res
  },

  stringifyJSON: function(set){
    return JSON.stringify(set)
  },

  concat: function(array, ...value){
    return array.concat(...value)
  },

  isEqual: function adeq(o1, o2) {
    if(o1 === o2) return true
    if(o1 && o2 && typeof o1 === 'object' && typeof o2 === 'object'){
        if(Array.isArray(o1) === Array.isArray(o2)){
            if(!Array.isArray(o1)){
                var size = 0
                for(var key in o1){
                    size++
                }
                for(var key in o2){
                    size--
                }
                if(size != 0) return false
            }else {
                if(o1.length != o2.length) return false
            }
            for (var key in o1){
                if(!adeq(o1[key],o2[key])) return false
            }
            return true
        }else return false
    }
    return o1 === o2
  },

  repeat: function(str,n){
    return str.repeat(n)
  },

  padStart: function(str, len, chars=' '){
    var l = str.length
    if(l>len) return str.slice(0,len)
    else{
      var bu = chars.repeat(len - l)
      return bu.slice(0,len-l) + str
    }
  },

  padEnd: function(str, len, chars=' '){
    var l = str.length
    if(l>len) return str.slice(0,len)
    else{
      var bu = chars.repeat(len - l)
      return str + bu.slice(0,len-l)
    }
  },

  pad: function(str, len, chars=' '){
    var l = str.length
    if(l>len) return str.slice(0,len)
    else{
      var bu = chars.repeat(len - l)
      var pstart = Math.floor((len-l)/2)
      return bu.slice(0,pstart) + str + bu.slice(pstart,len-l)
    }
  },

  keys: function(object){
    var res = []
    var idx = 0
    if(typeof object === 'object' && !Array.isArray(object)) return Object.keys(object)
    else if(typeof object === 'string'){
      while(idx < object.length){
        res.push(idx + '')
        idx++
      }
      return res
    }
  },

  values: function(object){
    if(typeof object === 'object' && !Array.isArray(object)) return Object.values(object)
    else if(typeof object === 'string') return object.split('')
  },

  random: function(lower, upper, floating){
    if(upper === true){
      floating = upper
      upper = lower
      lower = 0
    }
    if(upper === undefined) {
      upper = lower
      lower = 0
    }
    if(lower%1 != 0 || upper%1 != 0 || floating == true){
      return Math.random() * (upper-lower) + lower
    }else return Math.floor(Math.random() * (upper-lower) + lower)
  },

  ceil: function(num, precision=0){
    var zhuan = 10**Math.abs(precision)
    if(precision > 0) return Math.ceil(num*zhuan)/zhuan
    else if(precision == 0) return Math.ceil(num)
    else if(precision < 0) return Math.ceil(num/zhuan)*zhuan
  },

  floor: function(num, precision=0){
    var zhuan = 10**Math.abs(precision)
    if(precision > 0) return Math.floor(num*zhuan)/zhuan
    else if(precision == 0) return Math.floor(num)
    else if(precision < 0) return Math.floor(num/zhuan)*zhuan
  },

  cloneDeep: function(value){
    var res = JSON.parse(JSON.stringify(value))
    if(Object.entries(res).length == 0) return eval(Array.from([value]).join(''))
    else return res
  },


  trim: function(str, chars){
    var res = str
    if(chars !== undefined) {
      var chararr = Array.from(new Set(chars))
      chararr.forEach(char => {
        var reg = new RegExp("\\"+char,'g')
        res = res.replace(reg, ' ')
      })
    }
    return res.trim()
  },

  trimStart: function(str, chars){
    var res = str
    var i = 0
    if(chars !== undefined) {
      var charset = new Set(chars)
      var chararr = Array.from(charset)
      while(i<str.length){
        if(!charset.has(str[i])) return res.slice(i)
        i++
      }
    }else return res.trimStart()
  },

  trimEnd: function(str, chars){
    var res = str
    var i = str.length-1
    if(chars !== undefined) {
      var charset = new Set(chars)
      var chararr = Array.from(charset)
      while(i>=0){
        if(!charset.has(str[i])) return res.slice(0,i+1)
        i--
      }
    }else return res.trimEnd()
  },

  assign: function(...objects){
    return Object.assign(...objects)
  },

  merge:function(...objects){
    var a = Object.assign(...objects)
    
    console.log(Object.entries(a)[0])
  },


}
// var object = {
//   'a': [{ 'b': 2 }, { 'd': 4 }]
// };
 
// var other = {
//   'a': [{ 'c': 3 }, { 'e': 5 }]
// };
//console.log(xxierr.cloneDeep(/foo/i))