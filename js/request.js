function displayArrayAsTable( data ) {
	if ( data.length < 1 )
	{
		return;
	}
	    
	var table = document.createElement('table');
	var row = document.createElement('row');

	for ( var x = 0; x < data.length; x++ ) 
	{ 
	    var td = document.createElement('td');
	    td.innerHTML = data[x].title;

	    row.appendChild(td);
	}

	table.appendChild(row);

	var row2 = document.createElement('row');

	for ( var x = 0; x < data.length; x++ ) 
	{ 
	    var td = document.createElement('td');
	    td.innerHTML = data[x].overallStatus;

	    row2.appendChild(td);
	}

	table.appendChild(row2);
	     
	return table;
}

function myFunction() {
    var form = document.getElementById("pgform");
    var searchBtn = document.getElementById("search-btn");
    var filmDetails = document.getElementById("film-cover");
    var pageTitle = document.getElementById("sub-title");
    if (form.style.display === "none" && searchBtn.style.display === "block") {
        window.location.reload();
    } else {
        form.style.display = "none";
        searchBtn.style.display = "block";
        filmDetails.style.display = "block";
    }
}