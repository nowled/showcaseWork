

/**
 * Created by Robert on 3/22/2015.
 */

  (function() {



    var comedy = angular.module('comedy', []);

    comedy.controller('ComedyController', function() {
         this.products = gems;

    });

    var gems = [

        {
            name: 'Chaz the hitman',

            time: 'At 11:00 pm',

            price: 50.00,

            showButton: true



        } ,




        {
            name: 'Theresea WIlliams',

            time: 'At 12:00 am',

            price: 1000000000.00,

            showButton: true


        },
        {
            name: 'Shelly Winters',

            time: 'At 12:00 am',

            price: 100.00,

            showButton: true


        }







    ];





})();
