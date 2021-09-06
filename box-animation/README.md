# Vertical Menu Hover Animation v1.0

## Introduce
This plugin will show you animation for vertical menu: when you hover items on vertical menu, 1 box move to that item alternately from an item you setted up before

See [demo](https://tung13041996.github.io/ui-animation/box-animation/)

## Structure

### html: 
Setup html like this structure
``` HTML
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```

### Javascript
This plugin uses Jquery, so you must install jquery CDN before
add sources code in file script.js to your project.

Init plugin in javascript:
```HTML
    verticalMenuHoverAnimation({
        option1: value1,
        option2: value2,
        ...
    });
```

## Usage
Some option for you to use this plugin:

| **Option** | **Type** | **Default** | **Description** |
| :--- | :--- | :--- | :---|
| ul | string | ul: "" | add class which is a list item of vertical menu |
| backgroundColor | string | backgroundColor: 'skyblue' | background color of box move to item |
| currentItemsIndex | number | currentItemsIndex: 0 | position of box move to item for the first screen when page loaded |