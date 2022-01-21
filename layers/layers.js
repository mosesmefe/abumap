var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_parking_lot_1 = new ol.format.GeoJSON();
var features_parking_lot_1 = format_parking_lot_1.readFeatures(json_parking_lot_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parking_lot_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parking_lot_1.addFeatures(features_parking_lot_1);
var lyr_parking_lot_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parking_lot_1, 
                style: style_parking_lot_1,
                interactive: true,
                title: '<img src="styles/legend/parking_lot_1.png" /> parking_lot'
            });
var format_Places_2 = new ol.format.GeoJSON();
var features_Places_2 = format_Places_2.readFeatures(json_Places_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Places_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_2.addFeatures(features_Places_2);
var lyr_Places_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Places_2, 
                style: style_Places_2,
                interactive: true,
                title: '<img src="styles/legend/Places_2.png" /> Places'
            });
var format_PUBLIC_AREA_MIXED_USE_3 = new ol.format.GeoJSON();
var features_PUBLIC_AREA_MIXED_USE_3 = format_PUBLIC_AREA_MIXED_USE_3.readFeatures(json_PUBLIC_AREA_MIXED_USE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUBLIC_AREA_MIXED_USE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUBLIC_AREA_MIXED_USE_3.addFeatures(features_PUBLIC_AREA_MIXED_USE_3);
var lyr_PUBLIC_AREA_MIXED_USE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUBLIC_AREA_MIXED_USE_3, 
                style: style_PUBLIC_AREA_MIXED_USE_3,
                interactive: true,
                title: '<img src="styles/legend/PUBLIC_AREA_MIXED_USE_3.png" /> PUBLIC_AREA_MIXED_USE'
            });
var format_SCHLS_4 = new ol.format.GeoJSON();
var features_SCHLS_4 = format_SCHLS_4.readFeatures(json_SCHLS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHLS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHLS_4.addFeatures(features_SCHLS_4);
var lyr_SCHLS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHLS_4, 
                style: style_SCHLS_4,
                interactive: true,
                title: '<img src="styles/legend/SCHLS_4.png" /> SCHLS'
            });
var format_SERVICES_5 = new ol.format.GeoJSON();
var features_SERVICES_5 = format_SERVICES_5.readFeatures(json_SERVICES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVICES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICES_5.addFeatures(features_SERVICES_5);
var lyr_SERVICES_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SERVICES_5, 
                style: style_SERVICES_5,
                interactive: true,
                title: '<img src="styles/legend/SERVICES_5.png" /> SERVICES'
            });
var format_STAFF_RESIDENCES_6 = new ol.format.GeoJSON();
var features_STAFF_RESIDENCES_6 = format_STAFF_RESIDENCES_6.readFeatures(json_STAFF_RESIDENCES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STAFF_RESIDENCES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STAFF_RESIDENCES_6.addFeatures(features_STAFF_RESIDENCES_6);
var lyr_STAFF_RESIDENCES_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STAFF_RESIDENCES_6, 
                style: style_STAFF_RESIDENCES_6,
                interactive: true,
                title: '<img src="styles/legend/STAFF_RESIDENCES_6.png" /> STAFF_RESIDENCES'
            });
var format_Stream_7 = new ol.format.GeoJSON();
var features_Stream_7 = format_Stream_7.readFeatures(json_Stream_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stream_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stream_7.addFeatures(features_Stream_7);
var lyr_Stream_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stream_7, 
                style: style_Stream_7,
                interactive: true,
                title: '<img src="styles/legend/Stream_7.png" /> Stream'
            });
var format_STUDENT_HALLS_OF_RESIDENCE_8 = new ol.format.GeoJSON();
var features_STUDENT_HALLS_OF_RESIDENCE_8 = format_STUDENT_HALLS_OF_RESIDENCE_8.readFeatures(json_STUDENT_HALLS_OF_RESIDENCE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STUDENT_HALLS_OF_RESIDENCE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STUDENT_HALLS_OF_RESIDENCE_8.addFeatures(features_STUDENT_HALLS_OF_RESIDENCE_8);
var lyr_STUDENT_HALLS_OF_RESIDENCE_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STUDENT_HALLS_OF_RESIDENCE_8, 
                style: style_STUDENT_HALLS_OF_RESIDENCE_8,
                interactive: true,
                title: '<img src="styles/legend/STUDENT_HALLS_OF_RESIDENCE_8.png" /> STUDENT_HALLS_OF_RESIDENCE'
            });
var format_Trees_9 = new ol.format.GeoJSON();
var features_Trees_9 = format_Trees_9.readFeatures(json_Trees_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_9.addFeatures(features_Trees_9);
var lyr_Trees_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_9, 
                style: style_Trees_9,
                interactive: true,
                title: '<img src="styles/legend/Trees_9.png" /> Trees'
            });
