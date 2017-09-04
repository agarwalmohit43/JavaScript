var arr = new Array();

var currentRow=0;


function formData()
{
    var btnvalue = document.getElementById("empSubmit").value;
    var cancelBtn = document.getElementById("empCancel").value;

    // debugger;
    // console.log(btnvalue);

    if(btnvalue === 'Submit')
    {
        var empId = document.getElementById("empId").value;
        var empName = document.getElementById("empName").value;

        arr.push({empId:empId,empName:empName});

        console.log(empId + " " + empName);
        console.log(arr);
        console.log(btnvalue);
        addElementsInArray();
        document.getElementById("empId").value="";
        document.getElementById("empName").value="";
    }else if(btnvalue === 'Update')
    {
        updateFormData();
    }

    if(cancelBtn === 'Cancel')
    {
        cancel();
    }

}

function editEmp(e){
     console.log(e);
     console.log(arr[e-1].empId +" "+arr[e-1].empName);

     document.getElementById("empId").value=arr[e-1].empId;
     document.getElementById("empName").value=arr[e-1].empName;
     currentRow=e;


    document.getElementById("empSubmit").value = "Update";
    document.getElementById("empCancel").style.visibility="visible";

    // document.getElementById("empUpdate").style.visibility="visible";
    // document.getElementById("empUpdateCancel").style.visibility="visible";
    // document.getElementById("empSubmit").style.visibility="hidden";
}

function updateFormData() {
    console.log(currentRow);

    document.getElementById("empSubmit").value = "Submit";

    // document.getElementById("empSubmit").style.visibility="visible";
    // document.getElementById("empUpdate").style.visibility="hidden";
    // document.getElementById("empUpdateCancel").style.visibility="hidden";

    var empId = document.getElementById("empId").value;
    var empName = document.getElementById("empName").value;

    arr[currentRow-1].empId = empId;
    arr[currentRow-1].empName = empName;

    console.log(arr);
    document.getElementById("empId").value="";
    document.getElementById("empName").value="";
    addElementsInArray();

}

function deleteEmp(e) {
    arr.splice(e-1,1);
    addElementsInArray();
}

function cancel() {
    currentRow=0;
    document.getElementById("empId").value="";
    document.getElementById("empName").value="";

    document.getElementById("empCancel").style.visibility="hidden";

    // document.getElementById("empUpdate").style.visibility="hidden";
    // document.getElementById("empUpdateCancel").style.visibility="hidden";
    // document.getElementById("empSubmit").style.visibility="visible";
}

function deleteAllrows() {
    var Parent = document.getElementById("empTable").getElementsByTagName('tbody')[0];
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }
}

function addElementsInArray() {
   deleteAllrows();

   for(var i in arr)
    {
        var table = document.getElementById('empTable').getElementsByTagName('tbody')[0];
        var row = table.insertRow(table.rows.length);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);

        cell1.innerHTML = arr[i].empId;
        cell2.innerHTML = arr[i].empName;
        cell3.innerHTML = "<button onclick=editEmp("+table.rows.length+")>Edit</button><button onclick=deleteEmp("+table.rows.length+")>Delete</button>";
    }

    document.getElementById("empId").value="";
    document.getElementById("empName").value="";
}