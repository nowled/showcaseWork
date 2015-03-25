/**
 * Created by Robert on 3/22/2015.
 */

(function(){


    var apps = angular.module('comedy', []);

    apps.controller('ComedyController', function(){
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
            name: 'Chris Rock',

            time: 'At 12:00 am',

            price: 100.00,

            showButton: true


        }






    ];





})();
