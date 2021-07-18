

function showDesc (id){
    let desc = document.getElementById(id)
    desc.style.display = 'flex'
}
function hideDesc (id){
    let desc = document.getElementById(id)
    desc.style.display = 'none'
}
function openTab (url){
    window.open(url);
}

function scrollPage (id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });;
}