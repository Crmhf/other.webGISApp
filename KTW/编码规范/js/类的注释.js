/**
 * Copyright © 2017 Crmhf. All rights reserved.
 *
 * @title: 类的注释
 * @prject:
 * @description: 说明文件的功能--请后续修改
 * @author: ChiRong
 * @date: 2017/4/12
 * @version: v1.0
 * @modify: 说明对该文件的修改内容、修改原因以及修改日期--请后续修改
 */

/**
 * Book类，代表一个书本
 * @param {string} title - 书本的标题
 * @param {string} author - 书本的作者
 * @description
 */
function book(title, author) {
	this.title= title,
	this.author= author;
}

book.prototype={
	/**
	 * 获取书本的标题
	 * @return 标题
	 */
	gettitle:function(){
		return this.title;
	},
	/**
	 * 设置书本的页数
	 * @param pagenum {number} 页数
	 */
	setPageNum:function(pagenum){
		this.pageNum=pagenum
	}
};