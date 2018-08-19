

function order(x,y,initPos,instruction){
    let direction;
    let result = [];
    store = instruction.split('');
    store.forEach(element => {
        //console.log(element,initPos);
        if(initPos == 'N'){
        switch(element){
            case 'L':
            direction = 'W';
            case 'R':
            direction = 'E'
            case 'M':
            y++
        }
        initPos = direction || initPos;
        //console.log(initPos);
    }
        else if(initPos == 'S'){
            switch(element){
                case 'L':
                direction = 'E';
                case 'R':
                direction = 'W'
                case 'M':
                y--;
            }
            initPos = direction || initPos;
            //console.log(initPos);
        }
        else if(initPos == 'W'){
            switch(element){
                case 'L':
                direction = 'S';
                case 'R':
                direction = 'N'
                case 'M':
                x -= 1; 
            }
            initPos = direction || initPos;
           // console.log(initPos);
        }
        else if(initPos == 'E'){
            switch(element){
                case 'L':
                direction = 'N';
                case 'R':
                direction = 'S'
                case 'M':
                x += 1;
            }
            initPos = direction || initPos;
            //console.log(initPos);
        }   
    });
     
     return `${x} ${y} ${direction}`;
}

console.log(order(1,2,'N','LMLMLMLMM'));
console.log(order(3,3,'E','MMRMMRMRRM'))

//console.log(storeDir);  