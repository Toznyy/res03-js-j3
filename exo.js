//////////////////////////////////////////////////: Etape 0.5

let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

//////////////////////////////////////////////////Etape 1

function countActiveUsers(users) {
	let count = 0;
	for (let i = 0; i < users.length; i++){
		if (users[i].isActive === true){
			count++;
		}
	}
	return count
}

console.log(`We currently have ${ countActiveUsers(users) } active users.`);

//////////////////////////////////////////////////Etape 2

function getActiveUsers(users) {

	let activeUsers = [];
	for (let i = 0; i < users.length; i++) {
		if (users[i].isActive === true) {
			activeUsers.push(users[i]);
		}
	}
	return activeUsers;
}

function hasBlueEyes(activeUsers) {

	let count = 0;
	for (let i = 0; i < activeUsers.length; i++) {
		if (activeUsers[i].eyeColor === "brown") {
			count++;
		}
	}
	return count;
}

console.log(`Out of our currently ${ countActiveUsers(users) } active users, ${ hasBlueEyes(getActiveUsers(users)) } have blue eyes.`);

//////////////////////////////////////////////////Etape 3

function getActiveUsersAges(activeUsers) {
	
	let activeUsersAges = [];
	for (let i = 0; i < activeUsers.length; i++) {
		activeUsersAges.push(activeUsers[i].age);
	}
	return activeUsersAges;
}

function computeActiveUsersAverageAge(ages) {
	
	let sum = 0;
	for (let i = 0; i < ages.length; i++) {
		sum = sum + ages[i];
	}
	let average = sum / ages.length;
	return average;
}

console.log(`Out of our currently ${ countActiveUsers(users) } active users, the average age is ${ computeActiveUsersAverageAge(getActiveUsersAges(getActiveUsers(users)))}.`);

//////////////////////////////////////////////////Etape 4

function getMultronUsers(users) {
	
	let multronUsers = []
	for (let i = 0; i < users.length; i++) {
		if (users[i].company === "MULTRON") {
			multronUsers.push(users[i]);
		}
	}
	return multronUsers;
}

function setMultronToCenturia(users) {
	
	let count = 0;
	for (let i = 0; i < users.length; i++) {
		users[i].company = "CENTURIA";
		count++;
	}
	return count;
}

console.log(`${ setMultronToCenturia(getMultronUsers(users)) } user companies have been changed from MULTRON to CENTURIA.`);

//////////////////////////////////////////////////Etape 5

function getBrownEyedUsers(users) {
	
	let brownEyedUsers = []
	for (let i = 0; i < users.length; i++) {
		if (users[i].eyeColor === "brown") {
			brownEyedUsers.push(users[i]);
		}
	}
	return brownEyedUsers;
}

function excludeCenturiaWorkers(users) {
	let count = 0;
	for (let i = 0; i < users.length; i++) {
		 if (users[i].company !== "CENTURIA"){
			count++;
		 }
	}
	return count;
}

console.log(`${excludeCenturiaWorkers(getBrownEyedUsers(users))} users with brown eyes do not work at CENTURIA`);

//////////////////////////////////////////////////Etape 5

function getInactiveUsers(users) {

	let inactiveUsers = [];
	for (let i = 0; i < users.length; i++) {
		if (users[i].isActive !== true) {
			inactiveUsers.push(users[i]);
		}
	}
	return inactiveUsers;
}

function countBrownEyedUsers(users) {
	
	let count = 0;
	for (let i = 0; i < users.length; i++) {
		if (users[i].eyeColor === "brown") {
			count++;
		}
	}
	return count;
}

function countGreenEyedUsers(users) {
	
	let count = 0;
	for (let i = 0; i < users.length; i++) {
		if (users[i].eyeColor === "green") {
			count++;
		}
	}
	return count;
}

function countBlueEyedUsers(users) {
	
	let count = 0;
	for (let i = 0; i < users.length; i++) {
		if (users[i].eyeColor === "blue") {
			count++;
		}
	}
	return count;
}

console.log(`Out of our brown eyed users ${ getActiveUsers(countBrownEyedUsers(users)) } are active and ${ getInactiveUsers(countBrownEyedUsers(users)) } are inactive`);

console.log(`Out of our green eyed users ${ getActiveUsers(countGreenEyedUsers(users)) } are active and ${ getInactiveUsers(countGreenEyedUsers(users)) } are inactive`);

console.log(`Out of our blue eyed users ${ getActiveUsers(countBlueEyedUsers(users)) } are active and ${ getInactiveUsers(countBlueEyedUsers(users)) } are inactive`);