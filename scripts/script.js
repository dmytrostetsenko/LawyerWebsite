(() =>{
    //AOS
    const animItems = document.querySelectorAll('._anim-item');

    if (animItems.length > 0){
        window.addEventListener('scroll', animOnScroll)
        function animOnScroll () {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 5;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active')
                }else{
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll()
    }, 300);

    // Burger-menu
    const buttonOpen = document.querySelector('.menu__burger');
    const menuBody = document.querySelector('.menu__body');
    const body = document.body;
    const contacts = document.querySelector('.toggle-contacts');
    const header = document.querySelector('header');

    buttonOpen.addEventListener('click', () => {
        menuBody.classList.toggle('_active')
        buttonOpen.classList.toggle('_active')
        body.classList.toggle('_lock')
        header.classList.toggle('_active')
    })
    contacts.addEventListener('click', () => {
        menuBody.classList.remove('_active')
        buttonOpen.classList.remove('_active')
        body.classList.remove('_lock')
    })

    //scroll on top

    const buttonToTop = document.querySelector('.scroll-up');

    buttonToTop.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })

    //sticky-menu
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 400);
        buttonToTop.classList.toggle('sticky', window.scrollY > 400)
    })

    // Accordion 
    const accordionHeaders = document.querySelectorAll('.service__toggle');

    accordionHeaders.forEach((item) => {
        item.addEventListener('click', () =>{
            const currentItem = document.querySelector('.service__toggle._active');
            const accordionBody = item.nextElementSibling;
            if(currentItem && currentItem !== item){
                currentItem.classList.toggle('_active');
                currentItem.nextElementSibling.style.maxHeight = 0;
            }
            item.classList.toggle('_active');
            if (item.classList.contains('_active')){
                accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
            }else{
                accordionBody.style.maxHeight = 0;
            }
        })
    })

    //footer current year
    document.querySelector('.footer__year').innerText = new Date().getFullYear();
})();
