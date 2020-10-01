-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)


use csdl_medsul

-- Host: localhost    Database: medsul
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `ADMIN_ID` int NOT NULL AUTO_INCREMENT,
  `ADMIN_HOTEN` varchar(300) NOT NULL,
  `ADMIN_EMAIL` varchar(300) NOT NULL,
  `ADMIN_GIOITINH` varchar(100) NOT NULL,
  `ADMIN_USERNAME` varchar(300) NOT NULL,
  `ADMIN_PASSWORD` varchar(300) NOT NULL,
  `ADMIN_DIACHI` longtext NOT NULL,
  `ADMIN_CMND` varchar(100) NOT NULL,
  `ADMIN_CMNDNGAYCAP` date NOT NULL,
  `ADMIN_CMNDNOICAP` longtext NOT NULL,
  `ADMIN_CMNDMATTRUOC` longtext NOT NULL,
  `ADMIN_CMNDMATSAU` longtext NOT NULL,
  `ADMIN_AVATAR` longtext,
  `ADMIN_TINHTRANG` int NOT NULL,
  `ADMIN_SDT` varchar(100) NOT NULL,
  `ADMIN_CHUCVU` tinyint DEFAULT NULL,
  `ADMIN_NGAYSINH` date DEFAULT NULL,
  PRIMARY KEY (`ADMIN_ID`),
  UNIQUE KEY `ADMIN_EMAIL_UNIQUE` (`ADMIN_EMAIL`),
  UNIQUE KEY `ADMIN_USERNAME_UNIQUE` (`ADMIN_USERNAME`),
  UNIQUE KEY `ADMIN_SDT_UNIQUE` (`ADMIN_SDT`),
  UNIQUE KEY `ADMIN_CMND_UNIQUE` (`ADMIN_CMND`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES 
(4,'Trần Thanh Quy','thanhquy0164@gmail.com','Nam','quy','quy123','Long An','301634259','2013-10-15','LA','chưa có','chưa có','chưa có',1,'0375250024',1,'1987-04-04'),
(5,'Lê Ngọc Hậu','hau@gmail.com','Nam','hau','hau123','Long An','012345678','2013-10-15','HCM','chưa có','chưa có','chưa có',1,'0123456789',1,'1987-05-04'),
(6,'Nguyễn Lan','lan@gmail.com','Nam','lan','lan123','Long An','032165489','2013-10-15','LA','chưa có','chưa có','chưa có',2,'0123456852',1,'1987-04-04'),
(7,'Nguyễn Trọng Dương','duon@gmail.com','Nam','duong','duong123','Long An','258963123','2013-10-15','HCM','chưa có','chưa có','chưa có',2,'0123526325',1,'1987-05-04'),
(8,'Lê Anh Kiệt','ket@gmail.com','Nam','kiet','kiet123','Long An','254123652','2013-10-15','HCM','chưa có','chưa có','chưa có',1,'2541203215',1,'1987-02-04'),
(9,'Nguyễn Ngọc Kha','kha@gmail.com','Nam','kha','123','Long An','215236521','2013-10-15','HCM','chưa có','chưa có','chưa có',1,'2512355625',0,'1987-04-04'),
(10,'Trần Văn manager','manager@gmail.com','Nam','manager','123','123 HCM','012352102','2013-02-03','HCM','chưa có','chưa có','chưa có',1,'012352145201',1,'1995-03-01'),
(11,'Nguyễn Ngọc Admin','admin@gmail.com','Nam','admin','123','Long An','0336521948','2013-10-15','HCM','chưa có','chưa có','chưa có',1,'20125625',0,'1987-04-04');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietdat`
--

DROP TABLE IF EXISTS `chitietdat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietdat` (
  `CTD_ID` int NOT NULL AUTO_INCREMENT,
  `DV_ID` int NOT NULL,
  `DL_ID` int NOT NULL,
  `CTD_NGAYBATDAU` date NOT NULL,
  `CTD_DONGIA` double NOT NULL,
  `CTD_GIOBATDAU` varchar(10) NOT NULL,
  PRIMARY KEY (`CTD_ID`),
  KEY `FK_CHITIETDAT_CO_DICHVU` (`DV_ID`),
  KEY `FK_CO_CHITIETDAT` (`DL_ID`),
  CONSTRAINT `FK_CHITIETDAT_CO_DICHVU` FOREIGN KEY (`DV_ID`) REFERENCES `dichvu` (`DV_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_CO_CHITIETDAT` FOREIGN KEY (`DL_ID`) REFERENCES `datlich` (`DL_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKk53j07ffhxdaurkcycbttiax4` FOREIGN KEY (`DL_ID`) REFERENCES `datlich` (`DL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietdat`
--

LOCK TABLES `chitietdat` WRITE;
/*!40000 ALTER TABLE `chitietdat` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitietdat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chungchi`
--

DROP TABLE IF EXISTS `chungchi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chungchi` (
  `cnganh_id` int NOT NULL AUTO_INCREMENT,
  `cnganh_anhmatsau` varchar(255) DEFAULT NULL,
  `cnganh_anhmattruoc` varchar(255) DEFAULT NULL,
  `dd_id` int DEFAULT NULL,
  `cnganh_ghichu` varchar(255) DEFAULT NULL,
  `cnganh_loai` varchar(255) DEFAULT NULL,
  `cnganh_ngaytotnghiep` date DEFAULT NULL,
  `cnganh_sohieu` varchar(255) DEFAULT NULL,
  `cnganh_tencn` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cnganh_id`),
  KEY `FKflg6ukqfocueaexkvaedpvoo` (`dd_id`),
  CONSTRAINT `FKflg6ukqfocueaexkvaedpvoo` FOREIGN KEY (`dd_id`) REFERENCES `dieuduong` (`DD_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chungchi`
--

LOCK TABLES `chungchi` WRITE;
/*!40000 ALTER TABLE `chungchi` DISABLE KEYS */;
/*!40000 ALTER TABLE `chungchi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chuyennganh`
--

DROP TABLE IF EXISTS `chuyennganh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chuyennganh` (
  `CNGANH_ID` int NOT NULL AUTO_INCREMENT,
  `DD_ID` int DEFAULT NULL,
  `CNGANH_TENCN` longtext,
  `CNGANH_LOAI` varchar(100) DEFAULT NULL,
  `CNGANH_NGAYTOTNGHIEP` date DEFAULT NULL,
  `CNGANH_SOHIEU` varchar(300) DEFAULT NULL,
  `CNGANH_ANHMATTRUOC` longtext,
  `CNGANH_ANHMATSAU` longtext,
  `CNGANH_GHICHU` longtext,
  PRIMARY KEY (`CNGANH_ID`),
  KEY `FK_DD_CO_CN` (`DD_ID`),
  CONSTRAINT `FK_DD_CO_CN` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chuyennganh`
--

LOCK TABLES `chuyennganh` WRITE;
/*!40000 ALTER TABLE `chuyennganh` DISABLE KEYS */;
INSERT INTO `chuyennganh` VALUES 
(1,1,'Kỹ thuật viên phục hồi chức năng','Khá','2019-12-10','1524152156','chua co','chua co',NULL),
(2,1,'Y sỹ.','TB','2019-10-10','21536215','chua co','chua co',NULL),
(3,2,'Kỹ thuật viên phục hồi chức năng','Giỏi ','2019-12-29','1524256322','chua co','chua co',NULL),
(32,3,'Kỹ thuật viên phục hồi chức năng','TB','2019-12-13','21536215','chua co','chua co',NULL),
(33,7,'Kỹ thuật viên phục hồi chức năng','Giỏi ','2019-12-26','15242322','chua co','chua co',NULL),
(34,8,'Kỹ thuật viên phục hồi chức năng','Khá','2019-12-11','152423322','chua co','chua co',NULL),
(35,9,'Kỹ thuật viên phục hồi chức năng','Khá','2019-12-31','1524256322','chua co','chua co',NULL),
(36,10,'Y sỹ.','TB','2019-12-15','152422322','chua co','chua co',NULL),
(37,10,'Kỹ thuật viên phục hồi chức năng','Khá','2019-12-16','1524251332','chua co','chua co',NULL),
(38,11,'Kỹ thuật viên phục hồi chức năng','Giỏi ','2019-11-18','1524276332','chua co','chua co',NULL),
(39,12,'Kỹ thuật viên phục hồi chức năng','Giỏi ','2019-01-18','155256332','chua co','chua co',NULL),
(40,13,'Kỹ thuật viên phục hồi chức năng','Giỏi ','2019-03-18','1524256232','chua co','chua co',NULL),
(41,14,'Kỹ thuật viên phục hồi chức năng','Khá','2019-12-20','152425232','chua co','chua co',NULL),
(42,15,'Y sỹ.','Khá','2019-12-28','1524252672','chua co','chua co',NULL),
(43,16,'Y sỹ.','Khá','2019-12-21','152425282','chua co','chua co',NULL),
(44,17,'Kỹ thuật viên phục hồi chức năng','Giỏi ','2019-12-12','152425262','chua co','chua co',NULL),
(45,18,'Kỹ thuật viên phục hồi chức năng','TB','2019-12-14','152425222','chua co','chua co',NULL);
/*!40000 ALTER TABLE `chuyennganh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cmnd_dieuduong`
--

DROP TABLE IF EXISTS `cmnd_dieuduong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cmnd_dieuduong` (
  `CMND_ID` int NOT NULL AUTO_INCREMENT,
  `SOCMND` varchar(30) NOT NULL,
  `DD_ID` int DEFAULT NULL,
  `CMND_HOTEN` varchar(300) DEFAULT NULL,
  `CMND_QUOCTICH` varchar(100) DEFAULT NULL,
  `CMND_NOICAP` varchar(100) DEFAULT NULL,
  `CMND_DIACHITT` varchar(400) DEFAULT NULL,
  `CMND_QUEQUAN` varchar(300) DEFAULT NULL,
  `CMND_NGAYCAP` date DEFAULT NULL,
  `CMND_DACDIEMNHANDANG` varchar(400) DEFAULT NULL,
  `CMND_ANHMATTRUOC` longtext,
  `CMND_ANHMATSAU` longtext,
  PRIMARY KEY (`CMND_ID`),
  UNIQUE KEY `SOCMND_UNIQUE` (`SOCMND`),
  UNIQUE KEY `DD_ID_UNIQUE` (`DD_ID`),
  CONSTRAINT `FK_DD_CO_CMND` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKcckt2qle68fjkasilwdatb0p0` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cmnd_dieuduong`
--

LOCK TABLES `cmnd_dieuduong` WRITE;
/*!40000 ALTER TABLE `cmnd_dieuduong` DISABLE KEYS */;
INSERT INTO `cmnd_dieuduong` VALUES (1,'123456789',2,'LÊ NGỌC HẬU','Việt Nam','CA.Quận Bình Tân','10/11/99 Đồng Tháp','Đồng Tháp','2013-10-10','Cà Khịa','chưa có','chưa có'),(3,'987654321',1,'TRẦN THANH QUY','Việt Nam','CA.Quận 8','911 quang trung ','Long An','2013-10-15','1 vs 5 ','chưa có','chưa có'),(4,'112345678',3,'NGUYỄN LAN','Việt Nam','CA.Quận 9','26/10/99 Nha Trang','Nha Trang','2013-10-10','3 Que','chưa có','chưa có'),(5,'123155746',4,'NGUYỄN NGỌC KHA','Việt Nam','CA.Củ Chi','Củ Chi','Củ Chi','2013-10-11','Thích Mai','chưa có','chưa có'),(8,'123677865',7,'NGUYỄN TRỌNG DƯƠNG','Việt Nam','CA.Quận 10','40/3 Nguyễn Hới KP6, P.An Lạc, Q.Bình Tân, TP.Hồ Chí Minh','Hà Nội','2020-05-20','Mập Thích Nét','chưa có','chưa có'),(9,'768234312',9,'LÊ VĂN HIẾU','Việt Nam','CA.Quận 1','Đồng Tháp','Long An','2019-12-01','Kiệt lặt','chưa có','chưa có'),(10,'352612381',10,'LÊ HẬU','Việt Nam','CA.Quận 2','20/11 Thành Phố Hồ Chí Minh','Hồ Chí Minh','2016-11-05','Hậu Cà Khịa','chưa có ','chưa có'),(11,'456473853',8,'Lê Anh Kiệt','Việt Nam','CA.Quận 3','10/22 Phú Thọ','Hồ Chí Minh','2013-11-02','Hiếu Lùn','chưa có ','chưa có'),(12,'123679276',11,'Nguyễn Kim Ngọc','Việt Nam','CA.Quận 1','20/16 Thành Phố Hồ Chí Minh','Hồ Chí Minh','2013-06-02','16 lặt','chưa có ','chưa có '),(13,'457439221',12,'Trần Thanh Huy','Việt Nam','CA.Quận 5','20/113 Thành Phố Hồ Chí Minh','Hồ Chí Minh','2013-12-02','123 lặt','chưa có ','chưa có '),(14,'3427t2384',13,'Trần Văn Tú','Việt Nam','CA.Quận 1','20/12 Thành Phố Hồ Chí Minh','Hồ Chí Minh','2013-07-02','12 lặt','chưa có ','chưa có '),(15,'123453465',14,'Trần Văn Lợi','Việt Nam','CA.Quận 5','210/12 Thành Phố Hồ Chí Minh','Hồ Chí Minh','2013-07-02','Hiếu Lùn','chưa có ','chưa có '),(16,'456456324',15,'Trần Văn Đan','Việt Nam','CA.Quận 12','230/12 Thành Phố Hồ Chí Minh','Hồ Chí Minh','2013-07-02','Hiếu Lùn','chưa có ','chưa có '),(17,'124325564',16,'Trần Văn Hòa','Việt Nam','CA.Quận 11','10/12 Thành Phố Hồ Chí Minh','Hồ Chí Minh','2013-07-02','12 lặt','chưa có ','chưa có '),(18,'780234233',17,'Trần Văn Đức','Việt Nam','CA.Quận 7','250/12 Thành Phố Hồ Chí Minh','Hồ Chí Minh','2013-07-02','123 lặt','chưa có ','chưa có '),(19,'453658679',18,'Trần Văn Kiện','Việt Nam','CA.Quận 9','210/12 Thành Phố Hồ Chí Minh','Hồ Chí Minh','2013-07-02','12 lặt','chưa có ','chưa có ');
/*!40000 ALTER TABLE `cmnd_dieuduong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datlich`
--

DROP TABLE IF EXISTS `datlich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datlich` (
  `DL_ID` int NOT NULL AUTO_INCREMENT,
  `MGG_ID` int DEFAULT NULL,
  `USER_ID` int DEFAULT NULL,
  `NB_ID` int DEFAULT NULL,
  `DD_ID` int DEFAULT NULL,
  `TINHT_ID` int NOT NULL,
  `DL_NGAYDAT` datetime NOT NULL,
  `DL_TONGTIEN` double NOT NULL,
  `DL_SDT` varchar(100) NOT NULL,
  `DL_HOTEN` varchar(30) NOT NULL,
  `DL_EMAIL` varchar(50) NOT NULL,
  `DL_GHICHU` varchar(300) DEFAULT NULL,
  `DL_DIACHI` varchar(300) NOT NULL,
  `DL_TINHTRANG` int NOT NULL,
  PRIMARY KEY (`DL_ID`),
  KEY `FK_CO_MAGGIAMGIA` (`MGG_ID`),
  KEY `FK_DIEUDUONG_CO_LICH` (`DD_ID`),
  KEY `FK_LICH_THUOC_TINHTHANH` (`TINHT_ID`),
  KEY `FK_NGUOIBENH_CO_LICHDAT` (`NB_ID`),
  KEY `FK_USER_DAT_LICH` (`USER_ID`),
  CONSTRAINT `FK_CO_MAGGIAMGIA` FOREIGN KEY (`MGG_ID`) REFERENCES `magiamgia` (`MGG_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_DIEUDUONG_CO_LICH` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_LICH_THUOC_TINHTHANH` FOREIGN KEY (`TINHT_ID`) REFERENCES `tinhthanh` (`TINHT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_NGUOIBENH_CO_LICHDAT` FOREIGN KEY (`NB_ID`) REFERENCES `nguoibenh` (`NB_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_USER_DAT_LICH` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datlich`
--

LOCK TABLES `datlich` WRITE;
/*!40000 ALTER TABLE `datlich` DISABLE KEYS */;
/*!40000 ALTER TABLE `datlich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dichvu`
--

DROP TABLE IF EXISTS `dichvu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dichvu` (
  `DV_ID` int NOT NULL AUTO_INCREMENT,
  `LOAIDV_ID` int NOT NULL,
  `DV_MA` varchar(100) NOT NULL,
  `DV_TEN` varchar(300) NOT NULL,
  `DV_MOTA` longtext,
  `DV_YEUCAUCV` longtext,
  `DV_KHONGBAOGOM` longtext,
  `DV_THOIGIANUOCTINH` double DEFAULT NULL,
  `DV_GIADICHVU` double NOT NULL,
  `DV_TINHTRANG` int NOT NULL,
  PRIMARY KEY (`DV_ID`),
  UNIQUE KEY `DV_MA_UNIQUE` (`DV_MA`),
  UNIQUE KEY `DV_TEN_UNIQUE` (`DV_TEN`),
  KEY `FK_CO` (`LOAIDV_ID`),
  CONSTRAINT `FK_CO` FOREIGN KEY (`LOAIDV_ID`) REFERENCES `loaidichvu` (`LOAIDV_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKdp6lttqajuvpddao48037hqag` FOREIGN KEY (`LOAIDV_ID`) REFERENCES `loaidichvu` (`LOAIDV_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dichvu`
--

LOCK TABLES `dichvu` WRITE;
/*!40000 ALTER TABLE `dichvu` DISABLE KEYS */;
INSERT INTO `dichvu` VALUES 
(1,4,'PHCN STB','Phục Hồi Chức Năng Sau Tai Biến','Tai biến – đột quỵ có thể gặp ở bất kỳ lứa tuổi nào, tỷ lệ cao nhất ở người lớn tuổi nhưng đang có xu hướng trẻ hóa. Hậu quả thường gặp nhất sau tai biến là bệnh nhân mất khả năng vận động, liệt nửa người không tự chăm sóc được bản thân và sinh hoạt khó khăn.','Chăm sóc toàn diện cho bệnh nhân tại nhà và bệnh viện thay cho người nhà bệnh nhân bằng các điều dưỡng viên được đào tạo bài bản, chính quy','- Thay băng cắt chỉ cho vết thương.',3,399000,1),
(2,4,'PHCN STN','Phục Hồi Chức Năng Sau Tai Nạn','Vật lý trị liệu và vận động phục hồi chức năng là hoạt động rất quang trọng quyết định đến sự thành công của ca phẫu thuật và khả năng phục hồi của bệnh nhân. Tuy nhiên sau khi phẫu thuật điều trị bệnh nhân vẫn còn rất đau, việc di chuyển đi lại rất khó khăn, nhiều rủi ro, tốn thời gian và chi phí. Hiểu được điều đó chúng tôi sẽ cử các chuyên viên PHCN nhiều năm kinh nghiệm đến thực hiện các thủ thuật vật lý trị liệu và hoạt động trị liệu cho bạn hoặc người thân tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu.','Chăm sóc toàn diện cho bệnh nhân tại nhà và bệnh viện thay cho người nhà bệnh nhân bằng các điều dưỡng viên được đào tạo bài bản, chính quy.','- Thay băng cắt chỉ cho vết thương.',4,399000,1),
(3,5,'CCTM','Cắt Chỉ Thẩm Mỹ','Khi đang bị đau ốm thì việc di chuyển đến các cơ sở y tế để thực hiện các thủ thuật đơn giản nhưng rất quan trọng như thay băng, cắt chỉ, rửa vết thương là việc khó khăn. Hiểu được điều đó chúng tôi sẽ cử các điều dưỡng viên có kỹ thuật cao và nhiều năm kinh nghiệm đến thực hiện các thủ thuật tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu thực hiện một hoặc một nhóm các thủ thuật chăm sóc bệnh nhân bằng kỹ thuật','Chăm sóc toàn diện cho bệnh nhân tại nhà và bệnh viện thay cho người nhà bệnh nhân bằng các điều dưỡng viên được đào tạo bài bản, chính quy','- Trông nom, chăm sóc bệnh nhân',2,199000,1),
(6,4,'PHCN_SPT','Phục Hồi Chức Năng Sau Phẫu Thuật','Vật lý trị liệu và vận động phục hồi chức năng là hoạt động rất quang trọng quyết định đến sự thành công của ca phẫu thuật và khả năng phục hồi của bệnh nhân. Tuy nhiên sau khi phẫu thuật điều trị bệnh nhân vẫn còn rất đau, việc di chuyển đi lại rất khó khăn, nhiều rủi ro, tốn thời gian và chi phí. Hiểu được điều đó chúng tôi sẽ cử các chuyên viên PHCN nhiều năm kinh nghiệm đến thực hiện các thủ thuật vật lý trị liệu và hoạt động trị liệu cho bạn hoặc người thân tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu.','Hướng dẫn tập vận động trị liệu và thực hiện các biện pháp vật lý trị liệu để giúp tăng hiệu quả điều trị và phục hồi khả năng vận động của bệnh nhân.','- Thay băng cắt chỉ cho vết thương.',2,399000,1),
(7,4,'PHCN_BNOT','Phục Hồi Chức Năng Bại Não Ở Trẻ','Bại não là tổn thương não không tiến triển gây nên bởi các yếu tố nguy cơ xảy ra ở giai đoạn trước sinh, trong khi sinh và sau sinh đến 5 tuổi.','- Hướng dẫn sử dụng các máy tập vận động phục hồi chức năng.','- Thay băng cắt chỉ, rửa vết thương.',3,329000,1),
(8,4,'PHCN_CNBL','Phục Hồi Chức Năng Cho Người Bị Liệt','Khi đang bị đau sau phẫu thuật hoặc chấn thương thì việc di chuyển đến các cơ sở y tế để thực hiện các hoạt động phục hồi chức năng rất quang trọng thường là việc khó khăn. Hiểu được điều đó chúng tôi sẽ cử các điều dưỡng viên, chuyên viên PHCN nhiều năm kinh nghiệm đến thực hiện các thủ thuật tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu','Chăm sóc toàn diện cho bệnh nhân tại nhà và bệnh viện thay cho người nhà bệnh nhân bằng các điều dưỡng viên được đào tạo bài bản, chính quy','- Thay băng cắt chỉ cho vết thương',2,399000,1),
(9,4,'PHCN_CTTT','Phục Hồi Chức Năng Chấn Thương Thể Thao','Vật lý trị liệu và vận động phục hồi chức năng là hoạt động rất quang trọng quyết định đến sự thành công của ca phẫu thuật và khả năng phục hồi của bệnh nhân. Tuy nhiên sau khi phẫu thuật điều trị bệnh nhân vẫn còn rất đau, việc di chuyển đi lại rất khó khăn, nhiều rủi ro, tốn thời gian và chi phí. Hiểu được điều đó chúng tôi sẽ cử các chuyên viên PHCN nhiều năm kinh nghiệm đến thực hiện các thủ thuật vật lý trị liệu và hoạt động trị liệu cho bạn hoặc người thân tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu.','Chăm sóc toàn diện cho bệnh nhân tại nhà và bệnh viện thay cho người nhà bệnh nhân bằng các điều dưỡng viên được đào tạo bài bản, chính quy','- Thay băng cắt chỉ cho vết thương',3,399000,1),
(10,4,'PHCN_XHCUDC','Phục Hồi Chức Năng Xơ Hóa Cơ Ức Đòn Chũm','Khi cơ ức đòn chũm bị u (phì đại), xơ hóa khiến cho chiều dài các bó cơ bị ngắn lại so với bình thường làm ảnh hưởng đến tầm vận động của cử động tương ứng bó cơ tạo nên tư thế điển hình của bệnh. Bệnh xơ hóa cơ ức đòn chũm không gây nguy hiểm đến tính mạng bệnh nhân, có ảnh hưởng đến sức khỏe và thẩm mỹ bệnh nhân sau này nếu không được điều khỏi, các biến chứng :','- Hướng dẫn sử dụng các máy tập vận động phục hồi chức năng.','- Thay băng cắt chỉ, rửa vết thương.',2,289000,1);
/*!40000 ALTER TABLE `dichvu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dieuduong`
--

DROP TABLE IF EXISTS `dieuduong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dieuduong` (
  `DD_ID` int NOT NULL AUTO_INCREMENT,
  `TINHT_ID` int NOT NULL,
  `DD_MA` varchar(100) NOT NULL,
  `DD_HOTEN` varchar(300) NOT NULL,
  `DD_MAGIOITHIEU` varchar(100) DEFAULT NULL,
  `DD_GIOITINH` varchar(100) NOT NULL,
  `DD_NGAYSINH` date DEFAULT NULL,
  `DD_SDT` varchar(100) NOT NULL,
  `DD_EMAIL` varchar(100) NOT NULL,
  `DD_DIACHI` longtext,
  `DD_AVARTAR` longtext,
  `DD_PASSWORD` varchar(100) NOT NULL,
  `DD_LADAOTAOVIEN` tinyint(1) NOT NULL,
  `DD_TRANGTHAI` int NOT NULL,
  PRIMARY KEY (`DD_ID`),
  UNIQUE KEY `DD_MA_UNIQUE` (`DD_MA`),
  UNIQUE KEY `DD_EMAIL_UNIQUE` (`DD_EMAIL`),
  UNIQUE KEY `DD_SDT_UNIQUE` (`DD_SDT`),
  UNIQUE KEY `DD_MAGIOITHIEU_UNIQUE` (`DD_MAGIOITHIEU`),
  KEY `FK_DIEUDUONG_THUOC_TINHTHANH` (`TINHT_ID`),
  CONSTRAINT `FK_DIEUDUONG_THUOC_TINHTHANH` FOREIGN KEY (`TINHT_ID`) REFERENCES `tinhthanh` (`TINHT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKius6pw410pmtcxf4eoloa2onu` FOREIGN KEY (`TINHT_ID`) REFERENCES `tinhthanh` (`TINHT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dieuduong`
--

LOCK TABLES `dieuduong` WRITE;
/*!40000 ALTER TABLE `dieuduong` DISABLE KEYS */;
INSERT INTO `dieuduong` VALUES 
(1,1,'DD0001','Trần Thanh Quy',NULL,'Nam','1999-08-02','0375250024','thanhquy0164@gmail.com','911 quang trung ','chưa có','quy123',1,3),
(2,2,'DD0002','Lê Ngọc Hậu',NULL,'Nam','1999-08-02','0122456789','hau@gmail.com','trái đất','chưa có','hau123',1,3),
(3,1,'DD0003','Nguyễn Lan',NULL,'Nam','1999-05-03','0981034841','lan@gmail.com','việt nam','chưa có','lan123',1,3),
(4,3,'DD0004','Nguyễn Ngọc Kha',NULL,'Nam','1999-01-01','1235214520','kha@gmail.com','HCM','chưa có','kha123',1,2),
(7,2,'DD0005','Nguyễn Trọng Dương',NULL,'Nữ','1999-11-10','0981034840','trongduong101199@gmail.com','40/3 Nguyễn Hới Khu Phố 6, Phường An Lạc, Quận Bình Tân, Thành Phố Hồ Chí Minh','chưa có','duong123',2,2),
(8,4,'DD0006','Lê Anh Kiệt',NULL,'Nữ','1999-05-20','0981034842','leanhkiet20599@gmail.com','Long An','chưa có','kiet123',2,1),
(9,10,'DD0007','Nguyễn Văn Hiếu',NULL,'Nam','1999-03-10','0981034843','nguyenvanhieu@gmail.com','Bình Dương','chưa có','hieu123',2,1),
(10,2,'DD0008','Lê Hậu',NULL,'Nữ','1999-11-10','0981034844','lehau101199@gmail.com','Đồng Tháp','chưa có','hau1234',2,1),
(11,2,'DD0009','Nguyễn Kim Ngọc',NULL,'Nữ','1999-12-12','0981034800','nguyenkiemngoc@gmail.com','Bình Tân','chưa có','ngoc1234',2,3),
(12,3,'DD0010','Trần Thanh Huy',NULL,'Nam','1999-05-12','0981346572','tranthanhhuy@gmail.com','Hà Nội','chưa có ','huy123',2,3),
(13,2,'DD0011','Trần Văn Tú',NULL,'Nam','1999-01-19','0981034801','tranvantu@gmail.com','Bình Tân','chưa có ','tu123',2,3),
(14,2,'DD0012','Trần Văn Lợi',NULL,'Nữ','1999-02-19','0981034802','tranvanloi@gmail.com','Quận 10','chưa có ','loi123',2,3),
(15,2,'DD0013','Trần Văn Đan',NULL,'Nữ','1999-03-19','0981034803','tranvandan@gmail.com','Quận 6','chưa có ','dan123',2,3),
(16,3,'DD0014','Trần Văn Hòa',NULL,'Nữ','1999-04-19','0981034804','tranvanhoa@gmail.com','Quận 2','chưa có ','hoa123',2,3),
(17,3,'DD0015','Trần Văn Đức',NULL,'Nam','1999-08-19','0981034805','tranvanduc@gmail.com','Quận 8','chưa có ','duc123',2,1),
(18,10,'DD0016','Trần Văn Kiện',NULL,'Nam','1999-11-19','0981034806','tranvankien@gmail.com','Quận 3','chưa có ','kien123',2,1);
/*!40000 ALTER TABLE `dieuduong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giayphephanhnghe`
--

DROP TABLE IF EXISTS `giayphephanhnghe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giayphephanhnghe` (
  `GIAYPHEP_ID` int NOT NULL AUTO_INCREMENT,
  `DV_ID` int NOT NULL,
  `DD_ID` int NOT NULL,
  `DD_DAOTAOVIEN_ID` int NOT NULL,
  `GIAYPHEP_THONGTIN` longtext NOT NULL,
  `GIAYPHEP_XEPLOAI` varchar(300) DEFAULT NULL,
  `GIAYPHEP_TRANGTHAI` int NOT NULL,
  `GIAYPHEP_GHICHU` longtext,
  PRIMARY KEY (`GIAYPHEP_ID`),
  KEY `FK_CO_CTCN` (`DD_ID`),
  KEY `FK_CO_THE_THUC_HIEN` (`DV_ID`),
  KEY `FK_DD_DAOTAO_DDMOI` (`DD_DAOTAOVIEN_ID`),
  CONSTRAINT `FK1kuk1xn3febvpih89dc0weqek` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`),
  CONSTRAINT `FK_CO_CTCN` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_CO_THE_THUC_HIEN` FOREIGN KEY (`DV_ID`) REFERENCES `dichvu` (`DV_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_DD_DAOTAO_DDMOI` FOREIGN KEY (`DD_DAOTAOVIEN_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKbevbrdr3p0o2ui4fwtvx1s61` FOREIGN KEY (`DD_DAOTAOVIEN_ID`) REFERENCES `dieuduong` (`DD_ID`),
  CONSTRAINT `FKet67072osfh4iwl7xoqe6e1xg` FOREIGN KEY (`DV_ID`) REFERENCES `dichvu` (`DV_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giayphephanhnghe`
--

LOCK TABLES `giayphephanhnghe` WRITE;
/*!40000 ALTER TABLE `giayphephanhnghe` DISABLE KEYS */;
INSERT INTO `giayphephanhnghe` VALUES 
(1,1,2,1,'Giấy Phép Phục Hồi Chức Năng Sau Tai Biến','chưa cấp',0,NULL),
(2,2,4,2,'Giấy Phép Phục Hồi Chức Năng Sau Tai Nạn','khá',2,NULL),
(3,2,2,3,'Giấy Phép Phục Hồi Chức Năng Sau Tai Nạn','TB',2,NULL),
(4,1,4,1,'Giấy Phép Phục Hồi Chức Năng Sau Tai Biến','khá',2,NULL),
(6,3,2,2,'Giấy phép phục hồi chức năng sau phẫu thuật','Khá',1,NULL),
(7,2,2,3,'Giấy Phép Phục Hồi Chức Năng Sau Tai Nạn','chưa cấp',0,NULL),
(8,2,3,1,'Giấy Phép Phục Hồi Chức Năng Sau Tai Nạn','Giỏi',2,NULL),
(9,1,4,2,'Giấy Phép Phục Hồi Chức Năng Sau Tai Biến','Khá',2,NULL),
(10,6,7,3,'Giấy Phép Phục Hồi Chức Năng Sau Phẫu Thuật','chưa cấp',0,NULL),
(11,8,8,4,'Giấy Phép Phục Hồi Chức Năng Cho Người Bị Liệt','chưa cấp',0,NULL),
(12,9,9,4,'Giấy Phép Phục Hồi Chức Năng Chấn Thương Thể Thao','chưa cấp',0,NULL),
(13,10,10,1,'Giấy Phép Phục Hồi Chức Năng Xơ Hóa Cơ Ức Đòn Chũm','chưa cấp',0,NULL),
(14,7,8,4,'Giấy Phép Phục Hồi Chức Năng Bại Não Ở Trẻ','chưa cấp',0,NULL),
(15,10,7,4,'Giấy Phép Phục Hồi Chức Năng Xơ Hóa Cơ Ức Đòn Chũm','Giỏi',1,NULL);
/*!40000 ALTER TABLE `giayphephanhnghe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaidichvu`
--

DROP TABLE IF EXISTS `loaidichvu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaidichvu` (
  `LOAIDV_ID` int NOT NULL AUTO_INCREMENT,
  `LOAIDV_MA` varchar(100) NOT NULL,
  `LOAIDV_TEN` varchar(300) DEFAULT NULL,
  `LOAIDV_TINHTRANG` int NOT NULL,
  PRIMARY KEY (`LOAIDV_ID`),
  UNIQUE KEY `LOAIDV_MA_UNIQUE` (`LOAIDV_MA`),
  UNIQUE KEY `LOAIDV_TEN_UNIQUE` (`LOAIDV_TEN`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaidichvu`
--

LOCK TABLES `loaidichvu` WRITE;
/*!40000 ALTER TABLE `loaidichvu` DISABLE KEYS */;
INSERT INTO `loaidichvu` VALUES 
(4,'PHCN','Phục Hồi Chức Năng',1),
(5,'TTDD','Thủ Thuật Điều Dưỡng',1),
(7,'CS-DD','Chăm Sóc Điều Dưỡng',2),
(8,'M-B','Mẹ Và Bé',3),
(9,'CC-BH','Châm Cứu Bấm Huyệt',2);
/*!40000 ALTER TABLE `loaidichvu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `magiamgia`
--

DROP TABLE IF EXISTS `magiamgia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `magiamgia` (
  `MGG_ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int DEFAULT NULL,
  `MGG_MA` varchar(300) DEFAULT NULL,
  `MGG_THONGTIN` varchar(300) DEFAULT NULL,
  `MGG_HESOGIAM` varchar(30) DEFAULT NULL,
  `MGG_TINHTRANG` int DEFAULT NULL,
  PRIMARY KEY (`MGG_ID`),
  UNIQUE KEY `MGG_MA_UNIQUE` (`MGG_MA`),
  KEY `FK_USER_CO_MAGIAMGIA` (`USER_ID`),
  CONSTRAINT `FK_USER_CO_MAGIAMGIA` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `magiamgia`
--

LOCK TABLES `magiamgia` WRITE;
/*!40000 ALTER TABLE `magiamgia` DISABLE KEYS */;
/*!40000 ALTER TABLE `magiamgia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoibenh`
--

DROP TABLE IF EXISTS `nguoibenh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoibenh` (
  `NB_ID` int NOT NULL AUTO_INCREMENT,
  `TINHT_ID` int NOT NULL,
  `NB_HOTEN` varchar(300) NOT NULL,
  `NB_GIOITINH` varchar(100) DEFAULT NULL,
  `NB_SDT` varchar(100) NOT NULL,
  `NB_NGAYSINH` date DEFAULT NULL,
  `NB_DIACHI` varchar(300) NOT NULL,
  `NB_NHOMMAU` varchar(100) DEFAULT NULL,
  `NB_HUYETAP` varchar(100) DEFAULT NULL,
  `NB_DUONGHUYET` varchar(100) DEFAULT NULL,
  `NB_TIENSUBENH` longtext,
  `NB_AVARTAR` longtext,
  PRIMARY KEY (`NB_ID`),
  KEY `FK_NGUOIBENH_THUOC_TINHTHANH` (`TINHT_ID`),
  CONSTRAINT `FK_NGUOIBENH_THUOC_TINHTHANH` FOREIGN KEY (`TINHT_ID`) REFERENCES `tinhthanh` (`TINHT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoibenh`
--

LOCK TABLES `nguoibenh` WRITE;
/*!40000 ALTER TABLE `nguoibenh` DISABLE KEYS */;
/*!40000 ALTER TABLE `nguoibenh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quanhe`
--

DROP TABLE IF EXISTS `quanhe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quanhe` (
  `QH_ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int DEFAULT NULL,
  `NB_ID` int DEFAULT NULL,
  `QH_TENQH` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`QH_ID`),
  KEY `FK_NGUOIBENH_CO_QUANHE` (`NB_ID`),
  KEY `FK_USER_CO_QUANHE` (`USER_ID`),
  CONSTRAINT `FK_NGUOIBENH_CO_QUANHE` FOREIGN KEY (`NB_ID`) REFERENCES `nguoibenh` (`NB_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_USER_CO_QUANHE` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quanhe`
--

LOCK TABLES `quanhe` WRITE;
/*!40000 ALTER TABLE `quanhe` DISABLE KEYS */;
/*!40000 ALTER TABLE `quanhe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quytrinhthuchiendichvu`
--

DROP TABLE IF EXISTS `quytrinhthuchiendichvu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quytrinhthuchiendichvu` (
  `QUYTRINH_ID` int NOT NULL AUTO_INCREMENT,
  `DV_ID` int NOT NULL,
  `QUYTRINH_THUTU` varchar(100) DEFAULT NULL,
  `QUYTRINH_MOTA` longtext,
  PRIMARY KEY (`QUYTRINH_ID`),
  KEY `FK_DICHVU_CO_QUYTRINH` (`DV_ID`),
  CONSTRAINT `FK_DICHVU_CO_QUYTRINH` FOREIGN KEY (`DV_ID`) REFERENCES `dichvu` (`DV_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKbycbeq8jtlw9121wd0y2t83gw` FOREIGN KEY (`DV_ID`) REFERENCES `dichvu` (`DV_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quytrinhthuchiendichvu`
--

LOCK TABLES `quytrinhthuchiendichvu` WRITE;
/*!40000 ALTER TABLE `quytrinhthuchiendichvu` DISABLE KEYS */;
INSERT INTO `quytrinhthuchiendichvu` VALUES (19,1,'Bước 1','Xem hồ sơ bệnh án (nếu có)'),(20,1,'Bước 2','Kiểm tra các chức năng.'),(21,1,'Bước 3','Lên phương án tập.'),(22,1,'Bước 4','Hướng dẫn tập luyện'),(23,2,'Bước 1','Xem hồ sơ bệnh án.'),(24,2,'Bước 2','Kiểm tra các chức năng.'),(25,2,'Bước 3','Lên phương án tập.'),(26,2,'Bước 4','Hướng dẫn tập luyện.'),(27,3,'Bước 1','Đọc hồ sơ bệnh án, đơn thuốc'),(28,3,'Bước 2','Hỏi bệnh nhân, người nhà về tình trạng sức khỏe, khám sức khỏe, đo nhịp tim, phổi, huyết áp, kiểm tra vết thương'),(29,3,'Bước 3','Hỏi bệnh nhân, người nhà về tình trạng sức khỏe, khám sức khỏe'),(30,3,'Bước 4','Lập phương án chăm sóc, Thực hiện các hoạt động chăm sóc'),(31,3,'Bước 5','Khám sơ bộ, đo huyết áp, nhịp tim, phổi, kiểm tra vết thương trước khi kết thúc ca làm');
/*!40000 ALTER TABLE `quytrinhthuchiendichvu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tinhthanh`
--

DROP TABLE IF EXISTS `tinhthanh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tinhthanh` (
  `TINHT_ID` int NOT NULL AUTO_INCREMENT,
  `TINHT_MATINHTHANH` varchar(100) NOT NULL,
  `TINHT_TENTINH` varchar(300) DEFAULT NULL,
  `TINHT_HESOGIAMDD` double DEFAULT NULL,
  `TINHT_HESOGIAMUSER` double DEFAULT NULL,
  PRIMARY KEY (`TINHT_ID`),
  UNIQUE KEY `TINHT_MATINHTHANH_UNIQUE` (`TINHT_MATINHTHANH`),
  UNIQUE KEY `TINHT_TENTINH_UNIQUE` (`TINHT_TENTINH`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinhthanh`
--

LOCK TABLES `tinhthanh` WRITE;
/*!40000 ALTER TABLE `tinhthanh` DISABLE KEYS */;
INSERT INTO `tinhthanh` VALUES 
(1,'LA','Long An',18,28),
(2,'hcm','Hồ Chí Minh',10,20),
(3,'hn','Hà Nội',9,19),
(4,'DN','Đà Nẵng',9,19),
(9,'DL','Đà Lạt',12,22),
(10,'DT','Đồng Tháp',18,28),
(44,'BD','Bình Dương',15,25);
/*!40000 ALTER TABLE `tinhthanh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `USER_ID` int NOT NULL AUTO_INCREMENT,
  `TINHT_ID` int NOT NULL,
  `USER_EMAIL` varchar(100) NOT NULL,
  `USER_HOTEN` varchar(300) DEFAULT NULL,
  `USER_SDT` varchar(100) DEFAULT NULL,
  `USER_PASSWORD` varchar(100) NOT NULL,
  `USER_MAGIOITHIEU` varchar(100) DEFAULT NULL,
  `USER_GIOITINH` varchar(100) DEFAULT NULL,
  `USER_DIACHI` longtext,
  `USER_NGAYSINH` date DEFAULT NULL,
  `USER_AVARTAR` longtext,
  `USER_TINHTRANG` int NOT NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE KEY `USER_EMAIL_UNIQUE` (`USER_EMAIL`),
  UNIQUE KEY `USER_SDT_UNIQUE` (`USER_SDT`),
  KEY `FK_USER_THUOC_TINHTHANH` (`TINHT_ID`),
  CONSTRAINT `FK_USER_THUOC_TINHTHANH` FOREIGN KEY (`TINHT_ID`) REFERENCES `tinhthanh` (`TINHT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES 
(33,1,'trongduong101199@gmail.com','Nguyễn Trọng Dương','0981034840','duong12345',NULL,'Nam','40/3 Nguyễn Hới KP6, P.An Lạc, Q.Bình Tân, TP.Hồ Chí Minh','1999-11-10','chưa có ',1),
(35,2,'lengochau@gmail.com','Lê Ngọc Hậu','0981034841','hau12345',NULL,'Nữ','40/3 Nguyễn Hới KP6, P.An Lạc, Q.Bình Tân, TP.Hồ Chí Minh','1999-11-10','chưa có ',1),
(36,1,'nguyenlan@gmail.com','Nguyễn Lan','0981034842','lan12345',NULL,'Nữ','40/3 Nguyễn Hới KP6, P.An Lạc, Q.Bình Tân, TP.Hồ Chí Minh','1999-10-26','chưa có ',1),
(37,3,'ngockha@gmail.com','Nguyễn Ngọc Kha','0981034843','kha12345',NULL,'Nam','40/3 Nguyễn Hới KP6, P.An Lạc, Q.Bình Tân, TP.Hồ Chí Minh','1999-10-26','chưa có ',1),
(38,2,'leanhkiet@gmail.com','Lê Anh Kiệt','0981034844','kiet12345',NULL,'Nam','40/3 Nguyễn Hới KP6, P.An Lạc, Q.Bình Tân, TP.Hồ Chí Minh','1999-10-26','chưa có ',1),
(39,4,'tranthanhquy@gmail.com','Trần Thanh Quy','098103484045','quy12345',NULL,'Nam','40/3 Nguyễn Hới KP6, P.An Lạc, Q.Bình Tân, TP.Hồ Chí Minh','1999-11-10','chưa có ',1),
(40,10,'nguyenvanhieu@gmail.com','Nguyễn Văn Hiếu','0981034846','hieu12345',NULL,'Nam','40/3 Nguyễn Hới KP6, P.An Lạc, Q.Bình Tân, TP.Hồ Chí Minh','1999-11-10','chưa có ',1),
(41,2,'lethanh@gmail.com','Lê Thành','0981034847','thanh12345',NULL,'Nữ','40/3 Nguyễn Hới KP6, P.An Lạc, Q.Bình Tân, TP.Hồ Chí Minh','1999-10-26','chưa có ',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vidientu`
--

DROP TABLE IF EXISTS `vidientu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vidientu` (
  `VI_ID` int NOT NULL AUTO_INCREMENT,
  `DD_ID` int NOT NULL,
  `VI_TONGTIEN` double NOT NULL,
  `VI_NGANGHANGLIENKET` varchar(300) DEFAULT NULL,
  `VI_SOTAIKHOANNGANHANG` varchar(300) DEFAULT NULL,
  `VI_TENTKNGANHANG` varchar(300) DEFAULT NULL,
  `VI_GHICHU` longtext,
  PRIMARY KEY (`VI_ID`),
  UNIQUE KEY `DD_ID_UNIQUE` (`DD_ID`),
  CONSTRAINT `FK_DD_CO_VI` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKs8h18b7mby88vy71kur9xkrgc` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vidientu`
--

LOCK TABLES `vidientu` WRITE;
/*!40000 ALTER TABLE `vidientu` DISABLE KEYS */;
INSERT INTO `vidientu` VALUES 
(7,1,5000000,'VIETTINBANK','1234568987978','TRAN THANH QUY',NULL),
(8,2,0,NULL,NULL,NULL,NULL),
(9,3,0,NULL,NULL,NULL,NULL),
(10,4,0,NULL,NULL,NULL,NULL),
(17,7,0,NULL,NULL,NULL,NULL),
(18,8,100000,NULL,NULL,NULL,NULL),
(19,9,0,NULL,NULL,NULL,NULL),
(20,10,0,NULL,NULL,NULL,NULL),
(21,11,0,NULL,NULL,NULL,NULL),
(22,12,0,NULL,NULL,NULL,NULL),
(23,13,0,NULL,NULL,NULL,NULL),
(24,14,100000,NULL,NULL,NULL,NULL),
(25,15,100000,NULL,NULL,NULL,NULL),
(26,16,0,NULL,NULL,NULL,NULL),
(27,17,0,NULL,NULL,NULL,NULL),
(28,18,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `vidientu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-25 22:24:17
