window.onload = () => {
    let size = window.prompt(`Enter a number for the length of your diamond!`);
    size = parseInt(size, 10);
    let diamond = document.querySelector(`#diamond-container`);
    let body = document.querySelector(`body`);
    let left = 0;
    let right = 0;
    diamond.style.left = left;
    diamond.style.top = 0+`px`;

    let createDiamond = (l) => {
        if(l%2 !== 0){
            for(let i=1; i<2*l; i+=2){
                if(i<Math.ceil((2*l/2)+1)){
                    for(let j=0; j<i; j++){
                        diamond.innerHTML += `*`;
                    }
                }
                if(i>=Math.ceil((2*l/2)+2)){
                    for(let j=2*l; j>i; j--){
                        diamond.innerHTML += `*`;
                    }
                }
                diamond.innerHTML += `\n`;
            }
            diamond.style.width = (10*size)+`px`;
        }
        else {
            for(let i=0; i<(2*l)+1; i+=2){
                if(i===0 || i===2*l){
                    diamond.innerHTML += `* `;
                }
                if(i<l){
                    for(let j=0; j<i; j++){
                        diamond.innerHTML += `* `;
                    }
                }
                if(i>=l){
                    for(let j=2*l; j>i; j--){
                        diamond.innerHTML += `* `;
                    }
                }
                diamond.innerHTML += `\n`;
            }
            diamond.style.width = (20*size)+`px`;
            diamond.style.lineHeight = `100%`;
        }
    };

    let move = () => {
        if(left < (body.clientWidth - diamond.clientWidth + 6) && right === 0){
            diamond.style.left = left+`px`;
            left += 1;
            if(left === (body.clientWidth - diamond.clientWidth + 6)){
                right = 1;
            }
        }
        if(left > 0 && right === 1){
            diamond.style.left = left+`px`;
            left -= 1;
            if(left === 0){
                right = 0;
            }
        }
    };

    if(!isNaN(size) && size > 0){
        createDiamond(size);
        setInterval(move,1);
    }
    else {
        //alert(`Please enter an integer value`);
        window.location.reload();
    }
};
