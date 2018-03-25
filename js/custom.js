var grid = $('.grid');
$grid.imagesLoaded(function(){
    $grid.isotope({
      itemSelector: ".isotope-item",
      layoutMode: 'packery',
      resizeContainer: true,
        }
    });
    $('.isotope-item img').addClass('not-loaded');
    $('.isotope-item img.not-loaded').lazyload({
        effect: 'fadeIn',
        load: function() {
            // Disable trigger on this image
            $(this).removeClass("not-loaded");
            $container.masonry('reload');
        }
    });
    $('.isotope-item img.not-loaded').trigger('scroll');
});
