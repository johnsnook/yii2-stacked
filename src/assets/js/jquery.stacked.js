/*
 * @author John Snook
 * @date Jul 2, 2018
 * @license https://snooky.biz/site/license
 * @copyright 2018 John Snook Consulting
 * The problem with tabbed interfaces is you can't see what you're going to get.
 * With stax, your "tab panes" are displayed in a stack, giving the user a peek.
 *
 * This needs to be made into a plugin, I just can't be bothered right now
 *
 * oops nevermind it's a plugin now
 */

(function ($) {
    var stackId;
    var stackItems;
    var settings;
    var element;
    $.fn.Stacked = function (options) {
        settings = $.extend({
            gutter: 50
        }, options);
        stackId = this.attr('id');
        this.css('position', 'absolute')
                .css('top', settings.gutter)
                .css('left', settings.gutter)
                .css('right', settings.gutter)
                .css('bottom', settings.gutter);
        stackItems = this.children();
        $(stackItems)
                .css('position', 'absolute')
                .css('margin-bottom', settings.gutter)

        $(window).on('resize', function () {
            stackEm();
        });
        element = this;
        stackEm();
        return this;
    };

    function stackEm() {
        var i = 1;
        var count = ($(stackItems)).length;
        var containerWidth = $('#' + stackId).innerWidth();
        var containerHeight = $('#' + stackId).innerHeight();
        var itemWidth = containerWidth - (count * settings.gutter) - settings.gutter;
        var itemHeight = containerHeight - (count * settings.gutter) - settings.gutter;
        stackItems = $(element).children();

        $(stackItems).each(function (index, elem) {
            $(this)
                    .off('click')
                    .width(itemWidth)
                    .height(itemHeight)
                    .css('z-index', i)
                    .css('left', settings.gutter * i)
                    .css('top', settings.gutter * i)
                    .fadeIn(150)
                    .find('.panel-body').css('height', itemHeight - 50);


            $(this).on('click', function (event) {
                let topIndex = count - 1;
                if ($(this).index() < topIndex) {
                    event.stopPropagation();
                    $(this).fadeOut(150, function () {
                        $(this).insertAfter($(stackItems).eq(topIndex));
                        stackEm();
                    });
                }
            });
            i++;
        });
    }
}(jQuery));


