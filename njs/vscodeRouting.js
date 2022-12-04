var fs = require("fs");
var routes_json_path = "/run/code_server_pm/routes.json";
var auth_server = "127.0.0.1:60392";

function getUserRouteInfo(session_id) {
    if (session_id == undefined) return auth_server;

    var data = JSON.parse(fs.readFileSync(routes_json_path));
    var socket_path = data[session_id];
    if (socket_path === undefined) return auth_server;
    return "unix:".concat(socket_path);
}
function redirectUser(req) {
    return getUserRouteInfo(req.variables.cookie_session_id);
}

export default { redirectUser };
