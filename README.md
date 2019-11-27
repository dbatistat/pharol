#Pharol

#End points

##POST /
create a person with rut, rut chilen, name, lastname, gender, email, and a array of addresses

####Example data

{
  "rut": "123456789",
  "rutChilen": 232323232,
  "name": "luisa",
  "lastname": "lopez",
  "email": "luisa.l@gmail.com",
  "gender": "F"
}

##PUT /{id}
update a person with rut, rut chilen, name, lastname, gender and email. But not addresses

####Example Data

{
  "rut": "123456789",
  "rutChilen": 232323232,
  "name": "luisa",
  "lastname": "lopez",
  "email": "luisa.l@gmail.com",
  "gender": "F"
}

##GET /{id}
get a person by ID

##GET /search?rut=12323&rutChilen=123&name=david&lastname=batista&email=david@gmail.com&gender=M&address=calle 6
search people for any input in the end point


