const img = document.querySelectorAll(".lax");

document.addEventListener("mousemove", parallax);
function parallax(e){
    img.forEach(i => {
        const speed = i.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed);
        const y = (window.innerHeight - e.pageY*speed);
        const a = (window.innerWidth + e.pageA*speed);
        const b = (window.innerHeight + e.pageB*speed);

        i.style.transform = `translateX(${x/200}px) translateY(${y/200}px)`;
        i.style.transform = `translateA(${a/200}px) translateB(${b/200}px)`;
    })
}