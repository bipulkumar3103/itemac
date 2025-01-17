var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
// resetTimeAnimation()

// Client-Side Validation
document.getElementById("contactFixedForm").addEventListener("submit", function (event) {
    const form = event.target;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
    } else {
      alert("Thank you! Your message has been sent.");
    }
  });



  ///////////////////////////////////send contact form to email


//   const form=document.querySelector('.myContactForm');
//   //function on click submit button

//   function sendMsg(e){
//     e.preventDefault();
//     const name=document.querySelector('.input-name'),
//           email=document.querySelector('.input-email'),
//           phone=document.querySelector('.input-phone'),
//           message=document.querySelector('.input-textarea');


//           //function to send mail
//           Email.send({
//             SecureToken: "ab283de2-72c1-49a7-be6b-26134152b80e", // Replace with your secure token
//             To: 'bipulkumar3103@gmail.com',
//             From: 'bk1654979@gmail.com',
//             Subject: `Message from ${name.value} (${phone.value})`,
//             Body: `Name: ${name.value}<br>Email: ${email.value}<br>Phone: ${phone.value}<br>Message: ${message.value}`
//         }).then(
//             response => {
//                 console.log("Raw Response:", response);
//                 // if (response === "OK") {
//                 //     alert("Your message has been sent successfully!");
//                 //     form.reset(); // Reset the form after successful submission
//                 // } else {
//                 //     alert("There was an error sending your message: " + response);
//                 // }
//             }
//         );
//     }
    
//     // Attach event listener to the form
//     form.addEventListener('submit', sendMsg);

