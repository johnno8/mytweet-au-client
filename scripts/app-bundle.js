define('app',['exports', 'aurelia-framework', 'aurelia-event-aggregator', './services/messages'], function (exports, _aureliaFramework, _aureliaEventAggregator, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.Aurelia, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function App(au, ea) {
      var _this = this;

      _classCallCheck(this, App);

      ea.subscribe(_messages.LoginStatus, function (msg) {
        if (msg.status.success === true) {
          au.setRoot('home').then(function () {
            _this.router.navigateToRoute('tweet');
          });
        } else {
          au.setRoot('app').then(function () {
            _this.router.navigateToRoute('login');
          });
        }
      });
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.map([{ route: ['', 'login'], name: 'login', moduleId: 'viewmodels/login/login', nav: true, title: 'Login' }, { route: 'signup', name: 'signup', moduleId: 'viewmodels/signup/signup', nav: true, title: 'Signup' }]);
      this.router = router;
    };

    return App;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('home',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Home = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Home = exports.Home = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.Aurelia), _dec(_class = function () {
    function Home(au) {
      _classCallCheck(this, Home);

      this.aurelia = au;
    }

    Home.prototype.configureRouter = function configureRouter(config, router) {
      config.map([{ route: ['', 'home'], name: 'tweet', moduleId: 'viewmodels/tweet/tweet', nav: true, title: 'Tweet' }, { route: 'timeline', name: 'timeline', moduleId: 'viewmodels/timeline/timeline', nav: true, title: 'Timeline' }, { route: 'dashboard', name: 'dashboard', moduleId: 'viewmodels/dashboard/dashboard', nav: true, title: 'Dashboard' }, { route: 'logout', name: 'logout', moduleId: 'viewmodels/logout/logout', nav: true, title: 'Logout' }]);
      this.router = router;
    };

    return Home;
  }()) || _class);
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('services/fixtures',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Fixtures = function Fixtures() {
    _classCallCheck(this, Fixtures);

    this.tweets = [{
      content: 'Tweet1',
      tweetor: 'homer@simpson.com',
      date: '03-01-2017 15:33'
    }, {
      content: 'Tweet2',
      tweetor: 'marge@simpson.com',
      date: '04-01-2017 15:34'
    }, {
      content: 'Tweet3',
      tweetor: 'bart@simpson.com',
      date: '04-01-2017 16:44'
    }, {
      content: 'Tweet4',
      tweetor: 'barney@gumble.com',
      date: '04-01-2017 16:51'
    }, {
      content: 'Tweet5',
      tweetor: 'lisa@simpson.com',
      date: '04-01-2017 17:02'
    }];
    this.users = {
      'homer@simpson.com': {
        firstName: 'Homer',
        lastName: 'Simpson',
        email: 'homer@simpson.com',
        password: 'secret'
      },
      'marge@simpson.com': {
        firstName: 'Marge',
        lastName: 'Simpson',
        email: 'marge@simpson.com',
        password: 'secret1'
      },
      'bart@simpson.com': {
        firstName: 'Bart',
        lastName: 'Simpson',
        email: 'bart@simpson.com',
        password: 'secret2'
      },
      'lisa@simpson.com': {
        firstName: 'Lisa',
        lastName: 'Simpson',
        email: 'lisa@simpson.com',
        password: 'secret3'
      },
      'barney@gumble.com': {
        firstName: 'Barney',
        lastName: 'gumble',
        email: 'barney@gumble.com',
        password: 'secret4'
      }
    };
  };

  exports.default = Fixtures;
});
define('services/messages',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LoginStatus = exports.LoginStatus = function LoginStatus(status) {
    _classCallCheck(this, LoginStatus);

    this.status = status;
  };
});
define('services/mytweet-service',['exports', 'aurelia-framework', './fixtures', 'aurelia-event-aggregator', './messages'], function (exports, _aureliaFramework, _fixtures, _aureliaEventAggregator, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _fixtures2 = _interopRequireDefault(_fixtures);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var MytweetService = (_dec = (0, _aureliaFramework.inject)(_fixtures2.default, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function MytweetService(data, ea) {
      _classCallCheck(this, MytweetService);

      this.tweets = [];
      this.users = [];
      this.loggedInUser = {};

      this.users = data.users;
      this.tweets = data.tweets;
      this.ea = ea;
    }

    MytweetService.prototype.posttweet = function posttweet(content) {
      var d = new Date();
      var datestring = ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear() + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
      var tweet = {
        content: content,
        tweetor: this.loggedInUser.email,
        date: datestring
      };
      this.tweets.push(tweet);
      console.log('Tweet with content: \'' + content + '\' sent at: ' + datestring);
    };

    MytweetService.prototype.login = function login(email, password) {
      var status = {
        success: false,
        message: ''
      };

      if (this.users[email]) {
        if (this.users[email].password === password) {
          status.success = true;
          status.message = 'logged in';
          this.loggedInUser = this.users[email];
        } else {
          status.message = 'Incorrect password';
        }
      } else {
        status.message = 'Unknown user';
      }

      this.ea.publish(new _messages.LoginStatus(status));
    };

    MytweetService.prototype.register = function register(firstName, lastName, email, password) {
      var newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };
      this.users[email] = newUser;
    };

    MytweetService.prototype.logout = function logout() {
      var status = {
        success: false,
        message: ''
      };
      this.ea.publish(new _messages.LoginStatus(status));
    };

    return MytweetService;
  }()) || _class);
  exports.default = MytweetService;
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('viewmodels/dashboard/dashboard',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Dashboard = exports.Dashboard = function Dashboard() {
    _classCallCheck(this, Dashboard);
  };
});
define('viewmodels/login/login',['exports', 'aurelia-framework', '../../services/mytweet-service'], function (exports, _aureliaFramework, _mytweetService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Login = undefined;

  var _mytweetService2 = _interopRequireDefault(_mytweetService);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Login = exports.Login = (_dec = (0, _aureliaFramework.inject)(_mytweetService2.default), _dec(_class = function () {
    function Login(ms) {
      _classCallCheck(this, Login);

      this.email = '';
      this.password = '';

      this.mytweetService = ms;
      this.prompt = '';
    }

    Login.prototype.login = function login(e) {
      console.log('Trying to log in ' + this.email);
      this.mytweetService.login(this.email, this.password);
    };

    return Login;
  }()) || _class);
});
define('viewmodels/logout/logout',['exports', '../../services/mytweet-service', 'aurelia-framework'], function (exports, _mytweetService, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Logout = undefined;

  var _mytweetService2 = _interopRequireDefault(_mytweetService);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Logout = exports.Logout = (_dec = (0, _aureliaFramework.inject)(_mytweetService2.default), _dec(_class = function () {
    function Logout(mytweetService) {
      _classCallCheck(this, Logout);

      this.mytweetService = mytweetService;
    }

    Logout.prototype.logout = function logout() {
      console.log('logging out');
      this.mytweetService.logout();
    };

    return Logout;
  }()) || _class);
});
define('viewmodels/signup/signup',['exports', 'aurelia-framework', '../../services/mytweet-service'], function (exports, _aureliaFramework, _mytweetService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Signup = undefined;

  var _mytweetService2 = _interopRequireDefault(_mytweetService);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Signup = exports.Signup = (_dec = (0, _aureliaFramework.inject)(_mytweetService2.default), _dec(_class = function () {
    function Signup(ms) {
      _classCallCheck(this, Signup);

      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = '';

      this.mytweetService = ms;
    }

    Signup.prototype.register = function register(e) {
      this.showSignup = false;
      this.mytweetService.register(this.firstName, this.lastName, this.email, this.password);
      this.mytweetService.login(this.email, this.password);
    };

    return Signup;
  }()) || _class);
});
define('viewmodels/timeline/timeline',['exports', 'aurelia-framework', '../../services/mytweet-service'], function (exports, _aureliaFramework, _mytweetService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Timeline = undefined;

  var _mytweetService2 = _interopRequireDefault(_mytweetService);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Timeline = exports.Timeline = (_dec = (0, _aureliaFramework.inject)(_mytweetService2.default), _dec(_class = function Timeline(ms) {
    _classCallCheck(this, Timeline);

    this.tweets = [];

    this.mytweetService = ms;
    this.tweets = this.mytweetService.tweets;
  }) || _class);
});
define('viewmodels/tweet/tweet',['exports', 'aurelia-framework', '../../services/mytweet-service'], function (exports, _aureliaFramework, _mytweetService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tweet = undefined;

  var _mytweetService2 = _interopRequireDefault(_mytweetService);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Tweet = exports.Tweet = (_dec = (0, _aureliaFramework.inject)(_mytweetService2.default), _dec(_class = function () {
    function Tweet(ms) {
      _classCallCheck(this, Tweet);

      this.content = '';

      this.mytweetService = ms;
      this.content = ms.content;
    }

    Tweet.prototype.sendTweet = function sendTweet() {
      this.mytweetService.posttweet(this.content);
      this.content = '';
    };

    return Tweet;
  }()) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"nav-bar.html\"></require>\n  <div class=\"ui container page-host\">\n    <nav-bar router.bind=\"router\"></nav-bar>\n    <router-view></router-view>\n  </div>\n</template>\n"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"nav-bar.html\"></require>\n  <div class=\"ui container page-host\">\n    <nav-bar router.bind=\"router\"></nav-bar>\n    <router-view></router-view>\n  </div>\n</template>\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <nav class=\"ui inverted blue menu\">\n    <header class=\"header item\"><a href=\"/\"> MyTweet </a></header>\n    <div class=\"right menu\">\n      <div repeat.for=\"row of router.navigation\">\n        <a class=\"${row.isActive ? 'active' : ''} item\"  href.bind=\"row.href\">${row.title}</a>\n      </div>\n    </div>\n  </nav>\n</template>\n"; });
define('text!viewmodels/dashboard/dashboard.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"ui grid segment\">\n    <div class=\"six wide column\">\n      <compose view-model=\"../tweet/tweet\"></compose>\n    </div>\n    <div class=\"three wide column\">\n      <img src=\"assets/images/tribal-bird.png\" class=\"ui medium image\">    </div>\n    <div class=\"seven wide column\">\n      <compose view-model=\"../timeline/timeline\"></compose>\n    </div>\n\n  </section>\n</template>\n"; });
define('text!viewmodels/login/login.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <form submit.delegate=\"login($event)\" class=\"ui stacked segment form\">\r\n    <h3 class=\"ui header\">Log-in</h3>\r\n    <div class=\"field\">\r\n      <label>Email</label> <input placeholder=\"Email\" value.bind=\"email\"/>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Password</label> <input type=\"password\" value.bind=\"password\"/>\r\n    </div>\r\n    <button class=\"ui blue submit button\">Login</button>\r\n    <h3>${prompt}</h3>\r\n  </form>\r\n\r\n</template>\r\n"; });
define('text!viewmodels/logout/logout.html', ['module'], function(module) { module.exports = "<template>\n\n  <form submit.delegate=\"logout($event)\" class=\"ui stacked segment form\">\n    <h3 class=\"ui header\">Are you sure you want to log out?</h3>\n    <button class=\"ui blue submit button\">Logout</button>\n  </form>\n\n</template>\n"; });
define('text!viewmodels/signup/signup.html', ['module'], function(module) { module.exports = "<template>\r\n  <form submit.delegate=\"register($event)\" class=\"ui stacked segment form\">\r\n    <h3 class=\"ui header\">Register</h3>\r\n    <div class=\"two fields\">\r\n      <div class=\"field\">\r\n        <label>First Name</label>\r\n        <input placeholder=\"First Name\" type=\"text\" value.bind=\"firstName\">\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Last Name</label>\r\n        <input placeholder=\"Last Name\" type=\"text\" value.bind=\"lastName\">\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Email</label>\r\n      <input placeholder=\"Email\" type=\"text\" value.bind=\"email\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Password</label>\r\n      <input type=\"password\" value.bind=\"password\">\r\n    </div>\r\n    <button class=\"ui blue submit button\">Submit</button>\r\n  </form>\r\n</template>\r\n"; });
define('text!viewmodels/timeline/timeline.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <section class=\"ui stacked segment\">\r\n    <article class=\"six wide column\">\r\n      <h3 class=\"ui dividing header\"> Timeline </h3>\r\n      <table class=\"ui celled blue table segment\">\r\n        <thead>\r\n        <tr>\r\n          <th class=\"seven wide\">Content</th>\r\n          <th class=\"four wide\">Posted By</th>\r\n          <th class=\"five wide\">Date</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr repeat.for=\"tweet of tweets\">\r\n          <td> ${tweet.content}</td>\r\n          <td> ${tweet.tweetor}</td>\r\n          <td> ${tweet.date}</td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </article>\r\n  </section>\r\n\r\n</template>\r\n"; });
define('text!viewmodels/tweet/tweet.html', ['module'], function(module) { module.exports = "<template>\r\n  <section>\r\n\r\n    <form submit.trigger=\"sendTweet()\" class=\"ui form four wide column stacked segment\">\r\n\r\n      <div class=\"grouped inline fields\">\r\n        <h3 class=\"ui dividing header\">Write a message to tweet </h3>\r\n        <div class=\"field\">\r\n          <textarea maxlength=\"140\" placeholder='Write your post here, 140 characters max.' value.bind=\"content\"></textarea>\r\n        </div>\r\n      </div>\r\n      <button class=\"ui blue submit button\">Tweet</button>\r\n\r\n    </form>\r\n\r\n  </section>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map