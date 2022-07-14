console.log('A!!!!!')

window.addEventListener('DOMContentLoaded', () => {
  VANTA.NET({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    spacing: 18.00,
    color: 0x5f1cbb,
    maxDistance: 17.00,
    backgroundAlpha: 0.0
  })


  setTimeout(() => {
    const main = document.querySelector('main')
    main.style.opacity = 1
    main.style.filter = 'blur(0px)'
  }, 1000)
})