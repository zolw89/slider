const slider = () => {

    const leftArrow = document.querySelector('.left')
    const rightArrow = document.querySelector('.right')
    const imgs = document.querySelectorAll('img')
    const dotsDiv = document.querySelector('.dots')

    
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].id = `img${i}`
        const dot = document.createElement('div')
        dot.classList.add('dot')
        dotsDiv.appendChild(dot)
        if(imgs[i].className === 'img active-img') {  
            dot.classList.add('active-dot')
        }
    }


    leftArrow.addEventListener('click', () => {
        let dots = document.querySelectorAll('.dot')

        for(let i = 0; i < imgs.length; i++) {
                if(imgs[i].className.includes('active-img')) {
                    if(i !== 0) {
                        imgs[i].classList.remove('active-img')
                        dots[i].classList.remove('active-dot')
                        imgs[i - 1].classList.add('active-img')
                        dots[i - 1].classList.add('active-dot')
                    } else {
                        imgs[imgs.length - 1].classList.add('active-img')
                        imgs[i].classList.remove('active-img')
                        dots[imgs.length - 1].classList.add('active-dot')
                        dots[i].classList.remove('active-dot')
                        break
                    }      
                }
        }
    })

    const animateRight = () => {
        let dots = document.querySelectorAll('.dot')
        console.log(dots)
        for(let i = imgs.length -1; i >= 0; i--) {
                if(imgs[i].className.includes('active-img')) {
                    if(i === imgs.length - 1) {
                        imgs[0].classList.add('active-img')
                        imgs[i].classList.remove('active-img')
                        dots[0].classList.add('active-dot')
                        dots[i].classList.remove('active-dot')
                        break
                    } else {
                        imgs[i].classList.remove('active-img')
                        dots[i].classList.remove('active-dot')
                        imgs[i + 1].classList.add('active-img')
                        dots[i + 1].classList.add('active-dot')
                    }      
                }
        }
    }

    rightArrow.addEventListener('click', animateRight)   


    dotsDiv.addEventListener('click', (e) => {
        let dots = document.querySelectorAll('.dot')
        if(e.target.className === 'dot') {
            dots.forEach(dot => dot.classList.remove('active-dot'))
            imgs.forEach(img => img.classList.remove('active-img'))
            e.target.classList.add('active-dot')
            for(let i = 0; i < dots.length; i++) {
                if(dots[i].className.includes('active-dot')) {
                    imgs[i].classList.add('active-img')
                }
            }
        }
    })

    const animate = () => {
        setInterval(animateRight, 5000);
    }

    animate()
}


slider()
