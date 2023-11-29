const btnCollection = document.querySelectorAll('.btn')
const boxScore = document.querySelector('.box')
let count = 0

btnCollection.forEach((data)=>{
    data.addEventListener('click',()=>{
        if (data.classList.contains('prev')){
            count--
            
        }
        else if (data.classList.contains('next')){
            count++
        }
        else if (data.classList.contains('reset')){
            count = 0
        }
        boxScore.textContent = count
        if (count < 0){boxScore.style.color = "red"}
        else if (count === 0){boxScore.style.color = "black"}
        else{boxScore.style.color = "green"}
    })
})