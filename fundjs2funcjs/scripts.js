//Object lesson notes/messing around with it
 var animal = {

}

animal.username = 'blacksheep3';


animal['tagline'] = 'Have you any wool? Would you like some wool?';

var noises = [];

animal.noises = noises;

console.log(animal);


var counter = 0

for(var bah in animal){
	counter = counter + 1;
	if(bah === 'username'){
		console.log('Hi my name is ' + animal[bah])
	}else if (bah === 'tagline'){
		console.log('I like to say ' + animal[bah])
	}

}
console.log('looped over ' + counter + ' times.');


//Array lesson notes/messing around with it.
console.log('ARRAY') //just here so that when I view on browser console, I can see easily where the Array part starts

var noiseArray = ['bah bah'];

noiseArray.unshift('meeeeh');

noiseArray.push('bahhh');

noiseArray[3] = 'bark?';

console.log(noiseArray.length);
console.log(noiseArray[noiseArray.length  -1]);
console.log(noiseArray);

animal.noises = noiseArray;

//Animal collection Array exercise

var animals = [];
animals.push(animal);

var quackers = {
	username : 'DaffyDuck',
	tagline : 'Yipeee!',
	noises : ['quack', 'honk', 'sneeze', 'growl']

}

animals[animals.length] = quackers;

console.log(animals);

var cheetos = {
	username : 'ChesterCheetah',
	tagline : 'Dangerously Cheesy!',
	noises : ['crunch', 'munch', 'growl']
}

var lionKing = {
	username : 'Simba',
	tagline : 'Hakuna Matata',
	noises : ['growl', 'roar', 'meow']
}

animals.push(cheetos, lionKing);

console.log(animals);


//Functions lesson notes and playing around with it.

console.log('FUNCTIONSS!') //just so when I view on browser console, I can see easily where the functions part starts

var farm = [];

var farmMaker = function(names) {
	for(i =0; i<names.length; i++){
		var animal = { 

			speak : function() { 
				console.log        ('My name is ', this.name)},
			name : names[i],
			owner : 'Kevin',

			};
	farm.push(animal);

	}
	console.log(farm);
	return farm;
	
}


var animalNames = ['Sheep', 'Liger', 'Big Bird'];

farmMaker(animalNames);

var farmRoleCall = function(){
	var speak =[];
	for(i = 0; i < farm.length ; i++){	
		speak.push(farm[i].speak());
	}
	console.log(speak);
	return speak;
}

farmRoleCall();

//Exercise
	/* write a function(AnimalTestUser) that has one string parameter(username), that returns an object with a username property.
	In your AnimalTestUser function, create a check that sees how many arguments are passed.
	 If there is more than one argument, create a property, otherArgs that is an array of the remaining arguments. */

var AnimalTestUser = function(username){
	otherArgs = [];
	if(arguments.length > 1){
		for(var i=1; i < arguments.length; i++){
			otherArgs.push(arguments[i]);

		}
	}
	return {
		username : username,
		otherArgs : otherArgs
	};
}

console.log(AnimalTestUser('CottonBall'));
console.log(AnimalTestUser('CheetosCheetah'));

console.log(AnimalTestUser('Simba', 'what', 'does this work'));

/*Write a constructor function, AnimalCreator that returns a single animal object. The constructor function has 4 parameters: username, species, tagline, and noises. 
The animal object should have at least 5 properties: username, species, noises, tagline, and friends. */

function AnimalCreator(username, species, tagline, noises,favoritefood){
	return {
		username : username, 
		species : species,
		tagline : tagline,
		noises : noises,
		friends : [],
		favoritefood : favoritefood
	}
}

var lion = AnimalCreator('Simba', 'Lion', 'Circle of Life', ['roar', 'growl', 'meow'],'bugs');
console.log(lion);

var cheetah = AnimalCreator('Chester', 'Cheetah', 'Dangerously Cheesy!', ['crunch', 'munch', 'meow'],'cheetos');
console.log(cheetah);

