const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var input_data = input.split(','); // ['5', '2 4 7 12 9']
    var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
    var arr = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
    let max = 0;
    let sum = 0;
    let min = arr[0];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            
        }
    }
    
    // console.log(max);
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==max){
             arr.splice(i,1);
        }
    }
    
    console.log(arr);
    for(let i =0; i<arr.length;i++){
        
        if(arr[i]<min){
            min = arr[i];
        }
    }   
    // console.log(min);
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==min){
            arr.splice(i,i);
        }
    }
    console.log(arr);
    for(let i = 0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    console.log(sum);
  
});
