$(document).ready(function(){
    let qnow = 1;
    let ans = [3,0,2,0,1,3,1,1,0,0];
    let score = 0;
    const question = [
        '<h3 class="col-12">Q1：聞名世界的臺灣珍珠奶茶，你知道珍珠奶茶的創始人是誰嗎？</h3><input type="radio" name="q1" id="q1-1" value="0"><label class="my-3 p-3 col-12" for="q1-1">春水堂</label><input type="radio" name="q1" id="q1-2" value="1"><label class="my-3 p-3 col-12" for="q1-2">翰林茶館</label><input type="radio" name="q1" id="q1-3" value="2"><label class="my-3 p-3 col-12" for="q1-3">清心福全</label><input type="radio" name="q1" id="q1-4" value="3"><label class="my-3 p-3 col-12" for="q1-4">沒有標準答案</label>',
        '<h3 class="col-12">Q2：臺灣在端午節吃的粽子也有分成北部粽和南部粽，下列哪一個敘述是正確的呢？</h3><input type="radio" name="q2" id="q2-1" value="0"><label class="my-3 p-3 col-12" for="q2-1">北部粽粒粒分明、粽型鬆散且口味較重</label><input type="radio" name="q2" id="q2-2" value="1"><label class="my-3 p-3 col-12" for="q2-2">南部粽多用桂竹殼包粽</label><input type="radio" name="q2" id="q2-3" value="2"><label class="my-3 p-3 col-12" for="q2-3">北部粽多用月桃葉、麻竹葉包粽</label>',
        '<h3 class="col-12">Q3：隨著經濟起飛、工商社會型態改變，現代臺灣人的外食風氣逐漸風起，哪一個是現代人的飲食觀念呢？</h3><input type="radio" name="q3" id="q3-1" value="0"><label class="my-3 p-3 col-12" for="q3-1">呷飽</label><input type="radio" name="q3" id="q3-2" value="1"><label class="my-3 p-3 col-12" for="q3-2">呷好、呷巧</label><input type="radio" name="q3" id="q3-3" value="2"><label class="my-3 p-3 col-12" for="q3-3">呷健康</label><input type="radio" name="q3" id="q3-4" value="3"><label class="my-3 p-3 col-12" for="q3-4">西方飲食居多</label>',
        '<h3 class="col-12">Q4：臺灣客家餐桌的口味偏好是哪一個呢？</h3><input type="radio" name="q4" id="q4-1" value="0"><label class="my-3 p-3 col-12" for="q4-1">油、鹹、香</label><input type="radio" name="q4" id="q4-2" value="1"><label class="my-3 p-3 col-12" for="q4-2">清淡養生</label><input type="radio" name="q4" id="q4-3" value="2"><label class="my-3 p-3 col-12" for="q4-3">香酥油炸</label><input type="radio" name="q4" id="q4-4" value="3"><label class="my-3 p-3 col-12" for="q4-4">黏稠綿密</label>',
        '<h3 class="col-12">Q5：臺灣早期在春節及清明會以潤餅祭祖，今日已經逐漸演變成庶民小吃。下列對於北部潤餅和南部潤餅的敘述，哪一個是正確的呢？</h3><input type="radio" name="q5" id="q5-1" value="0"><label class="my-3 p-3 col-12" for="q5-1">北潤餅口味中甜味較重</label><input type="radio" name="q5" id="q5-2" value="1"><label class="my-3 p-3 col-12" for="q5-2">南潤餅選用的肉類多以香腸、滷肉為主</label><input type="radio" name="q5" id="q5-3" value="2"><label class="my-3 p-3 col-12" for="q5-3">南潤餅口感較為濕潤</label>',
        '<h3 class="col-12">Q6：現今的臺灣街道上處處可以看到多元的異國美食，請問西餐在歷史中哪一個時期逐漸流行於民間呢？</h3><input type="radio" name="q6" id="q6-1" value="0"><label class="my-3 p-3 col-12" for="q6-1">荷據時期</label><input type="radio" name="q6" id="q6-2" value="1"><label class="my-3 p-3 col-12" for="q6-2">明鄭時期</label><input type="radio" name="q6" id="q6-3" value="2"><label class="my-3 p-3 col-12" for="q6-3">清領時期</label><input type="radio" name="q6" id="q6-4" value="3"><label class="my-3 p-3 col-12" for="q6-4">日治時期</label>',
        '<h3 class="col-12">Q7：碗粿在臺灣北部、南部的餡料有很大的差異，請問下列哪一個敘述是錯誤的呢？</h3><input type="radio" name="q7" id="q7-1" value="0"><label class="my-3 p-3 col-12" for="q7-1">南碗粿餡料多為豬肉、香菇、蝦米和蛋黃等</label><input type="radio" name="q7" id="q7-2" value="1"><label class="my-3 p-3 col-12" for="q7-2">北碗粿餡料多為紅糟肉、小黃瓜、高麗菜等</label><input type="radio" name="q7" id="q7-3" value="2"><label class="my-3 p-3 col-12" for="q7-3">北碗粿餡料多為香菇、肉塊、蝦米等</label>',
        '<h3 class="col-12">Q8：在臺灣各地都有屬於各地的特色早餐，請問哪一個是桃園人早上會吃的特色美食呢？</h3><input type="radio" name="q8" id="q8-1" value="0"><label class="my-3 p-3 col-12" for="q8-1">豬腳飯</label><input type="radio" name="q8" id="q8-2" value="1"><label class="my-3 p-3 col-12" for="q8-2">米干</label><input type="radio" name="q8" id="q8-3" value="2"><label class="my-3 p-3 col-12" for="q8-3">煎盤粿</label>',
        '<h3 class="col-12">Q9：「臺灣料理」的料理手法是什麼呢？</h3><input type="radio" name="q9" id="q9-1" value="0"><label class="my-3 p-3 col-12" for="q9-1">多以炒、炸、煎、蒸，並喜好以勾芡增加菜的口感</label><input type="radio" name="q9" id="q9-2" value="1"><label class="my-3 p-3 col-12" for="q9-2">擅長於燒、燉</label><input type="radio" name="q9" id="q9-3" value="2"><label class="my-3 p-3 col-12" for="q9-3">特別注重刀工、調味，尤以酸辣菜和臘製品著稱</label>',
        '<h3 class="col-12">Q10：在臺灣常常看到的著名美食「蚵仔煎」是在臺灣歷史中哪一個時期起源的呢？</h3><input type="radio" name="q10" id="q10-1" value="0"><label class="my-3 p-3 col-12" for="q10-1">明鄭時期</label><input type="radio" name="q10" id="q10-2" value="1"><label class="my-3 p-3 col-12" for="q10-2">清領時期</label><input type="radio" name="q10" id="q10-3" value="2"><label class="my-3 p-3 col-12" for="q10-3">日治時期</label>'
    ];
    const result = [
        '<h1 class="col-2 offset-1 text-score text-right"></h1><div class="col-8 img-result"><img src="../img/test/result-1.png" alt=""></div>',
        '<h1 class="col-2 offset-1 text-score text-right"></h1><div class="col-8 img-result"><img src="../img/test/result-2.png" alt=""></div>',
        '<h1 class="col-2 offset-1 text-score text-right"></h1><div class="col-8 img-result"><img src="../img/test/result-3.png" alt=""></div>',
        '<h1 class="col-2 offset-1 text-score text-right"></h1><div class="col-8 img-result"><img src="../img/test/result-4.png" alt=""></div>',
    ];

    $("#enter").click(function(){
        $(".enter-img").addClass("display-none");
        $("#main-container").toggleClass("display-none");
        $(".main-block").html(question[qnow-1]);
    });


    $("#next").html("下一題 "+qnow+"/"+ans.length).click(function(){
        let userAnswer = document.getElementsByName("q"+qnow);

        for(let i=0; i < userAnswer.length; i++){
            if(userAnswer[i].checked == true){
                if(i == ans[qnow-1]) score++;
                $(".main-block").html(question[qnow]);
                qnow++;
                if(qnow < ans.length){
                    $("#next").html("下一題 "+qnow+"/"+ans.length);
                }
                else if(qnow == ans.length){
                    $("#next").toggleClass("display-none");
                    $("#btn-show-result").html("看結果").toggleClass("display-none");
                }
            }
        }
    });


    $("#btn-show-result").click(function(){
        let userResult;

        let userAnswer = document.getElementsByName("q"+qnow);
        for(let i=0; i < userAnswer.length; i++){
            if(userAnswer[i].checked == true){
                if(i == ans[qnow-1]) score++;
            }
        }

        switch(score) {
            case 0:
            case 1:
            case 2:
                userResult = result[0];
                break;
            case 3:
            case 4:
            case 5:
                userResult = result[1];
                break;
            case 6:
            case 7:
            case 8:
                userResult = result[2];
                break;
            case 9:
            case 10:
                userResult = result[3];
                break;
        }

        $("#main-container").toggleClass("display-none");
        $(".result-container").toggleClass("display-none");
        $("#userResult").html(userResult);
        $(".text-score").html(score+"分");
    });

    $(".btn-retry").click(function(){
        qnow = 1;
        score = 0;
        $("#main-container").toggleClass("display-none");
        $(".result-container").toggleClass("display-none");
        $("#next").toggleClass("display-none");
        $("#btn-show-result").html("看結果").toggleClass("display-none");
        $(".answer-container").toggleClass("display-none");
        $(".btn-retry-down").toggleClass("display-none");
        $(".main-block").html(question[qnow-1]);
        $("#next").html("下一題 "+qnow+"/"+ans.length);
    })

    $("#btn-show-answer").click(function(){
        $(".answer-container").toggleClass("display-none");
        $(".btn-retry-down").toggleClass("display-none");
    })
});