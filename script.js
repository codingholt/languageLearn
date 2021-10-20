//DOM
let title  = document.getElementById('title');
let opts =  document.querySelectorAll('.options');

let question  = {
    word : 'gato',
    options : ['dog', 'cat', 'crocodile', 'owl'],
    answer : 1,
};

function displayQuestion(q){
    //display word
    title.textContent = q.word;
    //display options
    opts.forEach(
        function(element, index){
            element.textContent = q.options[index]
        }
    )
    
};

displayQuestion(question);

