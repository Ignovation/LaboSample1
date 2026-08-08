// =====================
// Header fixed
// =====================

const header = document.querySelector("header");
const hero = document.querySelector(".hero");

if(header && hero){

    window.addEventListener("scroll",()=>{

        if(window.scrollY >= hero.offsetHeight){

            header.classList.add("fixed");

        }else{

            header.classList.remove("fixed");

        }

    });

}

document.addEventListener("DOMContentLoaded", () => {

    const heroLines = document.querySelectorAll(".hero-line");

    heroLines.forEach((line, index) => {

        setTimeout(() => {
            line.classList.add("show");
        }, index * 300);

    });

});

// =====================
// Fade Observer
// =====================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});




// =====================
// Hero 文字 1行ずつ表示
// =====================

const heroLines = document.querySelectorAll(".hero-line");


heroLines.forEach((line,index)=>{

    line.classList.add("fade-up");

    line.style.transitionDelay = `${index * 1.0}s`;

    observer.observe(line);

});




// =====================
// 共通 Fade Up
// =====================

const fadeItems = document.querySelectorAll(

    ".hero-text,"+
    ".home,"+
    ".top-research-item," +
    ".top-news-item," +
    ".other-research,"+
    ".news-item," +
    ".achievement-year," +
    ".senior-voice-card," +
    ".career-item," +
    ".professor-card," +
    ".student-list," +
    ".job-career," +
    ".school-career," +
    ".senior-voice"

);



fadeItems.forEach(item=>{

    item.classList.add("fade-up");

    observer.observe(item);

});




// =====================
// Research 左右 Fade
// =====================

const researchItems = document.querySelectorAll(".research-item");


researchItems.forEach((item,index)=>{


    if(index % 2 === 0){

        item.classList.add("fade-left");

    }else{

        item.classList.add("fade-right");

    }


    observer.observe(item);


});




// =====================
// Member 課程ごと表示
// =====================

const memberSections = document.querySelectorAll(
    ".professor-card, .member > h1, .student-list"
);


memberSections.forEach(item=>{

    item.classList.add("fade-up");

    observer.observe(item);

});




// =====================
// Delay設定
// =====================


// トップ研究カード
document.querySelectorAll(".top-research-item")
.forEach((item,index)=>{

    item.style.transitionDelay = `${index * 0.2}s`;

});



// Top News
document.querySelectorAll(".top-news-item")
.forEach((item,index)=>{

    item.style.transitionDelay = `${index * 0.15}s`;

});



// News記事
document.querySelectorAll(".news-item")
.forEach((item,index)=>{

    item.style.transitionDelay = `${index * 0.2}s`;

});



// Achievement 年ごと
document.querySelectorAll(".achievement-year")
.forEach((item,index)=>{

    item.style.transitionDelay = `${index * 0.2}s`;

});



// Seniorカード
document.querySelectorAll(".senior-voice-card")
.forEach((item,index)=>{

    item.style.transitionDelay = `${index * 0.2}s`;

});



// Research左右
document.querySelectorAll(".research-item")
.forEach((item,index)=>{

    item.style.transitionDelay = `${index * 0.2}s`;

});