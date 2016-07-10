'use strict';

$(document).ready(function() {

    $('.wine-button').on('click', function(){
      console.log("yep");
      $.ajax({
        dataType: 'json',
        url: 'http://localhost:3004/wines',
        method: 'GET',
      }).done(function(wines) {
        console.log(wines)
        });
      });
    });


  //
  // var wineApp = new Vue({
  //   el: '#wineApp',
  //   data: {
  //     message: '',
  //     query: '',
  //   },
  //   methods: {
  //     getWine: function(query){
  //       var wineQuery = query.toLowerCase();
  //       $.ajax({
  //         dataType: 'json',
  //         url: 'http://localhost:3004/wines',
  //         method: 'GET',
  //       }).done(function(data) {
  //         console.log(data);
  //       })
  //     }
  //   }
  // });
