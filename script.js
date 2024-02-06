ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [53.931064214027906, 27.64529420786517], // Координаты центра карты
        zoom: 15 // Уровень масштабирования
    });

    // Создание маркера
    var myPlacemark = new ymaps.Placemark([53.931064214027906, 27.64529420786517], { 
        hintContent: 'Памятник', 
        balloonContent: 'Мелетий Смотрицкий' 
    });

    // Добавление маркера на карту
    myMap.geoObjects.add(myPlacemark);
}
