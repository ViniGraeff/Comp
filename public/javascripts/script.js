var port = "3481";
var servidor="http://localhost:"+port+"/db/json";
var servidor2="http://localhost:"+port+"/catalogo/produto/";
var pgProduto=0;

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
		$.get(servidor, function(data) {
			if(micro==0){
					for (var i = 0; i < data.PIC.length; i++){
							// $('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+'R$ '+str+'</td><td>'+'<img src="img/happybatman.jpg" alt= "Batman Feliz" style="width:40px;height:40px; border-radius:50%;";>'+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#abrir" onclick="preencher('+i+')"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm" onclick="deleta('+aux+')" data-toggle="modal" data-target="#abrir"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
							$('#print').append('<a href="'+servidor2+data.PIC[i].codigo+'"><div id="'+data.PIC[i].codigo+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.PIC[i].nome+'""><h3>'+data.PIC[i].nome+'</h3><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.PIC[i].codigo+'.jpg"><figcaption><p><a href="#"><i class="fa fa-fw fa-user"></i></a><a href="#"><i class="fa fa-fw fa-heart"></i></a><a href="#"><i class="fa fa-fw fa-cog"></i></a></p></figcaption></figure></div><h4>R$ '+data.PIC[i].valor+'</h4></div></div></a>');
					}
			}

			if(sensores==0){
					for (var i = 0; i < data.SENSORES.length; i++){
							// $('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+'R$ '+str+'</td><td>'+'<img src="img/happybatman.jpg" alt= "Batman Feliz" style="width:40px;height:40px; border-radius:50%;";>'+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#abrir" onclick="preencher('+i+')"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm" onclick="deleta('+aux+')" data-toggle="modal" data-target="#abrir"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
							$('#print').append('<a href="'+servidor2+data.SENSORES[i].codigo+'"><div id="'+data.SENSORES[i].codigo+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.SENSORES[i].nome+'""><h3>'+data.SENSORES[i].nome+'</h3><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.SENSORES[i].codigo+'.jpg"><figcaption><p><a href="#"><i class="fa fa-fw fa-user"></i></a><a href="#"><i class="fa fa-fw fa-heart"></i></a><a href="#"><i class="fa fa-fw fa-cog"></i></a></p></figcaption></figure></div><h4>R$ '+data.SENSORES[i].valor+'</h4></div></div></a>');
					}
			}

			if(componentes==0){
					for (var i = 0; i < data.COMPONENTES.length; i++){
							// $('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+'R$ '+str+'</td><td>'+'<img src="img/happybatman.jpg" alt= "Batman Feliz" style="width:40px;height:40px; border-radius:50%;";>'+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#abrir" onclick="preencher('+i+')"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm" onclick="deleta('+aux+')" data-toggle="modal" data-target="#abrir"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
							$('#print').append('<a href="'+servidor2+data.COMPONENTES[i].codigo+'"><div id="'+data.COMPONENTES[i].codigo+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.COMPONENTES[i].nome+'""><h3>'+data.COMPONENTES[i].nome+'</h3><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.COMPONENTES[i].codigo+'.jpg"><figcaption><p><a href="#"><i class="fa fa-fw fa-user"></i></a><a href="#"><i class="fa fa-fw fa-heart"></i></a><a href="#"><i class="fa fa-fw fa-cog"></i></a></p></figcaption></figure></div><h4>R$ '+data.COMPONENTES[i].valor+'</h4></div></div></a>');
					}
			}

			if(displays==0){
					for (var i = 0; i < data.DISPLAYS.length; i++){
							// $('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+'R$ '+str+'</td><td>'+'<img src="img/happybatman.jpg" alt= "Batman Feliz" style="width:40px;height:40px; border-radius:50%;";>'+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#abrir" onclick="preencher('+i+')"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm" onclick="deleta('+aux+')" data-toggle="modal" data-target="#abrir"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
							$('#print').append('<a href="'+servidor2+data.DISPLAYS[i].codigo+'"><div id="'+data.DISPLAYS[i].codigo+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.DISPLAYS[i].nome+'""><h3>'+data.DISPLAYS[i].nome+'</h3><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.DISPLAYS[i].codigo+'.jpg"><figcaption><p><a href="#"><i class="fa fa-fw fa-user"></i></a><a href="#"><i class="fa fa-fw fa-heart"></i></a><a href="#"><i class="fa fa-fw fa-cog"></i></a></p></figcaption></figure></div><h4>R$ '+data.DISPLAYS[i].valor+'</h4></div></div></a>');
					}
			}

			if(cabos==0){
					for (var i = 0; i < data.CABOS.length; i++){
							// $('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+'R$ '+str+'</td><td>'+'<img src="img/happybatman.jpg" alt= "Batman Feliz" style="width:40px;height:40px; border-radius:50%;";>'+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#abrir" onclick="preencher('+i+')"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm" onclick="deleta('+aux+')" data-toggle="modal" data-target="#abrir"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
							$('#print').append('<a href="'+servidor2+data.CABOS[i].codigo+'"><div id="'+data.PIC[i].CABOS+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.CABOS[i].nome+'""><h3>'+data.CABOS[i].nome+'</h3><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.CABOS[i].codigo+'.jpg"><figcaption><p><a href="#"><i class="fa fa-fw fa-user"></i></a><a href="#"><i class="fa fa-fw fa-heart"></i></a><a href="#"><i class="fa fa-fw fa-cog"></i></a></p></figcaption></figure></div><h4>R$ '+data.CABOS[i].valor+'</h4></div></div></a>');
					}
			}

			if(motores==0){
					for (var i = 0; i < data.MOTORES.length; i++){
							// $('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+'R$ '+str+'</td><td>'+'<img src="img/happybatman.jpg" alt= "Batman Feliz" style="width:40px;height:40px; border-radius:50%;";>'+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#abrir" onclick="preencher('+i+')"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm" onclick="deleta('+aux+')" data-toggle="modal" data-target="#abrir"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
							$('#print').append('<a href="'+servidor2+data.MOTORES[i].codigo+'"><div id="'+data.MOTORES[i].codigo+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.MOTORES[i].nome+'""><h3>'+data.MOTORES[i].nome+'</h3><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.MOTORES[i].codigo+'.jpg"><figcaption><p><a href="#"><i class="fa fa-fw fa-user"></i></a><a href="#"><i class="fa fa-fw fa-heart"></i></a><a href="#"><i class="fa fa-fw fa-cog"></i></a></p></figcaption></figure></div><h4>R$ '+data.MOTORES[i].valor+'</h4></div></div></a>');
					}
			}

			if(embarcados==0){
					for (var i = 0; i < data.EMBARCADOS.length; i++){
							// $('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+'R$ '+str+'</td><td>'+'<img src="img/happybatman.jpg" alt= "Batman Feliz" style="width:40px;height:40px; border-radius:50%;";>'+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#abrir" onclick="preencher('+i+')"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm" onclick="deleta('+aux+')" data-toggle="modal" data-target="#abrir"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
							$('#print').append('<a href="'+servidor2+data.EMBARCADOS[i].codigo+'"><div id="'+data.EMBARCADOS[i].codigo+'" class="col-md-3"><div class="inicial2" data-toggle="tooltip" title="'+data.EMBARCADOS[i].nome+'""><h3>'+data.EMBARCADOS[i].nome+'</h3><div class="grid"><figure class="effect-lexi"><img src="../img/'+data.EMBARCADOS[i].codigo+'.jpg"><figcaption><p><a href="#"><i class="fa fa-fw fa-user"></i></a><a href="#"><i class="fa fa-fw fa-heart"></i></a><a href="#"><i class="fa fa-fw fa-cog"></i></a></p></figcaption></figure></div><h4>R$ '+data.EMBARCADOS[i].valor+'</h4></div></div></a>');
					}
			}

		});
	}

});


$.get(servidor, function(data) {
	$('#txt-search').keyup(function(){
		var searchField = $(this).val();
		if(searchField === '') {
			$('#filter-records').html('');
			return;
		}
		
		var regex = new RegExp(searchField, "i");
		var output = '<div class="row">';
		var count = 1;
		for(i in data){
			var dados = data[i];
			for(x in dados){
				var nomes = dados[x].nome;
				if(nomes.search(regex) != -1){
				console.log(nomes);
				output += '<div class="col-md-12 well">';
				output += '<div class="col-md-3"><div class="imgsearch"><img src="../../img/'+dados[x].codigo+'.jpg" alt="'+ nomes +'" /></div></div>';
				output += '<div class="col-md-7">';
				output += '<h5>' + nomes + '</h5>';
				output += '<p>R$ ' + dados[x].valor + '</p>'
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