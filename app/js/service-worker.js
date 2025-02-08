var _0xa32e = [
    "Vault",                          // App name
    "1.0",                            // Version
    "-",                              // Dash
    "/app/",                           // URL
    "dashboard",                 // dashboard
    "deposit",                   // deposit
    "deposits",                  // deposits
    "error",                     // error
    "exchange",                  // exchange
    "footer",                    // footer
    "forgot_password",           // forgot_password
    "header",                    // header
    "login",                     // login
    "logout",                    // logout
    "network",                   // network
    "pay",                       // pay
    "pool1", "pool2", "pool3", "pool4", "pool5", "pool6", "pool7", "pool8", "pool9", "pool10", "pool11", "pool12", "pool13", "pool14", "pool15", // pools
    "pools",                     // pools
    "pools_error",               // pools_error
    "pools_success",             // pools_success
    "profile",                   // profile
    "register",                  // register
    "reports",                   // reports
    "reset_password",            // reset_password
    "staking",                   // staking
    "success",                   // success
    "team",                      // team
    "transactions",              // transactions
    "wault",                     // wault
    "wallets",                   // wallets
    "withdraw",                  // withdraw
    "withdrawals",               // withdrawals
    "styles/bootstrap.css",           // bootstrap styles
    "scripts/custom.js",              // custom scripts
    "scripts/bootstrap.min.js",       // bootstrap scripts
    "plugins/apex/apexcharts.js",     // apexcharts plugin
    "plugins/apex/apex-call.js",      // apex-call plugin
    "plugins/demo/demo.js",           // demo plugin
    "fonts/bootstrap-icons.css",     // bootstrap icons CSS
    "fonts/bootstrap-icons.woff",    // bootstrap icons woff
    "fonts/bootstrap-icons.woff2",   // bootstrap icons woff2
    "images/empty.png",               // empty image
    "install",                        // install
    "Service Worker: Cache is OK",    // Service worker cache is OK
    "log",                            // log
    "then",                           // then
    "skipWaiting",                    // skipWaiting
    "Service Worker Cache: Error Check REQUIRED_FILES array in _service-worker.js - files are missing or path to files is incorrectly written -  ", // Error message for missing files
    "catch",                          // catch
    "addAll",                         // addAll
    "open",                           // open
    "waitUntil",                      // waitUntil
    "Service Worker: Installed",      // Service worker installed
    "addEventListener",               // addEventListener
    "fetch",                          // fetch
    "request",                        // request
    "match",                          // match
    "respondWith",                    // respondWith
    "Service Worker: Fetching ",      // Service worker fetching files from cache
    " files from Cache",             // files from cache
    "activate",                       // activate
    "claim",                          // claim
    "clients",                        // clients
    "delete",                         // delete
    "map",                            // map
    "filter",                         // filter
    "startsWith",                     // startsWith
    "all",                            // all
    "keys",                           // keys
    "Service Worker: Activated"       // Service worker activated
];

