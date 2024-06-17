// ================= Delete Buttun ==================
function myrecRemove(id){
  let url = `http://localhost:3000/employees/${id}`;

  fetch(url,{
    method:"delete",
  })
  .then((data)=>{
    alert("Recorde Deleted");
  });
}
//================== Edit Butten ===================
function editRow(id){
  document.getElementById(`eno-${id}`).removeAttribute("readonly");
  document.getElementById(`nm-${id}`).removeAttribute("readonly");
  document.getElementById(`city-${id}`).removeAttribute("readonly");
  document.getElementById(`salary-${id}`).removeAttribute("readonly");

  document.getElementById(`edit-${id}`).style.display ="none";
  document.getElementById(`save-${id}`).style.display ="inline";
}
//===================== Save Buttun ===================

function saveRow(id){
  let myemp = document.getElementById(`eno-${id}`).value;
  let myname = document.getElementById(`nm-${id}`).value;
  let mycity = document.getElementById(`city-${id}`).value;
  let mysalary = document.getElementById(`salary-${id}`).value;

  let url = `http://localhost:3000/employees/${id}`;

  fetch(url,{
    method: "put",
    body:JSON.stringify({
      employeeno: myemp,
      name: myname,
      city: mycity,
      salary: mysalary,
    }),
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    }
  })
  .then((refrence)=>{
    if(refrence.ok){
      alert("Data Updated");
    }
    else{
      throw new Error ("Data not updeted");
    }
  })
  .catch((error)=>{
    console.log(error);
    alert("Error occured while updating");
  });
}



//=====================================================================
async function dataShow(){
    let myTable = `
      <table>
       <tr>
       <th>Employee no</th>
       <th>Name</th>
       <th>City</th>
       <th>Salary</th>
       <th>Actions</th>
       </tr>
      `;
  
    let url = "http://localhost:3000/employees";
    let myobj = await fetch(url);
    console.log(myobj);
    let myData = await myobj.json();
  
    console.log(myData);
  
    myData.forEach((key) =>{
      myTable += `
       <tr>
       <td><input type="text" id="eno-${key.id}" value="${key.employeeno}" readonly></td>
       <td><input type="text" id="nm-${key.id}" value="${key.name}" readonly></td>
       <td><input type="text" id="city-${key.id}" value="${key.city}" readonly></td>
       <td><input type="text" id="salary-${key.id}" value="${key.salary}" readonly></td>
       <td>
       <a href="#" onclick="myrecRemove('${key.id}')" class="button button-delete">Delete</a>
       <a href="#" onclick="editRow('${key.id}')" id="edit-${key.id}" class="button button-edit">Edit</a>
       <a href="#" onclick="saveRow('${key.id}')" id="save-${key.id}" class="button button-save" style="display:none">Save</a>
       </td>
       </tr>
       `;
    });
    
    myTable += `</table>`;
    document.getElementById("demo").innerHTML = myTable;
  };
  dataShow();