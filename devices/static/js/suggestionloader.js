
$('#input').on('keyup',function(e){
    text=$(this).val();
    var list= $('.suggestions');
    $.ajax({
        url:'/autocomplete',
        data:{'text':text},
        method:"GET",

    }

}