var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: 'межа_полігон',
                interactive: true,
                title: '<img src="styles/legend/__1.png" /> межа_полігон'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Вулиці',
                interactive: true,
    title: 'Вулиці<br />\
    <img src="styles/legend/_2_0.png" /> <br />\
    <img src="styles/legend/_2_1.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr___1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr___1,lyr__2];
lyr___1.set('fieldAliases', {'fid': 'fid', 'ADM4_EN': 'ADM4_EN', 'ADM4_UA': 'ADM4_UA', 'ADM4_RU': 'ADM4_RU', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM3_EN': 'ADM3_EN', 'ADM3_UA': 'ADM3_UA', 'ADM3_RU': 'ADM3_RU', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_UA': 'ADM2_UA', 'ADM2_RU': 'ADM2_RU', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_UA': 'ADM1_UA', 'ADM1_RU': 'ADM1_RU', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_UA': 'ADM0_UA', 'ADM0_RU': 'ADM0_RU', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'AREA_SQKM': 'AREA_SQKM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'new_name': 'new_name', 'st_type': 'st_type', 'name2': 'name2', });
lyr___1.set('fieldImages', {'fid': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_UA': 'TextEdit', 'ADM4_RU': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_UA': 'TextEdit', 'ADM3_RU': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_UA': 'TextEdit', 'ADM2_RU': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_UA': 'TextEdit', 'ADM1_RU': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_UA': 'TextEdit', 'ADM0_RU': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'AREA_SQKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'new_name': 'TextEdit', 'st_type': 'TextEdit', 'name2': 'TextEdit', });
lyr___1.set('fieldLabels', {'fid': 'no label', 'ADM4_EN': 'no label', 'ADM4_UA': 'no label', 'ADM4_RU': 'no label', 'ADM4_PCODE': 'no label', 'ADM3_EN': 'no label', 'ADM3_UA': 'no label', 'ADM3_RU': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_UA': 'no label', 'ADM2_RU': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_UA': 'no label', 'ADM1_RU': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_UA': 'no label', 'ADM0_RU': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'AREA_SQKM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'new_name': 'no label', 'st_type': 'no label', 'name2': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});