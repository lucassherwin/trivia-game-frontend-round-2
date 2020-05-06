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
                //index -> each question in the array
                //category
                let cat = category;
                let index = 0;

                showQuestion(cat, index)
            })
        }
        else //submit to login
        {
            //something else
            console.log(form);
        }
    })

    function showQuestion() 
    {
        //show first question

        //event listener on each answer button
        //if correct -> next question/answers
        //else -> maybe say something idk
    }

    loadCategories();
})