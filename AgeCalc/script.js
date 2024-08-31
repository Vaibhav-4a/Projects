const input = document.getElementById("date");
input.max = new Date().toISOString().split("T")[0];
const answer = document.getElementById("answer");

function getMonthDays(year ,month){
    return new Date(year , month ,0).getDate();
}

function calculateAge(){
    let birth = new Date(input.value);
    let date = new Date();

    let d1 = birth.getDate();
    let m1 = birth.getMonth()+1;
    let y1 = birth.getFullYear();

    let d2 = date.getDate();
    let m2 = date.getMonth()+1;
    let y2 = date.getFullYear();

    let d3,m3,y3;

    y3 = y2-y1;

    if(m2>=m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2>=d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = getMonthDays(y2,m2) +(d2-d1);
    }
    answer.innerText = `You are ${y3} years ${m3} months and ${d3} days old`;

}