var APP_NAME = _0xa32e[0];
var APP_VER = _0xa32e[1];
var CACHE_NAME = APP_NAME + _0xa32e[2] + APP_VER;
var APP_ROOT = _0xa32e[3];
var REQUIRED_FILES = [APP_ROOT + _0xa32e[4], APP_ROOT + _0xa32e[5], APP_ROOT + _0xa32e[6], APP_ROOT + _0xa32e[7], APP_ROOT + _0xa32e[8], APP_ROOT + _0xa32e[9], APP_ROOT + _0xa32e[10], APP_ROOT + _0xa32e[11], APP_ROOT + _0xa32e[12], APP_ROOT + _0xa32e[13], APP_ROOT + _0xa32e[14], APP_ROOT + _0xa32e[15], APP_ROOT + _0xa32e[16], APP_ROOT + _0xa32e[17], APP_ROOT + _0xa32e[18], APP_ROOT + _0xa32e[19], APP_ROOT + _0xa32e[20], APP_ROOT + _0xa32e[21], APP_ROOT + _0xa32e[22], APP_ROOT + _0xa32e[23], APP_ROOT + _0xa32e[24], APP_ROOT + _0xa32e[25], APP_ROOT + _0xa32e[26], APP_ROOT + _0xa32e[27], APP_ROOT + _0xa32e[28], APP_ROOT + _0xa32e[29], APP_ROOT + _0xa32e[30], APP_ROOT + _0xa32e[31], APP_ROOT + _0xa32e[32], APP_ROOT + _0xa32e[33], APP_ROOT + _0xa32e[34], APP_ROOT + _0xa32e[35], APP_ROOT + _0xa32e[36], APP_ROOT + _0xa32e[37], APP_ROOT + _0xa32e[38], APP_ROOT + _0xa32e[39], APP_ROOT + _0xa32e[40], APP_ROOT + _0xa32e[41], APP_ROOT + _0xa32e[42], APP_ROOT + _0xa32e[43], APP_ROOT + _0xa32e[44], APP_ROOT + _0xa32e[45], APP_ROOT + _0xa32e[46], APP_ROOT + _0xa32e[47], APP_ROOT + _0xa32e[48], APP_ROOT + _0xa32e[49], APP_ROOT + _0xa32e[50], APP_ROOT + _0xa32e[51], APP_ROOT + _0xa32e[52], APP_ROOT + _0xa32e[53], APP_ROOT + _0xa32e[54], APP_ROOT + _0xa32e[55], APP_ROOT + _0xa32e[56], APP_ROOT + _0xa32e[57], APP_ROOT + _0xa32e[58], APP_ROOT + _0xa32e[59], APP_ROOT + _0xa32e[60], APP_ROOT + _0xa32e[61], APP_ROOT + _0xa32e[62], APP_ROOT + _0xa32e[63], APP_ROOT + _0xa32e[64], APP_ROOT + _0xa32e[65], APP_ROOT + _0xa32e[66], APP_ROOT + _0xa32e[67], APP_ROOT + _0xa32e[68], APP_ROOT + _0xa32e[69], APP_ROOT + _0xa32e[70], APP_ROOT + _0xa32e[71], APP_ROOT + _0xa32e[72], APP_ROOT + _0xa32e[73]];
var APP_DIAG = false;
self[_0xa32e[85]](_0xa32e[74], function(_0xd36dx7) {
    _0xd36dx7[_0xa32e[83]](caches[_0xa32e[82]](CACHE_NAME)[_0xa32e[77]](function(_0xd36dx9) {
        return _0xd36dx9[_0xa32e[81]](REQUIRED_FILES)
    })[_0xa32e[80]](function(_0xd36dx8) {
        if (APP_DIAG) {
            console[_0xa32e[76]](_0xa32e[79] + _0xd36dx8)
        }
    })[_0xa32e[77]](function() {
        return self[_0xa32e[78]]()
    })[_0xa32e[77]](function() {
        if (APP_DIAG) {
            console[_0xa32e[76]](_0xa32e[75])
        }
    }));
    if (APP_DIAG) {
        console[_0xa32e[76]](_0xa32e[84])
    }
});
self[_0xa32e[85]](_0xa32e[86], function(_0xd36dx7) {
    _0xd36dx7[_0xa32e[89]](caches[_0xa32e[88]](_0xd36dx7[_0xa32e[87]])[_0xa32e[77]](function(_0xd36dxa) {
        if (_0xd36dxa) {
            return _0xd36dxa
        };
        return fetch(_0xd36dx7[_0xa32e[87]])
    }));
    if (APP_DIAG) {
        console[_0xa32e[76]](_0xa32e[90] + APP_NAME + _0xa32e[2] + APP_VER + _0xa32e[91])
    }
});
self[_0xa32e[85]](_0xa32e[92], function(_0xd36dx7) {
    _0xd36dx7[_0xa32e[83]](self[_0xa32e[94]][_0xa32e[93]]());
    _0xd36dx7[_0xa32e[83]](caches[_0xa32e[100]]()[_0xa32e[77]]((_0xd36dxb) => {
        return Promise[_0xa32e[99]](_0xd36dxb[_0xa32e[97]]((_0xd36dxc) => {
            return (_0xd36dxc[_0xa32e[98]](APP_NAME + _0xa32e[2]))
        })[_0xa32e[97]]((_0xd36dxc) => {
            return (_0xd36dxc !== CACHE_NAME)
        })[_0xa32e[96]]((_0xd36dxc) => {
            return caches[_0xa32e[95]](_0xd36dxc)
        }))
    }));
    if (APP_DIAG) {
        console[_0xa32e[76]](_0xa32e[101])
    }
})