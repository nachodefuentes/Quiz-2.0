// Realizamos el fetch a la api de donde sacaremos las 10 preguntas.
const quiz = document.getElementById('quiz')
let actualquestion = 0
let contador = 0
async function getQuestions() {

    const questionbtn = document.getElementById('question');
    // const ans1 = document.getElementById('labelA')[0];
    // const ans2 = document.getElementById('labelB')[1];
    // const ans3 = document.getElementById('labelC')[2];
    // const ans4 = document.getElementById('labelD')[3];
    const respuesta = document.querySelectorAll('.answer');
    const siguiente = document.getElementById('submit');
    const call = document.getElementsByClassName('labels')
    const call1 = document.getElementsByClassName('labels')[0]
    const call2 = document.getElementsByClassName('labels')[1]
    const call3 = document.getElementsByClassName('labels')[2]
    const call4 = document.getElementsByClassName('labels')[3]


    /* let allQuestions = []
     let indivQuestion = []*/

    let response = await fetch(`https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple`); // --> accedemos a los datos de todas las preguntas haciendo fetch.
    let dataQuestions = await response.json()
    // --> modificamos la info anterior para poder ver los datos en la consola en formato JSON.
    console.log(dataQuestions);

    function paint(res) {

        let incorrectans = dataQuestions.results[res].incorrect_answers
        let correctans = dataQuestions.results[res].correct_answer
        let question = dataQuestions.results[res].question
        let allanswers = [...dataQuestions.results[res].incorrect_answers, dataQuestions.results[res].correct_answer]

        console.log(allanswers);

        call1.innerHTML = respuesta[0]
        call2.innerHTML = respuesta[1]
        call3.innerHTML = respuesta[2]
        call4.innerHTML = respuesta[3]
        questionbtn.innerHTML = question
        call1.value = respuesta[0]
        call2.value = respuesta[1]
        call3.value = respuesta[2]
        call4.value = respuesta[3]
    }
    paint(actualquestion)

    for (let i = 0; i < call.length; i++) {
        call[i].addEventListener('click', function () {
            if (call[i].value = dataQuestions.results[actualquestion].correct_answer) {
                contador++
            }
        });
    }
    actualquestion += 1;
}
getQuestions()

/************************************LOGICA*************************************/

// answers.push(dataQuestions.results[0].correct_answer)//hacemos push de la respuesta correcta al array.


// console.log(answers);
// console.log(question);

// // Pintar en el DOM 1 pregunta con sus respuestas + unirlo al DOM
// let form_question = "aqui tu template string"
// // Crear 1 formulario para la pregunta
// // Cada vez que envíes(submit) el formulario se envía, y se pasa a la siguiente pregunta
// // Con una variable contador(en la primera linea del script), controlamos en qué pregunta estamos(después de pintar todo)

// for (let i = 0; i < dataQuestions.results[i]; i++) { // --> creamos un bucle que recorra todos los datos en los que pretendamos acceder.
//     let quizQuest = dataQuestions.results[i];// --> creamos variable que guarde los datos a los que hemos accedido.
//     let oneQuestion = dataQuestions.results[i].question;

//     //allQuestions.push(quizQuest)
//     indivQuestion.push(oneQuestion)
// }