/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.40 : Database - hafood
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`hafood` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `hafood`;

/*Table structure for table `bestseller` */

DROP TABLE IF EXISTS `bestseller`;

CREATE TABLE `bestseller` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `picstr` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `bestseller` */

insert  into `bestseller`(`id`,`goodsname`,`price`,`picstr`) values (1,'Banana','$15.00','seller_1.jpg'),(2,'Pomegranate','$45.00','seller_2.jpg'),(3,'Cabbage','$45.00','seller_3.jpg'),(4,'Grape','$25.00','seller_4.jpg'),(5,'Apple','$25.00','seller_6.jpg');

/*Table structure for table `bloglists` */

DROP TABLE IF EXISTS `bloglists`;

CREATE TABLE `bloglists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reminder` varchar(100) DEFAULT NULL,
  `picstr` varchar(100) DEFAULT NULL,
  `timestr` varchar(50) DEFAULT NULL,
  `depict` varchar(300) DEFAULT NULL,
  `class` varchar(20) DEFAULT NULL,
  `belong` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

/*Data for the table `bloglists` */

insert  into `bloglists`(`id`,`reminder`,`picstr`,`timestr`,`depict`,`class`,`belong`) values (1,'Cooking tips make cooking simple','latest_news_1.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','FOOD','HOME1'),(2,'Plant Potted Decorative Green','latest_news_2.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','PLANT','HOME1'),(3,'Minimalist Dining Rooms','latest_news_3.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','DRINKS','HOME1'),(4,'3 Things to Consider When Cooking','latest_news_4.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','CLEAN DIET','HOME2'),(5,'The Quickest Way to Make Healthy Granola','latest_news_5.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','HOW-TO','HOME2'),(6,'How to Make a Quick Stir-Fry Dinner','latest_news_6.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','HOW-TO','HOME2'),(7,'10 best bean-to-cup coffee machines','latest_news_7.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(8,'Drinking coffee doesn’t help you sober up when drunk','latest_news_8.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','LIFESTYLE','HOME4'),(9,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(10,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(11,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(12,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(13,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(14,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(15,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(16,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(17,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(18,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(19,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4'),(20,'Seven cups a day could help you live','latest_news_9.jpg','FEB 11, 2019 - RACHEL - LIFESTYLE','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.','COFFEE','HOME4');

/*Table structure for table `booktable` */

DROP TABLE IF EXISTS `booktable`;

CREATE TABLE `booktable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `consumer` varchar(30) DEFAULT NULL,
  `bookday` varchar(30) DEFAULT NULL,
  `booktime` varchar(30) DEFAULT NULL,
  `personcount` int(11) DEFAULT NULL,
  `node` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*Data for the table `booktable` */

insert  into `booktable`(`id`,`userid`,`consumer`,`bookday`,`booktime`,`personcount`,`node`) values (13,12,'ZHANGSAN','2019-12-24','12:00',7,'KJ');

/*Table structure for table `brandname` */

DROP TABLE IF EXISTS `brandname`;

CREATE TABLE `brandname` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `picstr` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `brandname` */

insert  into `brandname`(`id`,`picstr`) values (1,'brand_1.png'),(2,'brand_2.png'),(3,'brand_3.png'),(4,'brand_4.png'),(5,'brand_5.png');

/*Table structure for table `cakes` */

DROP TABLE IF EXISTS `cakes`;

CREATE TABLE `cakes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(30) DEFAULT NULL,
  `picstr` varchar(100) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `sale` tinyint(1) DEFAULT NULL,
  `overprice` varchar(30) DEFAULT NULL,
  `depict` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `cakes` */

