'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "浅色";
        console.log('当前类名: 浅色主题');
    } else {
        this.textContent = "深色";
        console.log('当前类名: 深色主题');
    }

    
});