let inputText 

document.querySelector('button').addEventListener('click',function(e){
    inputText = document.querySelector('input').value
    
    if(inputText === ''){
        alert("Please enter a valid text")
    }else{
        const li = document.createElement('li')
        li.innerText = inputText
        document.querySelector('ul').appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    document.getElementById('input-box').value = ""
})

document.querySelector('ul').addEventListener('click',function(e){
    if(e.target.tagName === 'LI' ){
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
    }
})