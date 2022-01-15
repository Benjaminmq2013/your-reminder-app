exports.success = function (req, res, messageList, status){
    res.status(status || 200).send({
        error: "",
        body:messageList
    })
}

exports.error = function (req, res, message, status, details){
    console.error("My Response Has Thrown an Error:" + details)

    res.status(status || 500).send({
        error: message,
        body: ""
    })
}