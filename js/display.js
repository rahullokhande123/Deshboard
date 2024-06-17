async function dataShow(){
      let myTable=`
      <table border="1px" width="800px" bgcolor="white" alingn="center">
      <tr bgcolor="pink">
         <th>Employee no</th>
         <th>Employee Name</th>
         <th>City</th>
         <th>Salary</th>
      </tr>
      `;
      let url = "http://localhost:3000/employees";
      let myobj =await fetch(url);
      console.log(myobj);
      let myData = await myobj.json();
      console.log(myData);

      myData.map((key)=>{
        myTable +=`
        <tr>
           <th>${key.employeeno}</th>
           <th>${key.name}</th>
           <th>${key.city}</th>
           <th>${key.salary}</th>
        </tr>
        `
      });

      myTable += `</table>`;
      document.getElementById("demo").innerHTML = myTable;
}
dataShow();