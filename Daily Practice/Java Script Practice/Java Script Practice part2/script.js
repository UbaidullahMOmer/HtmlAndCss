document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userMessage = document.getElementById('userMessage').value;
    
    // userMessagelength = userMessage.length();
    // function userMessagelength() {
    //     return userMessage.length;
    // }
    // function userMessagelimit() {
    //     if (userMessagelength() > 1) {
    //         alert('Your message is too long. Please try again.');
    //         console.log('Your message is too long. Please try again.');   
    //     }
    //     else {
    //         console.log('Your message is fine.');
    //     }
    // }

    var chatResponse = `You said: "${userMessage.toUpperCase()}". This is a simulated response.`;

    if (userMessage.length < 3) {
        var chatResponse = `This is not a valid message "${userMessage.toUpperCase()}". This is a simulated response.`;
        console.log('Your message is too short. Please try again.');
        alert('Your message is too short. Please try again.');
    }else{
        let letters = 70;
        if (userMessage.length > letters) {
            alert('Your message is too long. Please try again.');
            var chatResponse = `Your message is too long. "almost ${userMessage.toUpperCase().length} leters". You Send only "${letters}" letters. Please try again.`;
            console.log('Your message is too long. Please try again.');
        }else {
            console.log('Your message is fine.');
        }    
    }

    document.getElementById('chatResponse').textContent = chatResponse;
    document.getElementById('userMessage').value = '';
    // userMessagelimit();
});

document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = 'Text has been changed!';
    document.getElementById('changeTextButton').addEventListener('click', function() {
        document.getElementById('dynamicText').textContent = 'Text has also been changed!';
        document.getElementById('dynamicText').style = 'color: red';
        document.getElementById('changeTextButton').addEventListener('click', function() {
            document.getElementById('dynamicText').textContent = 'Text has also also been changed again!';
            document.getElementById('dynamicText').style = 'color: red';
        });
    });
});

let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)