//Write a function, addFriend that takes an animal object (like the one returned from the AnimalCreator function) and adds another animal object as a friend.
//Change your addFriend function to only add the username of the friend, not the whole object.
function addFriend(animal1, animal2){
	animal1['friends'].push(animal2['username']);
	animal2['friends'].push(animal1['username']);
}

addFriend(lion,cheetah);
console.log(cheetah);
console.log(lion);

//Create a myFarm collection of at least 3 animal objects. Give them some friends using addFriend, too!

var myFarm = [
	{
		username : 'Batman',
		species : 'Bat',
		hobbies : ['wearing costumes and flying around', 'solving crimes', 'building gadgets'],
		tagline : 'Where is she!',
		favoritefood:'joker tears',
		friends:[]

	},
	{
		username : 'Flash',
		species : 'Cheetah',
		hobbies : ['running', 'eating', 'traveling'],
		tagline : 'I am the fastest man? cheetah? alive',
		favoritefood:'cheetos',
		friends : []
	},
	{
		username : 'Nala',
		species : 'Lion',
		hobbies : ['eating', 'running', 'chasing'],
		tagline : 'Circle of Life',
		favoritefood: 'bugs',
		friends : []
	},
	cheetah,
	lion,
	AnimalCreator('Dory', 'Surgeonfish', 'Just keep swimming', ['glub glub', 'whale noises'],'fishfood')



]

addFriend(myFarm[1], myFarm[2]);

addFriend(myFarm[0], myFarm[4]);
 
addFriend(myFarm[1], myFarm[3]);

addFriend(myFarm[5], myFarm[0]);


/*Create a function, addMatchesArray, that takes a farm (array of animal objects) 
and adds a new property to each animal object called matches that is an empty array. */

function addMatchesArray(farm){
	for(i=0; i < farm.length; i++){
		farm[i]['matches'] = [];
	}
}

addMatchesArray(myFarm);
console.log(myFarm[0]);

/*Create a function, giveMatches, that takes a farm collection (aka an array of animal objects) that already has a matches property. 
It selects a name from the friends array and adds it to the matches array. 
You can choose how the selection is made (random, the first element, etc). Make sure all your animal objects have friends.*/

/*function giveMatches(farm){
	for(i=0;i<farm.length;i++){
		farm[i]['matches'] = farm[i]['friends'][0];
	}
}

giveMatches(myFarm);

console.log(myFarm);*/

//update giveMatches to match if two objects share a favoritefood, if no matches, match with 1st friend.

function giveMatches(farm){
	for(var i=0;i<farm.length;i++){
		for(var j=0;j<farm.length;j++){
			if(farm[i]['favoritefood'] === farm[j]['favoritefood'] && farm[i]['username'] !== farm[j]['username']){
				farm[i]['matches'].push(farm[j]);
			}
		}
		if(farm[i]['matches'].length === 0){
			farm[i]['matches'].push(farm[i]['friends'][0])
		}

	}
		
}


giveMatches(myFarm);

console.log(myFarm);


//NESTING OBJECTS notes/messing around with it

var box = {};
box['innerBox'] = {};
box['innerBox']['full'] = true;
console.log(box);

box.innerBox.babyBox = {};
box.innerBox;


var bb = box.innerBox.babyBox
bb; //still has 'says : I am empty' even though the assignemnt happened after. 


box.innerBox.babyBox.says = 'I am empty'
box.otherBox = {};
var innerBox2 = 'otherBox'
box[innerBox2]['full'] = false;

box;

//Exercise

friendsUserName = []; 
var friends = friendsUserName;

friends.push(myFarm[0]['username'], myFarm[1]['username']);

console.log(friends);

var relationships = {}
relationships.friends = friends;
console.log(relationships);
console.log(relationships.length) //undefined?;;
console.log(Object.keys(relationships).length) 

var matches = [];
relationships.matches = matches;
relationships.matches.push(myFarm[3]['username']);


for(var i=0 ; i < myFarm.length ; i++){
	myFarm[i]['relationships'] = relationships;

}

console.log(myFarm);