$(document).ready(function(){
  var dataTable = $('#filtertable').DataTable({
      "pageLength":5,
      'aoColumnDefs':[{
          'bSortable':false,
          'aTargets':['nosort'],
      }],
      columnDefs:[
          {type:'date-dd-mm-yyyy',aTargets:[5]}
      ],
      "aoColumns"
  })
}