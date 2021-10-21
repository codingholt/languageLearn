//DOM
let title  = document.getElementById('title');
let opts =  document.querySelectorAll('.options');
let btn = document.getElementById('btn');
// btn.addEventListener('click', func)

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

            element.addEventListener('click', 
            function checkCorrect(){
                if(q.answer == index){
                    console.log('answer: correct')    
                }
                else{
                    console.log('answer: false')
                }
            })
        }
    )
    
};

displayQuestion(question);

