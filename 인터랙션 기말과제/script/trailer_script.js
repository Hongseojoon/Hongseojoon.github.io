console.log("load");


var $gallery = document.querySelector('#gallery')
var $view = $gallery.querySelector(".view");
var $viewContainer = $view.querySelector(".view-container");
var $viewItem = $viewContainer.querySelectorAll(".view-item");

var $list = $gallery.querySelector(".list");
var $listItem = $list.querySelectorAll("li");
var _$a = [];

var $paddleNav = $gallery.querySelector(".paddle-nav");
var $btnPaddleEl = $paddleNav.querySelectorAll("button");
var $btnPaddleNavPrev = $paddleNav.querySelector(".prev");
var $btnPaddleNavNext = $paddleNav.querySelector("next");

var _vWidth = window.innerWidth;
var vHeight = window.innerHeight;


var _vWidth = 800;
var _max = $viewItem.length;
var _cuId = 0;
var _exId = _cuId;

window.addEventListener('resize',onResize);
function onResize()
{
    _vWidth = window.innerWidth;
    _vHeight = window.innerHeight;
    $viewContainer.style.width = (_vWidth *_max)+'px';
    for(var i = 0; i< _max; i++)
    {
        $viewItem[i].style.width = _vWidth +'px';
    }

    var left = _vWidth * _cuId*-1;

    TweenMax.killTweensOf($viewContainer);
    TweenMax.set($viewContainer,{css: {left: left}});
}
onResize();

for(var i= 0; i< $btnPaddleEl.length; i++){
    $btnPaddleEl[i].addEventListener("click", onClickPaddleEl);
}

function onClickPaddleEl(e) {
    e.preventDefault();
    var $li = e.currentTarget.parentElement;
   
    if($li.classList.contains('prev')){_cuId--;
        if(_cuId < 0) _cuId = 0;
    }
    else if($li.classList.contains('next'))
    {_cuId++;}
    
}


//$viewContainer.style.Width = (_vWidth * _max) + 'px'; 지웠더니 슬라이드가 매끄럽게 넘어가고있다.
    //ViewContainer
    //view-item

for(var i = 0; i < _max; i++){

    //$viewItem[i].style.width = _vWidth + 'px';

    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", onClickListItemEl);
    console.log($a);
}


function onClickListItemEl(e)
{
e.preventDefault();
console.log('click');
var id = _$a.indexOf(e.currentTarget); 
console.log('click', id);
var $listItemParent = e.currentTarget.parentElement;
//console.log(_$a.indexOf(e.currentTarget)); 
    //if(_cuId !== id)
    //{
            //console.log(">>>");
            //$listItem[_cuId].classList.remove("selected");//selected를 삭제하기
            //_cuId = id;
    //}

    


    if(!$listItemParent.classList.contains('selected'))
    {
        //부모요소(li)rk selected 라는 클래스를 포함하고있는지 체크 조건에서는 포함하지 않을 때(false).
        
            //$listItem[exId]
            _cuId = id;//여기서 틀리니까 이미지가 바뀌지 않았다

            $listItem[_exId].classList.remove("selected");
            //이전에 활성화된 버튼의 클래스 selected를 삭제
            $listItem[_cuId].classList.add("selected");
            //현재버튼의 클래스 selected가 활성화 되도록 추가
                var left = _vWidth *_cuId * -1;
                
                
                
                //$viewContainer.style.left = left + 'px';
                //전체

                //anime
                //anime({
                    //target : $viewContainer,
                    //left : left,
                    //TweenMax.set($viewContainer, {css: {left : left }});
                    TweenMax.to($viewContainer, 1.0, {css: {left: left},ease: Quad.easeInOut});
                    //duration : 1000,
                    // : "easeInOutQuad"

                //});

            _exId = _cuId;
            //다음 클릭시 눌렀던 번호를 유지하도록 값을 설정
        
    }
    
}
$btnPaddleNavPrev.classList.add('disabled');
function slide(){

if(_cuId === 0){
    $btnPaddlPrev.classList.add('disabled');
    $btnPaddlNext.classList.remove('disabled');

}else if(_cuId === _max - 1){
    $btnPaddlPrev.classList.remove('disabled');
    $btnPaddlNext.classList.add('disabled');

}else{$btnPaddlPrev.classList.remove('disabled');
$btnPaddlNext.classList.remove('disabled');
}
}

$listItem[_exId].classList.remove("selected");

$listItem[_cuId].classList.add("selected");

var left = _vWidth * _cuId * -1;

//gallery

//View

//viewcontainer



// list

//li

//a

