let store = [];
function order(x,y,initPos,instruction){
    let direction;
    store = instruction.split('');
    store.forEach(element => {
        if(initPos == 'N'){
        switch(element){
            case 'L':
            direction = 'W';
            case 'R':
            direction = 'E'
            case 'M':
            y++;
        }
        initPos = direction || initPos;
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
        }   
    });    
     //return `${x} ${y} ${direction}`;
     return x + ' ' + y + ' '+ direction;
}
console.log(order(1,2,'N','LMLMLMLMM'));
console.log(order(3,3,'E','MMRMMRMRRM'));  