-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: medsul
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
  `TINHT_ID` int NOT NULL,
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
  `ADMIN_TINHTRANG` tinyint(1) NOT NULL,
  `ADMIN_SDT` varchar(100) NOT NULL,
  PRIMARY KEY (`ADMIN_ID`),
  UNIQUE KEY `ADMIN_EMAIL_UNIQUE` (`ADMIN_EMAIL`),
  UNIQUE KEY `ADMIN_USERNAME_UNIQUE` (`ADMIN_USERNAME`),
  UNIQUE KEY `ADMIN_SDT_UNIQUE` (`ADMIN_SDT`),
  UNIQUE KEY `ADMIN_CMND_UNIQUE` (`ADMIN_CMND`),
  KEY `FK_ADMIN_CO_TINHTHANH` (`TINHT_ID`),
  CONSTRAINT `FK_ADMIN_CO_TINHTHANH` FOREIGN KEY (`TINHT_ID`) REFERENCES `tinhthanh` (`TINHT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (4,1,'Trần Thanh Quy','thanhquy0164@gmail.com','Nam','quy','quy123','Long An','301634259','2013-10-15','LA','chuaco','chuaco','chuaco',1,'0375250024'),(5,2,'Lê Ngọc Hậu','hau@gmail.com','Nam','hau','hau123','LA','012345678','2013-10-15','LA','chuaco','chuaco','chuaco',1,'0123456789'),(6,3,'Nguyễn Lan','lan@gmail.com','Nam','lan','lan123','LA','032165489','2013-10-15','LA','chuaco','chuaco','chuaco',1,'0123456852'),(7,3,'Nguyễn Trọng Dương','duon@gmail.com','Nam','duong','duong123','LA','258963123','2013-10-15','LA','chuaco','chuaco','chuaco',1,'0123526325'),(8,2,'Lê Anh Kiệt','ket@gmail.com','Nam','kiet','kiet123','LA','254123652','2013-10-15','LA','chuaco','chuaco','chuaco',1,'2541203215'),(9,1,'Nguyễn Ngọc Kha','kha@gmail.com','Nam','kha','kha123','LA','215236521','2013-10-15','LA','chuaco','chuaco','chuaco',1,'2512355625');
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
  `CTD_DONGIA` float NOT NULL,
  `CTD_GIOBATDAU` time NOT NULL,
  PRIMARY KEY (`CTD_ID`),
  KEY `FK_CHITIETDAT_CO_DICHVU` (`DV_ID`),
  KEY `FK_CO_CHITIETDAT` (`DL_ID`),
  CONSTRAINT `FK_CHITIETDAT_CO_DICHVU` FOREIGN KEY (`DV_ID`) REFERENCES `dichvu` (`DV_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_CO_CHITIETDAT` FOREIGN KEY (`DL_ID`) REFERENCES `datlich` (`DL_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chuyennganh`
--

LOCK TABLES `chuyennganh` WRITE;
/*!40000 ALTER TABLE `chuyennganh` DISABLE KEYS */;
INSERT INTO `chuyennganh` VALUES (1,1,'Kỹ thuật viên phục hồi chức năng','Khá','2019-12-10','1524152156','chua co','chua co',NULL),(2,1,'Y sỹ.','TB','2019-10-10','21536215','chua co','chua co',NULL),(3,2,'Kỹ thuật viên phục hồi chức năng','Giỏi ','2019-12-29','1524256322','chuaco','cchua co',NULL);
/*!40000 ALTER TABLE `chuyennganh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cmnd_dieuduong`
--

DROP TABLE IF EXISTS `cmnd_dieuduong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cmnd_dieuduong` (
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
  PRIMARY KEY (`SOCMND`),
  UNIQUE KEY `DD_ID_UNIQUE` (`DD_ID`),
  CONSTRAINT `FK_DD_CO_CMND` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cmnd_dieuduong`
--

LOCK TABLES `cmnd_dieuduong` WRITE;
/*!40000 ALTER TABLE `cmnd_dieuduong` DISABLE KEYS */;
INSERT INTO `cmnd_dieuduong` VALUES ('12541235',2,'LE NGOC HAU','Việt Nam','HN','123 G','long an 1','2013-10-10','@@ QWE','CHƯA CÓ','CHƯA CÓ'),('301634259',1,'TRAN THANH QUY','Việt Nam','LA','phuoc tan hung , chau thanh, long an','long an','2013-10-15','đẹp trai nhất vũ trụ ','chưa có','chưa có'),('963245126',3,'NGUYEN LAN','Việt Nam','LA','341DA','long an 2','2013-10-10','@@ QWE','CHƯA CÓ','CHƯA CÓ'),('965896325',4,'NGUYEN NGOC KHA','Việt Nam','HCM','ASD12','long an 3','2013-10-11','@@ QWE','CHƯA CÓ','CHƯA CÓ');
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
  `DL_TONGTIEN` float NOT NULL,
  `DL_SDT` varchar(100) NOT NULL,
  `DL_HOTEN` varchar(30) NOT NULL,
  `DL_EMAIL` varchar(50) NOT NULL,
  `DL_GHICHU` varchar(300) DEFAULT NULL,
  `DL_DIACHI` varchar(300) NOT NULL,
  `DL_TINHTRANG` tinyint(1) NOT NULL,
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
  `DV_THOIGIANUOCTINH` float DEFAULT NULL,
  `DV_GIADICHVU` float(8,2) NOT NULL,
  `DV_TINHTRANG` tinyint(1) NOT NULL,
  PRIMARY KEY (`DV_ID`),
  UNIQUE KEY `DV_MA_UNIQUE` (`DV_MA`),
  UNIQUE KEY `DV_TEN_UNIQUE` (`DV_TEN`),
  KEY `FK_CO` (`LOAIDV_ID`),
  CONSTRAINT `FK_CO` FOREIGN KEY (`LOAIDV_ID`) REFERENCES `loaidichvu` (`LOAIDV_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dichvu`
--

LOCK TABLES `dichvu` WRITE;
/*!40000 ALTER TABLE `dichvu` DISABLE KEYS */;
INSERT INTO `dichvu` VALUES (1,4,'PHCN STB','Phục Hồi Chức Năng Sau Tai Biến','Tai biến – đột quỵ có thể gặp ở bất kỳ lứa tuổi nào, tỷ lệ cao nhất ở người lớn tuổi nhưng đang có xu hướng trẻ hóa. Hậu quả thường gặp nhất sau tai biến là bệnh nhân mất khả năng vận động, liệt nửa người không tự chăm sóc được bản thân và sinh hoạt khó khăn.','Chăm sóc toàn diện cho bệnh nhân tại nhà và bệnh viện thay cho người nhà bệnh nhân bằng các điều dưỡng viên được đào tạo bài bản, chính quy','- Thay băng cắt chỉ cho vết thương.',3,399000.00,1),(2,4,'PHCN STN','Phục Hồi Chức Năng Sau Tai Nạn','Vật lý trị liệu và vận động phục hồi chức năng là hoạt động rất quang trọng quyết định đến sự thành công của ca phẫu thuật và khả năng phục hồi của bệnh nhân. Tuy nhiên sau khi phẫu thuật điều trị bệnh nhân vẫn còn rất đau, việc di chuyển đi lại rất khó khăn, nhiều rủi ro, tốn thời gian và chi phí. Hiểu được điều đó chúng tôi sẽ cử các chuyên viên PHCN nhiều năm kinh nghiệm đến thực hiện các thủ thuật vật lý trị liệu và hoạt động trị liệu cho bạn hoặc người thân tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu.','Chăm sóc toàn diện cho bệnh nhân tại nhà và bệnh viện thay cho người nhà bệnh nhân bằng các điều dưỡng viên được đào tạo bài bản, chính quy.','- Thay băng cắt chỉ cho vết thương.',4,399000.00,1),(3,5,'CCTM','Cắt Chỉ Thẩm Mỹ','Khi đang bị đau ốm thì việc di chuyển đến các cơ sở y tế để thực hiện các thủ thuật đơn giản nhưng rất quan trọng như thay băng, cắt chỉ, rửa vết thương là việc khó khăn. Hiểu được điều đó chúng tôi sẽ cử các điều dưỡng viên có kỹ thuật cao và nhiều năm kinh nghiệm đến thực hiện các thủ thuật tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu thực hiện một hoặc một nhóm các thủ thuật chăm sóc bệnh nhân bằng kỹ thuật','Chăm sóc toàn diện cho bệnh nhân tại nhà và bệnh viện thay cho người nhà bệnh nhân bằng các điều dưỡng viên được đào tạo bài bản, chính quy','- Trông nom, chăm sóc bệnh nhân',2,199000.00,1);
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
  `DD_SDT` varchar(100) DEFAULT NULL,
  `DD_EMAIL` varchar(100) NOT NULL,
  `DD_DIACHI` longtext,
  `DD_AVARTAR` longtext,
  `DD_PASSWORD` varchar(100) NOT NULL,
  `DD_LADAOTAOVIEN` tinyint(1) NOT NULL,
  `DD_TRANGTHAI` int NOT NULL,
  PRIMARY KEY (`DD_ID`),
  UNIQUE KEY `DD_MA_UNIQUE` (`DD_MA`),
  UNIQUE KEY `DD_EMAIL_UNIQUE` (`DD_EMAIL`),
  UNIQUE KEY `DD_MAGIOITHIEU_UNIQUE` (`DD_MAGIOITHIEU`),
  UNIQUE KEY `DD_SDT_UNIQUE` (`DD_SDT`),
  KEY `FK_DIEUDUONG_THUOC_TINHTHANH` (`TINHT_ID`),
  CONSTRAINT `FK_DIEUDUONG_THUOC_TINHTHANH` FOREIGN KEY (`TINHT_ID`) REFERENCES `tinhthanh` (`TINHT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dieuduong`
--

LOCK TABLES `dieuduong` WRITE;
/*!40000 ALTER TABLE `dieuduong` DISABLE KEYS */;
INSERT INTO `dieuduong` VALUES (1,1,'DD0001','Trần Thanh Quy',NULL,'Nam','1999-08-02','0375250024','thanhquy0164@gmail.com','911 quang trung ','chua co','quy123',1,1),(2,2,'DD0002','Lê Ngọc Hậu',NULL,'Nam','1999-08-02','0122456789','hau@gmail.com','trái đất','chua co','hau123',0,1),(3,1,'DD0003','Nguyễn Lan',NULL,'Nam','1999-05-03','012352525421','lan@gmail.com','việt nam','chua co','lan123',1,1),(4,3,'DD0004','Nguyễn Ngọc Kha',NULL,'Nam','1999-01-01','1235214520','kha@gmail.com','HCM','chua co','kha123',0,1);
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
  CONSTRAINT `FK_CO_CTCN` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_CO_THE_THUC_HIEN` FOREIGN KEY (`DV_ID`) REFERENCES `dichvu` (`DV_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_DD_DAOTAO_DDMOI` FOREIGN KEY (`DD_DAOTAOVIEN_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giayphephanhnghe`
--

LOCK TABLES `giayphephanhnghe` WRITE;
/*!40000 ALTER TABLE `giayphephanhnghe` DISABLE KEYS */;
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
  `LOAIDV_TINHTRANG` tinyint(1) NOT NULL,
  PRIMARY KEY (`LOAIDV_ID`),
  UNIQUE KEY `LOAIDV_MA_UNIQUE` (`LOAIDV_MA`),
  UNIQUE KEY `LOAIDV_TEN_UNIQUE` (`LOAIDV_TEN`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaidichvu`
--

LOCK TABLES `loaidichvu` WRITE;
/*!40000 ALTER TABLE `loaidichvu` DISABLE KEYS */;
INSERT INTO `loaidichvu` VALUES (4,'PHCN','Phục Hồi Chức Năng',1),(5,'TTDD','Thủ Thuật Điều Dưỡng',1),(6,'CS-DD','Chăm Sóc Điều Dưỡng',1);
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
  `MGG_TINHTRANG` tinyint(1) DEFAULT NULL,
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
  CONSTRAINT `FK_DICHVU_CO_QUYTRINH` FOREIGN KEY (`DV_ID`) REFERENCES `dichvu` (`DV_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `TINHT_HESOGIAMDD` varchar(100) DEFAULT NULL,
  `TINHT_HESOGIAMUSER` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`TINHT_ID`),
  UNIQUE KEY `TINHT_MATINHTHANH_UNIQUE` (`TINHT_MATINHTHANH`),
  UNIQUE KEY `TINHT_TENTINH_UNIQUE` (`TINHT_TENTINH`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinhthanh`
--

LOCK TABLES `tinhthanh` WRITE;
/*!40000 ALTER TABLE `tinhthanh` DISABLE KEYS */;
INSERT INTO `tinhthanh` VALUES (1,'LA','Long An','5','1'),(2,'HCM','Hồ Chí Minh','1','1'),(3,'HN','Hà Nội','2','3'),(4,'DN','Đà Nẵng','3','4'),(5,'BT','Bến Tre','2','3');
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
  `USER_TINHTRANG` tinyint(1) NOT NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE KEY `USER_EMAIL_UNIQUE` (`USER_EMAIL`),
  UNIQUE KEY `USER_SDT_UNIQUE` (`USER_SDT`),
  KEY `FK_USER_THUOC_TINHTHANH` (`TINHT_ID`),
  CONSTRAINT `FK_USER_THUOC_TINHTHANH` FOREIGN KEY (`TINHT_ID`) REFERENCES `tinhthanh` (`TINHT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
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
  `VI_TONGTIEN` float NOT NULL,
  `VI_NGANGHANGLIENKET` varchar(300) DEFAULT NULL,
  `VI_SOTAIKHOANNGANHANG` varchar(300) DEFAULT NULL,
  `VI_TENTKNGANHANG` varchar(300) DEFAULT NULL,
  `VI_GHICHU` longtext,
  PRIMARY KEY (`VI_ID`),
  UNIQUE KEY `DD_ID_UNIQUE` (`DD_ID`),
  CONSTRAINT `FK_DD_CO_VI` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vidientu`
--

LOCK TABLES `vidientu` WRITE;
/*!40000 ALTER TABLE `vidientu` DISABLE KEYS */;
INSERT INTO `vidientu` VALUES (7,1,100000000,'VIETTINBANK','1234568987978','TRAN THANH QUY',NULL),(8,2,0,NULL,NULL,NULL,NULL),(9,3,0,NULL,NULL,NULL,NULL),(10,4,0,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2020-09-12 11:08:22
