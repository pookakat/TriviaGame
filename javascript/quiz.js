let askIt;

let unique = {
    "question" : "What part of a cat's body is unique to them like our fingerprints are to us?",

    "answer" : "nose",

    "notOne" : ["tail", "paw pad", "tongue print"],
};

let teeth = {
    "question" : "How many teeth does an adult cat have?",

    "answer" : ["30"],

    "notOne" : ["34", "40", "27"],
};

let clone = {   
     "question" : "What was the name of the first cloned cat?",

    "answer" : ["CC"],

    "notOne" : ["Fluffy", "Charlie", "Whiskers"],}

let mayor = {
    "question" : "What city had a cat for a mayor for almost 20 years?",

    "answer" : ["Talkeetna, Alaska"],

    "notOne" : ["Aurora, Colorado", "Chandler, Alabama", "Henderson, Nevada"],
};

let paws = {
    "question" : "Do cats prefer one paw over the other?",

    "answer" : "While males prefer the left, females prefer the right",

    "notOne" : ["All cats are ambidextrous" , "While males are ambidextrous, females prefer the left", "All cats are right-pawed"],
};

let manyCats = {
    "question" : "What is a group of cats called?",

    "answer" : "A clowder",

    "notOne" : ["A pride" , "A herd", "A gaggle"],
};

let spaceKitty = {
    "question" : "What was the name of the kitty that went to space (and survived) in 1963?",

    "answer" : "Felicette",

    "notOne" : ["Annick" , "Vercingetorix", "Robert"],
};

let hairball = {
    "question" : "What is the technical name for a hairball?",

    "answer" : "bezoar",

    "notOne" : ["disgusting" , "androgenic alopecia", "goat rope"],
};

let bites = {
    "question" : "How many people in the U.S. are bitten by cats every year?",

    "answer" : "About 40,000",

    "notOne" : ["About 100,000" , "About 20,000", "About 9,700"],
};

let love = {
    "question" : "What do you call someone who loves cats?",

    "answer" : "ailurophile",

    "notOne" : ["schizophrenic" , "arachnophile", "anthropophile"],
};

let sleep = {
    "question" : "How much of their life does the average cat sleep?",

    "answer" : "70%",

    "notOne" : ["33%" , "55%", "90%"],
};

let bones = {
    "question" : "How many bones does a cat's body have?",

    "answer" : "230",

    "notOne" : ["320" , "189", "202"],
};

let food = {
    "question" : "What treat is it ok to feed your cat?",

    "answer" : "couscous",

    "notOne" : ["milk" , "grapes", "garlic"],
};

let toes = {
    "question" : "How many toes total do most cats have?",

    "answer" : "18",

    "notOne" : ["22" , "20", "16"],
};

let pets = {
    "question" : "How many pet cats are there in the US?",

    "answer" : "About 88 million",

    "notOne" : ["About 1 trillion" , "About 50 million", "About 100 million"],
};

let kittens = {
    "question" : "What is not a proper name of a group of kittens?",

    "answer" : "Clutch",

    "notOne" : ["Litter" , "Intrigue", "Kindle"],
};

let eyes = {
    "question" : "What color eyes are kittens born with?",

    "answer" : "Blue",

    "notOne" : ["Amber" , "Green", "Grey"],
};

let tailBones = {
    "question" : "What percentage of a cat's bones are in his tail?",

    "answer" : "10%",

    "notOne" : ["20%" , "5%", "7%"],
};

let breeds = {
    "question" : "What is not the name of a breed of cat?",

    "answer" : "Himalayan Curl",

    "notOne" : ["Abyssinian" , "Egyptian Mau", "Japanese Bobtail"],
};

let taste = {
    "question" : "What taste receptors do cats lack?",

    "answer" : ["sweet"],

    "notOne" : ["bitter", "sour", "umame"],
};

let questions = [unique, paws, manyCats, spaceKitty, hairball, bites, love, sleep, bones, food, toes, pets, kittens, eyes, tailBones, breeds, taste, mayor, teeth, clone];

questionNumber(questions);

function questionNumber(array){
    i = Math.floor(Math.random()*array.length);
    askIt = array[i];
    array.splice(i-1, 1);
    return askIt;
}

export {askIt};