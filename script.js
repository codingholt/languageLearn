//DOM
let title  = document.getElementById('title');
let btn = document.getElementById('btn');
// btn.addEventListener('click', func)

let question = [
  {
    word: 'gato',
    options: ['dog', 'cat', 'bird', 'fish'],
    answer: 1
  },
  {
    word: 'ave',
    options: ['mouse', 'hamster', 'lizard', 'bird'],
    answer: 3
  },
  {
    word: 'rata',
    options: ['cat', 'fish', 'rat', 'shark'],
    answer: 2
  },
  {
    word: 'mosca',
    options: ['fly', 'puma', 'fish', 'dog'],
    answer: 0
  }
];

let app = {
    start : function(){
        let opts = document.querySelectorAll('.options');
    
        opts.forEach((element, index) => {
          element.addEventListener('click', () =>{
            // check correct answer
            this.checkAnswer(index)
            
          });
        });
          
        // show first question
        this.displayQuestion(question);
    },

    displayQuestion : function(q){

        //what question are we currently showing
        this.currQuestion = q;

        let title  = document.getElementById('title');
        title.textContent = q.word;

        let opts =  document.querySelectorAll('.options');

        //display options
        opts.forEach(function(element, index){
            element.textContent = q.options[index];
        });     
    },

    checkAnswer : function(userSelected){
        if(this.currQuestion.answer ===  userSelected){
            console.log('answer: correct')
        }
        else{
            console.log('answer: incorrect')
        }
    }
};


app.start()