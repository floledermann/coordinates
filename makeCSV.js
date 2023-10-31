const all = require("epsg-index/all.json")
const proj = require("proj4");

let count = 0;

for (let crs of Object.values(all)) {
  //console.log(crs.kind + ":" + crs.name);
  // only use projected or geographic CRS, ignore planetary CRS
  if (["CRS-PROJCRS","CRS-GEOGCRS"].includes(crs.kind) && crs.code<104872 && !(crs.code >= 103877 && crs.code <= 103887 )) {
    
    let valid = false;
    
    try {
      let p = proj(crs.proj4);
      valid = true;
    }
    catch (e) {
      // ignore errors, but don't generate output line for unsupported CRS
      //console.error("Error with " + crs.code);
      //console.error(e);
    }

    if (!crs.unit) valid = false;
    
    if (crs.proj4?.includes("+nadgrids") && !crs.proj4?.includes("+nadgrids=@null")) valid = false;
    
    if (valid) {
      let bounds = crs.bbox;
      let boundsStr = "-";
      
      if (bounds[0]<90 || bounds[1]>-180 || bounds[2]>-90 || bounds[3]<180) {
        boundsStr = bounds.join(";")
      }
      
      let kind = crs.kind == "CRS-PROJCRS" ? "P":"G";
      
      let name = crs.name.replace(/\,/g,";");
      
      console.log([crs.code,kind,name,boundsStr].join(","));
      count++;
    }
  }
}

console.error(count + " entries generated.");
