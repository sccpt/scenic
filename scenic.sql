SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

--
-- 表的结构 `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL COMMENT '用户id',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `subTitle` varchar(255) NOT NULL COMMENT '副标题',
  `typeId` int(11) NOT NULL COMMENT '类型id',
  `isTop` int(11) DEFAULT '0' COMMENT '首页推荐',
  `photo` varchar(255) DEFAULT NULL COMMENT '封面图片',
  `photos` varchar(255) DEFAULT NULL COMMENT '更多图片',
  `hot` int(11) DEFAULT '0' COMMENT '热度',
  `content` text NOT NULL COMMENT '内容',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `articles`
--

INSERT INTO `articles` (`id`, `userId`, `title`, `subTitle`, `typeId`, `isTop`, `photo`, `photos`, `hot`, `content`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(25, 1, '360观景平台', '360观景平台', 11, 1, '/uploads/1/CHP_2021101510492085.jpg', NULL, 0, '<p>360观景平台·</p><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"/uploads/1/CHP_2021101510492974.jpg\"/></div><p></p>', '2021-10-15 10:49:32', 'admin', '2021-10-15 10:53:45', 'admin'),
(26, 1, '云海', '云海', 11, 1, '/uploads/1/CHP_2021101510542934.jpg', NULL, 0, '<p>云海</p><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"/uploads/1/CHP_2021101510543543.jpg\"/></div><p></p>', '2021-10-15 10:54:37', 'admin', '2021-10-15 10:54:48', 'admin'),
(27, 1, '云瀑', '云瀑', 11, 1, '/uploads/1/CHP_2021101510550757.jpg', NULL, 0, '<p>云瀑</p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101510551133.jpg\"/></div><p></p>', '2021-10-15 10:55:14', 'admin', NULL, NULL),
(28, 1, '日照金山', '日照金山', 11, 1, '/uploads/1/CHP_2021101510553581.jpg', NULL, 0, '<p>日照金山</p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101510554053.jpg\"/></div><p></p>', '2021-10-15 10:55:42', 'admin', NULL, NULL),
(29, 1, '远观贡嘎山', '远观贡嘎山', 11, 1, '/uploads/1/CHP_2021101510561772.jpg', NULL, 0, '<p>远观贡嘎山</p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101510562173.jpg\"/></div><p></p>', '2021-10-15 10:56:23', 'admin', NULL, NULL),
(30, 1, '旅游胜地', '旅游胜地', 11, 1, '/uploads/1/CHP_2021101510570578.jpg', NULL, 0, '<p>旅游胜地</p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101510570978.jpg\"/></div><p></p>', '2021-10-15 10:57:11', 'admin', NULL, NULL),
(31, 1, '观云海', '观云海', 12, 1, '/uploads/1/CHP_2021101511093661.jpg', NULL, 0, '<p><strong>观云海</strong></p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101511094135.jpg\"/></div><p></p>', '2021-10-15 11:09:43', 'admin', NULL, NULL),
(32, 1, '看日出', '看日出', 12, 1, '/uploads/1/CHP_2021101511100349.jpg', NULL, 0, '<p>看日出</p><p></p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101511100972.jpg\"/></div><p></p>', '2021-10-15 11:10:11', 'admin', NULL, NULL),
(33, 1, '赏美景', '赏美景', 12, 1, '/uploads/1/CHP_2021101511113229.jpg', NULL, 0, '<p>赏美景</p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101511113760.jpg\"/></div><p></p>', '2021-10-15 11:11:39', 'admin', NULL, NULL),
(34, 1, '看星星', '看星星', 12, 1, '/uploads/1/CHP_2021101511115525.jpg', NULL, 0, '<p>看星星</p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101511120028.jpg\"/></div><p></p>', '2021-10-15 11:12:02', 'admin', NULL, NULL),
(35, 1, '国庆节景区爆满，人数达到日流量1万以上！', '国庆节景区爆满，人数达到日流量1万以上！', 14, 1, '/uploads/1/CHP_2021101511135872.jpg', NULL, 0, '<p>国庆节景区爆满，人数达到日流量1万以上！</p><p></p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101511140473.jpg\"/></div><p></p>', '2021-10-15 11:14:11', 'admin', NULL, NULL),
(36, 1, '县人民政府关于禁止车辆、人员前往景区的公告', '县人民政府关于禁止车辆、人员前往景区的公告', 14, 0, '/uploads/1/CHP_2021101511155753.jpg', NULL, 0, '<p>县人民政府关于禁止车辆、人员前往景区的公告</p><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"/uploads/1/CHP_2021101511153779.jpg\"/></div><p></p>', '2021-10-15 11:15:38', 'admin', '2021-10-15 11:21:05', 'admin'),
(37, 1, '建设“美丽新景区”，景区召开述职评议会', '建设“美丽新景区”，景区召开述职评议会', 14, 0, '/uploads/1/CHP_2021101511174453.jpg', NULL, 0, '<p>建设“美丽新景区”，景区召开述职评议会</p><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"/uploads/1/CHP_2021101511175246.jpg\"/></div><p></p>', '2021-10-15 11:17:55', 'admin', '2021-10-15 11:21:11', 'admin'),
(38, 1, '票务服务', '票务服务', 24, 0, '/uploads/1/CHP_2021101511371960.jpg', NULL, 0, '<p>票务服务</p><div class=\"media-wrap image-wrap\"><img src=\"/uploads/1/CHP_2021101511372985.jpg\"/></div><p></p>', '2021-10-15 11:37:20', 'admin', '2021-10-15 11:37:31', 'admin'),
(39, 1, '旅行社服务', '旅行社服务', 24, 0, NULL, NULL, 0, '<p>旅行社服务</p>', '2021-10-15 11:38:09', 'admin', NULL, NULL),
(40, 1, '食宿推荐', '食宿推荐', 24, 0, NULL, NULL, 0, '<p>食宿推荐</p>', '2021-10-15 11:38:25', 'admin', NULL, NULL),
(41, 1, '周边旅游', '周边旅游', 24, 0, NULL, NULL, 0, '<p>周边旅游</p>', '2021-10-15 11:38:47', 'admin', NULL, NULL),
(42, 1, '应急求助', '应急求助', 24, 0, NULL, NULL, 0, '<p>应急求助</p>', '2021-10-15 14:31:26', 'admin', NULL, NULL),
(43, 1, '旅游常识', '旅游常识', 24, 0, NULL, NULL, 0, '<p>旅游常识</p>', '2021-10-15 14:32:04', 'admin', NULL, NULL),
(44, 1, '游客须知', '游客须知', 24, 0, NULL, NULL, 0, '<p>游客须知</p>', '2021-10-15 14:34:56', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `article_types`
--

CREATE TABLE `article_types` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL COMMENT '用户id',
  `title` varchar(255) NOT NULL COMMENT '名称',
  `pid` int(11) DEFAULT NULL COMMENT '父id',
  `orderNum` int(11) NOT NULL COMMENT '显示排序',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `isNav` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否导航显示（0否，1是）',
  `isArt` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否导航栏显示文章列表',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `article_types`
--

INSERT INTO `article_types` (`id`, `userId`, `title`, `pid`, `orderNum`, `remark`, `isNav`, `isArt`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(11, 1, '景区景点', NULL, 0, NULL, 1, 1, '2021-09-28 17:02:57', 'admin', '2021-10-15 11:41:13', 'admin'),
(12, 1, '体验项目', NULL, 1, NULL, 1, 1, '2021-09-28 17:09:32', 'admin', '2021-10-15 11:51:00', 'admin'),
(13, 1, '活动资讯', NULL, 3, NULL, 1, 0, '2021-09-28 17:10:00', 'admin', NULL, NULL),
(14, 1, '景区新闻', 13, 0, NULL, 1, 0, '2021-09-28 17:10:14', 'admin', NULL, NULL),
(15, 1, '公告公示', 13, 1, NULL, 1, 0, '2021-09-28 17:26:26', 'admin', NULL, NULL),
(16, 1, '优惠活动', 13, 2, NULL, 1, 0, '2021-09-28 17:26:45', 'admin', '2021-09-28 17:27:18', 'admin'),
(17, 1, '主题活动', 13, 3, NULL, 1, 0, '2021-09-28 17:27:11', 'admin', NULL, NULL),
(18, 1, '党政建设', 13, 4, NULL, 1, 0, '2021-09-28 17:27:42', 'admin', NULL, NULL),
(19, 1, '旅游攻略', NULL, 4, NULL, 1, 0, '2021-09-28 17:28:11', 'admin', NULL, NULL),
(20, 1, '线路推荐', 19, 0, NULL, 1, 0, '2021-09-28 17:28:37', 'admin', NULL, NULL),
(21, 1, '交通指南', 19, 1, NULL, 1, 0, '2021-09-28 17:28:54', 'admin', NULL, NULL),
(22, 1, '吃喝玩乐', 19, 2, NULL, 1, 0, '2021-09-28 17:29:13', 'admin', NULL, NULL),
(23, 1, '景区导览', 19, 3, NULL, 1, 0, '2021-09-28 17:31:37', 'admin', NULL, NULL),
(24, 1, '游客服务', NULL, 5, NULL, 1, 1, '2021-09-28 17:32:41', 'admin', '2021-10-15 11:51:36', 'admin'),
(25, 1, '宣传视频', NULL, 6, NULL, 1, 0, '2021-09-28 17:33:11', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `departments`
--

CREATE TABLE `departments` (
  `deptId` int(11) NOT NULL,
  `parentId` int(11) NOT NULL COMMENT '父Id',
  `deptName` varchar(255) NOT NULL COMMENT '部门名称',
  `orderNum` int(11) NOT NULL COMMENT '显示顺序',
  `status` varchar(255) DEFAULT '1' COMMENT '部门状态（1正常 0停用）',
  `isDelete` varchar(255) DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `departments`
--

INSERT INTO `departments` (`deptId`, `parentId`, `deptName`, `orderNum`, `status`, `isDelete`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 0, '总部', 1, '1', '0', '2021-01-08 12:04:02', 'admin', NULL, NULL),
(2, 1, '测试部门', 1, '1', '0', '2021-01-08 12:04:02', 'admin', NULL, NULL),
(5, 2, '测试一部', 2, '1', '0', '2021-02-02 17:41:01', 'test', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `devices`
--

CREATE TABLE `devices` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL COMMENT '名称',
  `typeId` int(11) NOT NULL COMMENT '类型',
  `secret` varchar(255) NOT NULL COMMENT '密钥',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `devices`
--

INSERT INTO `devices` (`id`, `name`, `typeId`, `secret`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(26, '正门闸机1', 26, '+XwJGXPl', NULL, '2021-10-13 15:23:24', 'admin', '2021-10-13 17:23:43', 'admin'),
(27, '正门闸机2', 26, '4-64_Nju', NULL, '2021-10-13 15:26:35', 'admin', '2021-10-13 17:27:29', 'admin'),
(28, '后门闸机1', 26, 'PYll&IxD', NULL, '2021-10-13 15:27:58', 'admin', '2021-10-13 17:27:36', 'admin'),
(29, '后门闸机2', 26, '-eletfXJ', NULL, '2021-10-13 15:28:11', 'admin', '2021-10-13 17:27:41', 'admin'),
(31, '1号停车场入场设备左', 28, 'Fe-bgIUJ', NULL, '2021-10-14 14:52:52', 'admin', NULL, NULL),
(32, '1号停车场入场设备右', 28, '4Hb%uPv-', NULL, '2021-10-14 14:53:14', 'admin', NULL, NULL),
(33, '1号停车场出场设备左', 28, 'DI$1183b', NULL, '2021-10-14 14:53:37', 'admin', NULL, NULL),
(34, '1号停车场出场设备右', 28, 'NxlX%qV3', NULL, '2021-10-14 14:53:59', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `devices_roles`
--

CREATE TABLE `devices_roles` (
  `id` int(11) NOT NULL,
  `deviceId` int(11) NOT NULL COMMENT '用户id',
  `roleId` int(11) NOT NULL COMMENT '角色id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `devices_roles`
--

INSERT INTO `devices_roles` (`id`, `deviceId`, `roleId`) VALUES
(42, 26, 4),
(43, 27, 4),
(44, 28, 4),
(45, 29, 4),
(46, 31, 5),
(47, 32, 5),
(48, 33, 6),
(49, 34, 6);

-- --------------------------------------------------------

--
-- 表的结构 `device_types`
--

CREATE TABLE `device_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL COMMENT '名称',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `device_types`
--

