
/*visualization*/
// Colours for each year
const data = {
    "1989": {
        "AL": {info: "Albania",
         
        },
        "AD": {
          
        },
        "AL": {
         
        },
        "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:"partial",
        },
        "BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
    
         
        },
        "BA": {
            info: "Bosnia",          
        },
        "BY": {
            info: "Belarus",
        },
        "CH": {
            info: "Switzerland",
        },
        "CZ": {
          color: "red",
          info: "Czech Republic",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "DE": {
          color: "red",
          info: "Germany",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "DK": {
            info: "Denmark",
        },
        "EE": {
            info: "Estonia",
        },
        "FI": {
          color: "red",
          info: "Finland",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:"partial",
        },
        "GB": {
          color: "red",
          info: "ENgland, Wales",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "GE": {
            info: "Georgia",
        },
        "GR": {
          color: "red",
          info: "Greece",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation:false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "HR": {
            info: "Croatia",
        },
        "HU": {
          color: "red",
          info: "Hungary",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation:false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "IE": {
          color: "red",
          info: "Ireland",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation:false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "IS": {
          color: "red",
          info: "Iceland",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation:"partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "IT": {
          color: "red",
          info: "Italy",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation:false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "LI": {
            info: "Liechtenstein",
        },
        "LT": {
            info: "Lithuania",
        },
        "LU": {
            info: "Luxembourg",
        },
        "LV": {
            info: "Latvia",
        },
        "MD": {
            info: "Moldova",
        },
        "MK": {
            info: "Macedonia",
        },
        "ME": {
            info: "Montenegro",
        },
        "NO": {
          color: "red",
          info: "Norway",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation:"partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "PL": {
          color: "red",
          info: "Poland",
          marriageEquality: false,
          registeredPartnership	: false,
          
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "PT": {
          color: "red",
          info: "Portugal",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "RO": {
          color: "red",
          info: "Romania",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "RS": {
          
          info: "Serbia",
         
        },
        "SK": {
          info: "Slovakia",
        
        },
        "SI": {
          color: "red",
          info: "Slovenia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "SE": {
          color: "red",
          info: "Sweden",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "TR": {
          info: "Turkey",
          
        },
        "UA": {
        
          info: "Ukraine",
          
        },
        "XK": {
         
          info: "Kosovo",
          
        },
        "NL": {
          color: "red",
          info: "Netherlands",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "ES": {
        
          info: "Spain",
          
        },
        "FR": {
          color: "#red",
          info: "France",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "PT": {
          color: "red",
          info: "Portugal",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "CY": {
         
          info: "Cyprus",
           }      
      },
    "1990": {
      "AL": {
         
        },
        "AD": {
          
        },
        "AL": {
         
        },
        "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "BA": {
          color: "red",
          info: "Bosnia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "BY": {
          color: "red",
          info: "Belarus",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "CH": {
          color: "red",
          info: "Switzerland",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "CZ": {
          color: "red",
          info: "Czech Republic",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "DE": {
          color: "red",
          info: "Germany",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "DK": {
          color: "red",
          info: "Denmark",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "EE": {
          color: "red",
          info: "Estonia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "FI": {
          color: "red",
          info: "Finland",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "GB": {
          color: "red",
          info: "United Kingdom",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "GE": {
          color: "red",
          info: "Georgia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "GR": {
          color: "red",
          info: "Greece",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "HR": {
          color: "red",
          info: "Croatia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "HU": {
          color: "red",
          info: "Hungary",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "IE": {
          color: "red",
          info: "Ireland",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "IS": {
          color: "red",
          info: "Iceland",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "IT": {
          color: "red",
          info: "Italy",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "LI": {
          color: "red",
          info: "Liechtenstein",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "LT": {
          color: "red",
          info: "Lithuania",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "LU": {
          color: "red",
          info: "Luxembourg",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "LV": {
          color: "red",
          info: "Latvia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "MD": {
          color: "red",
          info: "Moldova",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "MK": {
          color: "red",
          info: "Macedonia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "ME": {
          color: "red",
          info: "Montenegro",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "NO": {
          color: "red",
          info: "Norway",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "PL": {
          color: "red",
          info: "Poland",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "PT": {
          color: "red",
          info: "Portugal",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "RO": {
          color: "red",
          info: "Romania",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "RS": {
          color: "red",
          info: "Serbia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "SK": {
          color: "red",
          info: "Slovakia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "SI": {
          color: "red",
          info: "Slovenia",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "SE": {
          color: "red",
          info: "Sweden",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "TR": {
          color: "red",
          info: "Turkey",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "UA": {
          color: "red",
          info: "Ukraine",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "XK": {
          color: "red",
          info: "Kosovo",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "NL": {
          color: "red",
          info: "Netherlands",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "ES": {
          color: "red",
          info: "Spain",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "FR": {
          color: "#0af",
          info: "France",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "PT": {
          color: "red",
          info: "Portugal",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
        },
        "CY": {
          color: "#0af",
          info: "Cyprus",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,  }      
    
    },
    "1991": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "1992": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "1993": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "1994": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "1995": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "1996": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "1997": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "1998": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "1999": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2000": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2001": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2002": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2003": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2004": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2005": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2006": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2007": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2008": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2009": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "FR": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2010": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2011": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2012": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2013": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2014": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2015": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2016": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    },
    "2024": {
      "AL": {
        color: "#a0f",
        info: "Albania - Text for 2000"
      },
      "AD": {
        color: "#f00",
        info: "Andorra - Text for 2000"
      }
    }
  };
  
  const yearSlider = document.getElementById("yearSlider");
  const selectedYearText = document.getElementById("selectedYear");
  const countryName = document.getElementById("countryName");
  const countryInfo = document.getElementById("countryInfo");
  
  //update country colors  based on year
  function updateMapColors(year) {
    const paths = document.querySelectorAll("svg path");
  
    paths.forEach((path) => {
      const countryId = path.id;
      if (data[year] && data[year][countryId]) {
        path.style.fill = data[year][countryId].color;
      } else {
        path.style.fill = "white";
      }
    });
  }
  
  // update 
  function updateCountryInfo(countryId, year) {
    const countryData = data[year]?.[countryId];
  
    if (countryData) {
      // Update country name and info
      countryName.textContent = countryData.info;
      countryInfo.textContent = `Details for ${countryData.info}`;
  
      // Get the table body and clear existing rows
      const tableBody = document.querySelector("#infoTable tbody");
      tableBody.innerHTML = "";
  
      // Define the table content
      const rows = [
        {
          category: "Marriage Equality",
          status: countryData.marriageEquality === true
            ? '<i class="fa fa-check-circle text-success"></i>'
            : countryData.marriageEquality === "partial"
            ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
            : '<i class="fa fa-times-circle text-danger"></i>'
        },
        {   category: "Registered Partnership",
            status: countryData.registeredPartnership === true
            ? '<i class="fa fa-check-circle text-success"></i>'
            : countryData.registeredPartnership === false
            ? '<i class="fa fa-times-circle text-danger"></i>'
            : countryData.registeredPartnership === "partial"
            ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
            : '<i class="fa fa-question-circle text-secondary"></i> Unknown'
              
              
          },
        {
            category: "Cohabitation",
            status: countryData.Cohabitation === true
            ? '<i class="fa fa-check-circle text-success"></i>'
            : countryData.Cohabitation === false
            ? '<i class="fa fa-times-circle text-danger"></i>'
            : countryData.Cohabitation === "partial"
            ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
            : '<i class="fa fa-question-circle text-secondary"></i> Unknown'
              
          },
        {
            category: "Adoption - Marriage",
            status: countryData.AdoptionMarried=== true
              ? '<i class="fa fa-check-circle text-success"></i>'
              : countryData.AdoptionMarried === false
              ? '<i class="fa fa-times-circle text-danger"></i>'
              : countryData.AdoptionMarried === "partial"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
              : '<i class="fa fa-times-circle text-danger"></i>'
          },
          {
            category: "Adoption - Partnership",
            status: countryData.AdoptionRegistered=== true
              ? '<i class="fa fa-check-circle text-success"></i>'
              : countryData.AdoptionRegistered === false
              ? '<i class="fa fa-times-circle text-danger"></i>'
              : countryData.AdoptionRegistered=== "partial"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
              : '<i class="fa fa-times-circle text-danger"></i>'
          },
          {
            category: "Adoption - Cohabitation",
            status: countryData.AdoptionCohabitation === true
              ? '<i class="fa fa-check-circle text-success"></i>'
              : countryData.AdoptionCohabitation === false
              ? '<i class="fa fa-times-circle text-danger"></i>'
              : countryData.AdoptionCohabitation === "partial"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
              : '<i class="fa fa-times-circle text-danger"></i>'
          }
      ];
  
      // Populate the table
      rows.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.category}</td><td>${row.status}</td>`;
        tableBody.appendChild(tr);
      });
    } else {
      countryName.textContent = "No Information";
      countryInfo.textContent = "";
  
      // Clear the table if no data is available
      const tableBody = document.querySelector("#infoTable tbody");
      tableBody.innerHTML = "<tr><td colspan='2'>No Data Available</td></tr>";
    }
  }
  
  
  
  //slider 
  yearSlider.addEventListener("input", (e) => {
    const year = e.target.value;
    selectedYearText.textContent = year;
    updateMapColors(year);
  });
  
  //clicks
  const paths = document.querySelectorAll("svg path");
  paths.forEach((path) => {
    path.addEventListener("click", () => {
      const countryId = path.id;
      const year = yearSlider.value;
      updateCountryInfo(countryId, year);
    });
  });
  