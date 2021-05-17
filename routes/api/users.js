const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const User = require('../../model/User');
const key = require('../../config/keys').jwtkey
const { config, Group } = require('coolsms-node-sdk')
const conf = require('../../config/smsconfig.json')
const createError = require('http-errors')


config.init({
    apiKey: conf.apiKey,
    apiSecret: conf.apiSecret
})

async function send(message, agent = {}) {
    try {
        var res = await Group.sendSimpleMessage(message, agent);
        //console.log(res + "this is res")
        return res;
    } catch (e) {
        console.log(e)
    }
}





/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */
router.post('/register', (req, res) => {



    let {
        name,
        username,
        email,
        password,
        confirm_password
    } = req.body


    if (password !== confirm_password) {
        res.status(404).send({
            msg: "비밀번호가 일치하지 않습니다."
        });



    } else {
        //check for the unique username
        User.findOne({
            username: username
        }).then(user => {
            if (user) {
                res.status(404).send({
                    msg: "아이디가 이미 존재합니다."
                });

            } else {
                //check for the unique email
                User.findOne({
                    email: email
                }).then(user => {
                    if (user) {
                        res.status(404).send({
                            msg: "이메일이 이미 존재합니다. 비밀번호를 잊어버렸나요?"
                        });

                    } else {
                        //The data is valid and now we can register the user
                        let newUser = new User({
                            name,
                            username,
                            password,
                            email
                        });
                        //hash password
                        bycrypt.genSalt(10, (err, salt) => {
                            bycrypt.hash(newUser.password, salt, (err, hash) => {
                                if (err) {
                                    res.send(err)
                                };
                                newUser.password = hash
                                newUser.save().then(user => {
                                    return res.status(201).json({
                                        success: true,
                                        msg: "가입이 완료되었습니다"
                                    })
                                })
                            })
                        })
                    }
                })

            }
        })
    }






})

/**
 * @route POST api/users/login
 * @desc Signing the User
 * @access Public
 */
router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "아이디가 존재하지 않습니다!",
                success: false
            });
        }

        //If there is user we are now going to compare the password
        bycrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                //User's password is correct and we need to send the JSON Token for that user
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email

                }

                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        user : user,
                        token: `Bearer ${token}`,
                        msg: "로그인 성공"
                    })
                })

            } else {
                return res.status(404).json({
                    msg: "비밀번호가 일치하지 않습니다",
                    success: false
                });
            }
        })
    })
})

/**
 * @route POST api/users/profile
 * @desc Return the User's data
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
})


router.post('/send', async (req, res) => {
    const number = req.body.number;              // SMS 전송할 번호
    const message = req.body.message;            // SMS 전송할 메시지

    console.log(" > number: " + number);
    console.log(" > message: " + message);

    try {
        var response = send({
            to: number,
            text: message,
            type: conf.type,
            from: conf.from
        })

        res.json({ result: true, response: response });

    } catch (e) {
        console.log(e);
        res.json({ result: false, message: 'sms transmission failed' });
    }
})


module.exports = router
