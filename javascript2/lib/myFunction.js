let _body = document.querySelector('body');
let mainTit =  document.querySelector('h1>a');
let _li =  document.querySelectorAll('li');
let navList =  document.querySelectorAll('li>a');
let _p = document.querySelector('p');

//다크함수
// function dark(){
//     _body.style.backgroundColor='#000';
//     mainTit.style.color='#f99';
//     for(let idx=0;idx<_li.length;idx++){
//         _li[idx].style.color='#aaf';
//     }
//     for(let idx=0;idx<navList.length;idx++){
//         navList[idx].style.color='#aaf';
//     }
//     _p.style.color='#fff';
// }

//라이트 함수
// function light(){
//     _body.style.backgroundColor='#fff';
//     mainTit.style.color='#8b0000';
//     for(let idx=0;idx<_li.length;idx++){
//         _li[idx].style.color='#000';
//     }
//     for(let idx=0;idx<navList.length;idx++){
//         navList[idx].style.color='#00008b';
//     }
//     _p.style.color='#000';
// }

// let setColor = {
//     dark:dark,
//     light:light,    
// }
let setColor = {
    dark:()=>{
        _body.style.backgroundColor='#000';
        mainTit.style.color='#f99';
        for(let idx=0;idx<_li.length;idx++){
            _li[idx].style.color='#aaf';
        }
        for(let idx=0;idx<navList.length;idx++){
            navList[idx].style.color='#aaf';
        }
        _p.style.color='#fff';
    },
    light:()=>{
        _body.style.backgroundColor='#fff';
        mainTit.style.color='#8b0000';
        for(let idx=0;idx<_li.length;idx++){
            _li[idx].style.color='#000';
        }
        for(let idx=0;idx<navList.length;idx++){
            navList[idx].style.color='#00008b';
        }
        _p.style.color='#000';
    },
}

export {setColor};



// export {dark,light};
