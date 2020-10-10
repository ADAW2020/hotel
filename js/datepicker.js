$(document).ready(function(){
    let minDate = new Date();

    $("#depart").datepicker({
        showAnim: 'drop',
        numberOfMonth: 1,
        minDate: minDate, 
        dateFormat: 'dd/mm/yy',
        onClose: function (selectDate){
            $('#return').datepicker("option", "minDate", selectDate)
        }
    });

    $("#return").datepicker({
        showAnim: 'drop',
        numberOfMonth: 1,
        minDate: minDate, 
        dateFormat: 'dd/mm/yy',
        onClose: function (selectDate){
            $('#depart').datepicker("option", "minDate", selectDate)
        }
    });



});
