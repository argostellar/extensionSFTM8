var url = 'http://www.softomate.net/ext/employees/list.json';

var externalInfo = function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var uploadedList = externalInfo(url);  							// загружаем массив объектов в переменную

var createLink = function(name, domain) { 					// создаём функцию, создающую одну ссылку
	var itemName = name;
	var itemDomain = domain;
	var link = document.createElement('a');
	element.href = itemDomain;
	element.textContent = itemName;

	return link;
}

var createItem = function() {                 				// создаём функцию, создающую один элемент списка
	var item = document.createElement('li');
	var internalLink = createLink();
	item.appendChild(internalLink);

	return item;
}

var linkList = document.querySelector('.main__list'); 		// находим родительский элемент, куда будем вставлять созданный список

for (i = 0; i < uploadedList.length; i++) {
	var listItem = createItem(uploadedList[i]);
	linkList.appendChild(listItem);
}