insert  into `cakes`(`id`,`goodsname`,`picstr`,`price`,`sale`,`overprice`,`depict`) values (1,'ESalted Fried Chicken','trending_foods_3.1.jpg','$15.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(2,'Fresh Crab With Lemon','trending_foods_3.2.jpg','$45.00',1,'$70.00','Dandelion greens and molasses glazed peaches.'),(3,'Lemon-Rosemary Chicken','trending_foods_3.3.jpg','$32.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(4,'Spicy Crab Ramen','trending_foods_3.4.jpg','$15.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(5,'Crab With Curry Sources','trending_foods_3.5.jpg','$45.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(6,'Baked Potato Pizza','trending_foods_3.6.jpg','$32.00',0,NULL,'Dandelion greens and molasses glazed peaches.');

/*Table structure for table `changecode` */

DROP TABLE IF EXISTS `changecode`;

CREATE TABLE `changecode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) DEFAULT NULL,
  `valicode` int(11) DEFAULT NULL,
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;

/*Data for the table `changecode` */

insert  into `changecode`(`id`,`email`,`valicode`,`createtime`) values (73,'1039004739@qq.com',2788,'2019-12-20 09:48:23'),(72,'1534536268@qq.com',4309,'2019-12-19 19:34:31');

/*Table structure for table `comments` */

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `content` varchar(400) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `comments` */

insert  into `comments`(`id`,`userid`,`content`) values (1,1,' Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '),(2,2,'我不是谭冰艳，我不会武功，我只会哈哈哈，美杜莎静的石化'),(3,2,'Nec suas dolorem ne, id accusamus iracundia interesset eos. Usu dolorum molestiae an, eam agam scriptorem ad. Et nulla graeco mel, vivendo expeten-dis vis in, ex vim corrumpit dignissim.'),(7,9,'胡静是个大傻子，美杜莎静，哈哈哈，石化~~~~'),(8,9,'hujijidbgdjkghkdfgjds'),(9,9,'这是默认的评论');

/*Table structure for table `drink` */

DROP TABLE IF EXISTS `drink`;

CREATE TABLE `drink` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(30) DEFAULT NULL,
  `picstr` varchar(100) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `sale` tinyint(1) DEFAULT NULL,
  `overprice` varchar(30) DEFAULT NULL,
  `depict` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `drink` */

insert  into `drink`(`id`,`goodsname`,`picstr`,`price`,`sale`,`overprice`,`depict`) values (1,'Caffe Latte','daily_drinks_1.jpg','$25.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(2,'Vanilla Latte','daily_drinks_2.jpg','$45.00',1,'$70.00','Dandelion greens and molasses glazed peaches.'),(3,'Hot Tea','daily_drinks_3.jpg','$32.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(4,'Hot Tea','daily_drinks_3.jpg','$32.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(5,'Americano','daily_drinks_4.jpg','$32.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(6,'Espresso','daily_drinks_5.jpg','$45.00',0,NULL,'Dandelion greens and molasses glazed peaches.');

/*Table structure for table `foodclass` */

DROP TABLE IF EXISTS `foodclass`;

CREATE TABLE `foodclass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class` varchar(30) DEFAULT NULL,
  `picstr` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/*Data for the table `foodclass` */

insert  into `foodclass`(`id`,`class`,`picstr`) values (10,'Eggs','sub_1.jpg'),(11,'Fruit','sub_2.jpg'),(12,'Vegetables','sub_3.jpg'),(13,'Meat','sub_4.jpg'),(14,'Dairy','sub_5.jpg');

/*Table structure for table `ingredients` */

DROP TABLE IF EXISTS `ingredients`;

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(30) DEFAULT NULL,
  `picstr` varchar(100) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `sale` tinyint(1) DEFAULT NULL,
  `overprice` varchar(30) DEFAULT NULL,
  `depict` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

/*Data for the table `ingredients` */

insert  into `ingredients`(`id`,`goodsname`,`picstr`,`price`,`sale`,`overprice`,`depict`) values (1,'Grape','product_1.jpg','$15.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo. An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo. '),(2,'Red Pepper','product_2.jpg','$45.00',1,'$70.00','Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo.\n An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo.'),(3,'Cauliflower','product_7.jpg','$45.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo.\n An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo.'),(4,'Apple','product_5.jpg','$25.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo.\n An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo.'),(5,'Corn','product_6.jpg','$45.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo.\n An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo.'),(6,'Carrots','seller_1.jpg','$32.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo.\n An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo.'),(7,'Eggplant','product_4.jpg','$32.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo.\n An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo.'),(8,'Onions & Garlic','product_3.jpg','$32.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo.\n An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo.'),(9,'Onions & Garlic','seller_2.jpg','$32.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo.\n An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo.'),(10,'Cauliflower','product_8.jpg','$32.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo.\n An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo.'),(33,'Grape','product_1.jpg','$15.00',0,NULL,'Tacimates sent ucius concludaturque, ea option maiestatis deterruisset sea. Mea dolores perfecto cu, ea dicat ocurreret posidonium quo. An veritus omnesque rationibus quo, ad populo pertinax cotidieque quo. '),(52,'小企鹅','Penguins.jpg','$88.88',NULL,NULL,'北极的企鹅哈啊哈哈~隔~');

/*Table structure for table `popular` */

DROP TABLE IF EXISTS `popular`;

CREATE TABLE `popular` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(30) DEFAULT NULL,
  `picstr` varchar(100) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `sale` tinyint(1) DEFAULT NULL,
  `overprice` varchar(30) DEFAULT NULL,
  `depict` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

/*Data for the table `popular` */

insert  into `popular`(`id`,`goodsname`,`picstr`,`price`,`sale`,`overprice`,`depict`) values (20,'Crab With Curry Sources','popular_menu_1.jpg','$25.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(21,'Wild Mushroom with Kale','popular_menu_2.jpg','$15.00',1,'$30.00','Dandelion greens and molasses glazed peaches.'),(22,'Lemon-Rosemary Chicken','popular_menu_3.jpg','$35.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(23,'Lemon-Rosemary Chicken','popular_menu_4.jpg','$25.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(24,'Spicy Crab Ramen','popular_menu_5.jpg','$15.00',0,NULL,'Dandelion greens and molasses glazed peaches.'),(25,'Wild Bucatini with Kale','popular_menu_6.jpg','$35.00',0,NULL,'Dandelion greens and molasses glazed peaches.');

/*Table structure for table `registercode` */

DROP TABLE IF EXISTS `registercode`;

CREATE TABLE `registercode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) DEFAULT NULL,
  `valicode` int(11) DEFAULT NULL,
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `registercode` */

/*Table structure for table `shopcar` */

DROP TABLE IF EXISTS `shopcar`;

CREATE TABLE `shopcar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `ingredientsid` int(11) DEFAULT NULL,
  `goodscount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  KEY `ingredientsid` (`ingredientsid`)
) ENGINE=MyISAM AUTO_INCREMENT=213 DEFAULT CHARSET=utf8;

