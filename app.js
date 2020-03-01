console.log('Hell on earth doom2');
//jquery functions 
$(document).ready(function(){
    //get method with ajax
    $.ajax({
        method: 'GET',
        url : 'https://jsonplaceholder.typicode.com/users',
        dataType: 'json'
    }).done(function(data){
        //console.log(data);
        //$.map(data, user =>$('#result').append( user.name+ '<br>'));
        //print list of users and emails
        //empty object to save the data we'll print
        let userObj = {};
        //new array of objects that contains the user name and his email
        const userNamesEmails = $.map(data, user =>  userObj = {'name' :user.name, 'email': user.email });
        //debug check via console
        console.log(userNamesEmails);
        //we print the array of users into an UL in the html
        userNamesEmails.forEach(user => $('ul#data').append('<li> user : '+ user.name + ' Email : '+ user.email + '</li>')); 

    });
});