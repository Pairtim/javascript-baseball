// PC세 자릿 수 뽑기
console.log("hello");
const numberlength = 3;

function getPCNumber(){
    let arr_number = [1,2,3,4,5,6,7,8,9];
    let arr_PCnumber = [3];
     for(let idx = 0; idx < numberlength; idx++){
         let randomindex = Math.floor(Math.random()* arr_number.length);/*랜덤으로 뽑는다 0에서 배열 넘버의 사이즈 -1 만큼*/;
         arr_PCnumber[idx] = arr_number[randomindex];
         arr_number.splice(randomindex,1);
    }
    console.log(arr_PCnumber);
    return arr_PCnumber;
}

// 유저입력 배열 변환,유저입력 받은 곳 중복 확인 사이즈가 세 자릿 수 인지 확인
function checkUserNumber(Usernum){
    if (Usernum.size != numberlength){ 
        return null;
    }
    let arr_temp = new Set(Usernum);
    if (Usernum.size != numberlength){
        return null;
    }
    console.log(arr_temp);
    return arr_temp;
}

// 결과 {결과 실패 -> 힌트, 결과 성공 -> 처음으로 돌아감}
function compareNumber(pcNum,userNum){
    let strike = 0;
    let ball = 0;

    for(let idx = 0; idx < userNum.length; idx++){
        // 카운트 2 
        // 같은 값이 있는지 체크 , 인덱스 체크
        // 같은값 카운트 - 인덱스 카운트
        console.log(userNum[idx]);
        let result_idx = pcNum.indexOf(userNum[idx]);        
        
        if (result_idx == -1){
            continue;
        }
        if (result_idx == idx){
            strike +=1;
        }
        else if (result_idx != idx){
            ball += 1;
        }
    }
    
    if (ball == 0 && strike == 0){
        console.log('Nothing');
    }
    else{
        console.log('strike =' + strike +'ball =' + ball);
    }
}
