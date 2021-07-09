-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 09 Juillet 2021 à 17:44
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `onlinebanking7`
--

-- --------------------------------------------------------

--
-- Structure de la table `appointment`
--

CREATE TABLE IF NOT EXISTS `appointment` (
  `id` bigint(20) NOT NULL,
  `confirmed` bit(1) NOT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKa8m1smlfsc8kkjn2t6wpdmysk` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `appointment`
--

INSERT INTO `appointment` (`id`, `confirmed`, `date`, `description`, `location`, `user_id`) VALUES
(30, b'0', '2021-05-28 13:05:00', '', 'Boston', 13);

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(62),
(62),
(62),
(62),
(62),
(62),
(62),
(62);

-- --------------------------------------------------------

--
-- Structure de la table `periode`
--

CREATE TABLE IF NOT EXISTS `periode` (
  `id_P` varchar(50) NOT NULL,
  `jour` decimal(10,0) NOT NULL,
  `mois` decimal(10,0) DEFAULT NULL,
  `trimestre` varchar(10) DEFAULT NULL,
  `annee` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id_P`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `periode`
--

INSERT INTO `periode` (`id_P`, `jour`, `mois`, `trimestre`, `annee`) VALUES
('1', '1', '3', 'Q1', '2020'),
('10', '10', '3', 'Q2', '2020'),
('11', '11', '3', 'Q2', '2020'),
('12', '12', '3', 'Q2', '2020'),
('13', '13', '3', 'q2', '2020'),
('2', '2', '3', 'Q1', '2020'),
('3', '3', '3', 'Q1', '2020'),
('4', '4', '3', 'Q2', '2020'),
('5', '5', '3', 'Q2', '2020'),
('6', '6', '3', 'Q2', '2020'),
('7', '7', '3', 'Q1', '2020'),
('8', '8', '3', 'Q1', '2020'),
('9', '9', '3', 'Q1', '2020');

-- --------------------------------------------------------

--
-- Structure de la table `primary_account`
--

CREATE TABLE IF NOT EXISTS `primary_account` (
  `id_pr` bigint(20) NOT NULL,
  `account_balance` decimal(19,2) DEFAULT NULL,
  `account_number` int(11) NOT NULL,
  PRIMARY KEY (`id_pr`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `primary_account`
--

INSERT INTO `primary_account` (`id_pr`, `account_balance`, `account_number`) VALUES
(1, '10.00', 11223149),
(2, '935.00', 11223146),
(6, '0.00', 11223148),
(10, '0.00', 11223146),
(11, '6537.00', 11223147),
(51, '0.00', 11223146),
(52, '0.00', 11223147),
(53, '0.00', 11223148),
(54, '0.00', 11223146),
(55, '0.00', 11223146),
(56, '0.00', 11223146);

-- --------------------------------------------------------

--
-- Structure de la table `primary_transaction`
--

CREATE TABLE IF NOT EXISTS `primary_transaction` (
  `id_t` bigint(20) NOT NULL,
  `amount` double NOT NULL,
  `available_balance` decimal(19,2) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `primary_account_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id_t`),
  KEY `FK643wtfdx6y0e093wlc09csehn` (`primary_account_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `primary_transaction`
--

INSERT INTO `primary_transaction` (`id_t`, `amount`, `available_balance`, `date`, `description`, `status`, `type`, `primary_account_id`) VALUES
(15, 133, '1000.00', '2021-05-28 12:13:28', 'Deposit to Primary Account', 'Finished', 'Account', 11),
(17, 10, '990.00', '2021-05-28 12:13:52', 'Withdraw from Primary Account', 'Finished', 'Account', 11),
(19, 170, '6545.00', '2021-05-28 12:15:44', 'Deposit to Primary Account', 'Finished', 'Account', 11),
(21, 10, '6535.00', '2021-05-28 12:15:59', 'Withdraw from Primary Account', 'Finished', 'Account', 11),
(23, 100, '6435.00', '2021-05-28 12:16:35', 'Between account transfer from Primary to Savings', 'Finished', 'Account', 11),
(28, 55, '6446.00', '2021-05-28 12:18:45', 'Transfer to recipient amir', 'Finished', 'Transfer', 11),
(33, 10, '6456.00', '2021-05-31 18:25:46', 'Deposit to Primary Account', 'Finished', 'Account', 11),
(35, 10, '6466.00', '2021-06-02 11:52:48', 'Deposit to Primary Account', 'Finished', 'Account', 11),
(37, 67, '6399.00', '2021-06-02 11:53:05', 'Withdraw from Primary Account', 'Finished', 'Account', 11),
(39, 8, '6391.00', '2021-06-02 11:53:22', 'Between account transfer from Primary to Savings', 'Finished', 'Account', 11),
(41, 66, '6547.00', '2021-06-02 11:53:59', 'Transfer to recipient ahmed', 'Finished', 'Transfer', 11),
(43, 104, '1000.00', '2021-06-02 22:50:10', 'Deposit to Primary Account', 'Finished', 'Account', 2),
(45, 55, '945.00', '2021-06-02 22:50:20', 'Withdraw from Primary Account', 'Finished', 'Account', 2),
(47, 5, '25.00', '2021-06-02 22:55:05', 'Deposit to Primary Account', 'Finished', 'Account', 1),
(48, 5, '20.00', '2021-06-02 22:55:11', 'Withdraw from Primary Account', 'Finished', 'Account', 1),
(49, 100, '1000.00', '2021-06-02 22:55:11', 'Deposit to Primary Account', 'Finished', 'Account', 53),
(57, 10, '935.00', '2021-06-19 18:12:14', 'Between account transfer from Primary to Savings', 'Finished', 'Account', 2),
(59, 10, '6537.00', '2021-06-19 18:20:37', 'Transfer to recipient ahmed', 'Finished', 'Transfer', 11),
(61, 10, '10.00', '2021-06-19 18:21:32', 'Transfer to recipient aa', 'Finished', 'Transfer', 1);

-- --------------------------------------------------------

--
-- Structure de la table `recipient`
--

CREATE TABLE IF NOT EXISTS `recipient` (
  `id` bigint(20) NOT NULL,
  `account_number` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3041ks22uyyuuw441k5671ah9` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `recipient`
--

INSERT INTO `recipient` (`id`, `account_number`, `description`, `email`, `name`, `phone`, `user_id`) VALUES
(24, '1111', '', 'khaledtouatikhaled@hotmail.fr', 'ahmed', '56776060', 13),
(25, '4589', '', 'admin@gmail.com', 'mounir', '445', 13),
(26, '5599', '', 'khaledtouatikhaled91@hotmail.fr', 'amir', '+216 56776060', 13),
(58, '5599', '', 'sffds@gmail.com', 'mounir', '56776060', 4),
(60, '65694', '', 'ssssssssss@gmail.com', 'aa', '56776060', 1);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `role_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `role`
--

INSERT INTO `role` (`role_id`, `name`) VALUES
(0, 'ROLE_USER'),
(1, 'ROLE_ADMIN');

-- --------------------------------------------------------

--
-- Structure de la table `savings_account`
--

CREATE TABLE IF NOT EXISTS `savings_account` (
  `id` bigint(20) NOT NULL,
  `account_balance` decimal(19,2) DEFAULT NULL,
  `account_number` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `savings_account`
--

INSERT INTO `savings_account` (`id`, `account_balance`, `account_number`) VALUES
(2, '1046.00', 11223151),
(3, '475.00', 11223147),
(7, '0.00', 11223149),
(12, '1000312.00', 11223148);

-- --------------------------------------------------------

--
-- Structure de la table `savings_transaction`
--

CREATE TABLE IF NOT EXISTS `savings_transaction` (
  `id` bigint(20) NOT NULL,
  `amount` double NOT NULL,
  `available_balance` decimal(19,2) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `savings_account_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4bt1l2090882974glyn79q2s9` (`savings_account_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `savings_transaction`
--

INSERT INTO `savings_transaction` (`id`, `amount`, `available_balance`, `date`, `description`, `status`, `type`, `savings_account_id`) VALUES
(16, 1000000, '1000000.00', '2021-05-28 12:13:40', 'Deposit to savings Account', 'Finished', 'Account', 12),
(18, 55, '999945.00', '2021-05-28 12:13:59', 'Withdraw from savings Account', 'Finished', 'Account', 12),
(20, 999, '1000944.00', '2021-05-28 12:15:53', 'Deposit to savings Account', 'Finished', 'Account', 12),
(22, 66, '1000878.00', '2021-05-28 12:16:04', 'Withdraw from savings Account', 'Finished', 'Account', 12),
(27, 66, '1000912.00', '2021-05-28 12:18:02', 'Between account transfer from Savings to Primary', 'Finished', 'Transfer', 12),
(29, 66, '1000846.00', '2021-05-28 12:20:13', 'Transfer to recipient ahmed', 'Finished', 'Transfer', 12),
(31, 269, '1000577.00', '2021-05-31 17:09:02', 'Transfer to recipient ahmed', 'Finished', 'Transfer', 12),
(32, 20, '1000557.00', '2021-05-31 17:09:51', 'Transfer to recipient amir', 'Finished', 'Transfer', 12),
(34, 10, '1000567.00', '2021-05-31 18:26:43', 'Deposit to savings Account', 'Finished', 'Account', 12),
(36, 55, '1000622.00', '2021-06-02 11:52:57', 'Deposit to savings Account', 'Finished', 'Account', 12),
(38, 88, '1000534.00', '2021-06-02 11:53:10', 'Withdraw from savings Account', 'Finished', 'Account', 12),
(40, 222, '1000320.00', '2021-06-02 11:53:34', 'Between account transfer from Savings to Primary', 'Finished', 'Transfer', 12),
(42, 8, '1000312.00', '2021-06-02 11:54:15', 'Transfer to recipient amir', 'Finished', 'Transfer', 12),
(44, 520, '520.00', '2021-06-02 22:50:16', 'Deposit to savings Account', 'Finished', 'Account', 3),
(46, 55, '465.00', '2021-06-02 22:50:25', 'Withdraw from savings Account', 'Finished', 'Account', 3),
(49, 55, '1055.00', '2021-06-02 22:55:31', 'Deposit to savings Account', 'Finished', 'Account', 2),
(50, 9, '1046.00', '2021-06-02 22:55:36', 'Withdraw from savings Account', 'Finished', 'Account', 2);

-- --------------------------------------------------------

--
-- Structure de la table `transaction`
--

CREATE TABLE IF NOT EXISTS `transaction` (
  `user_id` bigint(20) NOT NULL,
  `id_pr` bigint(20) NOT NULL,
  `id_P` varchar(50) NOT NULL,
  `id_t` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `transaction`
--

INSERT INTO `transaction` (`user_id`, `id_pr`, `id_P`, `id_t`) VALUES
(1, 2, '3', 4),
(2, 4, '3', 6),
(13, 11, '1', 15);

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

CREATE TABLE IF NOT EXISTS `transactions` (
  `user_id` bigint(20) NOT NULL,
  `id_pr` bigint(20) NOT NULL,
  `id_P` varchar(50) NOT NULL,
  `id_t` bigint(20) NOT NULL,
  `count` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `chiffre_affaire` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `transactions`
--

INSERT INTO `transactions` (`user_id`, `id_pr`, `id_P`, `id_t`, `count`, `amount`, `chiffre_affaire`) VALUES
(13, 11, '1', 15, 1, 10, 6547),
(13, 11, '1', 15, 1, 15, 0),
(13, 11, '2', 17, 1, 20, 0),
(13, 11, '3', 19, 1, 30, 0),
(13, 11, '4', 21, 1, 25, 0),
(13, 11, '5', 23, 1, 30, 0),
(13, 11, '6', 28, 1, 10, 0),
(13, 11, '7', 33, 1, 66, 0),
(1, 1, '11', 47, 1, 10, 5233),
(1, 1, '12', 48, 1, 15, 0),
(1, 1, '13', 61, 1, 50, 0),
(4, 2, '8', 43, 1, 60, 0),
(4, 2, '9', 45, 1, 66, 0),
(4, 2, '10', 57, 1, 7, 0),
(15, 53, '11', 49, 1, 56, 1123),
(4, 2, '9', 49, 1, 22, 3666);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `enabled` bit(1) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `primary_account_id` bigint(20) DEFAULT NULL,
  `savings_account_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  KEY `FKbj0uoj9i40dory8w4t5ojyb9n` (`primary_account_id`),
  KEY `FKihums7d3g5cv9ehminfs1539e` (`savings_account_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`user_id`, `email`, `enabled`, `first_name`, `last_name`, `password`, `phone`, `username`, `primary_account_id`, `savings_account_id`) VALUES
(1, 'khaledtouatikhaled@hotmail.fr', b'1', 'amir', 'amir', '$2a$12$s8Frwx3TBjuiZuIo0RNNW.9usQYmfSOWv/Yet75WleSuSkXqif4zm', '656+546456', 'amir', 1, 2),
(4, 'khaledtouatikhaled91@hotmail.fr', b'1', 'khaled', 'khaled', '$2a$12$s8Frwx3TBjuiZuIo0RNNW.9usQYmfSOWv/Yet75WleSuSkXqif4zm', '445', 'khaled', 2, 3),
(13, 'admin@gmail.com', b'1', 'ahmed', 'Khaled', '$2a$12$B1THYeVlMFWIDowJ.HCRsuIhLIy/ecpkmuzDgi3c0EmXOGP7210/q', '445', 'admin2', 11, 12),
(15, 'atikhaled91@hotmail.fr', b'0', 'rehab', 'rehab', '$2a$12$B1THYeVlMFWIDowJ.HCRsuIhLIy/ecpkmuzDgi3c0EmXOGP7210/q', '45454', 'rehab', 53, 7);

-- --------------------------------------------------------

--
-- Structure de la table `user_role`
--

CREATE TABLE IF NOT EXISTS `user_role` (
  `user_role_id` bigint(20) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user_role_id`),
  KEY `FKa68196081fvovjhkek5m97n3y` (`role_id`),
  KEY `FK859n2jvi8ivhui0rl0esws6o` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user_role`
--

INSERT INTO `user_role` (`user_role_id`, `role_id`, `user_id`) VALUES
(1, 1, 1),
(5, 1, 4),
(14, 1, 13);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
