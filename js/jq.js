'use strict';
$(function(){
    
/*    $.ajax({
        url:'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
        dataType: 'json',
        success: function(resultJSON){
          console.log(resultJSON);  
        },
        error: function(msg){
            console.log(msg);
        }
        
    })*/
    
    
       /* $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
                )*/
});


function getjson(){
   
    /*FUNKCJ WYCIAGANIA Z JSONA */$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data){
        /*OBJEKT ZAWSZE JEST PRZYPISANY ZAWSZE DO PARAMTRU FUNKCJI NP ('HTTP..., FUNCTION(DATA)) DO PARAMRTEU DATA*/
        
        /*objekt jest pobrany do parametru  funkcji data i z niego wycagamy dane objektu*/
        $('body').append('<p>Id uzytkownika: ' + data.userId + '</p>');
        $('body').append('<p>Nazwa użytkownika: '+ data.userName + '</p>');
/*        $('body').append('<p>URL użytkownika: ' + date.userURL + '</P>');*/
        
    
        
        console.log(data);
    })
    }