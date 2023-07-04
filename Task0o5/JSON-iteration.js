// JSON OBJECT

let users = [{           

    "firstname" : "koushik",
    "lastname": "padmanaban",
    "age" : "24",  
},
{
    "firstname" : "prateek",
    "lastname": "mohapatra",
    "age" : "24",  
}];

for(i in users) // for in
{
    console.log( `${i} : ${users[i]}`); 
}

for(i=0;i<users.length;i++){       //for  

    console.log(`${users[i].firstname} has secured ${users[i].lastname} ${users[i].age}`);
}

for(i of users) // for of 
{
    console.log(`${i.firstname} : ${i.lastname} ${i.age}`);
    
}