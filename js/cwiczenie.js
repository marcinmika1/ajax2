'use strict';

function pobiezDane() {

    var httpReq = new XMLHttpRequest();

    httpReq.open('GET',
        "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", true);

    httpReq.onreadystatechange = function () {

        console.log(httpReq.readyState);
        /*SPRAWDZENIE JAKIS STATUS MA POLACZENIE Z SERVEREM*/
        if (httpReq.readyState == 4) {
            /*WYSWIETL STATUS POLACZENIA Z SERVEREM */
            console.log(httpReq.status);
            /*jestli te bledy to dobrze i idzie dalej*/
            if (httpReq.status >= 200 && httpReq.status < 300 || httpReq.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpReq.status == 'undefined') {
                /*wyswietl dane pobrane z servera*/
                console.log(httpReq.responseText);
                /*parsowanie do jsont*/
                var returnData = JSON.parse(httpReq.responseText);
                console.log(returnData);
                
                var userName=document.createElement('p');
                userName.innerHTML = 'Nazwa użytkownika: ' + returnData.userName;
                /*DODAWANIE ZMIENNEJ BY SIE WYSWIETLALA NA STRONIE */
                document.body.appendChild(userName);
                console.log(userName);
                
                console.log(httpReq.status);
                httpReq = null;
            }

        }
    }
    httpReq.send();
}

