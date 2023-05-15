/* CONSEGNA

- Crea un array di oggetti che rappresentano delle persone.
    - Ogni persona ha un nome, un cognome e un’età.

- Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const peopleArr = [
    {
        'name':'Marco',
        'surname':'Rossi',
        'age':'18'
    },

    {
        'name':'Luke',
        'surname':'Skywalker',
        'age':'16'
    },

    {
        'name':'Giulia',
        'surname':'Bianchi',
        'age':'21'
    },

    {
        'name':'Jack',
        'surname':'Gne',
        'age':'14'
    },

    {
        'name':'Frank',
        'surname':'Freddi',
        'age':'35'
    },

    {
        'name':'Silvia',
        'surname':'Sussi',
        'age':'54'
    },

    {
        'name':'Erick',
        'surname':'De Sousa',
        'age':'20'
    },

    {
        'name':'Sara',
        'surname':'De Blas',
        'age':'30'
    },

    {
        'name':'Maite',
        'surname':'Milu',
        'age':'26'
    },

    {
        'name':'Ling',
        'surname':'Bao',
        'age':'12'
    },

    {
        'name':'Giovanni',
        'surname':'Rossi',
        'age':'32'
    },

    {
        'name':'Chiara',
        'surname':'Rossi',
        'age':'17'
    }
];

const drivingPermArr = peopleArr.map(
    (element)=>{
        let permission;
        if (element.age >= 18 && element.age <= 90) {
            permission = "può";
        }else{
            permission = "non può";
        }
        return `${element.name} ${element.surname} ${permission} guidare perché ha ${element.age} anni`
    }
)

drivingPermArr.forEach((element)=>{console.log(element)});
