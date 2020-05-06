document.addEventListener('DOMContentLoaded', () => {
    function loadCategories()
    {   
        fetch('http://localhost:3000/categories')
        .then(resp => resp.json())
        .then(cat => {
            let category = document.getElementById('category');
            // console.log(category);
            cat.forEach(c => {
                let option = document.createElement('option');
                option.textContent = c.name;
                option.value = c.id;
                category.appendChild(option);
                // console.log(c);
            })
        })
    }

    document.addEventListener('submit', event => {
        event.preventDefault();

        let form = event.target;
        // let catID = form.value;
        if(form.id === 'game-form') //submit to start game
        {
            fetch('http://localhost:3000/categories')
            .then(resp => resp.json())
            .then(category => {
                // let questionText = document.getElementById('question-text');
                let index = 0; //first question
                showQuestion(category, index)
            })
        }
        else //submit to login
        {
            //something else
            console.log(form);
        }
    })

    function showQuestion(category, index) 
    {
        let i = index;
        //show first question
        // console.log(category[0]['questions'][0]); //have to put 0 index first for first category
        let questionText = document.getElementById('question-text');
        questionText.innerText = category[0]['questions'][0]['question'];

        //show each potential answer
        let ansArr = []; //array containing each answer
        
        category[0]['questions'].forEach(ans => {
            ansArr.push(ans['correct_answer']);
            ansArr.push(ans['wrong_answer_1']);
            ansArr.push(ans['wrong_answer_2']);
            ansArr.push(ans['wrong_answer_3']);
        })

        //loop over array and create buttons for each answer
        //put them on the DOM
        let answers = document.getElementById('choices');
        ansArr.forEach(ans => {
            let ansBtn = document.createElement('button');
            ansBtn.textContent = ans;
            answers.appendChild(ansBtn);
        })
        //event listener on each answer button

        //if correct -> next question/answers
        //else -> maybe say something idk
    }

    loadCategories();
})