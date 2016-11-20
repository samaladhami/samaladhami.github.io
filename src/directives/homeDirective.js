angular.module('portfolio')
.directive('homeDirective' , function() {

  return{
    restract: 'E'
    ,templateUrl: 'templates/homeDirective.html'
    ,controller: 'homeCtrl'
    ,link: function() {

      let marginCounter = 0;
      let sideBarMarginCounter = 75;
      let myNameCounter = -1;
      let myPicWidthCounter = 25;
      let sideBarNavInterval;
      let myPicInterval;
      const myNameArr = [
          '<p>M|<p>', '<p>My|<p>', '<p>My |<p>', '<p>My n|<p>', '<p>My na|<p>','<p>My nam|<p>', '<p>My name|<p>',
          '<p>My name |<p>','<p>My name i|<p>', '<p>My name is|<p>','<p>My name is |<p>','<p>My name is S|<p>', '<p>My name is Sa|<p>',
          '<p>My name is Sam|<p>', '<p>My name is Same|<p>','<p>My name is Samer|<p>','<p>My name is Samer |<p>',
          '<p>My name is Samer A|<p>','<p>My name is Samer Al|<p>', '<p>My name is Samer Ala|<p>',
          '<p>My name is Samer Alad|<p>', '<p>My name is Samer Aladh|<p>',
          '<p>My name is Samer Aladha|<p>', '<p>My name is Samer Aladham|<p>',
          '<p>My name is Samer Aladhami|<p>', '<p>My name is Samer Aladhami <p>',
      ]

      $('.hello').hide()
      $('.myPic').hide()
      $('.who-I-am').css('color' , 'rgb(193, 192, 192)');
      $('.code-work-button').css('color' , '#464646');
      $('.what-I-know').css('color' , '#464646');
      $('.contact').css('color' , '#464646');




      $('.hello').fadeIn( 1000 );
      let hello = setInterval(() => {
        marginCounter -= 0.1
        $('.hello').css('margin-top' , marginCounter+'px')
      },1)

      $(document).ready(() => {setTimeout(() => {
        clearInterval( hello );
        $('.myPic').fadeIn( 1000 );

      },750)

      setTimeout(() => {
          let typeMyNmae = setInterval(()=>{
          if(myNameCounter < myNameArr.length){
            myNameCounter++
          }
            $('.myName').html(myNameArr[myNameCounter])
          },75)
      }, 1800)

      myPicInterval = setInterval(()=>{
        if($('.myPic').css('width') !== '247px'){
          myPicWidthCounter++
          $('.myPic').css('width' , myPicWidthCounter + 'px')

        }
      },0.5)

      setTimeout(()=>{
        $('.who-I-am-text-and-footer-img').fadeIn( 500 );
      },4000)

      setTimeout(()=>{
        sideBarNavInterval = setInterval(() => {
          $('.sideBar-nav').fadeIn( 1000 );
          if($('.sideBar-nav').css('margin-top') !== '0px'){
            sideBarMarginCounter--
            $('.sideBar-nav').css('margin-top' , sideBarMarginCounter+'px')
          }
        },10)
      },4500)})

      setTimeout(()=>{
        clearInterval( sideBarNavInterval );
        clearInterval( myPicInterval );
      },5000)

      let scrolled=0;


      $("#downClickHome").on("click" ,function(){

        $('#upClickHome').show()
        if( ($('.wrapper').scrollTop() ) == scrolled ){

          scrolled = scrolled + 200;
          }
          $(".wrapper").animate({
              scrollTop:  scrolled
            });
        });
      $("#upClickHome").on("click" ,function(){

        if(scrolled === 0 ){
          $('#upClickHome').hide()
        }
        if(scrolled !== 0){
          scrolled = scrolled - 200;
        }
        $(".wrapper").animate({
          scrollTop:  scrolled
             });
        });

    }
  }
})
