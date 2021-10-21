
module.exports = async function (context, req) {
    context.log.info('createWatchlists function started.');
    
    context.res = {
        status: 200,
        body: "Hello" + (req.body.name)
    };
};