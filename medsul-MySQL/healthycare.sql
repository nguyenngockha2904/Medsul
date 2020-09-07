-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
use csdl_medsul--
-- Host: 127.0.0.1    Database: healthycare
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
-- Table structure for table `chitietchuyennganh`
--

DROP TABLE IF EXISTS `chitietchuyennganh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietchuyennganh` (
  `CTCN_ID` int NOT NULL AUTO_INCREMENT,
  `CN_ID` int NOT NULL,
  `DD_ID` int NOT NULL,
  `CTCN_GHICHU` varchar(300) DEFAULT NULL,
  `CTCN_CHUNGCHI` varchar(300) DEFAULT NULL,
  `CTCN_TRINHDO` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`CTCN_ID`),
  KEY `FK_CO_CHUYENNGANH` (`CN_ID`),
  KEY `FK_CO_CTCN` (`DD_ID`),
  CONSTRAINT `FK_CO_CHUYENNGANH` FOREIGN KEY (`CN_ID`) REFERENCES `chuyennganh` (`CN_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_CO_CTCN` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietchuyennganh`
--

LOCK TABLES `chitietchuyennganh` WRITE;
/*!40000 ALTER TABLE `chitietchuyennganh` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitietchuyennganh` ENABLE KEYS */;
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
  `CTD_NGAYBATDAU` date DEFAULT NULL,
  `CTD_SOLUONG` int DEFAULT NULL,
  `CTD_DONGIA` float(8,2) DEFAULT NULL,
  `CTD_GIOBATDAU` time DEFAULT NULL,
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
  `CN_ID` int NOT NULL AUTO_INCREMENT,
  `CN_MA` varchar(50) DEFAULT NULL,
  `CN_TENCN` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`CN_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chuyennganh`
--

LOCK TABLES `chuyennganh` WRITE;
/*!40000 ALTER TABLE `chuyennganh` DISABLE KEYS */;
INSERT INTO `chuyennganh` VALUES (1,'KTV_PHCN','Kỹ thuật viên phục hồi chức năng.');
/*!40000 ALTER TABLE `chuyennganh` ENABLE KEYS */;
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
  `TT_ID` int NOT NULL,
  `DL_NGAYDAT` datetime DEFAULT NULL,
  `DL_TONGTIEN` float(8,2) DEFAULT NULL,
  `DL_SDT` varchar(11) DEFAULT NULL,
  `DL_HOTEN` varchar(30) DEFAULT NULL,
  `DL_EMAIL` varchar(50) DEFAULT NULL,
  `DL_GHICHU` varchar(300) DEFAULT NULL,
  `DL_DIACHI` varchar(300) DEFAULT NULL,
  `DL_TINHTRANG` tinyint NOT NULL,
  PRIMARY KEY (`DL_ID`),
  KEY `FK_CO_MAGGIAMGIA` (`MGG_ID`),
  KEY `FK_DIEUDUONG_CO_LICH` (`DD_ID`),
  KEY `FK_LICH_THUOC_TINHTHANH` (`TT_ID`),
  KEY `FK_NGUOIBENH_CO_LICHDAT` (`NB_ID`),
  KEY `FK_USER_DAT_LICH` (`USER_ID`),
  CONSTRAINT `FK_CO_MAGGIAMGIA` FOREIGN KEY (`MGG_ID`) REFERENCES `magiamgia` (`MGG_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_DIEUDUONG_CO_LICH` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_LICH_THUOC_TINHTHANH` FOREIGN KEY (`TT_ID`) REFERENCES `tinhthanh` (`TT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
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
  `CN_ID` int NOT NULL,
  `DV_MA` varchar(50) DEFAULT NULL,
  `DV_TEN` varchar(200) DEFAULT NULL,
  `DV_MOTA` longtext,
  `DV_YEUCAUCV` longtext,
  `DV_KHONGBAOGOM` longtext,
  `DV_THOIGIANUOCTINH` int DEFAULT NULL,
  PRIMARY KEY (`DV_ID`),
  KEY `FK_CO` (`LOAIDV_ID`),
  KEY `FK_YEUCAU_CHUYENNGANH` (`CN_ID`),
  CONSTRAINT `FK_CO` FOREIGN KEY (`LOAIDV_ID`) REFERENCES `loaidichvu` (`LOAIDV_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_YEUCAU_CHUYENNGANH` FOREIGN KEY (`CN_ID`) REFERENCES `chuyennganh` (`CN_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dichvu`
--

LOCK TABLES `dichvu` WRITE;
/*!40000 ALTER TABLE `dichvu` DISABLE KEYS */;
INSERT INTO `dichvu` VALUES (1,1,1,'PHCN_STB','PHCN Sau Tai Biến','Vật lý trị liệu và vận động phục hồi chức năng là hoạt động rất quang trọng quyết định đến sự thành công của ca phẫu thuật và khả năng phục hồi của bệnh nhân. Tuy nhiên sau khi phẫu thuật điều trị bệnh nhân vẫn còn rất đau, việc di chuyển đi lại rất khó khăn, nhiều rủi ro, tốn thời gian và chi phí. Hiểu được điều đó chúng tôi sẽ cử các chuyên viên PHCN nhiều năm kinh nghiệm đến thực hiện các thủ thuật vật lý trị liệu và hoạt động trị liệu cho bạn hoặc người thân tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu.','Hướng dẫn tập vận động trị liệu và thực hiện các biện pháp vật lý trị liệu để giúp tăng hiệu quả điều trị và phục hồi khả năng vận động của bệnh nhân.','- Thay băng cắt chỉ cho vết thương.',2),(2,1,1,'PHCN_SPT','PHCN Sau Phẫu Thuật','Vật lý trị liệu và vận động phục hồi chức năng là hoạt động rất quang trọng quyết định đến sự thành công của ca phẫu thuật và khả năng phục hồi của bệnh nhân. Tuy nhiên sau khi phẫu thuật điều trị bệnh nhân vẫn còn rất đau, việc di chuyển đi lại rất khó khăn, nhiều rủi ro, tốn thời gian và chi phí. Hiểu được điều đó chúng tôi sẽ cử các chuyên viên PHCN nhiều năm kinh nghiệm đến thực hiện các thủ thuật vật lý trị liệu và hoạt động trị liệu cho bạn hoặc người thân tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu.','Hướng dẫn tập vận động trị liệu và thực hiện các biện pháp vật lý trị liệu để giúp tăng hiệu quả điều trị và phục hồi khả năng vận động của bệnh nhân.','- Thay băng cắt chỉ cho vết thương.',2);
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
  `TT_ID` int NOT NULL,
  `DD_MA` varchar(100) DEFAULT NULL,
  `DD_HOTEN` varchar(300) DEFAULT NULL,
  `DD_MAGIOITHIEU` varchar(100) DEFAULT NULL,
  `DD_GIOITINH` varchar(30) DEFAULT NULL,
  `DD_NGAYSINH` date DEFAULT NULL,
  `DD_SDT` varchar(11) DEFAULT NULL,
  `DD_EMAIL` varchar(100) DEFAULT NULL,
  `DD_DIACHI` varchar(300) DEFAULT NULL,
  `DD_AVARTAR` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`DD_ID`),
  KEY `FK_DIEUDUONG_THUOC_TINHTHANH` (`TT_ID`),
  CONSTRAINT `FK_DIEUDUONG_THUOC_TINHTHANH` FOREIGN KEY (`TT_ID`) REFERENCES `tinhthanh` (`TT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dieuduong`
--

LOCK TABLES `dieuduong` WRITE;
/*!40000 ALTER TABLE `dieuduong` DISABLE KEYS */;
INSERT INTO `dieuduong` VALUES (1,1,'DD2000','Wibu Nguyễn',NULL,'không biết','1999-01-02','0123456789','duongnguyen101199@gmail.com','1233 cái gì củng đc',NULL);
/*!40000 ALTER TABLE `dieuduong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lichsuhen`
--

DROP TABLE IF EXISTS `lichsuhen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lichsuhen` (
  `LSUHEN_ID` int NOT NULL AUTO_INCREMENT,
  `DL_ID` int DEFAULT NULL,
  `DD_ID` int DEFAULT NULL,
  PRIMARY KEY (`LSUHEN_ID`),
  KEY `FK_LICHDAT_TROTHANH_LICHSUHEN` (`DL_ID`),
  KEY `FK_RELATIONSHIP_17` (`DD_ID`),
  CONSTRAINT `FK_LICHDAT_TROTHANH_LICHSUHEN` FOREIGN KEY (`DL_ID`) REFERENCES `datlich` (`DL_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_RELATIONSHIP_17` FOREIGN KEY (`DD_ID`) REFERENCES `dieuduong` (`DD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lichsuhen`
--

LOCK TABLES `lichsuhen` WRITE;
/*!40000 ALTER TABLE `lichsuhen` DISABLE KEYS */;
/*!40000 ALTER TABLE `lichsuhen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaidichvu`
--

DROP TABLE IF EXISTS `loaidichvu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaidichvu` (
  `LOAIDV_ID` int NOT NULL AUTO_INCREMENT,
  `LOAIDV_MA` varchar(50) DEFAULT NULL,
  `LOAIDV_TEN` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`LOAIDV_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaidichvu`
--

LOCK TABLES `loaidichvu` WRITE;
/*!40000 ALTER TABLE `loaidichvu` DISABLE KEYS */;
INSERT INTO `loaidichvu` VALUES (1,'PHCN','Phục Hồi Chức Năng');
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
  KEY `FK_USER_CO_MAGIAMGIA` (`USER_ID`),
  CONSTRAINT `FK_USER_CO_MAGIAMGIA` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `magiamgia`
--

LOCK TABLES `magiamgia` WRITE;
/*!40000 ALTER TABLE `magiamgia` DISABLE KEYS */;
INSERT INTO `magiamgia` VALUES (1,NULL,'GG2000','Giảm cho người bị bóng','20',1);
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
  `TT_ID` int NOT NULL,
  `NB_HOTEN` varchar(300) DEFAULT NULL,
  `NB_GIOITINH` varchar(30) DEFAULT NULL,
  `NB_SDT` varchar(11) DEFAULT NULL,
  `NB_NGAYSINH` date DEFAULT NULL,
  `NB_DIACHI` varchar(300) DEFAULT NULL,
  `NB_NHOMMAU` varchar(30) DEFAULT NULL,
  `NB_HUYETAP` varchar(30) DEFAULT NULL,
  `NB_DUONGHUYET` varchar(30) DEFAULT NULL,
  `NB_TIENSUBENH` varchar(300) DEFAULT NULL,
  `NB_AVARTAR` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`NB_ID`),
  KEY `FK_NGUOIBENH_THUOC_TINHTHANH` (`TT_ID`),
  CONSTRAINT `FK_NGUOIBENH_THUOC_TINHTHANH` FOREIGN KEY (`TT_ID`) REFERENCES `tinhthanh` (`TT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoibenh`
--

LOCK TABLES `nguoibenh` WRITE;
/*!40000 ALTER TABLE `nguoibenh` DISABLE KEYS */;
INSERT INTO `nguoibenh` VALUES (1,2,'Nguyễn Lan','bê','0123456789','1999-02-02','123 quần','O','30','10','không ',NULL),(2,3,'Lê Ngọc Hậu','cong','0123652014','1999-10-11','14 què','AB','35','125','bóng lộ',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quanhe`
--

LOCK TABLES `quanhe` WRITE;
/*!40000 ALTER TABLE `quanhe` DISABLE KEYS */;
INSERT INTO `quanhe` VALUES (1,1,1,'Người Thân');
/*!40000 ALTER TABLE `quanhe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tinhthanh`
--

DROP TABLE IF EXISTS `tinhthanh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tinhthanh` (
  `TT_ID` int NOT NULL AUTO_INCREMENT,
  `TT_MATINHTHANH` varchar(30) DEFAULT NULL,
  `TT_TENTINH` varchar(300) DEFAULT NULL,
  `TT_HESOGIAM` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`TT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinhthanh`
--

LOCK TABLES `tinhthanh` WRITE;
/*!40000 ALTER TABLE `tinhthanh` DISABLE KEYS */;
INSERT INTO `tinhthanh` VALUES (1,'LA','Long An','10'),(2,'HCM','Hồ Chí Minh','5'),(3,'DN','Đà Nẵng','10');
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
  `TT_ID` int NOT NULL,
  `USER_EMAIL` varchar(30) DEFAULT NULL,
  `USER_HOTEN` varchar(30) DEFAULT NULL,
  `USER_SDT` varchar(15) DEFAULT NULL,
  `USER_PASSWORD` varchar(100) DEFAULT NULL,
  `USER_MAGIOITHIEU` varchar(100) DEFAULT NULL,
  `USER_GIOITINH` varchar(5) DEFAULT NULL,
  `USER_DIACHI` varchar(100) DEFAULT NULL,
  `USER_NGAYSINH` date DEFAULT NULL,
  `USER_AVARTAR` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`USER_ID`),
  KEY `FK_USER_THUOC_TINHTHANH` (`TT_ID`),
  CONSTRAINT `FK_USER_THUOC_TINHTHANH` FOREIGN KEY (`TT_ID`) REFERENCES `tinhthanh` (`TT_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,1,'suthanbien@gmail.com','Trần Thanh Quy','0123456789','Quy0164vn',NULL,'nam','123asd','1999-08-02',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-05 14:37:00
