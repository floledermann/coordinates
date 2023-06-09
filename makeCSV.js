const all = require('epsg-index/all.json')

for (let crs of Object.values(all)) {
  //console.log(crs.kind + ":" + crs.name);
  // only use projected or geographic CRS, ignore planetary CRS
  if (["CRS-PROJCRS","CRS-GEOGCRS"].includes(crs.kind) && crs.code<104872) {
    let bounds = crs.bbox;
    let boundsStr = "-";
    
    if (bounds[0]<90 || bounds[1]>-180 || bounds[2]>-90 || bounds[3]<180) {
      boundsStr = bounds.join(";")
    }
    
    let kind = crs.kind == "CRS-PROJCRS" ? "P":"G";
    
    console.log([crs.code,kind,crs.name,boundsStr].join(","));
  }
}