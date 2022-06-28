import Bio from './modules/Bio.js'
import Gallery from './modules/Gallery.js'
import Nav from './modules/Nav.js'

const rootDiv = document.getElementById('root')

const App = () => {
    return `
    ${Nav()}
    <div class="container">
     ${Bio()}
     ${Gallery()}
    </div> 
    `
}

rootDiv.innerHTML = App()

document.getElementById('root').innerHTML = App();

const editBioForm = document.querySelector('.edit-bio-form')
    
   editBioForm.addEventListener('submit', () => {
    event.preventDefault()
    const nameInput = document.querySelector('#name').value
    const nameOutput = document.querySelector('.name')
    console.log(nameInput);
    nameOutput.innerText = nameInput
   })

   const addphotoInput = document.querySelector('#addphotoInput');
   addphotoInput.addEventListener('change', () => {
    console.log(addphotoInput.value)
   })










