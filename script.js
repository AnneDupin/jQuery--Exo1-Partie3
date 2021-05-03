$('#counter').click(function(){
    $('.count').html(function(i, val) { 
        // val () méthode renvoie ou définit la valeur de la propriété de l'élément sélectionné.
        return val*1+1});
});