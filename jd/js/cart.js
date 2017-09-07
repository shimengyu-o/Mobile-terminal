window.onload = function(){
    /**
     * 获取到垃圾桶
     */
    var del = document.querySelectorAll('.del');
    var mask = document.querySelector('.mask1');
    var main = document.querySelector('.mask1 .main');
    for (var i = 0; i < del.length; i++) {
        del[i].toggle = true;
        del[i].onclick = function(){
            // alert(1)
            if(this.toggle){
                this.children[0].children[0].style.transform = 'rotate(-30deg)';
                this.toggle = false;
                mask.style.display = 'block';
                main.style.animation = 'move .4s ease both';
            }else{
                this.children[0].children[0].style.transform = 'rotate(0deg)';
                this.toggle = true;
                 mask.style.display = 'block';
                 main.style.animation = 'move .4s ease both';
            }
           
        }
    }
}