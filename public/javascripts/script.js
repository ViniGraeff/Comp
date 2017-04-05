var port='1300';
var app = {
	db:'http://localhost:'+port+'/db/json',
	prodDetail:'http://localhost:'+port+'/produto/detalhado/'
}


$(document).ready(function () {
	var micro=0, sensores=0, displays=0, componentes=0, cabos=0, motores=0, embarcados=0;
	
	$(function () {
			$('[data-toggle="tooltip"]').tooltip()
	});
	print();

	$("input").blur(function(){
		$('.modalsearch').fadeToggle();
	});

	var trigger = $('.hamburger'),
		overlay = $('.overlay'),
		 isClosed = false;

		trigger.click(function () {
				hamburger_cross();      
		});

	function hamburger_cross() {

		if (isClosed == true) {          
			overlay.hide();
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			isClosed = false;
		} else {
			overlay.show();
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			isClosed = true;
		}
	}
		
	$('[data-toggle="offcanvas"]').click(function () {
		$('#wrapper').toggleClass('toggled');
	});
	
	$('#cart').click(function(){
		$('.modalcarrinho').fadeIn();
		$('.modalsearch').fadeOut();
	});

	$('#botFechar').click(function(){
		$('.modalcarrinho').fadeOut();
	});

	$('#search').click(function(){
		$('.modalsearch').fadeToggle();
		$('.modalcarrinho').fadeOut();
	});

	$('#todos').click(function(){
		micro=0;
		sensores=0;
		displays=0;
		componentes=0;
		cabos=0;
		motores=0;
		embarcados=0;
		print();
	});
	$('#micro').click(function(){
		micro=0;
		sensores=1;
		displays=1;
		componentes=1;
		cabos=1;
		motores=1;
		embarcados=1;
		print();
	});
	$('#sensores').click(function(){
		micro=1;
		sensores=0;
		displays=1;
		componentes=1;
		cabos=1;
		motores=1;
		embarcados=1;
		print();
	});
	$('#displays').click(function(){
		micro=1;
		sensores=1;
		displays=0;
		componentes=1;
		cabos=1;
		motores=1;
		embarcados=1;
		print();
	});
	$('#componentes').click(function(){
		micro=1;
		sensores=1;
		displays=1;
		componentes=0;
		cabos=1;
		motores=1;
		embarcados=1;
		print();
	});
	$('#cabos').click(function(){
		micro=1;
		sensores=1;
		displays=1;
		componentes=1;
		cabos=0;
		motores=1;
		embarcados=1;
		print();
	});
	$('#motores').click(function(){
		micro=1;
		sensores=1;
		displays=1;
		componentes=1;
		cabos=1;
		motores=0;
		embarcados=1;
		print();
	});
	$('#embarcados').click(function(){
		micro=1;
		sensores=1;
		displays=1;
		componentes=1;
		cabos=1;
		motores=1;
		embarcados=0;
		print();
	});

	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};

	function print(){
		$('#print').empty();
		$.get(app.db, function(data){
			for(var i=0; i<data.produtos.length; i++){
				for(var x=0; x<data.produtos[i].length; x++){
					$('#print').append('<a href="'+app.prodDetail+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'"><div id="'+data.produtos[i][x].codigo+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.produtos[i][x].nome+'""><h3>'+data.produtos[i][x].nome+'</h3><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'.jpg"><figcaption><p><a href="#"><i class="fa fa-fw fa-user"></i></a><a href="#"><i class="fa fa-fw fa-heart"></i></a><a href="#"><i class="fa fa-fw fa-cog"></i></a></p></figcaption></figure></div><h4>R$ '+data.produtos[i][x].valor+'</h4></div></div></a>');
				}
			}
		});
	}

$("#zoom_05").elevateZoom({
  zoomType: "inner",
  cursor: "crosshair"
});

});


$.get(app.db, function(data) {
	$('#txt-search').keyup(function(){
		var searchField = $(this).val();
		if(searchField === '') {
			$('#filter-records').html('');
			return;
		}
		
		var regex = new RegExp(searchField, "i");
		var output = '<div class="row">';
		var count = 1;
		for(i in data.produtos){
			for(x in data.produtos[i]){
				console.log(data.produtos[i][x].nome);
				if(data.produtos[i][x].nome.search(regex) != -1){
				output += '<div class="col-md-12 well">';
				output += '<div class="col-md-3"><div class="imgsearch"><img src="../../img/'+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'.jpg" alt="'+ data.produtos[i][x].nome +'" /></div></div>';
				output += '<div class="col-md-7">';
				output += '<h5>' + data.produtos[i][x].nome + '</h5>';
				output += '<p>R$ ' + data.produtos[i][x].valor + '</p>'
				output += '</div>';
				output += '</div>';
				if(count%2 == 0){
					output += '</div><div class="row">'
				}
				count++;
				}
			}
		}
		output += '</div>';
		$('#filter-records').html(output);
	});
});
