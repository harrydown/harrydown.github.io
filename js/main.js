  /* -------------------------------------- 
JSON API

//----------NBA API-----------
// sport code = 364
// league code = 104939
// Client ID (Consumer Key): dj0yJmk9RVFyRTQzMmpRTTB0JmQ9WVdrOVlVRjViVTU1TkRnbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD01Yw--
// Client Secret (Consumer Secret):   
// League Scoreboard: http://developer.yahoo.com/yql/console/?q=select%20*%20from%20fantasysports.leagues.scoreboard%20where%20league_key%3D'364.l.104939'
-------------------------------------- */







var teamTester = 'js/team-test-dougieMcderm.json';
console.log('line19',teamTester);

$.getJSON(teamTester, function(json) {
    console.log('teamTester',json); // this will show the info it in firebug console
});

var yahooURI = "https://api.login.yahoo.com/oauth2/request_auth";
  yahooURI += "?client_id=dj0yJmk9RVFyRTQzMmpRTTB0JmQ9WVdrOVlVRjViVTU1TkRnbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD01Yw--";
  yahooURI += "&redirect_uri=harrydown.com";
  yahooURI += "&response_type=token";
  yahooURI += "&language=en-us";

var oauthAccess = $.getJSON( yahooURI, function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.complete(function() {
  console.log( "second complete" );
});


app.get('/auth/yahoo', function(req, res) {
  var authorizationUrl = 'https://api.login.yahoo.com/oauth2/request_auth';

  var queryParams = qs.stringify({
    client_id: 'dj0yJmk9RVFyRTQzMmpRTTB0JmQ9WVdrOVlVRjViVTU1TkRnbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD01Yw--',
    redirect_uri: 'harrydown.com',
    response_type: 'code'
  });

  res.redirect(authorizationUrl + '?' + queryParams);
});





/* -------------------------------------- 
ARRAYS
-------------------------------------- */
var teams = ['Dougie McDerm','White Chocolate','Lamar Odom','God Shammgod','Luc Longley','Fennis Dembo','detlef schrempf','Jerk Store','Manute Bol'];

var timePeriod = ['Season','30-Day'];

var pts = ['pts'];

/* -------------------------------------- 
ARRAY FUNCTIONS
-------------------------------------- */

function addToList(listItem, listTarget) {
  for (var i = 0; i < listItem.length; i++) {
    var newListItem = listItem[i];
    var listClass = "." + newListItem;
    console.log(listClass);
    var list = $(listTarget);
    list.append('<li value="' + newListItem + '"><a href="#">' + newListItem + '</a></li>');
  };
}

addToList(teams, '.dropdown-menu.teams');
addToList(timePeriod, '.dropdown-menu.timePeriod');

/*
function addToList(listItem) {
  for (var i = 0; i < listItem.length; i++) {
    var newListItem = listItem[i];
    var listClass = "." + newListItem;
    console.log(listClass);
    listClass.append('<li value="' + newListItem + '"><a href="#">' + newListItem + '</a></li>');
  };
}

addToList(teams);
addToList(timePeriod);
*/

/*
function addStats(category) {
  var cat = "." + category;
  console.log(cat);
  $('#teamsTable tbody').find(cat).each(function() {
    sum += parseFloat($(cat).text()); 
    console.log(sum);
  });
  $('#teamsTable1 .tableFooter').find(cat).html(sum);
  console.log(sum);
};
*/

//addStats(pts);



/* -------------------------------------- 
FUNCTIONS INTERACTIVE
-------------------------------------- */

$('#topNav').find('a').on('mouseenter mouseleave', function() {
  $(this).parent('li').toggleClass('bottom-outline');
});


/* -------------------------------------- 
DROPDOWN
-------------------------------------- */

/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}*/
/*
$('.dropdown').find('button').on('click', function() {
  $(this).next('div').toggle('.show');
});


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$( function() {
  $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
    _renderItem: function( ul, item ) {
      var li = $( "<li>" ),
        wrapper = $( "<div>", { text: item.label } );

      if ( item.disabled ) {
        li.addClass( "ui-state-disabled" );
      }

      $( "<span>", {
        style: item.element.attr( "data-style" ),
        "class": "ui-icon " + item.element.attr( "data-class" )
      })
        .appendTo( wrapper );

      return li.append( wrapper ).appendTo( ul );
    }
});
*/