/*Data for the table `shopcar` */

insert  into `shopcar`(`id`,`userid`,`ingredientsid`,`goodscount`) values (74,9,1,2),(105,9,7,4),(91,9,8,1),(76,9,3,2),(208,1,1,1),(104,9,5,2),(106,9,9,8),(93,9,10,8),(141,12,33,1);

/*Table structure for table `team` */

DROP TABLE IF EXISTS `team`;

CREATE TABLE `team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberpic` varchar(30) DEFAULT NULL,
  `membername` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `team` */

insert  into `team`(`id`,`memberpic`,`membername`) values (1,'about_team_1.jpg','Jared Paul'),(2,'about_team_2.jpg','Lowell Casey'),(3,'about_team_3.jpg','Ted	Owens'),(4,'about_team_4.jpg','Wilfred Rowe');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(30) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `tel` varchar(40) DEFAULT NULL,
  `headpic` varchar(100) DEFAULT NULL,
  `psd` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`nickname`,`email`,`tel`,`headpic`,`psd`) values (10,NULL,'757363985@qq.com',NULL,NULL,'25d55ad283aa400af464c76d713c07ad'),(9,'我不是丁慧','1164293296@qq.com',NULL,'customer_2.png','e10adc3949ba59abbe56e057f20f883e'),(2,'我不是小矮','1049283791@qq.com','18888888888','customer_1.png','25f9e794323b453885f5181f1b624d0b'),(1,'我不是邓曦','3056945891@qq.com','17784456719','customer_1.png','25d55ad283aa400af464c76d713c07ad'),(11,'我不是陈二哈','1534536268@qq.com','18386207432','timg5.jpg','e10adc3949ba59abbe56e057f20f883e'),(12,'我不是胡静','1039004739@qq.com',NULL,NULL,'e10adc3949ba59abbe56e057f20f883e'),(13,NULL,'3056915891@qq.com',NULL,NULL,'25d55ad283aa400af464c76d713c07ad'),(14,NULL,'1264827516@qq.com',NULL,NULL,'fcea920f7412b5da7be0cf42b8c93759');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
