document.addEventListener('DOMContentLoaded', (event) => {
    const h2 = document.getElementsByTagName("h2");
    const h3 = document.getElementsByTagName("h3");
    const li = document.getElementsByTagName("li");
    const p = document.getElementsByTagName("p");
    let choice = Math.floor(Math.random() * 2);
    let times = 3000;
    let answer = "";
    let count = 5;
    let correct = 0;
    let incorrect = 0;


    h3[0].innerHTML = "";

    // 回答
    for (let k = 0; k < li.length; k++) {
        li[k].addEventListener("click", function (e) {
            h3[0].innerHTML += this.innerHTML;
            if (answer.length == h3[0].innerHTML.length) {
                if (Number(answer) == zenToHan(h3[0].innerHTML)) {
                    correct++;
                    p[0].innerHTML = "正解" + correct;
                }
                else {
                    incorrect++;
                    p[0].innerHTML = "不正解" + incorrect;
                }
                p[0].style.color = "#000000";
                console.log("answer：" + Number(answer));
                console.log("h3：" + h3[0].innerHTML);
                h2[0].innerHTML = answer;
            }
        });
    }

    const intervalId = setInterval(() => {
        let display_number = "";
        let number = "";
        times = Math.floor(count / 2);
        h3[0].innerHTML = "";
        // h2[1].innerHTML = "";

        for (let i = 0; i < times; i++) {
            if (i) {
                // ０～９
                number = Math.floor(Math.random() * 10);
            } else {
                // １～９
                number = Math.floor(Math.random() * 9) + 1;
            }
            display_number += number;
            // console.table(number);
        }
        console.log(times);

        // 桁数をプラス
        count++;

        if (Math.floor(count % 2)) {
            display_number = "　";
            for (let j = 0; j < li.length; j++) {
                li[j].style.pointerEvents = "auto";
            }
        } else {
            answer = display_number;
            for (let j = 0; j < li.length; j++) {
                li[j].style.pointerEvents = "none";
            }
            p[0].innerHTML = "";
            p[0].style.color = "#FFFFFF";
        }
        h2[0].innerHTML = display_number;

        // １０回でとめる
        if (times > 9) {
            count = 5;
            // clearInterval(intervalId);
        }
    }, 5000);

    // 全角半角変換
    function zenToHan(str) {
        return str.replace(/[０-９]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    }

    // for (let i = 0; i < 10; i++) {
    //     window.setTimeout(function () {
    //         let img_black = document.getElementsByTagName("img");

    //         for (let i = 0; i < img_black.length; i++) {
    //             img_black[i].style.display = "none";
    //             li[i].classList.add("border");
    //             li[i].style.pointerEvents = "auto";
    //             li[i].style.cursor = "pointer";
    //             img_black[i].style.cursor = "pointer";
    //         }
    //         console.log("5000");
    //     }, 1000);
    // }


    // window.setTimeout(function () {
    //     let img_black = document.getElementsByTagName("img");

    //     for (let i = 0; i < img_black.length; i++) {
    //         let answer = img_black[i].src.split("/")[split.length - 1].split("_")[this.length + 1].split(".")[0].split("0")[1];
    //         if (choice) {
    //             if (answer == 5) {
    //                 li[i].classList.add("answer");
    //             }
    //             else {
    //                 li[i].classList.add("events_none");
    //             }
    //         } else {
    //             if (answer == 3 || answer == 6) {
    //                 li[i].classList.add("answer");
    //             }
    //             else {
    //                 li[i].classList.add("events_none");
    //             }
    //         }

    //         if (li[i].className.match("choice answer")) {
    //             li[i].classList.remove("choice");
    //             li[i].classList.remove("answer");
    //             li[i].classList.add("correct_answer");
    //         }
    //         li[i].style.pointerEvents = "none";
    //         li[i].classList.remove("border");
    //         img_black[i].style.display = "block";
    //     }
    //     document.getElementsByTagName("p")[0].style.color = "#000000";
    //     document.getElementsByTagName("p")[0].style.fontWeight = "900";
    //     document.getElementsByTagName("p")[0].innerHTML = "正解数：" + document.getElementsByClassName("correct_answer").length;
    //     console.log("10000");
    // }, 10000);
});