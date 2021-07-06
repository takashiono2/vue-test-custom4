var app = new Vue({
  el: '#app',
  data: {
    defaultDate: '2021-07-06',
    DatePickerFormat: 'yyyy-MM-dd',
    language:{
      language: 'Japanese', 
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], 
      monthsAbbr: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], 
      days: ['日', '月', '火', '水', '木', '金', '土'], 
      rtl: false, 
      ymd: 'yyyy-MM-dd', 
      yearSuffix: '年'
     }
  },
  components: {
  	'vuejs-datepicker':vuejsDatepicker
  },
  methods:{
    customformat: function(value){
      return moment(value).format('YYYY-MM-DD');
    }
  }
});