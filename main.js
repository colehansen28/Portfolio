// mouse tracking
function update(e){
    //tracking the mouse movement in the screen or if it touches the edge
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
    //setting the properties to a css variable and setting to px's
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
    //eventlistener for mousemovement
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)


const bio = document.getElementById("bio");
const experience = document.getElementById("experience");
const projects = document.getElementById("projects")
const line = document.querySelectorAll(".line")
const topic = document.querySelectorAll(".topic")

// scroll observer for bio topic
var observer = new IntersectionObserver(function(entries){
  //modifying css classes to active- (elongated)
  if(entries[0].isIntersecting === true){
   line[0].classList.add("activeLine")
   topic[0].classList.add("text-white")
  }else{
   line[0].classList.remove("activeLine")
   topic[0].classList.remove("text-white")

  }
 },{threshold: .50})
 //observer function
 observer.observe(bio)

 var observer = new IntersectionObserver(function(entries){
  if(entries[0].isIntersecting === true){
   line[1].classList.add("activeLine")
   topic[1].classList.add("text-white")
  }else{
   line[1].classList.remove("activeLine")
   topic[1].classList.remove("text-white")
  }
 },{threshold: .50})
 
 observer.observe(experience)


var observer = new IntersectionObserver(function(entries){
 if(entries[0].isIntersecting === true){
  line[2].classList.add("activeLine")
  topic[2].classList.add("text-white")
 }else{
  line[2].classList.remove("activeLine")
  topic[2].classList.remove("text-white")
 }
},{threshold: .25})

observer.observe(projects)



 