var format_University_Fence_10 = new ol.format.GeoJSON();
var features_University_Fence_10 = format_University_Fence_10.readFeatures(json_University_Fence_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_University_Fence_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_University_Fence_10.addFeatures(features_University_Fence_10);
var lyr_University_Fence_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_University_Fence_10, 
                style: style_University_Fence_10,
                interactive: true,
                title: '<img src="styles/legend/University_Fence_10.png" /> University_Fence'
            });
var format_ABU_Dam_11 = new ol.format.GeoJSON();
var features_ABU_Dam_11 = format_ABU_Dam_11.readFeatures(json_ABU_Dam_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABU_Dam_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABU_Dam_11.addFeatures(features_ABU_Dam_11);
var lyr_ABU_Dam_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ABU_Dam_11, 
                style: style_ABU_Dam_11,
                interactive: true,
                title: '<img src="styles/legend/ABU_Dam_11.png" /> ABU_Dam'
            });
var format_ACADEMIC_BUILDINGS_12 = new ol.format.GeoJSON();
var features_ACADEMIC_BUILDINGS_12 = format_ACADEMIC_BUILDINGS_12.readFeatures(json_ACADEMIC_BUILDINGS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACADEMIC_BUILDINGS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACADEMIC_BUILDINGS_12.addFeatures(features_ACADEMIC_BUILDINGS_12);
var lyr_ACADEMIC_BUILDINGS_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACADEMIC_BUILDINGS_12, 
                style: style_ACADEMIC_BUILDINGS_12,
                interactive: true,
                title: '<img src="styles/legend/ACADEMIC_BUILDINGS_12.png" /> ACADEMIC_BUILDINGS'
            });
var format_ADMINISTRATIVE_BUILDINGS_13 = new ol.format.GeoJSON();
var features_ADMINISTRATIVE_BUILDINGS_13 = format_ADMINISTRATIVE_BUILDINGS_13.readFeatures(json_ADMINISTRATIVE_BUILDINGS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRATIVE_BUILDINGS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRATIVE_BUILDINGS_13.addFeatures(features_ADMINISTRATIVE_BUILDINGS_13);
var lyr_ADMINISTRATIVE_BUILDINGS_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRATIVE_BUILDINGS_13, 
                style: style_ADMINISTRATIVE_BUILDINGS_13,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRATIVE_BUILDINGS_13.png" /> ADMINISTRATIVE_BUILDINGS'
            });
var format_ATM_14 = new ol.format.GeoJSON();
var features_ATM_14 = format_ATM_14.readFeatures(json_ATM_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATM_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATM_14.addFeatures(features_ATM_14);
var lyr_ATM_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ATM_14, 
                style: style_ATM_14,
                interactive: true,
                title: '<img src="styles/legend/ATM_14.png" /> ATM'
            });
var format_Lawns_15 = new ol.format.GeoJSON();
var features_Lawns_15 = format_Lawns_15.readFeatures(json_Lawns_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lawns_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lawns_15.addFeatures(features_Lawns_15);
var lyr_Lawns_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lawns_15, 
                style: style_Lawns_15,
                interactive: true,
                title: '<img src="styles/legend/Lawns_15.png" /> Lawns'
            });

