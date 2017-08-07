 
 import Vue from 'vue'

 Vue.filter('searchFilter', function(value) {
     searchData:{
      var search = this.search;

      if (search) {
        return this.products.filter(function(product) {
          return Object.keys(product).some(function(key) {
            return String(product[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }

      return this.products;
    }
  })
