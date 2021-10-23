//DOM
let title  = document.getElementById('title');
let btn = document.getElementById('btn');

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
        
        this.currPosition =0;
        this.score = 0;
        let opts = document.querySelectorAll('.options');
    
        opts.forEach((element, index) => {
          element.addEventListener('click', () =>{
            // check correct answer
            this.checkAnswer(index)
            
          });
        });
          
        // show first question
        this.updateStats();
        this.displayQuestion(question[this.currPosition]);
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
        let currQuestion = question[this.currPosition]
        if(currQuestion.answer ===  userSelected){
            console.log('answer: correct')
            this.score++
            this.showResult(true)
        }
        else{
            console.log('answer: incorrect');
            this.showResult(false)
        }
        
        //refresh score stats
        this.updateStats();

        //next question
        this.increasePosition();

        this.displayQuestion(question[this.currPosition]);


    },


    increasePosition: function() {
        this.currPosition++;
        if(this.currPosition === question.length){
            this.currPosition = 0;
        }
    },

    updateStats: function(){
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = 'Your score: ' + this.score
    },

    showResult: function(isCorrect){
      let resultDiv = document.getElementById('result')
  
      let answer = this.currQuestion.options[this.currQuestion.answer]
        if(isCorrect === true){
            result = 'Correct Answer!'
        }
        else{
            result = 'Unfortunatly your answer is wrong. ' + 'The correct answer is: ' + answer;
            
        }
        resultDiv.textContent = result;
    }
};

let settings = {
  modal : function(){
        // Get the modal
      var modal = document.getElementById("myModal");
      // Get the button that opens the modal
      var mbtn = document.getElementById("myBtn");
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      // When the user clicks on the button, open the modal
      mbtn.onclick = function() {
        modal.style.display = "block";
      }
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
     },
  storeData : function(){

  }



}
// const settingsDiv = document.getElementById('settings')
// settingsDiv.addEventListener('click', settings.open())
app.start()
settings.modal()