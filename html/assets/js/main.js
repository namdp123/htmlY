var flagNumber = 3;
var heightDevice,heightHeader,heightFooter;
var region = [
	[
		'すすきの （札幌）','釧路','旭川 ','千歳',' 函館','帯広','北見','苫小牧','その 他 '
	],
	[
		'青森','弘前 ','八戸 ','三沢・十和田','その他 '
	],
	[
		'盛岡','北上 ','花巻','一関','その他'
	],
	[
		'仙台','石巻','古川・大崎','仙南・名取','その他'
	],
	[
		'秋田','横手','その他'
	],
	[
		'山形','庄内','米沢','鶴岡','酒田','その他'
	],
	[
		'郡山','福島','白河','会津若松','いわき','小名浜','その他'
	],
	[
		'土浦','水戸','つくば','取手','古河','牛久','神栖','日立','その他 '
	],
	[
		'宇都宮','小山','那須塩原','大田原','足利','その他 '
	],
	[
		'高崎','伊勢崎','太田','前橋','渋川','その他'
	],
	[
		'大宮','浦和','さいたま','西川口','川口','越谷','熊谷','春日部','所沢','川越','草加','狭山','入間','本庄','東松山','久喜','朝霞','その他'
	],
	[
		'栄町','千葉','船橋','西船橋','松戸','柏','市川','成田','市原','木更津','君津','浦安','その他'
	],
	[
		'池袋','赤羽','大塚・巣鴨','新宿・歌舞伎町','大久保・新大久保','高田馬場・目白','渋谷','恵比寿・目黒','五反田','品川','六本木・赤坂','新橋・銀座','鴬谷','吉原','日暮里・西日暮里','上野・御徒町','神田・秋葉原','錦糸町・亀戸','葛西','蒲田・大森','小岩・新小岩','練馬','中野・高円寺','荻窪・吉祥寺','調布・府中','町田 ','立川','八王子','その他'
	],
	[
		' 横浜 ','関内 ','曙町 ','桜木町','新横浜 ','川崎','相模原','大和','藤沢','厚木','平塚','横須賀','小田原','その他'
	],
	[
		'新潟','長岡','三条','上越','柏崎','新発田','その他'
	],
	[
		'富山','高岡','その他'
	],
	[
		'金沢','加賀','小松','その他 '
	],
	[
		'福井','その他 '
	],
	[
		'甲府',' 富士吉田','その他'
	],
	[
		'長野','上田','松本 ','塩尻','諏訪','佐久','その他'
	],
	[
		'金津園 ','岐阜市・岐南','多治見','大垣','美濃加茂','その他'
	],
	[
		'静岡','焼津','浜松','沼津・御殿場','富士','熱海','その他'
	],
	[
		'名古屋市','名古屋（名駅）','納屋橋','栄','錦・丸の内','新栄・東新町','今池・池下','大曽根','柴田 ','金山','一宮','小牧・春日井','豊田','岡崎','安城','刈谷','豊橋','その他 '
	],
	[
		'四日市','鈴鹿 ','津','松阪','その他 '
	],
	[
		'雄琴','大津','彦根','近江八幡','草津','その他'
	],
	[
		'木屋町','祇園','河原町','京都 ','舞鶴','福知山','その他'
	],
	[
		'梅田','兎我野町','京都・桜ノ宮 ','十三・西中島 ','西淡路','難波','日本橋・谷九','宗右衛門町・道頓堀 ','心斎橋 ','高津','天王寺','大阪','堺・堺東','岸和田 ','茨木・枚方','東大阪・八尾','豊中・吹田','その他'
	],
	[
		'福原','三宮・神戸','姫路 ','加古川','明石 ','西宮','尼崎','相生','丹波・篠山・三田','豊岡・養父・朝来','その他 '
	],
	[
		'奈良','香芝','その他'
	],
	[
		'和歌山','その他'
	],
	[
		'鳥取','米子','その他 '
	],
	[
		'松江','その他'
	],
	[
		'岡山','倉敷','その他'
	],
	[
		'東広島','広島','廿日市','福山','その他'
	],
	[
		'周南','山口','その他'
	],
	[
		'徳島','その他'
	],
	[
		'高松','その他'
	],
	[
		'松山','道後','西条','今治','その他 '
	],
	[
		'高知','その他 '
	],
	[
		'中洲','博多','天神','福岡','小倉・北九州','久留米','その他'
	],
	[
		'佐賀','その他'
	],
	[
    '佐世保','長崎','大村','諫早','その他'
	],
	[
		'熊本','その他'
	],
	[
		'大分','別府','その他 '
	],
	[
		'宮崎','都城','延岡','その他'
	],
	[
		'鹿児島','国分 ',' その他 '
	],
	[
		'那覇','沖縄','その他'
	]

]
$(document).ready(function() {
	sliderData = $('.slider-slick-js').slick({
	  arrows: false,
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 2
	});
	heightHeader = $('.header').height();
	heightFooter = $('.footer').height();
	heightDevice = $(window).height() - heightFooter - heightHeader ;
	
	/**event click btn view more
	show list review
	*/
	
	$('.js-close').hide();	

	$(".js-view-more").click(function(){
		viewMore($(this));
	});
	/**event click btn close more to
	close list review
	*/
	$(".js-close").click(function(){
		closeMore($(this));
	});
/**event click tab info-shop change info*/
	$(".js-thumb-list li").click(function(){
		changeInfo($(this));
	});
	testHeightScreen();
	$(window).resize(function(){
		var heightContent = $(window).height();
		var heightHd = $('.header').height();
		var heightFt = $('.footer').height();
		heightDevice = heightContent - heightHd - heightFt;
		heightSearchPage(heightDevice);
		heightFooter = heightFt ;
		heightHeader = heightHd;
		$('.container').css({"height":"auto"});
        // $('.js-ft').css({"position" : " ","bottom":" "});
		testHeightScreen();
	});

	heightSearchPage(heightDevice);
	/**event star rate vote*/
	$.fn.raty.defaults.path = 'assets/images';
	  $(function() {
	    $('.js-star').each(function(){
	    	$(this).raty({ score: 3 });
	    })
	    $('.js-read').each(function(){
	    	var valueStar = $(this).attr('data-value');
	    	$(this).raty({ readOnly: true, score: valueStar });

	    })
	});
/**js-page detail shop*/
	/**event click btn show char*/
	$('.js-show-char').click(function(){
		showChar($(this));
	});
	/**event click btn show list review*/
	$('.js-btn-show').click(function(){
		showList($(this));
	});
	/**event change tab menu*/
	$('.js-tab-change').click(function(){
		changeTab($(this));
	});

	/*
	* open delete modal
	* */
	$('.js-open-modal').on('click',function () {
		$('body').css('overflow','hidden');
		$('.js-overlay').addClass('open')
  })
  /*
   * close delete modal
   * */
	$('.js-close-modal').on('click',function () {
    $('body').css('overflow','');
    $('.js-overlay').removeClass('open')
	})
  /*show datetime picker*/
  if($(".js-datepicker").length > 0) {
    $(".js-datepicker").datepicker();
	}


  /*show  force when status is 本会員 page create user account*/
  $('.js-account-status').on('change', function () {
		if(this.value == '1') {
			$('.js-account-psw').show()
		} else {
      $('.js-account-psw').hide()
		}
  })
  /**Myht**/
	/*
	 * Page create shop: show businessType corresponding shopType
	 * */
  $('.js-admin-shoptype input[type=radio][name=shop_type]').on('change', function(){
    $('.business-list select').removeClass('active')
    switch($(this).val()){
      case '1':
        $('.js-business-1').addClass('active');
        break;
      case '2':
        $('.js-business-2').addClass('active');
        break;
      case '3':
        $('.js-business-3').addClass('active');
        break;

    }
  })
	$('.js-admin-location').on('change', function () {
		var value = this.value;
		var $regionPulldown = $('.js-admin-region');
		loadRegionPullDown(value, $regionPulldown)
  })
});

