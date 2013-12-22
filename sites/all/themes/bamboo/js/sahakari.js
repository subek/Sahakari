/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(function(){
    var _telecom, _price;

    var base_url = Drupal.settings.sahakari.base_url;

    jQuery('input[type="radio"]').click(function(){
        var _divClass;

        var _this = jQuery(this);

        var _parent = _this.parent('div');

        if(_parent.hasClass("telecom")){
            _divClass = ".telecom";
            _telecom = _this.val();
        }
        else if(_parent.hasClass("price")){
            _divClass = ".price";
            _price = _this.val();
        }

        _telecom = typeof _telecom == 'undefined' ? '' : _telecom;
        _price = typeof _price == 'undefined' ? '' : _price;

        jQuery(_divClass).removeClass('selected');
        jQuery(this).parent('div'+_divClass).addClass('selected');

        var _url = base_url+'/ajax-recharge-pin/'+_telecom+'/'+_price;

        jQuery.ajax({
                url: _url,
                success:(function(_pin){
                    jQuery('.view-recharge-pin-management').text(_pin.trim());
                })
        })
    })
})
