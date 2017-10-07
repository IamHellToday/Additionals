var button = document.querrySelector('button');
    button.addEventListener('click', function() {
        if(button.textContent == 'ON') {
            button.textContent = 'OFF';
        }
        else{
            button.textContegint = 'ON'};
        }
        var letters = document.querySelectorAll('li');
            for(var i = 0; letters.length > i; i++){
                letters[i].classList.toggle('off');
            }
    });