lyr_OSMStandard_0.setVisible(true);lyr_parking_lot_1.setVisible(true);lyr_Places_2.setVisible(true);lyr_PUBLIC_AREA_MIXED_USE_3.setVisible(true);lyr_SCHLS_4.setVisible(true);lyr_SERVICES_5.setVisible(true);lyr_STAFF_RESIDENCES_6.setVisible(true);lyr_Stream_7.setVisible(true);lyr_STUDENT_HALLS_OF_RESIDENCE_8.setVisible(true);lyr_Trees_9.setVisible(true);lyr_University_Fence_10.setVisible(true);lyr_ABU_Dam_11.setVisible(true);lyr_ACADEMIC_BUILDINGS_12.setVisible(true);lyr_ADMINISTRATIVE_BUILDINGS_13.setVisible(true);lyr_ATM_14.setVisible(true);lyr_Lawns_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_parking_lot_1,lyr_Places_2,lyr_PUBLIC_AREA_MIXED_USE_3,lyr_SCHLS_4,lyr_SERVICES_5,lyr_STAFF_RESIDENCES_6,lyr_Stream_7,lyr_STUDENT_HALLS_OF_RESIDENCE_8,lyr_Trees_9,lyr_University_Fence_10,lyr_ABU_Dam_11,lyr_ACADEMIC_BUILDINGS_12,lyr_ADMINISTRATIVE_BUILDINGS_13,lyr_ATM_14,lyr_Lawns_15];
lyr_parking_lot_1.set('fieldAliases', {'Id': 'Id', });
lyr_Places_2.set('fieldAliases', {'Name': 'Name', 'X_Coordina': 'X_Coordina', 'Y_Coordina': 'Y_Coordina', 'Remark': 'Remark', });
lyr_PUBLIC_AREA_MIXED_USE_3.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'X_Coordina': 'X_Coordina', 'Y_Coordina': 'Y_Coordina', 'Photo': 'Photo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SCHLS_4.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Photo': 'Photo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SERVICES_5.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Photo': 'Photo', 'Id': 'Id', 'AREA': 'AREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_STAFF_RESIDENCES_6.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'House_Numb': 'House_Numb', 'Photo': 'Photo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Stream_7.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', });
lyr_STUDENT_HALLS_OF_RESIDENCE_8.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Photo': 'Photo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Trees_9.set('fieldAliases', {'Id': 'Id', });
lyr_University_Fence_10.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', });
lyr_ABU_Dam_11.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', 'Photo': 'Photo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ACADEMIC_BUILDINGS_12.set('fieldAliases', {'Name': 'Name', 'Code_Name': 'Code_Name', 'Code': 'Code', 'Photo': 'Photo', 'Id': 'Id', 'Descriptio': 'Descriptio', 'AREA': 'AREA', 'AREA2': 'AREA2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ADMINISTRATIVE_BUILDINGS_13.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Photo': 'Photo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ATM_14.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Lawns_15.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_parking_lot_1.set('fieldImages', {'Id': '', });
lyr_Places_2.set('fieldImages', {'Name': '', 'X_Coordina': '', 'Y_Coordina': '', 'Remark': '', });
lyr_PUBLIC_AREA_MIXED_USE_3.set('fieldImages', {'Name': '', 'Code': '', 'X_Coordina': '', 'Y_Coordina': '', 'Photo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SCHLS_4.set('fieldImages', {'Name': '', 'Code': '', 'Photo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SERVICES_5.set('fieldImages', {'Name': '', 'Code': '', 'Photo': '', 'Id': '', 'AREA': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_STAFF_RESIDENCES_6.set('fieldImages', {'Name': '', 'Code': '', 'House_Numb': '', 'Photo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Stream_7.set('fieldImages', {'Id': '', 'Shape_Leng': '', });
lyr_STUDENT_HALLS_OF_RESIDENCE_8.set('fieldImages', {'Name': '', 'Code': '', 'Photo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Trees_9.set('fieldImages', {'Id': '', });
lyr_University_Fence_10.set('fieldImages', {'Id': '', 'Shape_Leng': '', });
lyr_ABU_Dam_11.set('fieldImages', {'Id': '', 'AREA': '', 'Photo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ACADEMIC_BUILDINGS_12.set('fieldImages', {'Name': '', 'Code_Name': '', 'Code': '', 'Photo': '', 'Id': '', 'Descriptio': '', 'AREA': '', 'AREA2': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ADMINISTRATIVE_BUILDINGS_13.set('fieldImages', {'Name': '', 'Code': '', 'Photo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ATM_14.set('fieldImages', {'Id': '', 'Name': '', });
lyr_Lawns_15.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr_parking_lot_1.set('fieldLabels', {'Id': 'no label', });
lyr_Places_2.set('fieldLabels', {'Name': 'no label', 'X_Coordina': 'no label', 'Y_Coordina': 'no label', 'Remark': 'no label', });
lyr_PUBLIC_AREA_MIXED_USE_3.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'X_Coordina': 'no label', 'Y_Coordina': 'no label', 'Photo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SCHLS_4.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Photo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SERVICES_5.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Photo': 'no label', 'Id': 'no label', 'AREA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_STAFF_RESIDENCES_6.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'House_Numb': 'no label', 'Photo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Stream_7.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', });
lyr_STUDENT_HALLS_OF_RESIDENCE_8.set('fieldLabels', {'Name': 'inline label', 'Code': 'no label', 'Photo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Trees_9.set('fieldLabels', {'Id': 'no label', });
lyr_University_Fence_10.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', });
lyr_ABU_Dam_11.set('fieldLabels', {'Id': 'no label', 'AREA': 'no label', 'Photo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ACADEMIC_BUILDINGS_12.set('fieldLabels', {'Name': 'inline label', 'Code_Name': 'no label', 'Code': 'no label', 'Photo': 'no label', 'Id': 'no label', 'Descriptio': 'no label', 'AREA': 'no label', 'AREA2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ADMINISTRATIVE_BUILDINGS_13.set('fieldLabels', {'Name': 'inline label', 'Code': 'no label', 'Photo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ATM_14.set('fieldLabels', {'Id': 'inline label', 'Name': 'header label', });
lyr_Lawns_15.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Lawns_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});