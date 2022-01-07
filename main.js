$(document).ready( function () {
    $('#myTable').DataTable();
} );

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
      "aoColumns" :[
          null,
          null,
          null,
          null,
          null,
          null,
          null
      ],
      "order":false,
      "bLenghtChange":false,
      "dom":'<"top">ct<"top"p><"clear">'
  });
$("#filterbox").keyup(function(){
    dataTable.search(this.value).draw();
});
});