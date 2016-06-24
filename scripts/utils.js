



function logout() 
      {  
	    console.log("Logout");
		localStorage.setItem("username", "");
		localStorage.setItem("activeJobId", "");
		window.location.href="login.html";
     };
	 
function fillJobsTable(rowsArray,table) {		  
	console.log("fillJobsTable");
    var job;

            for (var j = 0; j < rowsArray.length; j++) {
                job = {
                    jobid:  rowsArray[j].jobid,
                    priority: rowsArray[j].priority,
					status: rowsArray[j].status,
                    address: rowsArray[j].address,
					postcode: rowsArray[j].postcode,
					notes: rowsArray[j].notes
                };
			
                var row = table.insertRow(j + 1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				var cell5 = row.insertCell(4);
				var cell6 = row.insertCell(5);
				

                cell1.innerHTML = job.jobid,
                cell2.innerHTML = job.priority,
				cell3.innerHTML = job.status,
				cell4.innerHTML = job.address,
				cell5.innerHTML = job.postcode;
				cell6.innerHTML = job.notes;	
            }
					
			if (table != null) {
//				for (var i = 0; i < table.rows.length; i++) {
//					for (var j = 0; j < table.rows[i].cells.length; j++)
//					table.rows[i].cells[j].onclick = function () {
//						tableText(this);
//					};
//				}
			}

	}; //fillJobsTable