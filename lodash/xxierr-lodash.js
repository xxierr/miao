var xxierr = {
  compact: function(array){
    return array.map(it => {
      if(it) return it
    }).join("").split("")
  }
}