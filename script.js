var canta = []
var max = 20;
document.querySelector('#button').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Lütfen Todo Değeri Giriniz!!!")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button value="submit" class="delete">
                    <i class="iconv2" ></i>
                </button>
            </div>
            `
        var giris = document.querySelectorAll(".delete");
        for (var i = 0; i < giris.length; i++) {
            giris[i].onclick =
                function () {
                    this.parentNode.remove();
                    console.log(giris[i])
                }
        }
        if (canta.length < max) {
            canta.push(document.querySelector('#newtask input').value);
            console.log(canta)
        }
        //else if(giris[i].onclick){
        //  canta.splice(document.querySelector('.delete').value);
        //console.log(giris[i])
        //}
       giris[i].onclick =
            function () {
                console.log("asds");
        }
    }
}