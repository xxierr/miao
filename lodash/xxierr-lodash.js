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
        else if(typeof target === 'object' && Object.keys(item).join('') == Object.keys(target).join('') && Object.values(item).join('') == Object.values(target).join('')) return i
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
        else if(typeof target === 'object' && Object.keys(item).join('') == Object.keys(target).join('') && Object.values(item).join('') == Object.values(target).join('')) return i
        else if(Array.isArray(target) && target.length == 2 && item[target[0]] == target[1]) return i
        else if(typeof target === 'string' && item[target]) return i
      }
      if(typeof item === 'string' || typeof item === 'boolean' || typeof item === 'number'){
        if(item == target) return i
      }
    }
    return -1
  }
}
// var users = [
//   { 'user': 'barney',  'active': false },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': true }
// ];
// console.log(xxierr.findindex(users, 'active'))