INSERT INTO `device_types` (`id`, `name`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(26, '验票闸机', NULL, '2021-10-13 15:21:29', 'admin', NULL, NULL),
(27, '观光车GPS', NULL, '2021-10-13 15:21:58', 'admin', NULL, NULL),
(28, '停车场设备', NULL, '2021-10-14 10:51:44', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `dict_datas`
--

CREATE TABLE `dict_datas` (
  `id` int(11) NOT NULL,
  `dictSort` int(11) NOT NULL COMMENT '字典排序',
  `dictLabel` varchar(255) NOT NULL COMMENT '字典标签',
  `dictValue` varchar(255) NOT NULL COMMENT '字典键值',
  `dictType` varchar(255) NOT NULL COMMENT '字典类型',
  `cssClass` varchar(255) DEFAULT NULL COMMENT '样式属性（其他样式扩展）',
  `listClass` varchar(255) DEFAULT NULL COMMENT '表格回显样式',
  `isDefault` varchar(255) DEFAULT 'Y' COMMENT '是否默认（Y是 N否）',
  `status` varchar(255) DEFAULT '1' COMMENT '菜单状态（1正常 0停用）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `dict_datas`
--

INSERT INTO `dict_datas` (`id`, `dictSort`, `dictLabel`, `dictValue`, `dictType`, `cssClass`, `listClass`, `isDefault`, `status`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 1, '正常', '1', 'sys_show_hide', NULL, NULL, 'Y', '1', '正常', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:27', 'admin'),
(2, 2, '停用', '0', 'sys_show_hide', NULL, NULL, 'Y', '1', '停用', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:29', 'admin'),
(3, 1, '正常', '1', 'sys_normal_disable', NULL, NULL, 'Y', '1', '正常', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:36', 'admin'),
(4, 2, '停用', '0', 'sys_normal_disable', NULL, NULL, 'Y', '1', '停用', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:39', 'admin'),
(5, 2, '男', '1', 'sys_user_sex', NULL, NULL, 'Y', '1', '男', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:46', 'admin'),
(6, 1, '女', '0', 'sys_user_sex', NULL, NULL, 'Y', '1', '女', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:44', 'admin'),
(7, 1, '公告', '1', 'sys_notice_type', NULL, NULL, 'Y', '1', '公告', '2021-01-05 13:49:04', 'admin', '2021-01-05 15:07:17', 'admin'),
(8, 2, '通知', '2', 'sys_notice_type', NULL, NULL, 'Y', '1', '通知', '2021-01-05 13:49:18', 'admin', '2021-01-05 15:07:20', 'admin'),
(16, 1, '启用', '1', 'sys_notice_status', NULL, NULL, 'Y', '1', '启用', '2021-01-05 14:43:51', 'admin', '2021-01-05 15:07:09', 'admin'),
(17, 2, '停用', '2', 'sys_notice_status', NULL, NULL, 'Y', '1', '停用', '2021-01-05 14:44:07', 'admin', '2021-01-05 15:07:12', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `dict_types`
--

CREATE TABLE `dict_types` (
  `id` int(11) NOT NULL,
  `dictName` varchar(255) NOT NULL COMMENT '字典名称',
  `dictType` varchar(255) NOT NULL COMMENT '字典类型',
  `status` varchar(255) DEFAULT '1' COMMENT '菜单状态（1正常 2停用）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `dict_types`
--

INSERT INTO `dict_types` (`id`, `dictName`, `dictType`, `status`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, '显示状态', 'sys_show_hide', '1', '显示状态', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:06:44', 'admin'),
(2, '状态数据', 'sys_normal_disable', '1', '状态数据', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:06:47', 'admin'),
(3, '性别', 'sys_user_sex', '1', '性别', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:06:49', 'admin'),
(4, '公告类型', 'sys_notice_type', '1', '公告类型', '2021-01-05 13:47:27', 'admin', '2021-01-05 15:06:41', 'admin'),
(5, '公告状态', 'sys_notice_status', '1', '公告状态', '2021-01-05 13:48:00', 'admin', '2021-01-05 15:06:37', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `friendly_links`
--

CREATE TABLE `friendly_links` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL COMMENT '用户id',
  `title` varchar(255) NOT NULL COMMENT '名称',
  `url` varchar(255) NOT NULL COMMENT '链接',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `friendly_links`
--

INSERT INTO `friendly_links` (`id`, `userId`, `title`, `url`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(3, 1, 'baidu', 'https://www.baidu.com/?tn=78000241_22_hao_pg', 'baidu', '2021-01-23 13:35:18', 'admin', '2021-01-23 14:08:40', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `parentId` int(11) NOT NULL COMMENT '父Id',
  `title` varchar(255) NOT NULL COMMENT '菜单名称',
  `path` varchar(255) DEFAULT NULL COMMENT '菜单路径',
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `component` varchar(255) DEFAULT NULL COMMENT '组件路径',
  `isFrame` varchar(255) DEFAULT '0' COMMENT '是否为外链（1是 0否）',
  `menuType` varchar(255) DEFAULT 'M' COMMENT '菜单类型（M目录 C菜单 F按钮）',
  `visible` varchar(255) DEFAULT '1' COMMENT '菜单显示状态（1显示 0隐藏）',
  `orderNum` int(11) NOT NULL COMMENT '显示顺序',
  `status` varchar(255) DEFAULT '1' COMMENT '菜单状态（1正常 0停用）',
  `perms` varchar(255) DEFAULT NULL COMMENT '权限标识',
  `btnPer` varchar(255) DEFAULT NULL COMMENT '按钮权限，用于前端',
  `icon` varchar(255) DEFAULT '#' COMMENT '图标',
  `isDelete` varchar(255) DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `menus`
--

INSERT INTO `menus` (`id`, `parentId`, `title`, `path`, `name`, `component`, `isFrame`, `menuType`, `visible`, `orderNum`, `status`, `perms`, `btnPer`, `icon`, `isDelete`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(65, 0, '首页', '/home', 'Home', 'Home', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:37:46', 'admin', NULL, NULL),
(66, 0, '票务系统', '/teckets', 'Teckets', 'Teckets', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:38:47', 'admin', '2021-10-08 16:52:54', 'admin'),
(67, 66, '门票管理', '/teckets/list', 'TecketsList', 'TecketsList', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:39:36', 'admin', NULL, NULL),
(68, 66, '分类管理', '/teckets/type', 'TecketsType', 'TecketsType', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:40:44', 'admin', NULL, NULL),
(69, 66, '订单管理', '/teckets/order', 'TecketsOrder', 'TecketsOrder', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:41:46', 'admin', NULL, NULL),
(70, 67, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:tickets:add', 'create', '#', '0', NULL, '2021-10-08 14:43:09', 'admin', '2021-10-08 17:58:45', 'admin'),
(71, 67, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:tickets:delete', 'delete', '#', '0', NULL, '2021-10-08 14:43:37', 'admin', '2021-10-08 17:59:09', 'admin'),
(72, 67, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:tickets:update', 'update', '#', '0', NULL, '2021-10-08 14:45:12', 'admin', '2021-10-08 17:59:37', 'admin'),
(73, 68, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsType:add', 'create', '#', '0', NULL, '2021-10-08 14:46:02', 'admin', '2021-10-09 09:49:14', 'admin'),
(74, 68, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsType:delete', 'delete', '#', '0', NULL, '2021-10-08 14:46:22', 'admin', '2021-10-09 09:49:29', 'admin'),
(75, 68, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsType:update', 'update', '#', '0', NULL, '2021-10-08 14:46:40', 'admin', '2021-10-09 09:49:46', 'admin'),
(76, 69, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsOrders:add', 'create', '#', '0', NULL, '2021-10-08 14:46:56', 'admin', '2021-10-08 18:00:48', 'admin'),
(77, 69, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsOrders:delete', 'delete', '#', '0', NULL, '2021-10-08 14:47:10', 'admin', '2021-10-08 18:01:08', 'admin'),
(78, 69, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsOrders:update', 'update', '#', '0', NULL, '2021-10-08 14:47:23', 'admin', '2021-10-08 18:01:23', 'admin'),
(79, 0, '内容管理', '/article', 'Article', 'Article', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:48:20', 'admin', '2021-10-08 16:53:01', 'admin'),
(80, 79, '文章管理', '/article/list', 'ArticleList', 'ArticleList', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:48:49', 'admin', NULL, NULL),
(81, 79, '栏目管理', '/article/type', 'ArticleType', 'ArticleType', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:49:16', 'admin', NULL, NULL),
(82, 80, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'blog:article:add', 'create', '#', '0', NULL, '2021-10-08 14:49:30', 'admin', '2021-10-08 18:13:34', 'admin'),
(83, 80, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'blog:article:delete', 'delete', '#', '0', NULL, '2021-10-08 14:49:50', 'admin', '2021-10-08 18:13:48', 'admin'),
(84, 80, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'blog:article:update', 'update', '#', '0', NULL, '2021-10-08 14:50:06', 'admin', '2021-10-08 18:13:58', 'admin'),
(85, 81, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'blog:articleType:add', 'create', '#', '0', NULL, '2021-10-08 14:50:21', 'admin', '2021-10-09 10:02:12', 'admin'),
(86, 81, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'blog:articleType:delete', 'delete', '#', '0', NULL, '2021-10-08 14:50:36', 'admin', '2021-10-09 10:02:24', 'admin'),
(87, 81, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'blog:articleType:update', 'update', '#', '0', NULL, '2021-10-08 14:50:50', 'admin', '2021-10-09 10:02:34', 'admin'),
(88, 0, '系统管理', '/manage', 'Manage', 'Manage', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:52:06', 'admin', '2021-10-08 16:53:06', 'admin'),
(89, 88, '系统配置', '/manage/seting', 'ManageSet', 'ManageSet', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:52:37', 'admin', NULL, NULL),
(90, 88, '用户管理', '/manage/user', 'ManageUser', 'ManageUser', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:53:38', 'admin', NULL, NULL),
(91, 88, '角色管理', '/manage/role', 'Role', 'Role', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:54:10', 'admin', NULL, NULL),
(92, 88, '菜单管理', '/manage/menu', 'Menu', 'Menu', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:54:41', 'admin', NULL, NULL),
(93, 88, '部门管理', '/manage/department', 'Department', 'Department', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-08 14:55:16', 'admin', NULL, NULL),
(94, 90, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:user:add', 'create', '#', '0', NULL, '2021-10-08 14:55:32', 'admin', '2021-10-09 10:17:41', 'admin'),
(95, 90, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:user:delete', 'delete', '#', '0', NULL, '2021-10-08 14:55:46', 'admin', '2021-10-09 10:17:54', 'admin'),
(96, 90, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:user:update', 'update', '#', '0', NULL, '2021-10-08 14:55:58', 'admin', '2021-10-09 10:18:07', 'admin'),
(97, 91, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:role:add', 'create', '#', '0', NULL, '2021-10-08 14:56:09', 'admin', '2021-10-09 10:18:49', 'admin'),
(98, 91, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:role:delete', 'delete', '#', '0', NULL, '2021-10-08 14:56:22', 'admin', '2021-10-09 10:19:00', 'admin'),
(99, 91, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:role:update', 'update', '#', '0', NULL, '2021-10-08 14:56:35', 'admin', '2021-10-09 10:19:17', 'admin'),
(100, 92, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:menu:add', 'create', '#', '0', NULL, '2021-10-08 14:56:59', 'admin', '2021-10-09 10:20:01', 'admin'),
(101, 92, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:menu:delete', 'delete', '#', '0', NULL, '2021-10-08 14:57:11', 'admin', '2021-10-09 10:20:16', 'admin'),
(103, 92, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:menu:update', 'update', '#', '0', NULL, '2021-10-08 14:57:52', 'admin', '2021-10-09 10:20:27', 'admin'),
(104, 93, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:department:add', 'create', '#', '0', NULL, '2021-10-08 14:58:13', 'admin', '2021-10-09 10:21:14', 'admin'),
(105, 93, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:department:delete', 'delete', '#', '0', NULL, '2021-10-08 14:58:27', 'admin', '2021-10-09 10:21:25', 'admin'),
(106, 93, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:department:update', 'update', '#', '0', NULL, '2021-10-08 14:58:46', 'admin', '2021-10-09 10:21:37', 'admin'),
(108, 67, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:tickets:list', 'search', '#', '0', NULL, '2021-10-08 18:00:17', 'admin', NULL, NULL),
(109, 69, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsOrders:list', 'search', '#', '0', NULL, '2021-10-08 18:01:55', 'admin', NULL, NULL),
(110, 69, '查询库存', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsStock:stock', 'other', '#', '0', NULL, '2021-10-08 18:02:46', 'admin', NULL, NULL),
(111, 69, '查询库存统计', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsTodayStock:stock', 'other', '#', '0', NULL, '2021-10-08 18:03:18', 'admin', NULL, NULL),
(112, 69, '完成付款', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsOrder:pay', 'other', '#', '0', NULL, '2021-10-08 18:04:19', 'admin', NULL, NULL),
(115, 80, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'blog:article:list', 'search', '#', '0', NULL, '2021-10-08 18:14:18', 'admin', NULL, NULL),
(117, 68, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsType:list', 'search', '#', '0', NULL, '2021-10-09 09:58:30', 'admin', NULL, NULL),
(118, 81, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'blog:articleType:list', 'search', '#', '0', NULL, '2021-10-09 10:03:57', 'admin', NULL, NULL),
(119, 89, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:seting:update', 'update', '#', '0', NULL, '2021-10-09 10:08:17', 'admin', NULL, NULL),
(120, 89, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:seting:list', 'search', '#', '0', NULL, '2021-10-09 10:08:39', 'admin', NULL, NULL),
(121, 90, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:user:list', 'search', '#', '0', NULL, '2021-10-09 10:18:30', 'admin', NULL, NULL),
(122, 91, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:role:list', 'search', '#', '0', NULL, '2021-10-09 10:19:34', 'admin', NULL, NULL),
(123, 92, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:menu:list', 'search', '#', '0', NULL, '2021-10-09 10:20:49', 'admin', NULL, NULL),
(124, 93, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:department:list', 'search', '#', '0', NULL, '2021-10-09 10:21:56', 'admin', NULL, NULL),
(125, 88, '通知管理', '/manage/notice', 'Notice', 'Notice', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-09 10:27:15', 'admin', NULL, NULL),
(126, 125, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:notice:add', 'create', '#', '0', NULL, '2021-10-09 10:27:43', 'admin', NULL, NULL),
(127, 125, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:notice:delete', 'delete', '#', '0', NULL, '2021-10-09 10:28:10', 'admin', NULL, NULL),
(128, 125, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:notice:update', 'update', '#', '0', NULL, '2021-10-09 10:28:31', 'admin', NULL, NULL),
(129, 125, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:notice:list', 'search', '#', '0', NULL, '2021-10-09 10:28:52', 'admin', NULL, NULL),
(130, 80, '查询所有栏目', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'blog:articleType:getAllType', 'other', '#', '0', NULL, '2021-10-09 10:42:44', 'admin', NULL, NULL),
(131, 69, '验票', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsOrder:check', 'other', '#', '0', NULL, '2021-10-09 10:47:12', 'admin', NULL, NULL),
(132, 0, '个人中心', '/account', 'Account', 'Account', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-09 10:51:06', 'admin', NULL, NULL),
(133, 132, '修改密码', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:user:updateUserPwd', 'update', '#', '0', NULL, '2021-10-09 10:51:34', 'admin', '2021-10-09 10:52:24', 'admin'),
(134, 132, '修改头像', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:user:updateUserImg', 'update', '#', '0', NULL, '2021-10-09 10:52:00', 'admin', NULL, NULL),
(135, 132, '修改用户信息', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:user:update', 'update', '#', '0', NULL, '2021-10-09 10:54:09', 'admin', NULL, NULL),
(136, 66, '销售报表', '/teckets/table', 'Table', 'Table', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-09 17:07:19', 'admin', NULL, NULL),
(137, 66, '汇总分析', '/teckets/analysis', 'Analysis', 'Analysis', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-09 18:02:37', 'admin', NULL, NULL),
(138, 0, '设备管理', '/devices', 'Devices', 'Devices', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-13 15:14:47', 'admin', NULL, NULL),
(139, 138, '管理设备', '/devices/list', 'DevicesList', 'DevicesList', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-13 15:15:22', 'admin', NULL, NULL),
(140, 138, '分类管理', '/devices/type', 'DevicesType', 'DevicesType', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-13 15:16:02', 'admin', NULL, NULL),
(141, 139, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'devices:devices:add', 'create', '#', '0', NULL, '2021-10-13 15:16:46', 'admin', NULL, NULL),
(142, 139, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'devices:devices:delete', 'delete', '#', '0', NULL, '2021-10-13 15:17:24', 'admin', NULL, NULL),
(143, 139, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'devices:devices:update', 'update', '#', '0', NULL, '2021-10-13 15:17:51', 'admin', NULL, NULL),
(144, 139, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'devices:devices:list', 'search', '#', '0', NULL, '2021-10-13 15:18:09', 'admin', NULL, NULL),
(145, 140, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'devices:devicesType:add', 'create', '#', '0', NULL, '2021-10-13 15:18:32', 'admin', NULL, NULL),
(146, 140, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'devices:devicesType:delete', 'delete', '#', '0', NULL, '2021-10-13 15:19:04', 'admin', NULL, NULL),
(147, 140, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'devices:devicesType:update', 'update', '#', '0', NULL, '2021-10-13 15:19:31', 'admin', NULL, NULL),
(148, 140, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'devices:devicesType:list', 'search', '#', '0', NULL, '2021-10-13 15:20:06', 'admin', NULL, NULL),
(149, 90, '重置密码', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'system:user:resetPwd', 'other', '#', '0', NULL, '2021-10-13 15:59:12', 'admin', NULL, NULL),
(150, 137, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:orders:statistics', 'search', '#', '0', NULL, '2021-10-13 16:06:13', 'admin', NULL, NULL),
(151, 136, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'tickets:ticketsOrders:list', 'search', '#', '0', NULL, '2021-10-13 16:06:44', 'admin', NULL, NULL),
(152, 0, '停车管理', '/parkings', 'Parkings', 'Parkings', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-14 11:45:55', 'admin', NULL, NULL),
(153, 152, '停车场', '/parkings/list', 'ParkingsList', 'ParkingsList', '1', 'C', '1', 0, '1', NULL, NULL, '#', '0', NULL, '2021-10-14 11:46:28', 'admin', NULL, NULL),
(154, 153, '新增', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'parkings:parkings:add', 'create', '#', '0', NULL, '2021-10-14 11:46:50', 'admin', NULL, NULL),
(155, 153, '删除', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'parkings:parkings:delete', 'delete', '#', '0', NULL, '2021-10-14 11:47:10', 'admin', NULL, NULL),
(156, 153, '修改', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'parkings:parkings:update', 'update', '#', '0', NULL, '2021-10-14 11:47:32', 'admin', NULL, NULL),
(157, 153, '查询', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'parkings:parkings:list', 'search', '#', '0', NULL, '2021-10-14 11:47:50', 'admin', NULL, NULL),
(158, 153, '车辆入场', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'parkings:parkings:push', 'other', '#', '0', NULL, '2021-10-14 14:48:52', 'admin', '2021-10-15 17:02:58', 'admin'),
(159, 153, '车辆出场', NULL, NULL, NULL, '0', 'F', '1', 0, '1', 'parkings:parkings:push', 'other', '#', '0', NULL, '2021-10-14 14:49:16', 'admin', '2021-10-15 17:03:04', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `notices`
--

CREATE TABLE `notices` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL COMMENT '公告标题',
  `content` text NOT NULL COMMENT '内容',
  `isRead` int(11) DEFAULT '0' COMMENT '是否已读（0未读，1已读）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `parkings`
--

CREATE TABLE `parkings` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL COMMENT '名称',
  `space` int(11) NOT NULL COMMENT '停车场容量',
  `free` int(11) DEFAULT NULL COMMENT '空闲车位数量',
  `fault` int(11) DEFAULT '0' COMMENT '故障停车位',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `parkings`
--

INSERT INTO `parkings` (`id`, `name`, `space`, `free`, `fault`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(29, '1号停车场', 300, 298, 0, NULL, '2021-10-14 11:49:47', 'admin', '2021-10-14 14:17:57', 'admin'),
(30, '2号停车场', 210, 200, 10, NULL, '2021-10-14 11:50:06', 'admin', '2021-10-14 14:18:27', 'admin'),
(31, '3号停车场', 240, 240, 0, NULL, '2021-10-14 12:03:14', 'admin', '2021-10-14 14:21:21', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `roleName` varchar(255) NOT NULL COMMENT '角色名称',
  `roleKey` varchar(255) NOT NULL COMMENT '角色权限字符串',
  `roleSort` int(11) NOT NULL COMMENT '显示顺序',
  `dataScope` varchar(255) DEFAULT '1' COMMENT '数据范围（1：本部门及以下数据权限 2：本部门数据权限 3：仅本人权限）',
  `status` varchar(255) DEFAULT '1' COMMENT '角色状态（1正常 0停用）',
  `isDelete` varchar(255) DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `roles`
--

INSERT INTO `roles` (`id`, `roleName`, `roleKey`, `roleSort`, `dataScope`, `status`, `isDelete`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, '超级管理员', 'admin', 1, '1', '1', '0', NULL, '2021-01-08 12:04:02', 'admin', '2021-10-14 11:48:35', 'admin'),
(2, '售票员', 'tickets', 2, '1', '1', '0', NULL, '2021-01-23 09:40:29', 'admin', '2021-10-09 10:54:31', 'admin'),
(3, '内容发布员', 'article', 0, '1', '1', '0', NULL, '2021-10-08 17:18:01', 'admin', '2021-10-09 10:54:40', 'admin'),
(4, '验票闸机', 'check', 0, '1', '1', '0', NULL, '2021-10-13 17:13:08', 'admin', NULL, NULL),
(5, '停车场设备入场', 'parkingIn', 0, '1', '1', '0', NULL, '2021-10-14 14:50:42', 'admin', NULL, NULL),
(6, '停车场设备出场', 'parkingOut', 0, '1', '1', '0', NULL, '2021-10-14 14:51:15', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `role_menus`
--

CREATE TABLE `role_menus` (
  `id` int(11) NOT NULL,
  `roleId` int(11) NOT NULL COMMENT '角色roleId',
  `menuId` int(11) NOT NULL COMMENT '菜单menuId'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `role_menus`
--

INSERT INTO `role_menus` (`id`, `roleId`, `menuId`) VALUES
(2081, 2, 66),
(2082, 2, 69),
(2083, 2, 76),
(2084, 2, 77),
(2085, 2, 78),
(2086, 2, 65),
(2087, 2, 109),
(2088, 2, 110),
(2089, 2, 111),
(2090, 2, 112),
(2091, 2, 108),
(2092, 2, 120),
(2093, 2, 132),
(2094, 2, 133),
(2095, 2, 134),
(2096, 2, 135),
(2097, 3, 79),
(2098, 3, 80),
(2099, 3, 82),
(2100, 3, 83),
(2101, 3, 84),
(2102, 3, 65),
(2103, 3, 115),
(2104, 3, 118),
(2105, 3, 130),
(2106, 3, 132),
(2107, 3, 133),
(2108, 3, 134),
(2109, 3, 135),
(2548, 4, 131),
(2549, 4, 69),
(2550, 1, 65),
(2551, 1, 66),
(2552, 1, 67),
(2553, 1, 68),
(2554, 1, 69),
(2555, 1, 70),
(2556, 1, 71),
(2557, 1, 72),
(2558, 1, 73),
(2559, 1, 74),
(2560, 1, 75),
(2561, 1, 76),
(2562, 1, 77),
(2563, 1, 78),
(2564, 1, 79),
(2565, 1, 80),
(2566, 1, 81),
(2567, 1, 82),
(2568, 1, 83),
(2569, 1, 84),
(2570, 1, 85),
(2571, 1, 86),
(2572, 1, 87),
(2573, 1, 88),
(2574, 1, 89),
(2575, 1, 90),
(2576, 1, 91),
(2577, 1, 92),
(2578, 1, 93),
(2579, 1, 94),
(2580, 1, 95),
(2581, 1, 96),
(2582, 1, 97),
(2583, 1, 98),
(2584, 1, 99),
(2585, 1, 100),
(2586, 1, 101),
(2587, 1, 103),
(2588, 1, 104),
(2589, 1, 105),
(2590, 1, 106),
(2591, 1, 125),
(2592, 1, 126),
(2593, 1, 127),
(2594, 1, 128),
(2595, 1, 129),
(2596, 1, 124),
(2597, 1, 123),
(2598, 1, 122),
(2599, 1, 121),
(2600, 1, 119),
(2601, 1, 120),
(2602, 1, 115),
(2603, 1, 118),
(2604, 1, 108),
(2605, 1, 117),
(2606, 1, 109),
(2607, 1, 110),
(2608, 1, 111),
(2609, 1, 112),
(2610, 1, 130),
(2611, 1, 132),
(2612, 1, 133),
(2613, 1, 134),
(2614, 1, 135),
(2615, 1, 136),
(2616, 1, 137),
(2617, 1, 138),
(2618, 1, 139),
(2619, 1, 141),
(2620, 1, 142),
(2621, 1, 143),
(2622, 1, 144),
(2623, 1, 140),
(2624, 1, 145),
(2625, 1, 146),
(2626, 1, 147),
(2627, 1, 148),
(2628, 1, 149),
(2629, 1, 131),
(2630, 1, 151),
(2631, 1, 150),
(2632, 1, 152),
(2633, 1, 153),
(2634, 1, 154),
(2635, 1, 155),
(2636, 1, 156),
(2637, 1, 157),
(2638, 5, 152),
(2639, 5, 158),
(2640, 6, 152),
(2641, 6, 159);

-- --------------------------------------------------------

--
-- 表的结构 `setings`
--

CREATE TABLE `setings` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL COMMENT '标题',
  `logo` varchar(255) NOT NULL COMMENT 'logo地址',
  `telephone` varchar(255) DEFAULT NULL COMMENT '景区电话',
  `adress` varchar(255) DEFAULT NULL COMMENT '景区地址',
  `keywords` varchar(255) DEFAULT NULL COMMENT '搜索关键字',
  `description` text COMMENT '网站描述',
  `webStatus` int(11) NOT NULL DEFAULT '1' COMMENT '网站状态（0停止，1正常）',
  `ticketsStatus` int(11) NOT NULL DEFAULT '1' COMMENT '状态（0停止售票，1正常售票）',
  `ticketsLimit` int(11) NOT NULL DEFAULT '0' COMMENT '门票每天限购数量',
  `ticketsTime` int(11) NOT NULL DEFAULT '1' COMMENT '可售多少天内的门票',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- 转存表中的数据 `setings`
--

INSERT INTO `setings` (`id`, `title`, `logo`, `telephone`, `adress`, `keywords`, `description`, `webStatus`, `ticketsStatus`, `ticketsLimit`, `ticketsTime`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(23, '智慧景区', '/uploads/1/CHP_202110159502053.png', '028-89890606', '四川省阿坝州黄金镇玖龙山景区', NULL, NULL, 1, 1, 10, 30, '2021-09-22 00:00:00', NULL, '2021-10-15 09:50:20', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `t_tickets`
--

CREATE TABLE `t_tickets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL COMMENT '门票名称',
  `type_id` varchar(255) NOT NULL COMMENT '门票类型',
  `price` int(11) NOT NULL DEFAULT '0' COMMENT '门票价格',
  `isTeam` int(11) NOT NULL DEFAULT '0' COMMENT '是否为团队票（0否，1是）',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `t_tickets`
--

INSERT INTO `t_tickets` (`id`, `name`, `type_id`, `price`, `isTeam`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, '单门票', '2', 566, 0, '2021-09-18 18:16:44', 'admin', NULL, NULL),
(2, '套票', '2', 120, 0, '2021-09-27 14:45:30', 'admin', NULL, NULL),
(3, '单观光车票', '1', 30, 0, '2021-09-27 14:46:03', 'admin', NULL, NULL),
(4, '观光车套票', '1', 233, 0, '2021-09-27 14:46:27', 'admin', NULL, NULL),
(5, '团队票', '2', 80, 1, '2021-09-27 14:46:51', 'admin', NULL, NULL),
(6, '团队套票', '2', 100, 1, '2021-09-27 14:47:13', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `t_tickets_mids`
--

CREATE TABLE `t_tickets_mids` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL COMMENT '订单id',
  `p_id` int(11) NOT NULL COMMENT '人员id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `t_tickets_mids`
--

INSERT INTO `t_tickets_mids` (`id`, `order_id`, `p_id`) VALUES
(37, 36, 51),
(38, 37, 52),
(41, 40, 55),
(42, 41, 56),
(44, 43, 58),
(45, 44, 59),
(46, 45, 60),
(47, 46, 61),
(48, 47, 62);

-- --------------------------------------------------------

--
-- 表的结构 `t_tickets_orders`
--

CREATE TABLE `t_tickets_orders` (
  `id` int(11) NOT NULL,
  `tid` int(11) NOT NULL COMMENT '门票id',
  `uid` varchar(255) NOT NULL COMMENT '操作员',
  `time` date NOT NULL COMMENT '入园时间',
  `num` int(11) NOT NULL DEFAULT '1' COMMENT '购票数量',
  `from_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '来源分类（1散客，2携程，3飞猪，4美团，5去哪儿，6同程，7旅行社，8其它）',
  `order_id` varchar(255) NOT NULL COMMENT '订单ID',
  `price` int(11) NOT NULL COMMENT '订单总金额',
  `people` varchar(255) NOT NULL COMMENT '预定人',
  `mobile` char(11) NOT NULL COMMENT '预订人手机号码',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '订单状态（0待付款，1未出行，2已完成，3取消订单）',
  `pay_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '支付方式（1微信在线，2现场购票）',
  `pay_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '支付状态，0未支付，1已支付',
  `pay_id` varchar(255) DEFAULT NULL COMMENT '微信支付订单号，退款使用',
  `pay_money` int(11) DEFAULT NULL COMMENT '微信支付总金额，用于退款',
  `pay_time` datetime DEFAULT NULL COMMENT '支付时间',
  `refund_status` tinyint(1) DEFAULT '0' COMMENT '退款状态，0已退款，1未退款',
  `check_time` datetime DEFAULT NULL COMMENT '验票时间',
  `check_status` tinyint(1) DEFAULT '0' COMMENT '验票状态（0未验票，1已验票）',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `t_tickets_orders`
--

INSERT INTO `t_tickets_orders` (`id`, `tid`, `uid`, `time`, `num`, `from_type`, `order_id`, `price`, `people`, `mobile`, `status`, `pay_type`, `pay_status`, `pay_id`, `pay_money`, `pay_time`, `refund_status`, `check_time`, `check_status`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(36, 2, '1', '2021-09-29', 1, 1, '2021092810451486', 120, '李四', '13622220222', 1, 2, 1, NULL, 120, '2021-09-28 10:47:11', 0, NULL, 0, '2021-09-28 10:45:13', 'admin', NULL, NULL),
(37, 2, '1', '2021-09-28', 1, 1, '2021092810564060', 120, '王五', '13622220222', 1, 2, 1, NULL, 120, '2021-09-28 10:57:02', 0, NULL, 0, '2021-09-28 10:56:40', 'admin', NULL, NULL),
(40, 4, '1', '2021-09-28', 1, 1, '2021092811081998', 233, '张三', '13622220222', 2, 2, 1, NULL, 233, '2021-09-28 11:09:09', 0, '2021-09-28 14:34:00', 1, '2021-09-28 11:08:19', 'admin', NULL, NULL),
(41, 2, '1', '2021-09-28', 1, 1, '2021092814370967', 120, '张三', '13622220222', 1, 2, 1, NULL, 120, '2021-09-28 14:37:47', 0, NULL, 0, '2021-09-28 14:37:08', 'admin', NULL, NULL),
(43, 1, '1', '2021-10-13', 1, 1, '2021101310033447', 566, '张三', '13622220222', 2, 2, 1, NULL, 566, '2021-10-13 10:03:37', 0, '2021-10-13 10:04:29', 1, '2021-10-13 10:03:34', 'admin', NULL, NULL),
(44, 2, '1', '2021-10-13', 1, 1, '2021101310035994', 120, '李四', '13622220222', 2, 2, 1, NULL, 120, '2021-10-13 10:04:03', 0, '2021-10-13 10:04:20', 1, '2021-10-13 10:03:58', 'admin', NULL, NULL),
(45, 3, '1', '2021-10-14', 1, 1, '2021101410180254', 30, '张三', '13622220222', 2, 2, 1, NULL, 30, '2021-10-14 10:18:06', 0, '2021-10-14 10:18:30', 1, '2021-10-14 10:18:02', 'admin', NULL, NULL),
(46, 2, '1', '2021-10-14', 1, 1, '2021101415594453', 120, '王五', '13622220222', 1, 2, 1, NULL, 120, '2021-10-14 15:59:50', 0, NULL, 0, '2021-10-14 15:59:44', 'admin', NULL, NULL),
(47, 2, '1', '2021-10-15', 1, 1, '2021101515254328', 120, '张三', '13622220222', 1, 2, 1, NULL, 120, '2021-10-15 15:25:45', 0, NULL, 0, '2021-10-15 15:25:42', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `t_tickets_peoples`
--

CREATE TABLE `t_tickets_peoples` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL COMMENT '姓名',
  `idcard` varchar(255) NOT NULL COMMENT '身份证号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- 转存表中的数据 `t_tickets_peoples`
--

INSERT INTO `t_tickets_peoples` (`id`, `name`, `idcard`) VALUES
(51, '张三', '51561662'),
(52, '王五', '556633333333333'),
(55, '张三', '25656565'),
(56, '展示', '162'),
(58, '只是', '563'),
(59, '的', '54996'),
(60, '服务氛围', '156126666'),
(61, '订单', '324343'),
(62, '菲菲', '3434343');

-- --------------------------------------------------------

--
-- 表的结构 `t_tickets_stocks`
--

CREATE TABLE `t_tickets_stocks` (
  `id` int(11) NOT NULL,
  `time` date NOT NULL COMMENT '时间',
  `stock` int(11) NOT NULL COMMENT '库存'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- 转存表中的数据 `t_tickets_stocks`
--

INSERT INTO `t_tickets_stocks` (`id`, `time`, `stock`) VALUES
(14, '2021-09-29', 8),
(15, '2021-09-28', 7),
(16, '2021-10-08', 9),
(17, '2021-10-13', 8),
(18, '2021-10-14', 8),
(19, '2021-10-15', 9);

-- --------------------------------------------------------

--
-- 表的结构 `t_tickets_types`
--

CREATE TABLE `t_tickets_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL COMMENT '类型名称',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '状态（1显示，0不显示）',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `t_tickets_types`
--

INSERT INTO `t_tickets_types` (`id`, `name`, `status`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, '观光车+门票', 1, '2021-09-18 17:53:28', 'admin', NULL, NULL),
(2, '索道+大门票', 1, '2021-09-18 18:15:43', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `deptId` int(11) NOT NULL COMMENT '部门deptId',
  `userName` varchar(255) NOT NULL COMMENT '用户名',
  `nickName` varchar(255) DEFAULT NULL COMMENT '昵称',
  `sex` varchar(255) DEFAULT '1' COMMENT '性别（0代表女 1代表男）',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(255) DEFAULT NULL COMMENT '手机号',
  `isDelete` varchar(255) DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `status` varchar(255) DEFAULT '1' COMMENT '帐号状态（1正常 0停用）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `deptId`, `userName`, `nickName`, `sex`, `password`, `avatar`, `email`, `mobile`, `isDelete`, `status`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 1, 'admin', 'admin', '1', '$2a$10$ahj1qoSrnWh98zenzPlwGupDcUVS44nQrR89Ruhs5iN6muWiqIvqu', '/uploads/1/CHP_1617249555022_reg.png', NULL, '13809099090', '0', '1', '', '2021-01-08 12:04:02', 'admin', '2021-03-23 10:41:02', 'admin'),
(4, 5, 'ceshi', '测试人员', '0', '$2a$10$ArM1cIb7OP.eY5zXOXrSn.W4rnTYRsauj3I1eYe1uI/1up/O/tJBy', NULL, NULL, NULL, '0', '1', NULL, '2021-10-15 15:23:50', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL COMMENT '用户id',
  `roleId` int(11) NOT NULL COMMENT '角色id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `user_roles`
--

INSERT INTO `user_roles` (`id`, `userId`, `roleId`) VALUES
(24, 1, 1),
(36, 4, 2),
(37, 4, 3);

--
-- 转储表的索引
--

--
-- 表的索引 `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `typeId` (`typeId`);

--
-- 表的索引 `article_types`
--
ALTER TABLE `article_types`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`deptId`) USING BTREE;

--
-- 表的索引 `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `devices_roles`
--
ALTER TABLE `devices_roles`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `device_types`
--
ALTER TABLE `device_types`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `dict_datas`
--
ALTER TABLE `dict_datas`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `dict_types`
--
ALTER TABLE `dict_types`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `friendly_links`
--
ALTER TABLE `friendly_links`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `notices`
--
ALTER TABLE `notices`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `parkings`
--
ALTER TABLE `parkings`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `role_menus`
--
ALTER TABLE `role_menus`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `setings`
--
ALTER TABLE `setings`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `t_tickets`
--
ALTER TABLE `t_tickets`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `t_tickets_mids`
--
ALTER TABLE `t_tickets_mids`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `p_id` (`p_id`);

--
-- 表的索引 `t_tickets_orders`
--
ALTER TABLE `t_tickets_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tid` (`tid`);

--
-- 表的索引 `t_tickets_peoples`
--
ALTER TABLE `t_tickets_peoples`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `t_tickets_stocks`
--
ALTER TABLE `t_tickets_stocks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `time` (`time`);

--
-- 表的索引 `t_tickets_types`
--
ALTER TABLE `t_tickets_types`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `userName` (`userName`) USING BTREE;

--
-- 表的索引 `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- 使用表AUTO_INCREMENT `article_types`
--
ALTER TABLE `article_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- 使用表AUTO_INCREMENT `departments`
--
ALTER TABLE `departments`
  MODIFY `deptId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `devices`
--
ALTER TABLE `devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- 使用表AUTO_INCREMENT `devices_roles`
--
ALTER TABLE `devices_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- 使用表AUTO_INCREMENT `device_types`
--
ALTER TABLE `device_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用表AUTO_INCREMENT `dict_datas`
--
ALTER TABLE `dict_datas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- 使用表AUTO_INCREMENT `dict_types`
--
ALTER TABLE `dict_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `friendly_links`
--
ALTER TABLE `friendly_links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;

--
-- 使用表AUTO_INCREMENT `notices`
--
ALTER TABLE `notices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `parkings`
--
ALTER TABLE `parkings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- 使用表AUTO_INCREMENT `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `role_menus`
--
ALTER TABLE `role_menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2642;

--
-- 使用表AUTO_INCREMENT `setings`
--
ALTER TABLE `setings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- 使用表AUTO_INCREMENT `t_tickets`
--
ALTER TABLE `t_tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `t_tickets_mids`
--
ALTER TABLE `t_tickets_mids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 使用表AUTO_INCREMENT `t_tickets_orders`
--
ALTER TABLE `t_tickets_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- 使用表AUTO_INCREMENT `t_tickets_peoples`
--
ALTER TABLE `t_tickets_peoples`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- 使用表AUTO_INCREMENT `t_tickets_stocks`
--
ALTER TABLE `t_tickets_stocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用表AUTO_INCREMENT `t_tickets_types`
--
ALTER TABLE `t_tickets_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
