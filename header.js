 // Написать HTML по картинке
 // Header должен выглядеть также как и на скриншоте 
 // По нажатию на кнопку должен создавать еще один header ниже предыдущего и так далее 

let p = document.querySelectorAll('p')
let enroll = document.querySelector('.enroll')
let header = document.querySelector('.first')
let right = document.querySelector('.rightside')
let create = document.querySelector('.create')
let second = document.querySelector('.second')

header.style.display = 'flex'
header.style.justifyContent = 'space-between'
header.style.alignItems = 'center'
header.style.width = '100%'
header.style.backgroundColor = 'pink'

right.style.display = 'flex'
right.style.justifyContent = 'space-between'
right.style.width = '40%'

enroll.style.borderColor = 'blue'
enroll.style.color = 'blue'
enroll.style.borderRadius = '10px' 

create.style.margin = '10px'


second.style.display = 'none'

create.onclick = () => {
    second.style.display = 'block'


}
