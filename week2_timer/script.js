var count = 0;
var textarea = document.getElementById('searcharea')
var textshow = document.querySelector('.font');
var daojishi
var start_flag = false;
function input_settime() {
    if (textarea.value == "") {
        alert("时间设置为空")
        // prompt("")
        // confirm("")
    }
    if (isNaN(textarea.value)) {
        alert("输入非法")
    } else {
        textshow.textContent = textarea.value
        count = textarea.value
        if (textarea.value < 10) {
            textshow.style.left = "24px"
        }
        if (textarea.value >= 10) {
            textshow.style.left = "12px"
        }
        if (textarea.value >= 100) {
            textshow.style.left = "-1px"
        }
        if (textarea.value >= 999) {
            textshow.textContent="999"
            count=999
        }
        textarea.value=""
    }
}
function start_time() {
    if (!start_flag) {
        start_flag=true
        daojishi = setInterval(() => {
            if (count == 0) {
                alert("操作非法")
                start_flag=false
                clearInterval(daojishi)
            } else {
                count--
                setTimeout(() => {
                    textshow.textContent = count
                    document.querySelector('.time').classList.add("guodu")
                    if (count.toString().length < 2) {
                        textshow.style.left = "24px"
                    }
                    if (count.toString().length >= 2) {
                        textshow.style.left = "12px"
                    }
                    if (count.toString().length >= 3) {
                        textshow.style.left = "-1px"
                    }
                }, 100)
                if (count == 0) {
                    start_flag=false
                    clearInterval(daojishi)
                }
                setTimeout(() => {
                    document.querySelector('.time').classList.remove("guodu")
                }, 200)
            }
        }, 1000)
    }
}

function stop_time() {
    start_flag=false
    clearInterval(daojishi)
}

function reset_time() {
    textshow.textContent = 0
    count = 0
    textarea.value=""
    start_flag=false
    textshow.style.left = "24px"
    clearInterval(daojishi)
}