const a = [1, 2, 3, 4]

function evennum() {
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            console.log(a[i]);
        }
    }
}

evennum();

