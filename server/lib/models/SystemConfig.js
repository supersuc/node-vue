/**
 * Created by Administrator on 2015/4/15.
 * 数据操作记录
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;


var SystemConfigSchema = new Schema({
    _id: {
        type: String,
        
        'default': shortid.generate
    },
    date: { type: Date, default: Date.now },
    siteName: { type: String, default: '物业管理系统' },
    siteDomain: { type: String, default: 'http://149.129.132.31' },
    siteDiscription: { type: String, default: '物业管理系统' },
    siteKeywords: String,
    siteEmailServer: String,
    siteEmail: String,
    siteEmailPwd: String,
    registrationNo: { type: String, default: '' },
    mongodbInstallPath: String,
    databackForderPath: String
});

var SystemConfig = mongoose.model("SystemConfig", SystemConfigSchema);

module.exports = SystemConfig;

