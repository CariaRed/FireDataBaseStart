# FireDataBaseStart

#Criar um nó: 
 await firebase.database().ref('Tipo').child(2).set({
  nome: 'Agnes',
  sobrenome: 'portfólio',
  sexo: 'todo dia'
 })
 
#Remover um nó:
 await firebase.database().ref('Tipo').remove('')

#Atualizar as informações de um nó:
 await firebase.database().ref('tipo').set('programador').update({
 

