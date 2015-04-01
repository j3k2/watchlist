angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/index.html',
    "<!-- <div class=\"col-md-10\"> -->\n" +
    "<h1 class=\"header-text\">Available shows</h1>\n" +
    "<br>\n" +
    "<div ng-repeat=\"show in shows\" class=\"show-item\">\n" +
    "\t\t<a href=\"/#series/{{show._id}}\">\n" +
    "\t\t\t<img data-ng-src=\"{{show.imgUrl}}\" class=\"thumbnail\"></img>\n" +
    "\t\t</a>\n" +
    "\t\t<a href=\"/#series/{{show._id}}\">\n" +
    "\t\t\t{{show.title}}</a>\n" +
    "\t\t<br>\n" +
    "\t\t<set-list show=\"show\"></set-list>\n" +
    "\t\t<Br>\n" +
    "\t\t<set-rating show=\"show\"></set-rating>\n" +
    "\n" +
    "<!--</div> -->\n"
  );


  $templateCache.put('templates/series/detail.html',
    "<div class=\"row col-md-12\">\n" +
    "\t<div class=\"col-md-3 detail-header\">\n" +
    "\t\n" +
    "\t\t<img src=\"{{show.imgUrl}}\" class=\"detail\"></img>\n" +
    "\t</div>\n" +
    "\t<div class=\"col-md-6\">\t\n" +
    "\t\t<h1>{{show.title}}</h1>\n" +
    "\t\t<set-list show=\"show\"></set-list><br>\n" +
    "\t\t<set-rating show=\"show\"></set-rating>\n" +
    "\t\t<p class=\"desc\">{{show.desc}}</p>\n" +
    "\t</div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/series/setlist.html',
    "<div class=\"btn-group\" dropdown ng-init=\"initSetList()\">\n" +
    "      <a href=\"#/user/{{currentUser._id}}/list/{{currentList._id}}\" type=\"button\" class=\"btn btn-primary\" ng-show=\"currentList\">{{currentList.category}}</a>\n" +
    "\n" +
    "\t\t\t<div type=\"button\" class=\"btn btn-primary\" ng-hide=\"currentList\">Add to list</div>\n" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdown-toggle>\n" +
    "        <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <li ng-repeat=\"list in currentUser.lists\">\n" +
    "\t\t\t\t\t<a ng-click=\"setList(show, list)\">{{list.category}}</a>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t\t<li ng-hide=\"currentUser\">\n" +
    "\t\t\t\t\t<a href=\"/login\">Log in to use lists</a>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t\t<li ng-if=\"currentList\">\n" +
    "\t\t\t\t\t<hr>\n" +
    "\t\t\t\t\t<a ng-click=\"clearList(show, currentList)\">Remove from {{currentList.category}}</a>\n" +
    "\t\t\t\t</li>\n" +
    "      </ul>\n" +
    "    </div>\n"
  );


  $templateCache.put('templates/series/setrating.html',
    "<rating ng-hide=\"promptLogin\" class=\"rating\" ng-model=\"rate\" max=5 readonly=\"isReadonly\" on-hover=\"hoveringOver(value)\" on-leave=\"overStar = null\" ng-init=\"init()\"></rating>\n" +
    "<div ng-if=\"promptLogin\">\n" +
    "\t<a href=\"/login\">Log in to save ratings</a>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/user_sessions/new.html',
    "<form ng-submit=\"submitLogin(loginForm)\" role=\"form\" ng-init=\"loginForm = {}\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"email\">Email</label>\n" +
    "    <input type=\"email\"\n" +
    "           name=\"email\"\n" +
    "           id=\"email\"\n" +
    "           ng-model=\"loginForm.email\"\n" +
    "           required=\"required\"\n" +
    "           class=\"form-control\">\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"password\">Password</label>\n" +
    "    <input type=\"password\"\n" +
    "           name=\"password\"\n" +
    "           id=\"password\"\n" +
    "           ng-model=\"loginForm.password\"\n" +
    "           required=\"required\"\n" +
    "           class=\"form-control\">\n" +
    "  </div>\n" +
    "\n" +
    "  <button type=\"submit\" class=\"btn btn-primary btn-lg\">Sign in</button>\n" +
    "</form>"
  );


  $templateCache.put('templates/users/list.html',
    "<h3 class=\"header-text\">{{ list.category }}</h3>\n" +
    "\t\t\t<div ng-repeat=\"show in list.shows\" class=\"row list-shows\">\n" +
    "\t\t\t<div class=\"col-md-1\">\n" +
    "\t\t\t\t<a href=\"/#series/{{show._id}}\"><img src=\"{{show.imgUrl}}\" class=\"mini\" /></a>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-2\">\n" +
    "\t\t\t\t<a href=\"/#series/{{show._id}}\">{{show.title}}</a>\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-2\">\n" +
    "\t\t\t\t<set-list show=\"show\"></set-list>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-1\">\n" +
    "\t\t\t\t<set-rating show=\"show\"></set-rating>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n"
  );


  $templateCache.put('templates/users/newlist.html',
    ""
  );


  $templateCache.put('templates/users/show.html',
    "<h1 class=\"header-text\">{{user.username}}'s watchlists</h1>\n" +
    "\n" +
    "<div class=\"lists-container\">\n" +
    "\n" +
    "\n" +
    "\t<a href=\"#/user/{{user._id}}/list/{{list._id}}\" class=\"btn btn-default list-buttons\" ng-repeat=\"list in user.lists\">{{list.category}}</a>\n" +
    "\t<!-- <a class=\"btn btn-default\" href=\"#/user/{{user.id}}/newlist\" ng-if=\"currentUser\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n" +
    "New list</a> -->\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "<!--<tabset>\n" +
    "  <tab ng-repeat=\"list in user.lists\" heading=\"{{list.category}}\" active=\"list.active\" disabled=\"list.disabled\">\n" +
    "\n" +
    "\t\t<div ng-repeat=\"show in list.shows\" class=\"row list-shows\">\n" +
    "\t\t\t<div class=\"col-md-1\">\n" +
    "\t\t\t\t<a href=\"/#series/{{show.id}}\"><img src=\"{{show.imgUrl}}\" class=\"mini\" /></a>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t{{show.title}}\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-2\">\n" +
    "\t\t\t\t<set-list show=\"show\"></set-list>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-2\">\n" +
    "\t\t\t\t<set-rating show=\"show\"></set-rating>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "  </tab>\n" +
    "\n" +
    "</tabset> -->\n"
  );

}]);
