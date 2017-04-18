var port='1700';
var app = {
	db:'http://localhost:'+port+'/db/json',
	prodDetail:'http://localhost:'+port+'/produto/detalhado/',
	prodExcluir:'http://localhost:'+port+'/produto/excluir/'
}

var dataId;
var quantidade = 0;

produto = new Array (7);
produto[0]=0;
produto[1]=0;
produto[2]=0;
produto[3]=0;
produto[4]=0;
produto[5]=0;
produto[6]=0;

$(function () {
		$('[data-toggle="tooltip"]').tooltip()
});



function conta(){
	quantidade=0;
	$('#contador').empty();
	$.get(app.db, function(data){
		for(var i=0; i<data.produtos.length; i++){
			for(var x=0; x<data.produtos[i].length; x++){
				if(data.produtos[i][x].carrinho==1){
					quantidade=quantidade+1;
				}
			}
		}
	$('#contador').append('<p>'+quantidade+'</p>');
	});
}


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
				output += '<a href="'+app.prodDetail+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'"><div class="col-md-12 well">';
				output += '<div class="col-md-3"><div class="imgsearch"><img src="../../../img/'+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'.jpg" alt="'+ data.produtos[i][x].nome +'" /></div></div>';
				output += '<div class="col-md-7">';
				output += '<h5>' + data.produtos[i][x].nome + '</h5>';
				output += '<p>R$ ' + data.produtos[i][x].valor + '</p>'
				output += '</div>';
				output += '</div></a>';
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
		url: app.prodDetail+dataId,
		success: function(result){
			console.log('Produto adicionado com sucesso!');
			conta();

		},
		error: function(status){
			console.log(status);
		}
	});
}
function carrinhoExcluir(id, elem){
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: app.prodExcluir+id,
		success: function(result){
			$(elem).parents('.linha').slideUp('slow', function(){
				$(elem).parents('.linha').remove();
				console.log('Produto excluido com sucesso!');
			});
			conta();
		},
		error: function(status){
			console.log(status);
		}
	});
}

function addCount(id){
	$.get(app.db, function(data){
		var count = $('#inputCarrinho'+id).val();
		count++;
		var cat;
		$('#inputCarrinho'+id).val(count);
		for(i in data.produtos){
			for(x in data.produtos[i]){
				if(data.produtos[i][x].codigo == id){
					cat = i;
					prod = x;
				}
			}
		}
		var preco = data.produtos[cat][prod].valor * count;
		$('#subTotal'+id).empty();
		$('#subTotal'+id).append('<p>Subtotal: R$ '+preco+'</p>');
	});
}

function subCount(id){
	$.get(app.db, function(data){
		var count = $('#inputCarrinho'+id).val();
		count--;
		var cat;
		if(count<1)
			count = 1;
		$('#inputCarrinho'+id).val(count);
		for(i in data.produtos){
			for(x in data.produtos[i]){
				if(data.produtos[i][x].codigo == id){
					cat = i;
					prod = x;
				}
			}
		}
		var preco = data.produtos[cat][prod].valor * count;
		$('#subTotal'+id).empty();
		$('#subTotal'+id).append('<p>Subtotal: R$ '+preco+'</p>');
	});
}

function actions() {
	$("input").blur(function(){
		$('.modalsearch').fadeToggle();
	});
}

$(document).ready(function () {
	var micro=0, sensores=0, displays=0, componentes=0, cabos=0, motores=0, embarcados=0;
	
	print();
	conta();
	actions();


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
	});

	$('#print').on('click', "#botCarrinho", function(){
		dataId = $(this).data("id");
		dataTipo = $(this).data("tipo");
		carrinho();
	});

	$('#appendCarrinho').on('click', '.close', function(){
		var dataFechar = $(this).data("fechar");
		carrinhoExcluir(dataFechar, $(this));
	});

	$('#appendCarrinho').on('click', '.botmais', function(){
		var dataCount = $(this).data("count");
		addCount(dataCount);
	});

	$('#appendCarrinho').on('click', '.botmenos', function(){
		var dataCount = $(this).data("count");
		subCount(dataCount);
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

	$('#appendCarrinho').on('input', '.num', function(event){
		this.value = this.value.replace(/[^0-9]/g, '');
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
						$('#print').append('<div id="'+data.produtos[i][x].codigo+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.produtos[i][x].nome+'""><a href="'+app.prodDetail+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'"><h3>'+data.produtos[i][x].nome+'</h3></a><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'.jpg"><figcaption><p><a><i id="botCarrinho" data-id='+data.produtos[i][x].codigo+' data-tipo='+data.produtos[i][x].tipo+' class="fa fa-fw fa-cart-plus fa-lg"></i></a><a href=""><i class="fa fa-fw fa-heart"></i></a><a href=""><i class="fa fa-fw fa-usd"></i></a></p></figcaption></figure></div><h4>R$ '+data.produtos[i][x].valor+'</h4></div></div>');
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
						$('#appendCarrinho').append('<div class="linha"<div class="row"><div class="col-md-4"><div class="imgCarrinho"><img src="../../../../img/'+data.produtos[i][x].tipo+'/'+data.produtos[i][x].codigo+'.jpg"></div></div><div class="col-md-8"><button type="button" class="close" data-fechar='+data.produtos[i][x].codigo+' id="botFechar'+data.produtos[i][x].codigo+'">&times;</button><div class="separa"><p>'+data.produtos[i][x].nome+'</p></div><div class="row"><div class="col-md-2"><div class="input-field"><input id="inputCarrinho'+data.produtos[i][x].codigo+'" value="1" placeholder="" type="text" class="validate num"></div></div>		<div class="col-md-2"><div data-count="'+data.produtos[i][x].codigo+'" class="botmais"><p>+</p></div><div data-count="'+data.produtos[i][x].codigo+'" class="botmenos"><p>-</p></div></div><div class="col-md-4"><p>Quantidade</p></div></div>		<div class="row"><div class="col-md-6"><p> Valor unitário: R$ '+data.produtos[i][x].valor+'</p></div><div class="col-md-6"><div id="subTotal'+data.produtos[i][x].codigo+'"></div></div>		</div></div></div><div class="divider"</div></div>');
					}
				}
			}
		if(quantidade==0){
			$('#appendCarrinho').append('<div class="vazio"><h2>Não há produtos no carrinho</h2></div>');
		}
		});
	}

$("#zoom_05").elevateZoom({
  zoomType: "inner",
  cursor: "crosshair"
});

});