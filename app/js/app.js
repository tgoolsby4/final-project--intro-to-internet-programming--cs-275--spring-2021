window.onload = () => {
    let size = window.prompt(`Enter a number for the length of your diamond!`);
    size = parseInt(size, 10);
    let diamond = document.querySelector(`#diamond-container`);

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
            diamond.innerHTML = `even`;
        }
    };

    if(!isNaN(size) && size > 0){
        createDiamond(size);
    }
    else {
        alert(`Please enter an integer value`);
        window.location.reload();
    }
};