/**function btn view more*/
function viewMore(obj){
		var listLength = $('.js-list-detail li').length;
		var testClass = $('.js-thumb-list li.active').attr('data-shop');
		if( flagNumber < listLength){
			for(i = 0; i < listLength; i++) {        		
    			$('.js-'+testClass+ ' .js-list-detail').find('li').eq(flagNumber).removeClass('hide-list');
   				flagNumber++;
        	}
		}
		obj.hide();	
		flagNumber = 3;
    	obj.parent().find('.js-close').show();
}
/**function close list*/
function closeMore(obj){
    	var listLength = $('.js-list-detail li').length;
    	var testClass = $('.js-thumb-list li.active').attr('data-shop');
		if( flagNumber < listLength){
			for(i = listLength; i > 2; i--) {
                $('.js-'+testClass+ ' .js-list-detail').find('li').eq(i).addClass('hide-list');
        	}
		}
		obj.hide();
    	obj.parent().find('.js-view-more').show();
}
function changeInfo(obj){
	var nameShop = obj.attr('data-shop');
	$('.js-info').addClass('hide-list');
	$('.js-'+ nameShop).removeClass('hide-list');
	$('.js-thumb-list li').removeClass('active');
	obj.addClass('active');
}
/**function show all list*/
function showList(obj){
	$('.js-show-list').find('li').removeClass('hide-list');
	obj.hide();
}
/**function auto set height page search*/
function heightSearchPage(height){
	$('.js-search-content').css({'height' : height});
}
/**function show char*/
function showChar(obj){
	obj.parent().parent().find('.js-list-char').removeClass('hide-list');
	obj.parent().parent().find('.char-page').find('.hide-list').removeClass('hide-list');
	obj.parent().hide();
    obj.parent().find('.js-view-note').hide();
}
/**function change tad page detail shop*/
function changeTab(obj){
	var nameID = obj.attr('for');
	$('.js-tab').addClass('hide-list');
	$('.js-'+ nameID).removeClass('hide-list');
}

function testHeightScreen(){
	var heightContainer = $(window).height() - heightFooter - heightHeader;
	if(($('.container').height() + heightFooter +heightHeader) < $(window).height() ){
		$('.container').css({"height": heightContainer,"padding-bottom": 0});
	}
}


/**load region corresponding location*/
function loadRegionPullDown (locationValue, regionPulldown) {
  regionPulldown.empty();
  regionPulldown.append('<option>選択してください</option>')
	locationValue = parseInt(locationValue)
  // for (var i = 0; i < region[locationValue - 1] ; i++) {
  // 	html += '<option value='+(i+1)+'>' + region[locationValue - 1][i]+'</option>';
  // }
  // regionPulldown.append(html)
  $.each(region[locationValue - 1], function(index, value){
    regionPulldown.append($("<option>",{
      value: index + 1,
      text: value
    }));
  });
}