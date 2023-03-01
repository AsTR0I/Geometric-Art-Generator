const btn = document.getElementById('btn')
/* shapes - формы */
const shapes = [
  'quad-circle-1',
  'quad-circle-2',
  'quad-circle-3',
  'quad-circle-4',
  'triangle-1',
  'triangle-2',
  'triangle-3',
  'triangle-4',
  'circle',
]
/* создаем массив цветов */
const colors = ['#9966CC', '#A8E4A0', '#F984E5', '#003153']
/* boxes - это наши пустые div*/
const boxes = document.querySelectorAll('.container div')
/* создаём стрелочную функцию generatorPattern */
let generatePattern = () => {
  /* для всех boxes(создаем стрелочную функцию с элементом) (box) => присваеваем ему имя класса ''.*/
  boxes.forEach((box) => {
    box.className = ''
    /* создаем i,j = Math.floor(Math.random() * max); */
    let i = Math.floor(Math.random() * shapes.length)
    let j = Math.floor(Math.random() * colors.length)
    /* classList – это специальный объект с методами для добавления/удаления одного класса */
    box.classList.add(shapes[i])
    /* */
    box.style.background = colors[j]
  })
}
btn.addEventListener('click', generatePattern)
window.addEventListener('load', generatePattern)
