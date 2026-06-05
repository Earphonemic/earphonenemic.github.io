import industrialControllerImg from "../../imports/______.9.png";

const broadcastUI01 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80";
const broadcastUI02 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&q=80";
const broadcastUI03 = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1080&q=80";
const broadcastUI04 = "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1080&q=80";
const broadcastUI05 = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1080&q=80";
const broadcastUI06 = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1080&q=80";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  tags: string[];
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "现代智能音响",
    category: "电子产品",
    year: "2025",
    description: "融合极简美学与先进音频技术的智能音响系统",
    image: "https://images.unsplash.com/photo-1772516912380-d39c64f5a85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGVzaWduJTIwcHJvZHVjdCUyMG1vZGVybnxlbnwxfHx8fDE3ODAzMDMyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["音频", "智能家居", "极简主义"],
    fullDescription: "这款智能音响的设计理念源于对纯粹声音体验的追求。通过精心打磨的外形和先进的音频技术，我们创造了一个既能融入任何空间，又能提供卓越音质的产品。",
    challenge: "如何在紧凑的空间内实现高品质音频输出，同时保持设计的简洁性和优雅感。",
    solution: "采用创新的声学结构设计和高品质材料，结合智能算法优化音质表现。外观使用单一材质打造无缝一体化造型。",
    result: "产品获得了2025年红点设计奖，用户满意度达到92%，首批生产即售罄。",
    images: [
      "https://images.unsplash.com/photo-1772516912380-d39c64f5a85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGVzaWduJTIwcHJvZHVjdCUyMG1vZGVybnxlbnwxfHx8fDE3ODAzMDMyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1683818051102-dd1199d163b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHByb2R1Y3QlMjBkZXNpZ24lMjBzbGVla3xlbnwxfHx8fDE3ODAzMDMyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    id: "2",
    title: "经典休闲椅",
    category: "家具设计",
    year: "2025",
    description: "符合人体工学的现代休闲座椅，舒适与美学的完美平衡",
    image: "https://images.unsplash.com/photo-1489269637500-aa0e75768394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ24lMjBtaW5pbWFsaXN0JTIwY2hhaXJ8ZW58MXx8fHwxNzgwMzAzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["家具", "人体工学", "可持续"],
    fullDescription: "这款休闲椅的设计充分考虑了人体工学原理，同时追求视觉上的轻盈感。使用可持续材料制造，体现了对环境的责任感。",
    challenge: "在保证舒适度的同时实现轻量化设计，并确保产品的耐用性。",
    solution: "通过3D建模和多次原型测试，优化了座椅的曲线和支撑结构。选用可回收的高强度材料。",
    result: "产品在国际家具展上获得广泛认可，被多家高端酒店和办公空间采用。",
    images: [
      "https://images.unsplash.com/photo-1489269637500-aa0e75768394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ24lMjBtaW5pbWFsaXN0JTIwY2hhaXJ8ZW58MXx8fHwxNzgwMzAzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    id: "3",
    title: "艺术吊灯系列",
    category: "照明设计",
    year: "2024",
    description: "将光影艺术与功能照明完美结合的装置作品",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodGluZyUyMGRlc2lnbiUyMG1vZGVybiUyMGxhbXB8ZW58MXx8fHwxNzgwMzAzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["照明", "艺术", "定制"],
    fullDescription: "这个照明系列探索了光作为雕塑材料的可能性。每个灯具都是独特的艺术品，同时提供实用的照明功能。",
    challenge: "如何让照明装置既具有艺术性又不失实用功能，同时控制生产成本。",
    solution: "采用模块化设计理念，允许客户根据空间需求定制配置。使用LED技术提供节能高效的照明。",
    result: "系列产品在艺术画廊和高端餐厅中广泛应用，获得多个设计奖项提名。",
    images: [
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodGluZyUyMGRlc2lnbiUyMG1vZGVybiUyMGxhbXB8ZW58MXx8fHwxNzgwMzAzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    id: "4",
    title: "未来概念车",
    category: "交通工具",
    year: "2024",
    description: "探索未来出行的电动汽车设计概念",
    image: "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZGVzaWduJTIwY29uY2VwdCUyMGNhcnxlbnwxfHx8fDE3ODAzMDMyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["汽车", "电动", "概念设计"],
    fullDescription: "这个概念车项目重新思考了城市出行的未来。通过创新的设计语言和先进技术，我们展示了电动出行的新可能。",
    challenge: "在有限的电池技术下实现长续航，同时打造吸引人的外观设计。",
    solution: "采用空气动力学优化车身设计，大幅降低风阻。内饰使用环保材料，创造舒适的乘坐空间。",
    result: "概念设计在国际车展上引起轰动，获得多家媒体报道和投资者关注。",
    images: [
      "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZGVzaWduJTIwY29uY2VwdCUyMGNhcnxlbnwxfHx8fDE3ODAzMDMyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    id: "5",
    title: "3D打印原型系列",
    category: "产品原型",
    year: "2024",
    description: "利用3D打印技术快速实现产品概念验证",
    image: "https://images.unsplash.com/photo-1586868538513-51335a0c5337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcHJvdG90eXBlJTIwM2QlMjBtb2RlbHxlbnwxfHx8fDE3ODAzMDMyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["原型", "3D打印", "创新"],
    fullDescription: "通过3D打印技术，我们能够快速将设计想法转化为实体原型，大大缩短了产品开发周期。",
    challenge: "如何确保原型的精度和功能性，同时控制制作成本和时间。",
    solution: "建立了完整的数字化工作流程，从3D建模到打印参数优化，确保每个原型的质量。",
    result: "原型制作效率提升60%，帮助客户在产品上市前发现并解决了多个设计问题。",
    images: [
      "https://images.unsplash.com/photo-1586868538513-51335a0c5337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcHJvdG90eXBlJTIwM2QlMjBtb2RlbHxlbnwxfHx8fDE3ODAzMDMyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    id: "6",
    title: "奢华腕表设计",
    category: "配饰",
    year: "2023",
    description: "传统工艺与现代设计的精妙融合",
    image: "https://images.unsplash.com/photo-1670404160620-a3a86428560e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGRlc2lnbiUyMGx1eHVyeSUyMHRpbWVwaWVjZXxlbnwxfHx8fDE3ODAzMDMyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["腕表", "奢侈品", "精密工艺"],
    fullDescription: "这款腕表设计将瑞士制表传统与当代美学完美结合，每个细节都经过精心打磨。",
    challenge: "在保持传统制表工艺的同时，注入现代设计语言，吸引年轻消费者。",
    solution: "采用经典的机械机芯，配以简约现代的表盘设计和创新的表带材料。",
    result: "限量版腕表在发布首月即售罄，品牌形象成功转型年轻化。",
    images: [
      "https://images.unsplash.com/photo-1670404160620-a3a86428560e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGRlc2lnbiUyMGx1eHVyeSUyMHRpbWVwaWVjZXxlbnwxfHx8fDE3ODAzMDMyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    id: "7",
    title: "AI智能机器人",
    category: "AI作品",
    year: "2026",
    description: "具有高度人工智能和情感识别能力的服务型机器人",
    image: "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwaW5kdXN0cmlhbCUyMGRlc2lnbiUyMG1vZGVybnxlbnwxfHx8fDE3ODAzMDYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["AI", "机器人", "人机交互"],
    fullDescription: "这款AI机器人结合了最先进的人工智能技术和人性化的工业设计。通过深度学习算法，它能够识别人类情绪并做出相应反应，为用户提供个性化服务。",
    challenge: "如何在机器人设计中平衡技术性能与人性化外观，同时确保用户感到舒适而非感到威胁。",
    solution: "采用圆润流畅的外形设计，使用柔和的白色材质，配合表情显示屏幕和自然的肢体语言，创造友好的交互体验。",
    result: "原型在国际AI展会上获得最佳人机交互设计奖，多家医疗和酒店机构表达合作意向。",
    images: [
      "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwaW5kdXN0cmlhbCUyMGRlc2lnbiUyMG1vZGVybnxlbnwxfHx8fDE3ODAzMDYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxBSSUyMHJvYm90JTIwaW5kdXN0cmlhbCUyMGRlc2lnbiUyMG1vZGVybnxlbnwxfHx8fDE3ODAzMDYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "8",
    title: "AI交互界面系统",
    category: "AI作品",
    year: "2026",
    description: "基于手势识别和全息投影的未来交互界面",
    image: "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaW50ZXJmYWNlJTIwaG9sb2dyYW18ZW58MXx8fHwxNzgwMzA2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["AI", "界面设计", "全息技术"],
    fullDescription: "这套AI交互系统突破了传统屏幕的限制，通过全息投影和手势识别技术，创造了沉浸式的三维交互体验。用户可以通过自然的手势操控虚拟对象，AI助手能够理解语音和动作指令。",
    challenge: "如何设计直观的三维交互逻辑，让用户无需学习就能自然使用全息界面。",
    solution: "借鉴人类日常手势习惯，开发了一套符合直觉的交互语言。AI系统会学习用户习惯并自适应调整界面布局。",
    result: "系统在CES 2026展会上斩获创新奖，多家科技巨头洽谈技术授权。",
    images: [
      "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaW50ZXJmYWNlJTIwaG9sb2dyYW18ZW58MXx8fHwxNzgwMzA2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1677212004257-103cfa6b59d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaW50ZXJmYWNlJTIwaG9sb2dyYW18ZW58MXx8fHwxNzgwMzA2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "9",
    title: "AI神经芯片",
    category: "AI作品",
    year: "2025",
    description: "专为边缘计算优化的新一代AI处理器硬件设计",
    image: "https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBkZXNpZ24lMjBmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODAzMDYwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["AI", "芯片设计", "硬件"],
    fullDescription: "这款AI芯片专为物联网设备和边缘计算场景设计，在保持低功耗的同时提供强大的神经网络推理能力。独特的散热设计和模块化架构使其能够适应各种应用场景。",
    challenge: "如何在极低功耗预算下实现高性能AI计算，同时解决散热和成本问题。",
    solution: "采用3D堆叠架构和创新的神经网络加速单元设计，结合先进的5nm制程工艺。外观设计融入发光元素，实时显示芯片工作状态。",
    result: "芯片性能达到竞品的2倍，功耗降低40%，已被多家智能设备厂商采用。",
    images: [
      "https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBkZXNpZ24lMjBmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODAzMDYwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1739036868260-c26b292cd85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBkZXNpZ24lMjBmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODAzMDYwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "11",
    title: "工业控制器外观设计",
    category: "电子产品",
    year: "2024",
    description: "西门子 Climatix 系列工业楼宇自动化控制器，兼顾功能性与工业美学",
    image: industrialControllerImg,
    tags: ["工业设计", "控制器", "楼宇自动化"],
    fullDescription: "Climatix 工业控制器的外观设计以功能性为核心，通过清晰的模块化布局和人机工程学接口设计，满足楼宇自动化系统的高可靠性需求。深灰色外壳与结构化散热槽设计体现了工业产品的专业感与耐用性。",
    challenge: "在高密度接口排布的前提下，实现清晰易读的标识系统和便捷的安装维护体验。",
    solution: "采用导轨安装结构，配合分区标识和颜色编码，使接线操作直观高效。散热结构融入外形轮廓，兼顾美观与散热性能。",
    result: "产品被广泛应用于商业楼宇、工厂及数据中心的暖通自动化系统，获得客户高度评价。",
    images: [industrialControllerImg],
  },
  {
    id: "12",
    title: "IP网络云可视广播对讲系统软件",
    category: "UI设计",
    year: "2026",
    description: "面向工业楼宇与轨道交通的西门子专业广播对讲控制平台界面设计",
    image: broadcastUI01,
    tags: ["UI设计", "工业软件", "深色主题", "数据可视化"],
    fullDescription: "这套软件界面专为西门子IP网络云可视广播对讲系统打造，覆盖实时任务、计划任务、联动控制、媒体管理、视频监控及全套系统配置等核心场景。设计上采用深蓝灰色背景搭配青色高亮的现代深色主题，兼顾长时间值守的视觉舒适度与关键信息的可识别性。",
    challenge: "工业广播对讲系统功能模块繁多、参数密集，如何在单一界面内组织海量任务列表、配置项与多端口控制，同时保持操作路径清晰、关键状态一目了然，是核心挑战。",
    solution: "建立统一的导航与信息架构：左侧分层菜单聚合所有功能模块；主区采用列表+表单的双栏模式，配合青色品牌强调色、状态色编码（进行中/已完成/禁用/启用）和图标化的任务标识，让运维人员快速完成新增、批量操作和参数微调。弹窗表单按逻辑分组并使用滑块、开关等控件优化高密度参数的可操作性。",
    result: "界面已应用于西门子IP广播对讲系统的多个商业项目，得到客户运维团队的一致好评，操作效率与误操作率均明显改善。",
    images: [
      broadcastUI01,
      broadcastUI02,
      broadcastUI03,
      broadcastUI04,
      broadcastUI05,
      broadcastUI06,
    ],
  },
  {
    id: "10",
    title: "AI智能音箱助手",
    category: "AI作品",
    year: "2025",
    description: "融合视觉识别和语音交互的新一代智能家居中枢",
    image: "https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBkZXNpZ24lMjBmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODAzMDYwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["AI", "智能家居", "语音交互"],
    fullDescription: "这款AI智能音箱不仅能够响应语音命令，还配备了摄像头和环境传感器，能够理解场景上下文并主动提供服务。设计上采用了未来感与温暖感并存的美学语言。",
    challenge: "如何让一个配备摄像头的设备让用户感到安全和信任，同时保持设计的吸引力。",
    solution: "设计了物理隐私开关和可见的状态指示灯，让用户完全掌控设备。外观采用温润的材质和柔和的发光效果，营造友好氛围。",
    result: "产品在隐私和用户体验平衡方面获得广泛赞誉，首批预订量超过预期3倍。",
    images: [
      "https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBkZXNpZ24lMjBmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODAzMDYwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaW50ZXJmYWNlJTIwaG9sb2dyYW18ZW58MXx8fHwxNzgwMzA2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
];
