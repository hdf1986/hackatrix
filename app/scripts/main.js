(function() {
  function formatSelection (data) {
    if (!data.id) { return data.text; }
    var $result= $(
      '<span>' + data.text + '</span>'
    );
    return $result;
  };
  function formatResult (data) {
    if (!data.id) { return data.text; }
    var $result= $(
      '<div class="selectli"><img src="' + data.image + '"/><div> ' + data.text + '<br/>$30.9</div></div>'
    );
    return $result;
  };
  var data = [{
    id: 0,
    image: 'https://ichef.bbci.co.uk/news/ws/660/amz/worldservice/live/assets/images/2014/11/05/141105131956_leche_624x351_thinkstock.jpg',
    text: 'Leche',
    priceG: '22,50',
    priceM: '6,67'
  },{
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmS3tbCPtxfXwmztUuuiYMkxXq5DG08SwZXkOWvSknKjdHK_46A',
    text: 'Aceite',
    priceG: '29,90',
    priceM: '18,60'
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8O5kiKIFWE0JoxgU8bKLFURGZqqmA7ReLWg8Siim_vFUAoA5QQ',
    text:'Pan' ,
    priceG: '35,60',
    priceM: '13'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolZB0mcNe4rms9XmtQ_-wZv09L4mhNSC5GX-A-Ch66mGfCT0iqA',
    text:'Harina' ,
    priceG: '35,60',
    priceM: '13'
  },
  {
    id: 4,
    image: 'http://yerbamateargentina.org.ar/wordpress/wp-content/uploads/2016/06/yerba-mate-aguantadora-tradicional-500-gr.jpg',
    text:'Yerba'  ,
    priceG: '58,98',
    priceM: '5,10'
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6EOc94k6ycqgO9zibZ9CVL3oEP4HUCwGo59oB7MTSynetkRysw',
    text:'Banana'  ,
    priceG: '25',
    priceM: '2'
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdT_VCT_nh-TJjFNB-KpyLIBnItBh6OJ6N-ULFrPf-U7_jxs-i',
    text:'Huevos',
    priceG: '20',
    priceM: '50'
  },
  {
    id: 7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJB9e5SpRQcLJET765-uZ3h15NqSJKiLHeEf8wNzplKgJQM6yyA',
    text:'Café',
    priceG: '250',
    priceM: '110'
  },
  {
    id: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJB9e5SpRQcLJET765-uZ3h15NqSJKiLHeEf8wNzplKgJQM6yyA',
    text:'Azúcar' ,
    priceG: '16,12',
    priceM: '4,60'
  }
];

  $('.js-input').select2({
    data: data,
    allowClear: true,
    templateResult: formatResult,
    templateSelection: formatSelection,
    placeholder: "Selecciona tu producto",
    processResults: function (data, page) {
      return data;
    },
  })
})()
