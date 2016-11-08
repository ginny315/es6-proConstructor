var path = require('path')
var fs = require('fs')
var colors = require('colors')
var async = require('async')
var vfs = require('vinyl-fs')
var map = require('map-stream')
var crypto = require('crypto')

module.exports = function(cwd, args, callback) {

    var configPath = path.join(cwd, 'build.json')
    async.waterfall([
            function(next) {
                fs.exists(configPath, function(exist) {
                    if (!exist) {
                        next({
                            msg: 'Building failed:'.red + 'lack of build.json'
                        })
                    } else {
                        next(null, configPath)
                    }
                })
            },
            function(configPath, next) {
                fs.readFile(configPath, function(err, data) {
                    if (err) next({
                        msg: err
                    });
                    next(null, data.toString())
                })
            },
            function(configStr, next) {
                var configJson
                var error
                try {
                    configJson = JSON.parse(configStr)
                } catch (e) {
                    error = {
                        msg: e
                    }
                } finally {
                    next(error, configJson)
                }
            }
        ],
        function(err, result) {
            if (err) {
                console.log(err.msg)
                return
            }
            if (args.hasOwnProperty('v')) {
                build(args.v, result, args)
            } else {
                console.error('Building failed:'.red + 'lack of param version,please input:\nfone build -v [version]')
            }
        }
    )
}

var hashName = function(file, cb) {
    var data = file.contents.toString()
    var basename = path.dirname(file.path)
    var extname = path.extname(file.path)
    file.path = path.join(basename,md5(data) + extname)
    cb(null, file)
}

function build(tag, config) {
    var srcArr
    if (!config.hasOwnProperty('src')) {
        console.error('Building failed:'.red + 'can not find src in build.json')
        return
    }
    if (!config.hasOwnProperty('dest')) {
        console.error('Building failed:'.red + 'can not find dest in build.json')
        return
    }
    if (!config.hasOwnProperty('domain')) {
        console.error('Building failed:'.red + 'can not find domain in build.json')
        return
    }
    srcArr = config.src
    if (config.hasOwnProperty('useTag')) {
        srcArr = filterUseTag(srcArr, config.useTag)
    }
    if (config.hasOwnProperty('sPath')) {
        srcArr = filterSPath(srcArr, config.sPath)
    }
    vfs.src(srcArr)
        .pipe(map(hashName))
        .pipe(vfs.dest(config.dest))
}


function filterUseTag(srcs, useTagSrcs) {
    useTagSrcs.forEach(function(src) {
        srcs.push('!' + src)
    })
    return srcs
}

function filterSPath(srcs, sPaths) {
    sPaths.forEach(function(pathConfig) {
        pathConfig.src.forEach(function(src) {
            srcs.push('!' + src)
        })
    })
    return srcs
}

function md5(data) {
    var md5 = crypto.createHash('md5')
    md5.update(data, 'utf8')
    return md5.digest('hex').substring(0, 8)
}
