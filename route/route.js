
var express = require('express')
var bodyParser = require('body-parser');
var http = require('http');

var getDate = function(req,res){
    console.log('inside current date route')
    var data = dateIsPrime();
        
        if(data==1){
             res.render('result.html');
        }else{
            console.log('inside else');
            res.json({
                "coord": {
                "lon": -0.13,
                "lat": 51.51
                },
                "weather": [
                {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50n"
                }
                ],
                "base": "stations",
                "main": {
                "temp": 279,
                "feels_like": 275.32,
                "temp_min": 278.15,
                "temp_max": 280.15,
                "pressure": 1026,
                "humidity": 93
                }
            }); 
         }
    }

var dateIsPrime = function(req,res){
    var d = new Date();
    var data = d.getDate();
    var i, flag = 0,d=5;

    for (i = 2; i <= data / 2; ++i) {
        if (data % i == 0) {
            flag = 1;
            break;
        }
    }
    if (data == 1) {
        console.log("1 is neither prime nor composite.");        
    }
    else {
        if (flag == 0){
            console.log("Is prime Date.", data);
            return flag;
        }
        else{
            console.log("not a prime Date.", data);
            return flag;
        }
    }
   return flag;
}
module.exports = getDate;