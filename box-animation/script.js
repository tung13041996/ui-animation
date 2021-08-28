$(document).ready(function () {
    function verticalMenuHoverAnimation(options) {
        // variables
        let settings = $.extend({
            ul: '',
            backgroundColor: 'red', // color of box
            currentItemsIndex: 0, //position of box in first screen
            css: {
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: '0',
                width: '100%',
                transition: 'all .5s ease',
            }
        }, options);

        // update position each $li hover
        function updatePosition($li, $movingBox) {
            if (!$li.length) return;
            $movingBox.css({
                'transform': `translateY(${$li.position().top}px)`,
                'height': $li.outerHeight() + "px",
            });
        }

        // loop each ul
        settings.ul.each(function () {
            const $this_ul = $(this);
            let $li = $this_ul.children('li'),
                $movingBox;

            // add box move to ul
            $this_ul.append('<span class="box-move"></span>');
            $movingBox = $this_ul.find(".box-move");

            // set css for this box at position default (current item)
            settings.css.height = $li.outerHeight() + 'px';
            settings.css.backgroundColor = settings.backgroundColor;
            settings.css.transformY = $li.eq(settings.currentItemsIndex).position().top + "px";
            $movingBox.css(settings.css);

            // hover on li
            $li.hover(function () {
                // in => adjust position
                updatePosition($(this), $movingBox);
            }, function () {
                // out => set default position
                updatePosition($li.eq(settings.currentItemsIndex), $movingBox);
            });

            // on load
            updatePosition($li.eq(settings.currentItemsIndex), $movingBox);
        });
    }

    // init animation
    verticalMenuHoverAnimation({
        ul: $(".vertical-menu ul"),
        backgroundColor: 'skyblue',
        currentItemsIndex: 0,
    });
});