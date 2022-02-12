let images = ["magic/magic/magic8ball_1.png","magic/magic/magic8ball_2.png",
              "magic/magic/magic8ball_3.png","magic/magic/magic8ball_4.png",
              "magic/magic/magic8ball_5.png","magic/magic/magic8ball_6.png",
              "magic/magic/magic8ball_7.png","magic/magic/magic8ball_8.png",
              "magic/magic/magic8ball_9.png","magic/magic/magic8ball_10.png",
              "magic/magic/magic8ball_11.png","magic/magic/magic8ball_12.png",
              "magic/magic/magic8ball_13.png","magic/magic/magic8ball_14.png",
              "magic/magic/magic8ball_15.png","magic/magic/magic8ball_16.png",
              "magic/magic/magic8ball_17.png","magic/magic/magic8ball_18.png",
              "magic/magic/magic8ball_19.png","magic/magic/magic8ball_20.png",
              "magic/magic/magic8ball_extra.png","magic/magic/magic8ball_start.png"];


    function ask(){
        let rand = Math.floor(Math.random()*images.length);
        let img = document.createElement("img");
        img.style.width='100px';
        img.style.height='100px';
        img.src=images[rand];
        let src = document.getElementById('answers');
        src.appendChild(img);
    }
    let askButton = document.getElementById('ask');
    askButton.addEventListener('click',ask);