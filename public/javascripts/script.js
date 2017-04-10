var port='1490';
var app = {
	db:'http://localhost:'+port+'/db/json',
	prodDetail:'http://localhost:'+port+'/produto/detalhado/'
}

var dataId;

produto = new Array (7);
produto[0]=0;
produto[1]=0;
produto[2]=0;
produto[3]=0;
produto[4]=0;
produto[5]=0;
produto[6]=0;


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
		$('.modalcarrinho').fadeToggle();
		$('.modalsearch').fadeOut();
		printCarrinho();
	});

	$('#botCarrinho').click(function(){
		dataId = $(this).data("id");
		dataTipo = $(this).data("tipo");
		carrinho();
		console.log(dataId, dataTipo);
	});

	$('#appendCarrinho').on('click', '.close', function(){
		console.log('entrei no fechar');
		var dataFechar = $(this).data("fechar");
		console.log(dataFechar);
		carrinhoExcluir(dataFechar);
		// printCarrinho(); botar no callback do carrinho excluir
	});

	$('#botFechar').click(function(){
		$('.modalcarrinho').fadeOut();
	});

	$('#search').click(function(){
		$('.modalsearch').fadeToggle();
		$('.modalcarrinho').fadeOut();
	});

	$('#todos').click(function(){
		produto[0]=0;
		produto[1]=0;
		produto[2]=0;
		produto[3]=0;
		produto[4]=0;
		produto[5]=0;
		produto[6]=0;
		print();
	});
	$('#micro').click(function(){
		produto[0]=0;
		produto[1]=1;
		produto[2]=1;
		produto[3]=1;
		produto[4]=1;
		produto[5]=1;
		produto[6]=1;
		print();
	});
	$('#sensores').click(function(){
		produto[0]=1;
		produto[1]=0;
		produto[2]=1;
		produto[3]=1;
		produto[4]=1;
		produto[5]=1;
		produto[6]=1;
		print();
	});
	$('#componentes').click(function(){
		produto[0]=1;
		produto[1]=1;
		produto[2]=0;
		produto[3]=1;
		produto[4]=1;
		produto[5]=1;
		produto[6]=1;
		print();
	});
	$('#displays').click(function(){
		produto[0]=1;
		produto[1]=1;
		produto[2]=1;
		produto[3]=0;
		produto[4]=1;
		produto[5]=1;
		produto[6]=1;
		print();
	});
	$('#cabos').click(function(){
		produto[0]=1;
		produto[1]=1;
		produto[2]=1;
		produto[3]=1;
		produto[4]=0;
		produto[5]=1;
		produto[6]=1;
		print();
	});
	$('#motores').click(function(){
		produto[0]=1;
		produto[1]=1;
		produto[2]=1;
		produto[3]=1;
		produto[4]=1;
		produto[5]=0;
		produto[6]=1;
		print();
	});
	$('#embarcados').click(function(){
		produto[0]=1;
		produto[1]=1;
		produto[2]=1;
		produto[3]=1;
		produto[4]=1;
		produto[5]=1;
		produto[6]=0;
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
				if(produto[i] == 0){
					for(var x=0; x<data.produtos[i].length; x++){
						$('#print').append('<div id="'+data.produtos[i][x].codigo+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.produtos[i][x].nome+'""><a href="'+app.prodDetail+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'"><h3>'+data.produtos[i][x].nome+'</h3></a><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'.jpg"><figcaption><p><a href="#"><i class="fa fa-fw fa-user"></i></a><a href="#"><i class="fa fa-fw fa-heart"></i></a><a href="#"><i class="fa fa-fw fa-cog"></i></a></p></figcaption></figure></div><h4>R$ '+data.produtos[i][x].valor+'</h4></div></div>');
					}
				}
			}
		});
	}

	function printCarrinho(){
		$('#appendCarrinho').empty();
		$.get(app.db, function(data){
			for(var i=0; i<data.produtos.length; i++){
				for(var x=0; x<data.produtos[i].length; x++){
					if(data.produtos[i][x].carrinho==1){
						$('#appendCarrinho').append('<div class="linha"<div class="row"><div class="col-md-4"><div class="imgCarrinho"><img src="../../../../img/'+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'.jpg"></div></div><div class="col-md-8"><button type="button" class="close" data-fechar='+data.produtos[i][x].codigo+' id="botFechar'+data.produtos[i][x].codigo+'">&times;</button><div class="separa"><p>'+data.produtos[i][x].nome+'</p></div><div class="row"><div class="col-md-2"><div class="input-field"><input placeholder="" type="text" class="validate"></div></div><div class="col-md-10"><p> Quantidade</p></div></div><p> Valor unitário: R$ '+data.produtos[i][x].valor+' / Valor total: X</p></div></div><div class="divider"</div></div>');
					// console.log("botFechar"+data.produtos[i][x].codigo);
					}
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
				output += '<div class="col-md-3"><div class="imgsearch"><img src="../../../img/'+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'.jpg" alt="'+ data.produtos[i][x].nome +'" /></div></div>';
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

function carrinho(){
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: app.prodDetail+dataId
	});
}
function carrinhoExcluir(id){
	console.log(id);
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: app.prodDetail+'excluir/'+id,
		success: function(result){
        	console.log('ok');
    	},
    	error: function(status){
    		console.log(status);
    	}
	});
}