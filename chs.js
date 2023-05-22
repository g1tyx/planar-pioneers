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
    "You've created the Portal Generator (⛩️)! This machine lets you create portals to other planes, which will have treasures that help you in various ways! To create a portal you need to specify a tier by dragging a resource to the generator - higher tier planes cost more energy to generate portals for, but offer more and better treasures! Keep in mind time in planes will be paused if the portal is inactive (not selected nor powered).": "您已经创建了 传送门生成器 (⛩️)！ 这台机器可以让你创建通往其他镜面的传送门，其中会有能以各种方式帮助你的宝藏！ 要创建传送门，您需要通过将资源拖到生成器来指定一个等级 - 更高等级的镜面会花费更多的能源来生成传送门，但提供更多更好的宝藏！ 请记住，如果传送门处于非活动状态（未被选中或通电），镜面中的时间将会暂停。",
    ": Initial Commit": "：初始提交",
    ". Auto-saving has been enabled. Check the console for more details, and consider sharing it with the developers on discord.": ". 已启用自动保存。 查看控制台以获取更多详细信息，并考虑在 discord 上与开发人员共享。",
    "Allow the game to run as fast as possible. Not battery friendly.": "让游戏尽可能快地运行。 对电池不友好。",
    "Always show lines to resource nodes": "始终显示到资源节点的行",
    "App ready to work offline": "应用程序准备离线工作",
    "Appearance": "外观",
    "Attempted to assign \"\" to NaN": "试图将 \"\" 分配给 NaN",
    "Automatically save the game every second or when the game is closed.": "每秒或游戏关闭时自动保存游戏。",
    "Automator": "自动机",
    "Autosave": "自动保存",
    "Base": "基础",
    "Behaviour": "行为",
    "Booster": "助推器",
    "Click me!": "点我！",
    "Close": "关闭",
    "Congratulations!": "恭喜！",
    "Create Save": "创建保存",
    "Created some bugs to fix later": "创建了一些错误以在以后修复",
    "default body": "默认正文",
    "Did everything": "做了一切",
    "Dowsing": "探测",
    "Drag a resource onto the forge to select that resource tier. You can then use an action on the forge to create that item, at the cost of energy based on the resource tier. You can only have 1 of each item.": "将资源拖到熔炉上以选择该资源层。 然后，您可以在锻造上使用一个动作来创建该项目，基于资源层的能源成本。 每件物品您只能拥有 1 件。",
    "energy": "能源",
    "Energy Gain": "能源增益",
    "Forging": "锻造",
    "General": "常规",
    "Getting Started": "入门",
    "Had some fun": "玩得很开心",
    "Ignore": "忽略",
    "Import Save": "导入保存",
    "Influences": "影响",
    "Initially the booster will double the rate of time, but that can be increased using an action.": "最初，助推器将使时间增加一倍，但可以使用一个动作来增加。",
    "Investments": "投入",
    "modifiers": "概览",
    "Modifiers": "概览",
    "NaN value detected!": "检测到 NaN 值！",
    "New Game": "新游戏",
    "Offline Production": "离线生产",
    "Once you have portals, the lines on the board might getting particularly necessary. Here's a setting (also accessible in the settings modal) to disable resource gain lines unless the node is active.": "拥有传送门后，板上的线条可能变得特别必要。 这是一个设置（也可以在设置模式中访问）禁用资源增益线，除非节点处于活动状态。",
    "Open Saves Manager": "打开保存管理器",
    "Pause game": "暂停游戏",
    "Planar Pioneers": "镜面开拓者",
    "Portal Generator": "传送门生成器",
    "Quarry": "采石场",
    "Removed everything": "删除了所有内容",
    "Resource Levels": "资源等级",
    "Saves Manager": "存档管理",
    "Simulate production that occurs while the game is closed.": "模拟游戏关闭时发生的生产。",
    "Specify passives to empower by dragging them to the empowerer. You can only select a single passive to start, but that can be increased using an action.": "通过将它们拖到授权器来指定要授权的被动。 您只能选择一个被动开始，但可以使用一个动作来增加。",
    "Specify planes to auto-purchase repeatables and dimensions from by dragging their portals to the booster. You can only select a single plane to start, but that can be increased using an action.": "通过将它们的传送门拖动到助推器来指定要从中自动购买可重复项和维度的平面。 您只能选择一个平面开始，但可以使用一个动作来增加。",
    "Specify planes to auto-purchase upgrades from by dragging their portals to the booster. You can only select a single plane to start, but that can be increased using an action.": "通过将其传送门拖动到助推器来指定要自动购买升级的镜面。 您只能选择一个平面开始，但可以使用一个动作来增加。",
    "Specify planes to boost by dragging their portals to the booster. You can only select a single plane to start, but that can be increased using an action.": "通过将它们的传送门拖到助推器来指定要增强的镜面。 您只能选择一个平面开始，但可以使用一个动作来增加。",
    "Specify planes to gain converted resources from by dragging their portals to the booster. You can only select a single plane to start, but that can be increased using an action.": "通过将它们的传送门拖到助推器来指定要从中获取转换资源的平面。 您只能选择一个平面开始，但可以使用一个动作来增加。",
    "Specify resources to boost by dragging them to the dowsing rod. You can only select a single resource to start, but that can be increased using an action.": "通过将资源拖到探测杆来指定要提升的资源。 您只能选择一个资源来启动，但可以使用操作来增加。",
    "Specify resources to gather by dragging them to the quarry. You can only select a single resource to start, but that can be increased using an action.": "通过将资源拖到采石场来指定要收集的资源。 您只能选择一个资源来启动，但可以使用操作来增加。",
    "Stop everything from moving.": "停止一切移动。",
    "The Modding Tree": "模组树",
    "The Paper Pilot Community": "论文试点社区",
    "This is the first release :D": "这是第一次发布:D",
    "Tool Empowerer": "工具赋能器",
    "Total": "总计",
    "Treasures": "宝藏",
    "Unthrottled": "不限制",
    "Upgrader": "升级器",
    "Welcome to Planar Pioneers! Your job is to gather resources and eventually explore and conquer increasingly difficult \"planes\", which are like alien worlds. To start you'll use the mine (⛏️) machine to gather resources.": "欢迎来到 镜面开拓者！ 你的工作是收集资源，最终探索和征服难度越来越大的“镜面”，就像外星世界。 首先，您将使用矿机 (⛏️) 来收集资源。",
    "You'll gain energy every second based on how much of each resource you have. You can check the exact calculation and various other information by clicking the \"modifiers\" button near the top of the screen.": "根据您拥有的每种资源的多少，您每秒都会获得能源。 您可以通过单击屏幕顶部附近的“修改器”按钮来检查准确的计算和各种其他信息。",
    "You've beaten Planar Pioneers v0.0: Initial Commit": "您已击败 Planar Pioneers v0.0：初始提交",
    "You've created the Automator (🦾)! This machine lets you automatically purchase repeatables and dimensions within planes!": "您已经创建了 自动器 (🦾)！ 该机器可让您自动购买平面内的可重复项和尺寸！",
    "You've created the Booster (⌛)! This machine lets you increase the rate of time of planes! This affects its resource gain, gen treasures, and any other effects of time.": "您已经创建了助推器 (⌛)！ 本机让你提高打镜面的速度！ 这会影响它的资源获取、gen 宝藏和任何其他时间效果。",
    "You've created the dowsing rod (🥢)! This machine lets you bias the odds of specified resources from mining. It will double the odds of each specified resource, so keep in mind rare resources will still be fairly rare.": "您已经创建了探测棒 (🥢)！ 这台机器可以让你从采矿中排除指定资源的几率。 它将使每个指定资源的几率加倍，因此请记住稀有资源仍然相当稀有。",
    "You've created the Investments machine (💱)! This machine lets you automatically gain the resources from conversions without spending the plane's primary resource!": "您已经创建了投资机器 (💱)！ 本机让你自动获得转化资源，无需消耗镜面原生资源！",
    "You've created the Quarry (⛰️)! This machine lets you gather specified resources. Unlike the mine, this machine will always output the same resources. However, rarer resources will take longer to gather.": "您已经创建了采石场 (⛰️)！ 这台机器可以让你收集指定的资源。 与矿山不同，这台机器将始终输出相同的资源。 然而，更稀有的资源将需要更长的时间来收集。",
    "You've created the Tool Empowerer (🔌)! This machine lets you increase the effect of specified passives. Experimenting with which passives to empower can really help you progress!": "您已经创建了 根据赋能器 (🔌)！ 这台机器可以让你增加指定被动的效果。 尝试使用哪些被动来赋能真的可以帮助你进步！",
    "You've created the Upgrader (🤖)! This machine lets you automatically purchase upgrades within planes (includes prestiges but not repeatables or dimensions)!": "您已经创建了升级器 (🤖)！ 该机器可让您自动购买镜面内的升级（包括声望，但不包括重复项或维度）！",
    "You've repaired the forge (🛠️)! This is the next main line of progression. Here you'll be able to craft a total of 16 machines and passive bonuses to create - one for each resource!": "你修好了锻炉 (🛠️)！ 这是下一条主线。 在这里，您将能够制作总共 16 台机器和被动奖励来创建 - 每种资源一个！",
    "Broken Forge": "坏掉的熔炉",
    "Cannot afford": "买不起",
    "Coal": "煤炭",
    "Copper": "铜",
    "Diamond": "钻石",
    "Dirt": "泥土",
    "Gravel": "沙砾",
    "Iron": "铁",
    "Mining": "采矿中",
    "Repair - 100 energy": "修复 - 100 能源",
    "Sand": "沙子",
    "Stone": "石头",
    "Unobtainium": "难得素",
    "Align modifier units": "对齐修改器单元",
    "Align numbers to the beginning of the unit in modifier view.": "在修改器视图中将数字与单元的开头对齐。",
    "All": "全部",
    "Aqua": "海蓝",
    "Berylium": "铍",
    "Classic": "经典",
    "Configurable": "可配置",
    "Default Save": "默认保存",
    "Delete": "删除",
    "Duplicate": "复制",
    "Edit Name": "修改名称",
    "Emerald": "绿宝石",
    "Forums": "论坛",
    "Gold": "金锭",
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
    "Ultimatum": "死亡通牒",
    "Wood": "原木",
    "World": "世界",
    "Tap again to confirm": "再次点击以确认",
    "Forge - Drag a resource to me!": "锻造 - 把资源拖到这里！",
    "Forging Quarry": "锻造采石场",
    "Forging Portal Generator": "锻造传送门生成器",
    "Forge Portal Generator - 1.00e10 energy": "锻造传送门生成器 - 1.00e10 能源",
    "Disconnect": "断开连接",
    "Turn On - Always runs for 10 energy/s": "打开 - 始终以 10 能源/秒的速度运行",
    "Powered Machines (100^n/10 energy/s)": "供能机器（100^n/10 能源/秒）",
    "National Grid": "国家电网",
    "machine": "机器",
    "powered": "供能",
    "Already crafted": "已制作",
    "Book": "书",
    "Double ultimatum odds": "双倍死亡通牒掉率",
    "Doubles mine ore drops": "双倍矿山矿石掉落",
    "Doubles mining speed": "采矿速度翻倍",
    "Dowsing - Drag a resource to me!": "Dowsing - 拖资源给我！",
    "Dowsing (1/1)": "探测 (1/1)",
    "Dowsing Rod": "探矿棒",
    "Energizer": "增能器",
    "Forge AI - 1.00e19 energy": "Forge AI - 1.00e19 能源",
    "Forge Automator - 1.00e37 energy": "Forge Automator - 1.00e37 能源",
    "Forge Booster - 1.00e15 energy": "锻造助推器 - 1.00e15 能源",
    "Forge Dowsing Rod - 10,000 energy": "Forge Dowsing Rod - 10,000 能源",
    "Forge Investments - 1.00e54 energy": "Forge Investments - 1.00e54 能源",
    "Forge ML - 1.00e30 energy": "锻造冶金 - 1.00e30 能源",
    "Forge National Grid - 1.00e45 energy": "锻造国家电网 - 1.00e45能源",
    "Forge Ore Processor - 100,000 energy": "锻造矿石处理器 - 100,000 能源",
    "Forge Pickaxe - 1,000 energy": "锻造镐 - 1,000 能源",
    "Forge Quarry - 1,000,000 energy": "锻造采石场 - 1,000,000 能源",
    "Forge Robotics - 1.00e12 energy": "锻造机器人 - 1.00e12 能源",
    "Forge Upgrader - 1.00e24 energy": "锻造升级器 - 1.00e24 能源",
    "Forging AI": "锻造人工智能",
    "Forging Automator": "锻造自动化",
    "Forging Booster": "锻造助推器",
    "Forging Dowsing Rod": "锻造探测棒",
    "Forging Energizer": "锻造增能器",
    "Forging Investments": "锻造投入",
    "Forging ML": "锻造冶金学习",
    "Forging National Grid": "锻造国家电网",
    "Forging Ore Processor": "锻造矿石处理器",
    "Forging Pickaxe": "锻造镐",
    "Forging Robotics": "锻造机器人",
    "Forging Upgrader": "锻造升级器",
    "Increase Connections - 1,000,000 energy": "增加连接 - 1,000,000 能源",
    "Max connections": "最大连接数",
    "Mine": "矿山",
    "ML": "冶金",
    "machines": "机器",
    "Ore Processor": "矿石处理器",
    "Ore Rates": "矿石掉率",
    "Pickaxe": "镐",
    "Robotics": "机器人学",
    "Turn Off": "关",
    "Turn On - Always runs for 990 energy/s": "打开 - 始终以 990 能源/秒的速度运行",
    "Forge Book - 1.00e9 energy": "锻造书 - 1.00e9 能源",
    "Forge Energizer - 10,000,000 energy": "锻造增能器 - 10,000,000 能源",
    "Forge Tool Empowerer - 100,000,000 energy": "锻造工具赋能器 - 100,000,000 能源",
    "Forging Book": "锻造书",
    "Forging Tool Empowerer": "锻造工具赋能器",
    "Double diamond odds": "双倍钻石几率",
    "Double iron odds": "双倍铁几率",
    "Double stone odds": "双倍石头几率",
    "Double wood odds": "双木掉率",
    "Increase Connections - 1.00e12 energy": "增加连接 - 1.00e12 能源",
    "Increase Connections - 100,000,000 energy": "增加连接 - 100,000,000 能源",
    "Quarry - Drag a resource to me!": "采石场 - 将资源拖到这里！",
    "Doubles energy gain": "双倍能源增益",
    "Berylium Drop Rate": "铍掉率",
    "Coal Drop Rate": "煤炭掉率",
    "Copper Drop Rate": "铜掉率",
    "Diamond Drop Rate": "钻石掉率",
    "Dirt Drop Rate": "泥土掉率",
    "Emerald Drop Rate": "绿宝石掉率",
    "Gold Drop Rate": "金锭掉率",
    "Gravel Drop Rate": "沙砾掉率",
    "Iron Drop Rate": "铁掉率",
    "Mining Speed": "采矿速度",
    "Ore Dropped": "矿石掉",
    "Platinum Drop Rate": "铂掉率",
    "Sand Drop Rate": "沙子掉率",
    "Silver Drop Rate": "银掉率",
    "Stone Drop Rate": "石头掉率",
    "Ultimatum Drop Rate": "死亡通牒掉率",
    "Unobtainium Drop Rate": "难得素掉率",
    "Wood Drop Rate": "原木掉率",
    "Gained": "获得",
    ": Gain a influence. See the influences tab for details. You can only have 1 of each influence.": ": 影响力。 有关详细信息，请参阅影响选项卡。 您只能拥有每种影响力中的 1 个。",
    ": Gain an amount of a resource based on your current amount.": "：根据您当前的数量获得一定数量的资源。",
    ": Gain the relic unique to this tier of plane. These are powerful passive boosts that can be empowered. You can only have 1 of each relic. Relics can only appear with the +relic influence, and will always be the last treasure on a plane.": "：获得该层镜面独有的遗物。 这些是可以被赋能的强大的被动助推器。 每个遗物你只能拥有 1 个。 遗物只能在 +relic 影响下出现，并且永远是一个镜面的最后一件宝藏。",
    ": Increase the amount gained of a resource from all sources (except caches) while the portal is active (selected or powered).": "：增加在传送门处于活动状态（选择或供电）时从所有来源（缓存除外）获得的资源量。",
    ": Increase the energy gained per second while the portal is active (selected or powered).": "：增加传送门处于活动状态（选择或通电）时每秒获得的能源。",
    ": Passively gain an amount of a resource while the portal is active (selected or powered).": "：在传送门处于活动状态（选择或激活）时被动获得一定数量的资源。",
    "Caches": "缓存",
    "Coal-tier Portal": "煤炭镜面传送门",
    "Copper-tier Portal": "铜镜面传送门",
    "Diamond-tier Portal": "钻石镜面传送门",
    "Dirt-tier Base Cost": "泥土镜面需求",
    "Dirt-tier Portal": "泥土镜面传送门",
    "Emerald-tier Portal": "绿宝石镜面传送门",
    "Energy Mult": "能源倍数",
    "Gained": "获得",
    "Gen": "Gen",
    "Gold-tier Portal": "金锭镜面传送门",
    "Gravel-tier Portal": "沙砾镜面传送门",
    "Iron-tier Portal": "铁镜面传送门",
    "Material level is 20% stronger": "材料等级增强20%",
    "Once you discover influences, summaries will appear here describing their effects.": "发现影响后，此处将显示描述其影响的摘要。",
    "Platinum-tier Portal": "铂镜面传送门",
    "Portal Cost": "传送门成本",
    "Portal Spawner - Drag a resource to me!": "传送门生成器 - 将资源拖到这里！",
    "Relic": "遗物",
    "Resource Mult": "资源倍数",
    "Silver-tier Portal": "银传送门",
    "Some treasures will grant you influences that can help the portal generator create portals to planes with specified qualities. Each influence will multiply the energy cost of creating the portal.": "一些宝藏会赋予您影响力，帮助传送门生成器创建通往具有特定品质的镜面的传送门。 每种影响都会成倍增加创建传送门的能源成本。",
    "Spawn unobtainium-tier portal - 1.00e114 energy": "城市难得素镜面传送门 - 1.00e114 能源",
    "Spawning unobtainium-tier portal": "产生难得素镜面传送门",
    "Trash Can - Drag a portal to me!": "垃圾桶 - 拖一个传送门到这里！",
    "Types of potential treasures:": "潜在宝藏的类型：",
    "Ultimatum-tier Portal": "死亡通牒镜面传送门",
    "Unobtainium-tier Base Cost": "难得素镜面需求",
    "Unobtainium-tier Portal": "难得素镜面传送门",
    "Wood-tier Portal": "木头镜面传送门",
    "Stone-tier Portal": "石头镜面传送门",
    "Berylium-tier Portal": "铍镜面传送门",
    "Doubles each plane's resource gain": "将每个镜面的资源增益翻倍",
    "-tier": "-镜面",
    "-tier |": "-镜面 |",
    ": Causes treasures to have an increased chance to be resource mults.": "：使宝藏有更多的机会成为资源倍数。",
    "+1% plane's resource gain per minute active": "+1% 镜面每分钟资源增益",
    "+resource mults": "+资源倍数",
    "10x cost": "10 倍成本",
    "Aphadynpulse": "失音脉冲",
    "Boost Cluaanides's speed": "提高 Cluaanides 的速度",
    "Booster - Drag a portal to me!": "助推器 - 将传送门拖给我！",
    "Cluaanides": "Cluaanides",
    "Coal-tier Base Cost": "煤镜面基础成本",
    "Copy tier/influences from Cluaanides": "从 Cluaanides 复制镜面/影响",
    "Costs:": "成本：",
    "Delete Cluaanides!": "删除 Cluaanides!",
    "Discovered influences:": "发现的影响：",
    "Double berylium odds": "双倍铍掉率",
    "Double Ore Processor's effect": "双矿石处理器的效果",
    "Double Pickaxe's effect": "双镐效果",
    "Double Robotics's effect": "双机器人的效果",
    "Double unobtainium odds": "双倍难得素掉率",
    "Eamorpesis": "虫属",
    "Empowerer - Drag a tool to me!": "Empowerer - 将工具拖给我！",
    "Eshuonanforce": "Eshuonanforce",
    "Iadynurgy": "现代医学",
    "Imorpburst": "变形爆发",
    "Influence: Gain a portal influence (+resource mults)": "影响力：获得传送门影响力（+资源倍数）",
    "Now": "现在",
    "Ostrifluxforce": "Ostrifluxforce",
    "Phiphanforce": "飞凡力量",
    "Plane Complete": "镜面已完成",
    "Plane Complete!": "镜面已完成！",
    "remaining treasures": "剩余宝藏",
    "Spacryesis": "裂解",
    "Spawning coal-tier portal": "产生煤炭层传送门",
    "Spawning dirt-tier portal": "生成泥土传送门",
    "Speed:": "速度：",
    "Speyonides": "Speyonides",
    "Treasure earned!": "宝藏已到手！",
    "dirt": "泥土",
    "Material Level Effect": "材料等级效果",
    "Empowered Pickaxe": "赋能镐子",
    "Empowered Ore Processor": "赋能矿石处理器",
    "Increase resource mults odds": "提高资源倍增掉率",
    "Add influence (10x cost)": "增加影响力（10 倍成本）",
    "gravel": "沙砾",
    "Aenuoflippe": "Aenuoflippe",
    "Aenuoflippe Gain": "Aenuoflippe增益",
    "Aphanurgy": "Aphanurgy",
    "Aswogravpathy": "Aswogravpathy",
    "Aycrciea": "Aycrciea",
    "Boost Aycrciea's speed": "提升 Aycrciea 的速度",
    "Boost Duliv's speed": "提高 Duliv 的速度",
    "Boost Iuthurn's speed": "提高 Iuthurn 的速度",
    "Boost Struiieogawa's speed": "提高 Struiieogawa 的速度",
    "coal": "煤炭",
    "Copy tier/influences from Aycrciea": "从 Aycrciea 复制镜面/影响",
    "Copy tier/influences from Duliv": "从 Duliv 复制镜面/影响",
    "Copy tier/influences from Iuthurn": "从 Iuthurn 复制镜面/影响",
    "Copy tier/influences from Struiieogawa": "从 Struiieogawa 复制镜面/影响",
    "Delete Aycrciea!": "删除 Aycrciea！",
    "Delete Duliv!": "删除 Duliv！",
    "Delete Iuthurn!": "删除 Iuthurn！",
    "Delete Struiieogawa!": "删除 Struiieogawa！",
    "Duliv": "Duliv",
    "Efraelecity": "Efraelecity",
    "Eimanport": "Eimanport",
    "Ephanal": "Ephanal",
    "Eproterforce": "Eproterforce",
    "Iavoidport": "Iavoidport",
    "Ibrayvoidurgy": "Ibrayvoidurgy",
    "Idririftburst": "Idririftburst",
    "Igravmancy": "Igravmancy",
    "Influence: Gain a portal influence (+difficulty)": "影响力：获得传送门影响力（+难度）",
    "Isynergy": "Isynergy",
    "Iuthurn": "Iuthurn",
    "Never": "从不",
    "Odruna": "Odruna",
    "Odruna Gain": "Odruna 增益",
    "Otruriftwave": "Otruriftwave",
    "Oymorppathy": "Oymorppathy",
    "Portal to Aycrciea": "前往 Aycrciea 的传送门",
    "Portal to Duliv": "前往 Duliv 的传送门",
    "Portal to Oyblvuna": "前往 Oyblvuna 的传送门",
    "Portal to Iuthurn": "前往 Iuthurn 的传送门",
    "Portal to Struiieogawa": "前往 Struiieogawa 的传送门",
    "Portal to Cluaanides": "前往 Cluaanides 的传送门",
    "sand": "沙子",
    "Sand-tier Portal": "沙子镜面传送门",
    "Shuokaeyama": "Shuokaeyama",
    "Shuokaeyama Gain": "Shuokaeyama 增益",
    "Spawning gold-tier portal": "产生 金锭镜面传送门",
    "Spawning gravel-tier portal": "产生沙砾头镜面传送门",
    "Spawning sand-tier portal": "产生 沙子面传送门",
    "Spawning stone-tier portal": "产生 石镜面传送门",
    "stone": "石头",
    "Stravoidburst": "Stravoidburst",
    "Struiieogawa": "Struiieogawa",
    "treasures": "宝藏",
    "Uiparal": "Uiparal",
    "Uoprarth": "Uoprarth",
    "Uoprarth Gain": "Uoprath 增益",
    "Uypyresis": "Uypyresis",
    "Cruhydrfield": "Cruhydrfield",
    "Eiterism": "Eiterism",
    "Epsyesis": "Epsyesis",
    "Frumorpity": "Frumorpity",
    "Gold-tier Base Cost": "金锭镜面基础成本",
    "Influence: Gain a portal influence (+influences)": "影响力：获得传送门影响力（+影响力）",
    "Ore Gain": "矿石增益",
    "+influences": "+影响力",
    "Increase influences odds": "提高影响力倍率",
    "Influence: Gain a portal influence (-difficulty)": "影响力：获得传送门影响力（-难度）",
    "-difficulty": "-难度",
    "Decrease difficulty/rewards odds": "降低难度/奖励机率",
    ": Causes the difficulty and rewards to be in the upper half of what's possible at this tier.": "：导致难度和奖励处于该镜面可能的上半部分。",
    ": Causes treasures to have an increased chance to be influences.": "：使宝藏受到影响的几率增加。",
    "+difficulty": "+难度",
    "New content available, click here to update.": "有新内容可用，导出存档备份，然后单击此处同步更新。",
    "Berylium Gain": "Berylium 增益",
    "Plaeuclite Gain": "Plaeuclite 增益",
    "Bluyhines Gain": "Bluyhines 增益",
    "Silver Gain": "银 增益",
    "Stone Gain": "石头 增益",
    "Satov Gain": "Satov 增益",
    "Stanus Gain": "Stanus 增益",
    "Oigrars Gain": "Oigrars 增益",
    "Speyonides Gain": "Speyonides 增益",
    "Gold Gain": "金锭 增益",
    "Gravel Gain": "沙砾 增益",
    "Wood Gain": "木头 增益",
    "Iron Gain": "铁 增益",
    "Fruarus Gain": "Fruarus 增益",
    "Fraowohiri Gain": "Fraowohiri 增益",
    "Ultimatum Gain": "死亡通牒 增益",
    "Unobtainium Gain": "难得素 增益",
    "Sand Gain": "沙子 增益",
    "Platinum Gain": "铂 增益",
    "Regawa Gain": "Regawa 增益",
    "Oprolla Gain": "Oprolla 增益",
    "Currently:": "当前:",
    "Planar Treasures": "镜面宝藏",
    "Planar Intelligence": "镜面智能",
    "Select Portal Node": "选择传送门节点",
    "silver": "银",
    "iron": "铁",
    "Trade Agreements": "贸易协定",
    "wood": "木头",
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
    "close": "close",
    "done": "done",
    "hub": "hub",
    "levels": "levels",
    "arrow_upward": "arrow_upward",
    "AI": "AI",
    "refresh": "refresh",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "O": "O",
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
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'IX': 'IX',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    '': '',
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
    "Multiply previous Speyonides gain by x": "将之前的 Speyonides 增益乘以 x",
    "Multiply previous Bluyhines gain by x": "将之前的 Bluyhines 增益乘以 x",
    "Multiply previous Shuokaeyama gain by x": "将之前的 Shuokaeyama 增益乘以 x",
    "Multiply previous Odruna gain by x": "将之前的 Odruna 增益乘以 x",
    "Multiply previous Uoprarth gain by x": "将之前的 Uoprarth 增益乘以 x",
    "Multiply previous Aenuoflippe gain by x": "将之前的 Aenuoflippe 增益乘以 x",
    "Boosting by ": "提升 ",
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
    " Speyonides": " Speyonides",
    " Aenuoflippe": " Aenuoflippe",
    " Uoprarth": " Uoprarth",
    " Odruna": " Odruna",
    " Shuokaeyama": " Shuokaeyama",
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
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
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
    /^\-([\d\.]+)e([\d\.,]+)$/,
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
    [/^Gen: Gain (.+) dirt\/s while plane is active.$/, 'Gen：当镜面处于活动状态时，获得 $1 泥土\/秒。'],
    [/^Gen: Gain (.+) gold\/s while plane is active.$/, 'Gen：当镜面处于活动状态时，获得 $1 金锭\/秒。'],
    [/^Cache: Gain (.+) your current platinum \(no modifiers\).$/, '缓存：获得 $1 你当前的铂（无概览）。'],
    [/^Cache: Gain (.+) your current dirt \(no modifiers\).$/, '缓存：获得 $1 你当前的泥土（无概览）。'],
    [/^Cache: Gain (.+) your current wood \(no modifiers\).$/, '缓存：获得 $1 你当前的木头（无概览）。'],
    [/^Cache: Gain (.+) your current gravel \(no modifiers\).$/, '缓存：获得 $1 你当前的沙砾（无概览）。'],
    [/^Cache: Gain (.+) your current silver \(no modifiers\).$/, '缓存：获得 $1 你当前的白银（无概览）。'],
    [/^Resource Mult: Gain (.+) platinum while plane is active.$/, '资源倍数：获得 $1 铂 当镜面处于活动状态。'],
    [/^Resource Mult: Gain (.+) copper while plane is active.$/, '资源倍数：获得 $1 铜 当镜面处于活动状态。'],
    [/^Resource Mult: Gain (.+) gravel while plane is active.$/, '资源倍数：获得 $1 沙砾 当镜面处于活动状态。'],
    [/^Resource Mult: Gain (.+) dirt while plane is active.$/, '资源倍数：获得 $1 泥土 当镜面处于活动状态。'],
    [/^Resource Mult: Gain (.+) sand while plane is active.$/, '资源倍数：获得 $1 沙子 当镜面处于活动状态。'],
    [/^Resource Mult: Gain (.+) stone while plane is active.$/, '资源倍数：获得 $1 石头 当镜面处于活动状态。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Gather (.+) Bluyhines\/s$/, '收集 $1 Bluyhines\/秒'],
    [/^Gather (.+) iron\/s$/, '收集 $1 铁\/秒'],
    [/^Gather (.+) gold\/s$/, '收集 $1 金锭\/秒'],
    [/^Gather (.+) silver\/s$/, '收集 $1 白银\/秒'],
    [/^Gather (.+) gravel\/s$/, '收集 $1 沙砾\/秒'],
    [/^Gather (.+) wood\/s$/, '收集 $1 木头\/秒'],
    [/^Gather (.+) ultimatum\/s$/, '收集 $1 死亡通牒\/秒'],
    [/^Gain (.+) Speyonides\/s$/, '获得 $1 Speyonides\/秒'],
    [/^Gain (.+) Shuokaeyama\/s$/, '获得 $1 Shuokaeyama\/秒'],
    [/^Gain (.+) Aenuoflippe\/s$/, '获得 $1 Aenuoflippe\/秒'],
    [/^Gain (.+) Odruna\/s$/, '获得 $1 Odruna\/秒'],
    [/^Gain (.+) Uoprarth\/s$/, '获得 $1 Uoprarth\/秒'],
    [/^Increase boost \- (.+) energy$/, '增加提升 \- $1 能源'],
    [/^Increase Connections \- (.+) energy$/, '增加连接数 \- $1 能源'],
    [/^Turn On \- Always runs for (.+) energy\/s$/, '打开 \- 始终运行 $1 能源\/秒'],
    [/^Dowsing \((.+)\)$/, '探测（$1）'],
    [/^Quarrying \((.+)\)$/, '采石场（$1）'],
    [/^Empowering \((.+)\)$/, '赋能（$1）'],
    [/^(.+) per Resource Level$/, '$1 每种资源等级'],
    [/^(.+) Time Speed$/, '$1 时间速度'],
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
    [/^Unobtainium is now Level ([\d\.,]+)$/, '难得素 的等级现在是 $1'],
    [/^Berylium is now Level ([\d\.,]+)$/, '铍 的等级现在是 $1'],
    [/^Ultimatum is now Level ([\d\.,]+)$/, '死亡通牒 的等级现在是 $1'],
    [/^Platinum is now Level ([\d\.,]+)$/, '铂 的等级现在是 $1'],
    [/^Wood is now Level ([\d\.,]+)$/, '木头 的等级现在是 $1'],
    [/^Diamond is now Level ([\d\.,]+)$/, '钻石 的等级现在是 $1'],
    [/^Dirt is now Level ([\d\.,]+)$/, '泥土 的等级现在是 $1'],
    [/^Emerald is now Level ([\d\.,]+)$/, '绿宝石 的等级现在是 $1'],
    [/^Gold is now Level ([\d\.,]+)$/, '金锭 的等级现在是 $1'],
    [/^Iron is now Level ([\d\.,]+)$/, '铁 的等级现在是 $1'],
    [/^Silver is now Level ([\d\.,]+)$/, '白银 的等级现在是 $1'],
    [/^Sand is now Level ([\d\.,]+)$/, '沙子 的等级现在是 $1'],
    [/^Copper is now Level ([\d\.,]+)$/, '铜 的等级现在是 $1'],
    [/^Stone is now Level ([\d\.,]+)$/, '石头 的等级现在是 $1'],
    [/^Gravel is now Level ([\d\.,]+)$/, '沙砾 的等级现在是 $1'],
    [/^Wood is now Level ([\d\.,]+)$/, '木头 的等级现在是 $1'],
    [/^Coal is now Level ([\d\.,]+)$/, '煤 的等级现在是 $1'],
    [/^([\d\.,]+)x cost$/, '$1x 成本'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Amount: (.+)$/, '数量：$1'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
]);