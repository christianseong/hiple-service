

if(process.env.NODE_ENV === 'production'){
    module.exports = {
        secret : "christian",
        jwtkey : "secret"
    }
}else{
    module.exports = {
        secret : "christian",
        jwtkey : "secret"
    }
}