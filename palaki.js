﻿var palakiWords = ['پلکی' , 'وادولا' , 'لوف' ,'فیدونا','تذخکج','جدسفا','زصطاذض','خضاجن','ضضهمجع','ضپپرنذط','ضرجوز','عتخپجع','عضگثهث','پنعذز','ووثصب','طپپخبط','رمذکه','تطکثبم','جبافقن','صبتصس','گقپرصصذ','خپررنر','خخطزفعض','پپجصچ','زنکقم','مدبذپ','طثوذذه','ثدچدض','هتهخپصا','توطتخ','جپپمچزس','کبذزهپ','طذقچطصف','چقاند','ضبعکص','امگفقث','پثپوزفض','هفدقک','سذپذختا','وعخعفاط','صقدفذ','ضضپپضزت','اصزسسک','تگعبقمک','پچخثه','ضدتبقاص','گصزضدس','تنقنرسب','فسععذپ','ابعزا','هتذعپگ','گررصر','زقچوثب','زجنچرت','خضاجم','ضثپاثصص','زمبوقپ','دددمخ','چرچپذخط','واکبع','بصابذص','فثفضپگگ','نمربثف','طصپمچض','ضانباک','تپکمنجب','پصزجاچد','ااانچ','سقتچق','پضرخسر','گتبزنام','نراخوخ','جاذتا','انصخوب','همومثطذ','ندززجتض','پثچضع','مذکفبگ','عگپاو','جدعذعپع','دببذسذ','ضبزثم','کنتچسزث','قپصپبع','تضذذذنس','پذبنست','پجذجمدط','بکاثت','مندتطا','ثصکپتز','قچکقاه','دچبچررب','ننسسقاه','خفگاس','چبکاط','بتتزگ','گمنراط','عمربف','چثابج','افابچگع','صکطچچ','درقپص','هردزضت','وثطضوگ','ضمااث','خاثضثت','نوقافط','فرکطقوع','خکثفعقث','قچوضپعه','کپصباجع','ضجتثبگ','عضوخف','خثگصکت','اچااع','سعچصخسب','ونفازبط','چاثدذکد','زاتمجف','هفثگزب','جذهتکجم','مماباگج','ذضاتگ','پسرچچب','نچرخبجد','قپدرتطپ','دکبصثصس','زکچببف','ضبذجخچن','ارپوذگ','بسبودرض','اصزاپط','عصجقپذا','ضپکتسخ','نپچهم','بوعچوکا','جذبطاقو','چناتخخک','قرعنگ','کفخجب','هاطقدج','ثمذچکق','پپخکپقض','خزسخخ','رضنضض'];




var createPalaki = function(e, i) {
        for (var s = [], a = 0; i > a; a++) {
            var u = pickRandom(e);
            s.push(u)
            if ( i > a+1)
            s.push(' ');
        }
        s.push('.');
    
    
    
        return s.join('');
    },
    pickRandom = function(e) {
        var i = Math.floor(e.length * Math.random());
        return e[i]
    };

function testResults (form) {
    var TestVar = form.inputbox.value;
    document.getElementById("result").value = createPalaki(palakiWords , TestVar);
}

