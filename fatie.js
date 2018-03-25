var { Given, When, Then } = require('cucumber')
const assert = require('assert');
const { driver } = require('../support/web_driver');
const { rootUrl } = require('../../config');


Given(/^进入网站首页$/, async function () {
await driver.get(rootUrl+'/signin')
});

When(/^输入用户名“testuser(\d+)”$/, async function (username) {

    await driver.findElement({id:'name'}).sendKeys(username);
});

Then(/^输入密码“(\d+)”$/, async function (password) {

    await driver.findElement({id:'pass'}).sendKeys(password);
});

Then(/^点击登陆$/, async function () {

    await driver.findElement({className:'span-primary'}).click();
});
Then(/^登陆系统的用户名显示为"([^"]*)"$/, async function (checkusername) {

    //await driver.findElement({css:'.user_card .user_name'}).click();
    let username = await driver.findElement({css:'.user_card .user_name'}).getText()
    return assert.equal(username,checkusername)
});

Given(/^点击发布话题$/, async function () {

    await driver.findElement({id:'create_topic_btn'}).click();
    
});

When(/^选择板块"([^"]*)"$/, async function (arg1) {

    await driver.findElement({id:'tab-value'}).click();
    await driver.findElement({xpath:'//*[@id="tab-value"]/option[4]'}).click();
});

Then(/^输入"([^"]*)"标题$/, async function (title) {

    await driver.findElement({id:'title'}).sendKeys(title);
});

Then(/^文本输入框中输入"([^"]*)"$/, async function (contact) {

    await driver.findElement({xpath:'//*[@id="create_topic_form"]/fieldset/div/div/div[2]/div[6]'}).sendKeys(contact);
});

Then(/^\*提交并验证$/, async function () {

    await driver.findElement({xpath:'//*[@id="create_topic_form"]/fieldset/div/div/div[4]/input'}).click();
    let txt = await driver.findElement({css:'body > section > section.error-stack > h3'}).getText();
    return assert.equal(txt,'422')
});

Then(/^输入密码"([^"]*)"$/, async function (password) {

    await driver.findElement({id:'pass'}).sendKeys(password);
});

When(/^输入用户名"([^"]*)"$/, async function (username) {

     await driver.findElement({id:'name'}).sendKeys(username);
});


