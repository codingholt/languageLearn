//DOM
let title  = document.getElementById('title');
let btn = document.getElementById('btn');
// btn.addEventListener('click', func)

let question  = {
    word : 'gato',
    options : ['dog', 'cat', 'crocodile', 'owl'],
    answer : 1,
};

let app = {
    start : function(){
        let alts = document.querySelectorAll('.alternative');
    
        alts.forEach(function(element, index){
          element.addEventListener('click', function(){
            // check correct answer
            console.log('check correct answer');
          });
        });
      
        // show first question
        this.displayQuestion(question);
    },

    displayQuestion : function(q){
        let title  = document.getElementById('title');
        title.textContent = q.word;

        let opts =  document.querySelectorAll('.options');

        //display options
        opts.forEach(function(element, index){
            element.textContent = q.options[index];
        });   
    }
};


app.start()