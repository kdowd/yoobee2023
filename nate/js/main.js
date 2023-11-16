var more_btn = document.querySelector(".show-btn");
            var less_btn = document.querySelector(".hide-btn");
            var message = document.querySelector(".menu_drop");
    
    
            more_btn.addEventListener("click", onShowMore);
            less_btn.addEventListener("click", onShowLess);
    
    
            function onShowMore() {
                message.classList.toggle("show");
                more_btn.classList.toggle("hide");
                less_btn.classList.toggle("show");
            }
    
            function onShowLess() {
                message.classList.toggle("show");
                more_btn.classList.toggle("hide");
                less_btn.classList.toggle("show");
            }