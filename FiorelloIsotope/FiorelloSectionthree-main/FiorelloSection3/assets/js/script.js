setInterval(function () {
  plusSlides(1);
}, 5000);


//initialize isotope 
var $container = $('.isotope_container');
$container.isotope({
  itemSelector: ".isotope_selector",//filter edilecek olanlar
  layoutMode: "fitRows",
});


// filter items when li is clicked
$("#isotope_filters li ").click('click', function () {
  // var selector = $(this).attr("data-filter");
  $container.isotope({
    filter: $(this).attr("data-filter")
  });
});

//jquery
$('h5 ').css('color', 'teal');
$('a ').css({
  'color': 'grey',
  'text-decoration': 'none'
});
$('ul#list li:nth-child(n)').css('list-style', 'none');
$('ul#isotope_filters li:nth-child(n)').css('list-style', 'none');
