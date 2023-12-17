let btnReservation=document.getElementById("btnReservation")
let makeForm=document.getElementById("makeForm")
let btncerrarModal=document.getElementById("btncerrarModal")

function mostrarModal() {
    makeForm.style.display='flex'
}
function cerrarModal() {
    makeForm.style.display='none'
}


btnReservation.addEventListener('click', ()=>{
    mostrarModal()
})

btncerrarModal.addEventListener('click', ()=>{
    cerrarModal()
})
