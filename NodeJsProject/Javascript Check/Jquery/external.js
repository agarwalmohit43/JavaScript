$(document).ready(function () {
   // alert("Hi");

    // $('#check').click(function () {
    //     $('#check').hide(2000,function () {
    //         $('#check').show(2000,function () {
    //             alert('aagaya');
    //         });
    //     });})

    $('#check').click(function () {

            $('#textId').css('color','red').slideUp(1000).slideDown(1000);


    })

});

function getRequest(){
    //alert('get');

    console.log("Get Request Initiating");
    // $.get("http://localhost:8080/StudentAdmisionForm/students",function (data,status) {
    //     alert("Data: " + data + "\nStatus: " + status);
    // })

    $.ajax({
        type: "GET",
        url: 'http://localhost:8080/StudentAdmisionForm//students',
        success:function (data) {
            console.log(data);
        },

    })

}

function putRequest(){
    console.log("Put Request Initiating");

    var data = {"student_name":"agarwal","studenthobby":"Music"};
    data = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:8080/StudentAdmisionForm/studentUpdate/mohit',
        data: data,contentType: "application/json",
        success:function (data) {
            console.log(data);
        }
    })
}

function postRequest(){
    console.log("Post Request Initiating");

    var data = {"student_name":"agarwal","studenthobby":"Music"};
    data= JSON.stringify(data);
    console.log(data);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/StudentAdmisionForm/studentNew',
        contentType: "application/json",
        data: data,
        success:function (data) {
            console.log(data);
        },
        error: function (xhr, desc, err) {
            console.log(xhr);
            console.log("Desc: " + desc + "\nErr:" + err);
        }
    })

    // $.post("http://localhost:8080/StudentAdmisionForm/studentNew",
    //     {"student_name":"agarwal","studenthobby":"Music"},
    //     function(data, status){
    //         console.log("Data: " + data + "\nStatus: " + status);
    //     });
}

function deleteRequest(){

    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:8080/StudentAdmisionForm/studentDelete/mohit',
        success:function (data) {
            console.log(data);
        },
        error: function (xhr, desc, err) {
            console.log(xhr);
            console.log("Desc: " + desc + "\nErr:" + err);
        }

    })
}

