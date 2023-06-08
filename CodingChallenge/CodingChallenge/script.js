document.addEventListener("DOMContentLoaded", function() {
	fetch("data.json")
	  .then(function(response) {
		return response.json();
	  })
	  .then(function(products) {
		let placeholder = document.getElementById("data-output");
		let out = "";
		for (let product of products) {
		  out += `
			<tr>
			  <td>${product["Country Code"]}</td>
			  <td>${product["Table Name"]}</td>
			  <td>${product["Income Group"]}</td>
			  <td>${product["Latest population census"]}</td>
			  <td>${product["Latest trade data"]}</td>
			  <td>${product["Region"]}</td>
			  <td>${product["Currency Unit"]}</td>
			  <td>${product["System of trade"]}</td>
			  <td>${product["SNA price valuation"]}</td>
			</tr>
		  `;
		}
  
		placeholder.innerHTML = out;
  
		// Add event listener to search input
		let searchInput = document.getElementById("search-input");
		searchInput.addEventListener("input", function() {
		  filterTable(this.value);
		});
  
		function filterTable(searchTerm) {
		  let tableRows = document.querySelectorAll(".container tbody tr");
  
		  tableRows.forEach(function(row) {
			let text = row.textContent.toLowerCase();
			if (text.includes(searchTerm.toLowerCase())) {
			  row.style.display = "";
			} else {
			  row.style.display = "none";
			}
		  });
		}

		// Add event listeners to table headers for sorting
		let tableHeaders = document.querySelectorAll(".container th");
      		tableHeaders.forEach(function(header, index) {
        	header.addEventListener("click", function() {
          sortTable(index);
        });
      });

      let sortDirection = 1;

      function sortTable(columnIndex) {
        let table = document.querySelector(".container table");
        let rows = Array.from(table.rows).slice(1);

        rows.sort(function(row1, row2) {
          let value1 = row1.cells[columnIndex].textContent.trim();
          let value2 = row2.cells[columnIndex].textContent.trim();

          if (!isNaN(value1) && !isNaN(value2)) {
            value1 = parseFloat(value1);
            value2 = parseFloat(value2);
          }

          if (value1 > value2) {
            return sortDirection;
          } else if (value1 < value2) {
            return -sortDirection;
          } else {
            return 0;
          }
        });

        sortDirection *= -1;

        rows.forEach(function(row) {
          table.tBodies[0].appendChild(row);
        });

        // Remove the sorting class from all headers
        tableHeaders.forEach(function(header) {
          header.classList.remove("sorted-asc", "sorted-desc");
        });

        // Add the sorting class to the clicked header
        let clickedHeader = tableHeaders[columnIndex];
        clickedHeader.classList.add(sortDirection === 1 ? "sorted-asc" : "sorted-desc");
      }
  
	  });
  });
  