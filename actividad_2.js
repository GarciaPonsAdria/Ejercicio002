/*
    Tras haber creado nuestra base de datos 
    mediante los comandos:
        > db.createCollection("musica");
        > use "musica"
        
    Introduciremos los siguientes datos mediante 
    la función "insertOne".

    Estructura: {
        titulo: String,
        fecha: String,
        cantante: List
        compositores: List
    }
*/

db.musica.insertOne({
    "titulo": "Mamichula",
    "fecha": "2015",
    "cantante": ["Maluma"],
    "compositores": ["Raul", "Antonio", "Jaime",]
});

db.musica.insertOne({
    "titulo": "Bohemian Rhapsody",
    "fecha": "1980",
    "cantante": ["Freddy Mercury"],
    "compositores": ["Freddy", "Brian", "Roger", "John"]
});

db.musica.insertOne({
    "titulo": "Rolling in the deep",
    "fecha": "2016",
    "cantante": ["Adele"],
    "compositores": ["Adele", "Tumet", "Niolert"]
});

db.musica.insertOne({
    "titulo": "The Wanderer",
    "fecha": "1960",
    "cantante": ["Dion","Fallout"],
    "compositores": ["Dion", "Gineber"]
});