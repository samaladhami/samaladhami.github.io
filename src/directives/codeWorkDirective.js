angular.module('portfolio')
.directive('codeworkDirective' , function() {

  return{
    restract: 'E'
    ,controller: 'homeCtrl'
    ,templateUrl: 'templates/codeWorkDirective.html'
    ,link: function(scope, element, attrs) {

      $('.sideBar-nav').css('margin-top', '0px');
      $('.sideBar-nav').show();
      $('.who-I-am').css('color' , '#464646');
      $('.code-work-button').css('color' ,'rgb(193, 192, 192)');
      $('.what-I-know').css('color' , '#464646');
      $('.contact').css('color' , '#464646');

    let scrolled=0;


    $("#downClick").on("click" ,function(){

      $('#upClick').show()
      if( ($('.projects-wrapper').scrollTop() ) == scrolled ){

        scrolled = scrolled + 200;
        }
				$(".projects-wrapper").animate({
				    scrollTop:  scrolled
				  });
			});
    $("#upClick").on("click" ,function(){

      if(scrolled === 0 ){
        $('#upClick').hide()
      }
      if(scrolled !== 0){
				scrolled = scrolled - 200;
      }
			$(".projects-wrapper").animate({
			  scrollTop:  scrolled
				   });
			});

    }
  }
} )
