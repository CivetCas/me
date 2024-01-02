function myFunction() {
    // 声明变量
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // 循环表格每一行，查找匹配项
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          hidden();
        } else {
          tr[i].style.display = "none";
          show();
        }
      } 
    }
  }
  function show(){

    var myTable= document.getElementById("myTable"); myTable.style.display="block";
   
   }
   
   function hidden(){
   
   var myTable= document.getElementById("myTable"); myTable.style.display ="none";
   
   }

   function delet(){
    document.getElementById('myInput').value='';
    hidden();
   }
   
