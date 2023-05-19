/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "/s": "/秒",
    "/s)": "/秒)",
    "<strong>We're sorry but Profectus doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>": "<strong>很抱歉，如果没有启用 JavaScript，本游戏 将无法正常工作。 请启用它以继续。</strong>",
    "Select the machine by clicking it to make the mine active. You can also drag them around to organize your various machines and other objects. While selected machines will have various actions you can take, such as viewing the help for that machine. There's also an action to power the machine, allowing it to be active even while not selected, at the cost of energy per second (cost increases based on the total number of machines being powered).": "通过单击来选择机器以使矿山处于活动状态。 您还可以四处拖动它们来组织您的各种机器和其他对象。 选定的机器将具有您可以执行的各种操作，例如查看该机器的帮助。 还有一个为机器供电的动作，允许它在未被选择时处于活动状态，以每秒能源为代价（成本增加基于被供电的机器总数）。",
    "You've also gained a trash can for portals (🗑️). Dragging a portal here will permanently destroy it. Any treasures that require the portal to be active will no longer work. This can be used to keep your workspace clean from old portals you no longer need or want.": "您还获得了一个用于传送门的垃圾桶 (🗑️)。 将传送门拖到此处将永久摧毁它。 任何需要激活传送门的宝藏都将不再有效。 这可用于使您的工作区远离您不再需要或不想要的旧传送门。",
    "You've created the Portal Generator (⛩️)! This machine lets you create portals to other planes, which will have treasures that help you in various ways! To create a portal you need to specify a tier by dragging a resource to the generator - higher tier planes cost more energy to generate portals for, but offer more and better treasures! Keep in mind time in planes will be paused if the portal is inactive (not selected nor powered).": "您已经创建了 传送门生成器 (⛩️)！ 这台机器可以让你创建通往其他位面的传送门，其中会有能以各种方式帮助你的宝藏！ 要创建传送门，您需要通过将资源拖到生成器来指定一个等级 - 更高等级的位面会花费更多的能源来生成传送门，但提供更多更好的宝藏！ 请记住，如果传送门处于非活动状态（未被选中或通电），位面中的时间将会暂停。",
    ": Initial Commit": "：初始提交",
    ". Auto-saving has been enabled. Check the console for more details, and consider sharing it with the developers on discord.": ". 已启用自动保存。 查看控制台以获取更多详细信息，并考虑在 discord 上与开发人员共享。",
    "Allow the game to run as fast as possible. Not battery friendly.": "让游戏尽可能快地运行。 电池不友好。",
    "Always show lines to resource nodes": "始终显示到资源节点的行",
    "App ready to work offline": "应用程序准备离线工作",
    "Appearance": "外观",
    "Attempted to assign \"\" to NaN": "试图将 \"\" 分配给 NaN",
    "Automatically save the game every second or when the game is closed.": "每秒或游戏关闭时自动保存游戏。",
    "Automator": "自动机",
    "Autosave": "自动保存",
    "Base": "根据",
    "Behaviour": "行为",
    "Booster": "助推器",
    "Click me!": "点我！",
    "Close": "关闭",
    "Congratulations!": "恭喜！",
    "Create Save": "创建保存",
    "Created some bugs to fix later": "创建了一些错误以在以后修复",
    "default body": "默认正文",
    "Did everything": "做了一切",
    "Dowsing": "占卜",
    "Drag a resource onto the forge to select that resource tier. You can then use an action on the forge to create that item, at the cost of energy based on the resource tier. You can only have 1 of each item.": "将资源拖到熔炉上以选择该资源层。 然后，您可以在锻造上使用一个动作来创建该项目，基于资源层的能源成本。 每件商品您只能拥有 1 件。",
    "energy": "活力",
    "Energy Gain": "能源增益",
    "Forging": "锻造",
    "General": "一般的",
    "Getting Started": "入门",
    "Had some fun": "玩得很开心",
    "Ignore": "忽略",
    "Import Save": "导入保存",
    "Influences": "影响",
    "Initially the booster will double the rate of time, but that can be increased using an action.": "最初，助推器将使时间增加一倍，但可以使用一个动作来增加。",
    "Investments": "投资",
    "modifiers": "修饰符",
    "Modifiers": "修饰符",
    "NaN value detected!": "检测到 NaN 值！",
    "New Game": "新游戏",
    "Offline Production": "离线生产",
    "Once you have portals, the lines on the board might getting particularly necessary. Here's a setting (also accessible in the settings modal) to disable resource gain lines unless the node is active.": "拥有门户后，板上的线条可能变得特别必要。 这是一个设置（也可以在设置模式中访问）禁用资源增益线，除非节点处于活动状态。",
    "Open Saves Manager": "打开保存管理器",
    "Pause game": "暂停游戏",
    "Planar Pioneers": "位面先锋",
    "Portal Generator": "传送门生成器",
    "Quarry": "采石场",
    "Removed everything": "删除了所有内容",
    "Resource Levels": "资源等级",
    "Saves Manager": "存档管理",
    "Simulate production that occurs while the game is closed.": "模拟游戏关闭时发生的生产。",
    "Specify passives to empower by dragging them to the empowerer. You can only select a single passive to start, but that can be increased using an action.": "通过将它们拖到授权器来指定要授权的被动。 您只能选择一个被动开始，但可以使用一个动作来增加。",
    "Specify planes to auto-purchase repeatables and dimensions from by dragging their portals to the booster. You can only select a single plane to start, but that can be increased using an action.": "通过将它们的门户拖动到助推器来指定要从中自动购买可重复项和维度的平面。 您只能选择一个平面开始，但可以使用一个动作来增加。",
    "Specify planes to auto-purchase upgrades from by dragging their portals to the booster. You can only select a single plane to start, but that can be increased using an action.": "通过将其门户拖动到助推器来指定要自动购买升级的飞机。 您只能选择一个平面开始，但可以使用一个动作来增加。",
    "Specify planes to boost by dragging their portals to the booster. You can only select a single plane to start, but that can be increased using an action.": "通过将它们的门户拖到助推器来指定要增强的飞机。 您只能选择一个平面开始，但可以使用一个动作来增加。",
    "Specify planes to gain converted resources from by dragging their portals to the booster. You can only select a single plane to start, but that can be increased using an action.": "通过将它们的门户拖到助推器来指定要从中获取转换资源的平面。 您只能选择一个平面开始，但可以使用一个动作来增加。",
    "Specify resources to boost by dragging them to the dowsing rod. You can only select a single resource to start, but that can be increased using an action.": "通过将资源拖到探测杆来指定要提升的资源。 您只能选择一个资源来启动，但可以使用操作来增加。",
    "Specify resources to gather by dragging them to the quarry. You can only select a single resource to start, but that can be increased using an action.": "通过将资源拖到采石场来指定要收集的资源。 您只能选择一个资源来启动，但可以使用操作来增加。",
    "Stop everything from moving.": "停止一切移动。",
    "The Modding Tree": "模组树",
    "The Paper Pilot Community": "论文试点社区",
    "This is the first release :D": "这是第一次发布:D",
    "Tool Empowerer": "工具赋能者",
    "Total": "总计",
    "Treasures": "宝藏",
    "Unthrottled": "不限制",
    "Upgrader": "升级器",
    "Welcome to Planar Pioneers! Your job is to gather resources and eventually explore and conquer increasingly difficult \"planes\", which are like alien worlds. To start you'll use the mine (⛏️) machine to gather resources.": "欢迎来到 位面先锋！ 你的工作是收集资源，最终探索和征服难度越来越大的“位面”，就像外星世界。 首先，您将使用矿机 (⛏️) 来收集资源。",
    "You'll gain energy every second based on how much of each resource you have. You can check the exact calculation and various other information by clicking the \"modifiers\" button near the top of the screen.": "根据您拥有的每种资源的多少，您每秒都会获得能源。 您可以通过单击屏幕顶部附近的“修改器”按钮来检查准确的计算和各种其他信息。",
    "You've beaten Planar Pioneers v0.0: Initial Commit": "您已击败 Planar Pioneers v0.0：初始提交",
    "You've created the Automator (🦾)! This machine lets you automatically purchase repeatables and dimensions within planes!": "您已经创建了 Automator (🦾)！ 该机器可让您自动购买平面内的可重复项和尺寸！",
    "You've created the Booster (⌛)! This machine lets you increase the rate of time of planes! This affects its resource gain, gen treasures, and any other effects of time.": "您已经创建了助推器 (⌛)！ 本机让你提高打飞机的速度！ 这会影响它的资源获取、gen 宝藏和任何其他时间效果。",
    "You've created the dowsing rod (🥢)! This machine lets you bias the odds of specified resources from mining. It will double the odds of each specified resource, so keep in mind rare resources will still be fairly rare.": "您已经创建了探测棒 (🥢)！ 这台机器可以让你从采矿中排除指定资源的几率。 它将使每个指定资源的几率加倍，因此请记住稀有资源仍然相当稀有。",
    "You've created the Investments machine (💱)! This machine lets you automatically gain the resources from conversions without spending the plane's primary resource!": "您已经创建了投资机器 (💱)！ 本机让你自动获得转化资源，无需消耗位面原生资源！",
    "You've created the Quarry (⛰️)! This machine lets you gather specified resources. Unlike the mine, this machine will always output the same resources. However, rarer resources will take longer to gather.": "您已经创建了采石场 (⛰️)！ 这台机器可以让你收集指定的资源。 与矿山不同，这台机器将始终输出相同的资源。 然而，更稀有的资源将需要更长的时间来收集。",
    "You've created the Tool Empowerer (🔌)! This machine lets you increase the effect of specified passives. Experimenting with which passives to empower can really help you progress!": "您已经创建了 Tool Empowerer (🔌)！ 这台机器可以让你增加指定被动的效果。 尝试使用哪些被动来赋能真的可以帮助你进步！",
    "You've created the Upgrader (🤖)! This machine lets you automatically purchase upgrades within planes (includes prestiges but not repeatables or dimensions)!": "您已经创建了升级器 (🤖)！ 该机器可让您自动购买位面内的升级（包括声望，但不包括重复项或维度）！",
    "You've repaired the forge (🛠️)! This is the next main line of progression. Here you'll be able to craft a total of 16 machines and passive bonuses to create - one for each resource!": "你修好了锻炉 (🛠️)！ 这是下一条主线。 在这里，您将能够制作总共 16 台机器和被动奖励来创建 - 每种资源一个！",
    "Broken Forge": "坏掉的熔炉",
    "Cannot afford": "买不起",
    "Coal": "煤炭",
    "Copper": "铜",
    "Diamond": "钻石",
    "Dirt": "污垢",
    "Gravel": "碎石",
    "Iron": "铁",
    "Mining": "采矿中",
    "Repair - 100 energy": "修复 - 100 能源",
    "Sand": "沙",
    "Stone": "石头",
    "Unobtainium": "镨",
    "Align modifier units": "对齐修改器单元",
    "Align numbers to the beginning of the unit in modifier view.": "在修改器视图中将数字与单元的开头对齐。",
    "All": "全部",
    "Aqua": "浅绿色",
    "Berylium": "铍",
    "Classic": "经典",
    "Configurable": "可配置",
    "Default Save": "默认保存",
    "Delete": "删除",
    "Duplicate": "复制",
    "Edit Name": "修改名称",
    "Emerald": "翡翠",
    "Forums": "论坛",
    "Gold": "黄金",
    "How the game looks.": "游戏的外观。",
    "Incomplete": "不完整",
    "Info": "信息",
    "None": "没有任何",
    "Nordic": "北欧的",
    "Otherwise, will only be visible when either end of the line is selected.": "否则，仅当选择线的任一端时才可见。",
    "Paper": "纸",
    "Platinum": "铂",
    "Saves": "保存",
    "Select which achievements to display based on criterias.": "根据标准选择要显示的成就。",
    "Show achievements": "显示成就",
    "Show TPS": "显示 TPS",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS 计。",
    "Silver": "银",
    "Theme": "主题",
    "Ultimatum": "Ultimatum",
    "Wood": "木头",
    "World": "世界",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "question_mark": "question_mark",
    "bolt": "bolt",
    "build": "build",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Last played ": "最近游戏 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^TPS: ([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^(.+) per Resource Level$/, '$1 每种资源等级'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^Set to ([\d\.,]+)$/, '设为 $1'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);