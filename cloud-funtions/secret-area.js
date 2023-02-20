exports.handler = function(event, context, callBack) {
    callBack(null, {
        statusCode: 200,
        body: "Welcome to the super secret area"
    })
}