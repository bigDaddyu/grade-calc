function studentScore(grade) {
    if(grade >= 81 && grade <=100){
        console.log('Excellent')
    } else if(grade >= 71 && grade <=80){
        console.log('Very good')
    } else if(grade >= 61 && grade <=70){
        console.log('Good')
    } else if(grade >= 50 && grade <=60){
        console.log('Fair')
    } else {
        console.log('Poor')
    }
}

let value = studentScore(78);
console.log(value);