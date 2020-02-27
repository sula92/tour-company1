

 

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function currentDiv(n) {
        showDivs(slideIndex = n);
		
    }

    function showDivs(n) {
        var i;
		
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-red", "");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " w3-red";
    }
	
	
	
	 //11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
	 
	 
    showDivs1(slideIndex);

    function plusDivs1(n) {
        showDivs1(slideIndex += n);
    }

    function currentDiv1(n) {
        showDivs1(slideIndex = n);
		
    }

    function showDivs1(n) {
        var i;
		
        var x = document.getElementsByClassName("mySlides1");
        var dots = document.getElementsByClassName("demo1");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-red", "");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " w3-red";
    }
	
	//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
	
	showDivs2(slideIndex);

    function plusDivs2(n) {
        showDivs2(slideIndex += n);
    }

    function currentDiv2(n) {
        showDivs2(slideIndex = n);
		
    }

    function showDivs2(n) {
        var i;
		
        var x = document.getElementsByClassName("mySlides2");
        var dots = document.getElementsByClassName("demo2");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-red", "");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " w3-red";
    }
	
	//333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
	
	showDivs3(slideIndex);

    function plusDivs3(n) {
        showDivs3(slideIndex += n);
    }

    function currentDiv3(n) {
        showDivs3(slideIndex = n);
		
    }

    function showDivs3(n) {
        var i;
		
        var x = document.getElementsByClassName("mySlides3");
        var dots = document.getElementsByClassName("demo3");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-red", "");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " w3-red";
    }
	
	//44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
	
	showDivs4(slideIndex);

    function plusDivs4(n) {
        showDivs4(slideIndex += n);
    }

    function currentDiv4(n) {
        showDivs4(slideIndex = n);
		
    }

    function showDivs4(n) {
        var i;
		
        var x = document.getElementsByClassName("mySlides4");
        var dots = document.getElementsByClassName("demo4");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-red", "");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " w3-red";
    }
	
	showDivs5(slideIndex);

    function plusDivs5(n) {
        showDivs5(slideIndex += n);
    }

    function currentDiv5(n) {
        showDivs5(slideIndex = n);
		
    }

    function showDivs5(n) {
        var i;
		
        var x = document.getElementsByClassName("mySlides5");
        var dots = document.getElementsByClassName("demo5");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-red", "");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " w3-red";
    }