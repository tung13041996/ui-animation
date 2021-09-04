#Vertical Menu Hover Animation

##Introduce
This plugin will show you animation for vertical menu: when you hover items on vertical menu, 1 box move to that item alternately from an item you setted up before

##Structure

###html: 
Setup html like this structure
``` CSS
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```

###Javascript
This plugin uses Jquery, so you must install jquery CDN before
add sources code in file script.js to your project.

##Usage
Some option for you to use this plugin:

| **Option** | **Description** | **Note** |
| :--- | :--- | :--- |
| ul | This element is a list item of vertical menu | with structure HTML like example: ul: "ul" |
| backgroundColor | string: background color of box move to item | default: backgroundColor: 'skyblue' |
| currentItemsIndex | number: position of box move to item for the first screen when page loaded| default: currentItemsIndex: 0 |