/*visualization*/
// Colours for each year
const data = {
    "1989": {
      "AL": {
        color: "#f0a",
        info: "Albania - Text for 1980"
      },
      "AD": {
        color: "#fa0",
        info: "Andorra - Text for 1980"
      }
    },
    "1990": {
      "AL": {
        color: "#0af",
        info: "Albania - Text for 1990"
      },
      "FR": {
        color: "#0a0",
        info: "Andorra - Text for 1990"
      }
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
    if (data[year] && data[year][countryId]) {
      countryName.textContent = countryId; 
      countryInfo.textContent = data[year][countryId].info;
    } else {
      countryName.textContent = "No Information";
      countryInfo.textContent = "";
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