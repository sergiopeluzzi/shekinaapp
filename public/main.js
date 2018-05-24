$('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
});
  
$(document).ready(function () { 
    var $cpf = $("#cpf");
    var $dtnasc = $("#ingressante_dtnascimento");
    var $telc = $(".tcelular");
    var $telf = $(".tfixo");
    var $cep = $(".cep");
    $cpf.mask('000.000.000-00', {reverse: true});
    $dtnasc.mask('00/00/0000', {reverse: true});
    $telc.mask('(00) 0 0000-0000', {reverse: false});
    $telf.mask('(00) 0000-0000', {reverse: false});
    $cep.mask('00000-000', {reverse: false});

    $(".se-pre-con").fadeOut("slow");;

    $('.select-create').select2({
        style: 'resolve',
        language: {
            "noMatches": function() {
                return "Sem resultados";
            }
        }
    });

    $('.table-datatable').DataTable({
        language: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });

    var password = document.getElementById("password") , confirm_password = document.getElementById("confirm_password");

    function validatePassword(){
        if(password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Senhas diferentes!");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;


});

