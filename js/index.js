/**
 * Created by fhilton on 10/5/14.
 */

calcEndDate();

function calcEndDate() {
    var startDate = $('#StartDate').val();
    var hoursProject = $('#HoursProject').val();
    var numResources = $('#NumResources').val();
    var hrsPerResource = $('#HrsPerResource').val();

    if($.isNumeric(hoursProject) && $.isNumeric(numResources) && $.isNumeric(hrsPerResource) && startDate != ''){
        $('#CompleteDate').val(Schedule(startDate, hoursProject,numResources , hrsPerResource));
    }


    //$('#CompleteDate').val('1/1/2012');

    //alert(hrsPerResource);
}