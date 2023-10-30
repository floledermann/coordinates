# coordinates

A simple web app to show geo coordinates in two different [coordinate reference systems (CRS)](https://en.wikipedia.org/wiki/Spatial_reference_system).

Live at https://cartolab.at/coords/

Buildless monolithic no-framework app, you find everything in [index.html](https://github.com/floledermann/coordinates/blob/main/index.html).

Node stuff is only used for the script [makeCSV.js](https://github.com/floledermann/coordinates/blob/main/makeCSV.js), which is used to generate [allEPSG.csv](https://github.com/floledermann/coordinates/blob/main/allEPSG.csv)
 containing the metadata for all CRS. If you want to run this script yourself for some reason, run `npm i` first to install the necessary Node modules.
 
 Upon selection of a CRS in the app, its full data is loaded from the file in [crs_data](https://github.com/floledermann/coordinates/tree/main/crs_data).
