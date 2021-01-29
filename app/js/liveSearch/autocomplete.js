$( function() {
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
        _create: function() {
          this._super();
          this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
        },
        _renderMenu: function( ul, items ) {
          var that = this,
            currentCategory = "";
          $.each( items, function( index, item ) {
            var li;
            if ( item.category != currentCategory ) {
              ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
              currentCategory = item.category;
            }
            li = that._renderItemData( ul, item );
            if ( item.category ) {
              li.attr( "aria-label", item.category + " : " + item.label );
            }
          });
        }
      });
    // function foud(e){ for(let i = 0; i < e.length; i++){for(let j = 0; j < e[i].series.length; j++){console.log(e[i].series[j].name)}}}


    var data = [

    ];
    function foud(e, data){ 
        for(let i = 0; i < e.length; i++){
            if(e[i].series){
                for(let j = 0; j < e[i].series.length; j++){
                    if(e[i].series[j].models){
                        for(let k = 0; k < e[i].series[j].models.length; k++ ){
                            data.push({
                                label:(e[i].series[j].models[k].name), category: e[i].name})
                            }
                        }else{
                            data.push({
                                label:(e[i].series[j].name), category: e[i].name})
                        }
                    }
            }


                
            }
             return data
            }

    $( "#search" ).catcomplete({
      delay: 1,
      source: foud(classificator, data),
    });
  } );