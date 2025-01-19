
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
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
        "BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
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
    "1990": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
     "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "1991": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "1992": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "1993": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
     "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "1994": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "1995": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {

          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "1996": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
     "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: false,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "1997": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },
        "BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
     "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partialYes",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "1998": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partialYes",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "1999": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partialYes",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2000": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
     "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partialYes",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2001": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partialYes",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2002": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "red",
          info: "Belgium",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partialYes",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2003": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2004": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2005": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        }, "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2006": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2007": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2008": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2009": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
        },
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
        },
    },
    "2010": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
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
    },
    "2011": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
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
    },
    "2012": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
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
    },
    "2013": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
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
    },
    "2014": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
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
    },
    "2015": {"BG": {
          color: "red",
          info: "Bulgaria",
          marriageEquality: false,
          registeredPartnership	: false,
          Cohabitation: "partial",
          AdoptionMarried:false,
          AdoptionRegistered: false,
          AdoptionCohabitation:false,
         
        },"BE": {
          color: "green",
          info: "Belgium",
          marriageEquality: true,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:true,
          AdoptionRegistered: true,
          AdoptionCohabitation:"partialYes",
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
    },
    "2016": {
      "AT": {
          color: "red",
          info: "Austria",
          marriageEquality: false,
          registeredPartnership	: true,
          Cohabitation: true,
          AdoptionMarried:false,
          AdoptionRegistered: true,
          AdoptionCohabitation:true,
        },
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
              : countryData.marriageEquality === false
              ? '<i class="fa fa-times-circle text-danger"></i>'
              : countryData.marriageEquality === "partial"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
              : countryData.marriageEquality === "partialYes"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> Yes, but...'
              : '<i class="fa fa-times-circle text-secondary"></i>'
          },
          {
            category: "Registered Partnership",
            status: countryData.registeredPartnership === true
              ? '<i class="fa fa-check-circle text-success"></i>'
              : countryData.registeredPartnership === false
              ? '<i class="fa fa-times-circle text-danger"></i>'
              : countryData.registeredPartnership === "partial"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
              : countryData.registeredPartnership === "partialYes"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> Yes, but...'
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
              : countryData.Cohabitation === "partialYes"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> Yes, but...'
              : '<i class="fa fa-question-circle text-secondary"></i> Unknown'
          },
          {
            category: "Adoption - Marriage",
            status: countryData.AdoptionMarried === true
              ? '<i class="fa fa-check-circle text-success"></i>'
              : countryData.AdoptionMarried === false
              ? '<i class="fa fa-times-circle text-danger"></i>'
              : countryData.AdoptionMarried === "partial"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
              : countryData.AdoptionMarried === "partialYes"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> Yes, but...'
              : '<i class="fa fa-question-circle text-secondary"></i> Unknown'
          },
          {
            category: "Adoption - Partnership",
            status: countryData.AdoptionRegistered === true
              ? '<i class="fa fa-check-circle text-success"></i>'
              : countryData.AdoptionRegistered === false
              ? '<i class="fa fa-times-circle text-danger"></i>'
              : countryData.AdoptionRegistered === "partial"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
              : countryData.AdoptionRegistered === "partialYes"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> Yes, but...'
              : '<i class="fa fa-question-circle text-secondary"></i> Unknown'
          },
          {
            category: "Adoption - Cohabitation",
            status: countryData.AdoptionCohabitation === true
              ? '<i class="fa fa-check-circle text-success"></i>'
              : countryData.AdoptionCohabitation === false
              ? '<i class="fa fa-times-circle text-danger"></i>'
              : countryData.AdoptionCohabitation === "partial"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> No, but...'
              : countryData.AdoptionCohabitation === "partialYes"
              ? '<i class="fa fa-exclamation-circle text-warning"></i> Yes, but...'
              : '<i class="fa fa-question-circle text-secondary"></i> Unknown'
          },
          
         
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
  