
document.getElementById('btn1').addEventListener('click',myInsert);

function myInsert(){
    let myemp=document.getElementById("eno").value;
    let myname=document.getElementById("nm").value;
    let mycity=document.getElementById("city").value;
    let mysalary=document.getElementById("salary").value;

    let url="http://localhost:3000/employees";

    fetch(url,{
        method:"post",
        body:JSON.stringify({
            employeeno: myemp,
            name: myname,
            city: mycity,
            salary: mysalary,
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        },
    })
    .then((data)=>{
        console.log(data);
        return data.json();
    })
    .then((json)=>{
        console.log(json);
        alert("All Ditails Submited");
    });
}