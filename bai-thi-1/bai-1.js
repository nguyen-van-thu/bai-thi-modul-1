
let a = [];
let b = document.getElementById('number');
count = 0;
let RE = 0;
let mat = 0;
let th = 0;
function add() {
    if(!isNaN(b.value) && b.value !=='') {
        a.push(+number.value);
        number.value = "";
        count++;
    }
    console.log(a.length);
    document.getElementById('num').innerHTML = `[${a}]`;
}
function find() {
    for(i=0; i<a.length-1; i++) {
        if(a[i] > RE) {
            mat = RE;
            th = mat;
            RE = a[i];
        }
        if(a[i] < RE && a[i] < mat && a[i] > th) {
            th = a[i];
        }
        console.log(th);
        document.getElementById('numbe').innerHTML = 'Số lớn thứ 3 trong dãy số là :' + th;
    }

}