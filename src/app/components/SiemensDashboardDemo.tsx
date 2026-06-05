import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/首页/svg-0i1aik07cl";

interface Module {
  id: string;
  nameZh: string;
  nameEn: string;
  description: string;
  features: string[];
  status: string;
}

const modules: Module[] = [
  { id: "general", nameZh: "综合设置", nameEn: "General Settings", description: "系统综合参数配置中心，管理全局运行参数与基础配置项。", features: ["系统语言与时区", "日志级别设置", "告警阈值配置", "界面主题管理"], status: "正常" },
  { id: "system", nameZh: "系统设置", nameEn: "System Settings", description: "系统核心事件监控与处理中心，实时追踪系统状态变化。", features: ["活动事件列表", "事件优先级管理", "事件响应策略", "历史事件查询"], status: "正常" },
  { id: "docking", nameZh: "对接设置", nameEn: "Docking Settings", description: "第三方系统对接配置，管理外部接口与协议参数。", features: ["接口协议配置", "IP地址管理", "认证参数设置", "连接状态监控"], status: "正常" },
  { id: "history", nameZh: "历史记录", nameEn: "History Record", description: "完整的系统操作历史与事件日志查询与管理平台。", features: ["操作日志查询", "事件回放", "数据导出", "日志清理策略"], status: "正常" },
  { id: "realtime", nameZh: "实时任务", nameEn: "Real-time Tasks", description: "实时广播任务的创建、监控与执行管理中心。", features: ["任务实时监控", "优先级调度", "紧急插播", "任务状态跟踪"], status: "运行中" },
  { id: "schedule", nameZh: "计划任务", nameEn: "Schedule Task", description: "按时间计划自动执行的广播任务配置与管理。", features: ["定时任务创建", "周期性任务", "任务日历视图", "执行记录查询"], status: "已配置 12 项" },
  { id: "linkage", nameZh: "联动任务", nameEn: "Linkage Task", description: "与外部系统联动触发的自动化广播任务配置。", features: ["触发条件设置", "联动规则管理", "设备绑定配置", "联动测试"], status: "正常" },
  { id: "offline", nameZh: "离线任务", nameEn: "Offline Task", description: "终端设备离线时自动执行的本地广播任务管理。", features: ["离线任务包", "设备离线策略", "本地存储管理", "同步状态监控"], status: "正常" },
  { id: "audio", nameZh: "服务器声卡", nameEn: "Audio Card", description: "服务器音频输入输出设备的驱动与参数配置管理。", features: ["声卡设备列表", "音频通道配置", "采样率设置", "音量增益调节"], status: "已检测 2 个设备" },
  { id: "recording", nameZh: "录音录像", nameEn: "Recording", description: "系统录音录像功能的配置、查询与存储管理中心。", features: ["录制策略配置", "存储路径管理", "录制质量设置", "录像回放"], status: "正常" },
  { id: "media", nameZh: "媒体库", nameEn: "Media Library", description: "音视频媒体资源的集中管理与分发平台。", features: ["媒体文件管理", "分类标签管理", "媒体预览播放", "批量导入导出"], status: "共 247 个文件" },
  { id: "surveillance", nameZh: "视频监控", nameEn: "Video Surveillance", description: "摄像头接入与视频监控画面的集中管理平台。", features: ["摄像头接入配置", "实时画面预览", "录像存储管理", "报警联动设置"], status: "在线 16 路" },
  { id: "terminal", nameZh: "终端管理", nameEn: "Terminal Management", description: "全网广播终端设备的注册、配置与状态管理。", features: ["终端设备列表", "分组管理", "固件升级", "远程重启"], status: "在线 128 台" },
  { id: "zone", nameZh: "分区管理", nameEn: "Zone Management", description: "广播分区的创建、编辑与权限控制管理。", features: ["分区创建与编辑", "终端分配", "广播权限控制", "分区树形结构"], status: "共 32 个分区" },
  { id: "user", nameZh: "用户管理", nameEn: "User Management", description: "系统用户账号、角色与权限的统一管理平台。", features: ["用户账号管理", "角色权限配置", "登录日志查询", "密码策略设置"], status: "共 24 名用户" },
  { id: "interface", nameZh: "对接管理", nameEn: "Interface Management", description: "第三方系统对接状态的监控与接口数据管理。", features: ["接口状态监控", "数据同步配置", "异常告警管理", "接口日志查询"], status: "正常" },
  { id: "inspection", nameZh: "一键巡检", nameEn: "One-click Inspection", description: "全系统设备健康状态的一键自动巡检功能。", features: ["全网扫描", "故障设备定位", "巡检报告生成", "修复建议"], status: "上次巡检: 今天 14:30" },
  { id: "version", nameZh: "版本信息", nameEn: "Version Information", description: "系统版本信息、授权状态与更新管理中心。", features: ["当前版本: V3.2.1", "授权有效期: 2027-12-31", "模块授权详情", "在线更新检查"], status: "已是最新版本" },
];

const navItems = [
  { id: "home", label: "首页", active: true },
  { id: "terminal-status", label: "终端状态" },
  { id: "realtime", label: "实时任务" },
  { id: "schedule", label: "计划任务" },
  { id: "linkage", label: "联动任务" },
  { id: "offline", label: "离线任务" },
  { id: "audio", label: "服务器声卡" },
  { id: "recording", label: "录音录像" },
  { id: "media", label: "媒体库" },
  { id: "surveillance", label: "视频监控" },
  { id: "inspection", label: "一键巡检" },
  { id: "history", label: "历史记录" },
  { id: "config-tool", label: "配置工具" },
  { id: "basic-settings", label: "基本设置" },
  { id: "advanced-settings", label: "高级设置" },
];

// SVG icon components extracted from the import
function IconHome({ color = "#00FFB9" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 18.75 20.0149" className="w-full h-full">
      <path d={svgPaths.p3bd3b40} fill={color} />
    </svg>
  );
}
function IconSettings({ color = "#00FFB9" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 77 55" className="w-full h-full">
      <path d={svgPaths.p23466480} fill={color} />
      <path d={svgPaths.pe68bd80} fill={color} />
      <path d={svgPaths.p233cc680} fill={color} />
    </svg>
  );
}
function IconMaintenance({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 65.99 65.9987" className="w-full h-full">
      <path d={svgPaths.p3ef63d80} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconLink({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 65.9865 65.9416" className="w-full h-full">
      <path d={svgPaths.p2e404a00} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconBackup({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 65.9845 66" className="w-full h-full">
      <path d={svgPaths.p37c15400} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconScheduler({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 67.5 67.5" className="w-full h-full">
      <path d={svgPaths.p3517e100} fill={color} />
      <path clipRule="evenodd" d={svgPaths.p38919a00} fill={color} fillRule="evenodd" />
    </svg>
  );
}
function IconTestplan({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 62.5281 76.9983" className="w-full h-full">
      <path d={svgPaths.p135a9b00} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconObjectPath({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 77 38.5" className="w-full h-full">
      <path d={svgPaths.pea66200} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconLinkBroken({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 65.9791 65.9381" className="w-full h-full">
      <path d={svgPaths.p3a26c400} fill={color} />
      <path d={svgPaths.p39215f00} fill={color} />
      <path d={svgPaths.p26252400} fill={color} />
      <path d={svgPaths.p2e5410f2} fill={color} />
      <path d={svgPaths.p18b4ddf0} fill={color} />
      <path d={svgPaths.pf73f700} fill={color} />
      <path d={svgPaths.p2a23bf80} fill={color} />
      <path d={svgPaths.p261bc00} fill={color} />
    </svg>
  );
}
function IconMegaphone({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 76.9854 49.326" className="w-full h-full">
      <path d={svgPaths.p39bb7d00} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconSelfTest({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 60 65.2702" className="w-full h-full">
      <path d={svgPaths.p175de600} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconPin({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 64.9731 64.973" className="w-full h-full">
      <path d={svgPaths.pdcf3f2} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconMedia({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 77 77" className="w-full h-full">
      <path d={svgPaths.p5ba9b80} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconSecurityCam({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 77 60.9425" className="w-full h-full">
      <path d={svgPaths.p3e09b900} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconVoice({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 50.9987 77" className="w-full h-full">
      <path d={svgPaths.p1c649240} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconTerminal({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 77 55" className="w-full h-full">
      <path d={svgPaths.p82faf40} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconDatabase({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 59.95 66" className="w-full h-full">
      <path d={svgPaths.p281c8f00} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconAccount({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 77 77" className="w-full h-full">
      <path d={svgPaths.p21f95900} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function IconTopology({ color = "#00CCCC" }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 77.0034 61.3353" className="w-full h-full">
      <path d={svgPaths.p3a855000} fill={color} stroke="#000028" strokeWidth="1.5" />
    </svg>
  );
}
function SiemensLogo() {
  return (
    <svg fill="none" viewBox="0 0 100.659 16" className="h-[16px] w-[100.659px]">
      <path clipRule="evenodd" d={svgPaths.p3759fa00} fill="white" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p36630820} fill="white" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p27764300} fill="white" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p1cb4d00} fill="white" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p3435bf00} fill="white" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p21ada800} fill="white" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p2595b880} fill="white" fillRule="evenodd" />
    </svg>
  );
}

interface ButtonCardProps {
  nameZh: string;
  nameEn: string;
  icon: React.ReactNode;
  isActive: boolean;
  isHighlighted?: boolean;
  onClick: () => void;
}

function ButtonCard({ nameZh, nameEn, icon, isActive, isHighlighted, onClick }: ButtonCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-[4px] flex items-center cursor-pointer transition-all duration-200 outline-none focus:outline-none"
      style={{
        background: isActive ? "#001f39" : hovered ? "#001428" : "#000028",
        boxShadow: isActive
          ? "0 0 0 1.5px #00FFB9, 0 4px 20px rgba(0,255,185,0.2)"
          : hovered
          ? "0 0 0 1px #00cccc, 0 4px 16px rgba(0,204,204,0.15)"
          : isHighlighted
          ? "0 0 0 1px #0cc"
          : "0 0 0 1px #0cc",
        transform: hovered && !isActive ? "translateY(-2px)" : "none",
      }}
    >
      {/* Left text */}
      <div className="flex flex-col justify-center pl-8 pr-4 py-4 flex-1 min-w-0">
        <p
          className="text-[24px] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            fontFamily: "'Siemens Sans Global', sans-serif",
            color: isActive ? "#00FFB9" : "#00cccc",
          }}
        >
          {nameZh}
        </p>
        <p
          className="text-[20px] whitespace-nowrap overflow-hidden text-ellipsis mt-1"
          style={{
            fontFamily: "'Siemens Sans Global', sans-serif",
            color: isActive ? "#00FFB9" : "#00cccc",
          }}
        >
          {nameEn}
        </p>
      </div>
      {/* Right icon */}
      <div className="shrink-0 size-[88px] flex items-center justify-center mr-4">
        <div className="size-[72px] flex items-center justify-center drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]">
          {icon}
        </div>
      </div>
    </button>
  );
}

interface SmallButtonCardProps {
  nameZh: string;
  nameEn: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}
function SmallButtonCard({ nameZh, nameEn, icon, isActive, onClick }: SmallButtonCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-[4px] flex items-center cursor-pointer transition-all duration-200 outline-none"
      style={{
        background: isActive ? "#001f39" : hovered ? "#001428" : "#000028",
        boxShadow: isActive
          ? "0 0 0 1.5px #00FFB9, 0 4px 20px rgba(0,255,185,0.2)"
          : hovered
          ? "0 0 0 1px #00cccc, 0 4px 16px rgba(0,204,204,0.15)"
          : "0 0 0 1px #0cc",
        transform: hovered && !isActive ? "translateY(-2px)" : "none",
      }}
    >
      <div className="flex flex-col justify-center pl-8 pr-4 py-3 flex-1 min-w-0">
        <p
          className="text-[24px] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ fontFamily: "'Siemens Sans Global', sans-serif", color: isActive ? "#00FFB9" : "#00cccc" }}
        >
          {nameZh}
        </p>
        <p
          className="text-[20px] whitespace-nowrap overflow-hidden text-ellipsis mt-1"
          style={{ fontFamily: "'Siemens Sans Global', sans-serif", color: isActive ? "#00FFB9" : "#00cccc" }}
        >
          {nameEn}
        </p>
      </div>
      <div className="shrink-0 size-[80px] flex items-center justify-center mr-3">
        <div className="size-[60px] flex items-center justify-center">
          {icon}
        </div>
      </div>
    </button>
  );
}

interface NavItemProps {
  label: string;
  active?: boolean;
  highlighted?: boolean;
  onClick: () => void;
}
function NavItem({ label, active, highlighted, onClick }: NavItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full flex items-center px-3 py-2 my-[2px] cursor-pointer transition-all duration-150 rounded-[2px] outline-none relative"
      style={{
        background: highlighted ? "#40405e" : hovered ? "#2d2d4a" : "#23233c",
        borderLeft: highlighted ? "4px solid #00FFB9" : "4px solid transparent",
      }}
    >
      <span
        className="text-[14px] font-semibold truncate"
        style={{
          fontFamily: "'Siemens Sans Pro VF', sans-serif",
          color: highlighted ? "#00FFB9" : "white",
        }}
      >
        {label}
      </span>
    </button>
  );
}

// Content panel for selected module
function ModulePanel({ module, onClose }: { module: Module; onClose: () => void }) {
  return (
    <div
      className="absolute top-0 right-0 h-full flex flex-col z-50 transition-all duration-300"
      style={{ width: 380, background: "#0d0d2b", borderLeft: "1px solid #00cccc44" }}
    >
      {/* Panel header */}
      <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid #00cccc33" }}>
        <div>
          <p className="text-[22px] font-bold" style={{ color: "#00FFB9", fontFamily: "'Siemens Sans Global', sans-serif" }}>
            {module.nameZh}
          </p>
          <p className="text-[14px] mt-0.5" style={{ color: "#9999a9", fontFamily: "'Siemens Sans Global', sans-serif" }}>
            {module.nameEn}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex items-center justify-center size-8 rounded transition-colors"
          style={{ color: "#9999a9" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00cccc")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#9999a9")}
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Status badge */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full" style={{ background: "#00FFB9", boxShadow: "0 0 6px #00FFB9" }} />
          <span className="text-[13px]" style={{ color: "#9999a9", fontFamily: "'Siemens Sans Global', sans-serif" }}>
            状态: {module.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 pb-4">
        <p className="text-[14px] leading-relaxed" style={{ color: "#b3b3be", fontFamily: "'Siemens Sans Global', sans-serif" }}>
          {module.description}
        </p>
      </div>

      {/* Features */}
      <div className="px-6 pb-4">
        <p className="text-[12px] mb-3 uppercase tracking-widest" style={{ color: "#66667e", fontFamily: "'Siemens Sans Global', sans-serif" }}>
          功能模块
        </p>
        <div className="flex flex-col gap-2">
          {module.features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-all"
              style={{ background: "#1a1a3e", border: "1px solid #00cccc22" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#00cccc66")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#00cccc22")}
            >
              <div className="size-1.5 rounded-full shrink-0" style={{ background: "#00cccc" }} />
              <span className="text-[13px]" style={{ color: "#e0e0f0", fontFamily: "'Siemens Sans Global', sans-serif" }}>
                {f}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-auto px-6 pb-6 flex flex-col gap-3">
        <button
          type="button"
          className="w-full py-3 rounded text-[14px] font-bold transition-all"
          style={{
            background: "#00cccc",
            color: "#000028",
            fontFamily: "'Siemens Sans Global', sans-serif",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#00ffb9")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#00cccc")}
        >
          进入模块
        </button>
        <button
          type="button"
          className="w-full py-3 rounded text-[14px] transition-all"
          style={{
            border: "1px solid #00cccc",
            color: "#00cccc",
            background: "transparent",
            fontFamily: "'Siemens Sans Global', sans-serif",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#00cccc22"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
        >
          查看文档
        </button>
      </div>
    </div>
  );
}

export function SiemensDashboardDemo() {
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [activeNav, setActiveNav] = useState("home");
  const [time, setTime] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setScale(w / 1920);
      }
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const fmt = (n: number) => String(n).padStart(2, "0");
  const timeStr = `${fmt(time.getHours())}：${fmt(time.getMinutes())}：${fmt(time.getSeconds())}`;
  const days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const dateStr = `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()}`;
  const dayStr = days[time.getDay()];

  const handleModuleClick = (id: string) => {
    const m = modules.find((m) => m.id === id);
    setActiveModule(m && activeModule?.id === id ? null : m || null);
  };

  // The dashboard columns
  const col1 = [
    { id: "general", nameZh: "综合设置", nameEn: "General settings", icon: <IconSettings color={activeModule?.id === "general" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "system", nameZh: "系统设置", nameEn: "Active Event", icon: <IconMaintenance color={activeModule?.id === "system" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "docking", nameZh: "对接设置", nameEn: "Docking Settings", icon: <IconLink color={activeModule?.id === "docking" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "history", nameZh: "历史记录", nameEn: "History Record", icon: <IconBackup color={activeModule?.id === "history" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
  ];
  const col2 = [
    { id: "realtime", nameZh: "实时任务", nameEn: "real-time tasks", icon: <IconScheduler color={activeModule?.id === "realtime" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "schedule", nameZh: "计划任务", nameEn: "Schedule task", icon: <IconTestplan color={activeModule?.id === "schedule" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "linkage", nameZh: "联动任务", nameEn: "Linkage task", icon: <IconObjectPath color={activeModule?.id === "linkage" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "offline", nameZh: "离线任务", nameEn: "Offline task", icon: <IconLinkBroken color={activeModule?.id === "offline" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
  ];
  const col3 = [
    { id: "audio", nameZh: "服务器声卡", nameEn: "Audio card", icon: <IconMegaphone color={activeModule?.id === "audio" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "recording", nameZh: "录音录像", nameEn: "Audio card", icon: <IconVoice color={activeModule?.id === "recording" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "media", nameZh: "媒体库", nameEn: "Media library", icon: <IconMedia color={activeModule?.id === "media" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "surveillance", nameZh: "视频监控", nameEn: "Surveillance", icon: <IconSecurityCam color={activeModule?.id === "surveillance" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "inspection", nameZh: "一键巡检", nameEn: "Inspecting", icon: <IconSelfTest color={activeModule?.id === "inspection" ? "#00FFB9" : "#00CCCC"} />, h: 85 },
  ];
  const col4 = [
    { id: "terminal", nameZh: "终端管理", nameEn: "Terminal", icon: <IconTerminal color={activeModule?.id === "terminal" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "zone", nameZh: "分区管理", nameEn: "Zone", icon: <IconDatabase color={activeModule?.id === "zone" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "user", nameZh: "用户管理", nameEn: "User", icon: <IconAccount color={activeModule?.id === "user" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "interface", nameZh: "对接管理", nameEn: "Interface", icon: <IconTopology color={activeModule?.id === "interface" ? "#00FFB9" : "#00CCCC"} />, h: 132 },
    { id: "version", nameZh: "版本信息", nameEn: "Version", icon: <IconPin color={activeModule?.id === "version" ? "#00FFB9" : "#00CCCC"} />, h: 85 },
  ];

  return (
    <div ref={containerRef} className="w-full overflow-hidden" style={{ background: "#000028", height: 1080 * scale }}>
      {/* Scaled 1920×1080 canvas */}
      <div
        style={{
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "relative",
          background: "#000028",
        }}
      >
        {/* ---- TOP BAR ---- */}
        <div
          className="absolute top-0 left-0 right-0 h-[50px] flex items-center justify-between z-20"
          style={{ background: "#23233c", borderBottom: "1px solid #000028" }}
        >
          {/* Left: logo + app name */}
          <div className="flex items-center">
            {/* thumbnail icon */}
            <div className="size-[48px] flex items-center justify-center">
              <svg viewBox="0 0 17.9531 17.9531" fill="none" className="size-6">
                <path d={svgPaths.p1715c100} fill="white" />
                <path d={svgPaths.p22c81e80} fill="white" />
                <path d={svgPaths.p3ee0b700} fill="white" />
                <path d={svgPaths.p2bcfb100} fill="white" />
                <path d={svgPaths.p2a93880} fill="white" />
                <path d={svgPaths.p678de00} fill="white" />
                <path d={svgPaths.p1b5d3280} fill="white" />
                <path d={svgPaths.pecd6980} fill="white" />
                <path d={svgPaths.p1bb25780} fill="white" />
              </svg>
            </div>
            <div className="px-4 py-4">
              <SiemensLogo />
            </div>
            <div className="px-3">
              <span className="text-white text-[16px]" style={{ fontFamily: "'Siemens Sans Pro VF', sans-serif" }}>
                IP网络云可视广播对讲系统软件
              </span>
            </div>
          </div>

          {/* Right: time + avatar */}
          <div className="flex items-center gap-4 pr-4">
            <div className="text-right">
              <p className="text-white text-[20px] font-bold" style={{ fontFamily: "'Siemens Sans Global', sans-serif" }}>
                {timeStr}
              </p>
              <p className="text-white text-[13px]" style={{ fontFamily: "'Siemens Sans Global', sans-serif" }}>
                {dateStr} &nbsp;{dayStr}
              </p>
            </div>
            <div
              className="size-[32px] rounded-full flex items-center justify-center text-[#000028] text-[18px] font-semibold"
              style={{ background: "#97C7FF" }}
            >
              ME
            </div>
          </div>
        </div>

        {/* ---- SIDEBAR ---- */}
        <div
          className="absolute top-[50px] left-0 bottom-0 flex flex-col"
          style={{ width: 240, background: "#23233c", zIndex: 10 }}
        >
          {/* Search */}
          <div className="px-2 pt-3 pb-2">
            <div
              className="flex items-center gap-2 px-2 h-[32px] rounded"
              style={{ background: "#000028" }}
            >
              <svg viewBox="0 0 15.3314 15.3769" fill="none" className="size-4 shrink-0">
                <path clipRule="evenodd" d={svgPaths.pe224400} fill="#66667E" fillRule="evenodd" />
              </svg>
              <span className="text-[#b3b3be] text-[14px]" style={{ fontFamily: "'Siemens Sans Pro VF', sans-serif" }}>
                Search...
              </span>
            </div>
          </div>

          {/* Nav items */}
          <div className="flex flex-col px-1 overflow-y-auto flex-1">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                highlighted={activeNav === item.id}
                onClick={() => setActiveNav(item.id)}
              />
            ))}
          </div>
        </div>

        {/* ---- PAGE HEADER ---- */}
        <div
          className="absolute flex items-center gap-4 px-4 py-4"
          style={{ top: 52, left: 240, right: 0 }}
        >
          <div className="size-[25px]">
            <IconHome color="white" />
          </div>
          <span className="text-white text-[20px]" style={{ fontFamily: "'Siemens Sans', sans-serif" }}>
            计划任务
          </span>
        </div>

        {/* ---- MAIN CONTENT ---- */}
        <div
          className="absolute"
          style={{ top: 100, left: 240, right: activeModule ? 380 : 0, bottom: 0 }}
        >
          <div className="flex gap-[10px] px-[30px] pt-[100px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-[10px]" style={{ width: 280 }}>
              {col1.map((btn) => (
                <div key={btn.id} style={{ height: btn.h }}>
                  <ButtonCard
                    nameZh={btn.nameZh}
                    nameEn={btn.nameEn}
                    icon={btn.icon}
                    isActive={activeModule?.id === btn.id}
                    onClick={() => handleModuleClick(btn.id)}
                  />
                </div>
              ))}
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-[10px]" style={{ width: 280, marginLeft: 115 }}>
              {col2.map((btn) => (
                <div key={btn.id} style={{ height: btn.h }}>
                  <ButtonCard
                    nameZh={btn.nameZh}
                    nameEn={btn.nameEn}
                    icon={btn.icon}
                    isActive={activeModule?.id === btn.id}
                    onClick={() => handleModuleClick(btn.id)}
                  />
                </div>
              ))}
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-[10px]" style={{ width: 280, marginLeft: 115 }}>
              {col3.map((btn) => (
                <div key={btn.id} style={{ height: btn.h }}>
                  {btn.h === 85 ? (
                    <SmallButtonCard
                      nameZh={btn.nameZh}
                      nameEn={btn.nameEn}
                      icon={btn.icon}
                      isActive={activeModule?.id === btn.id}
                      onClick={() => handleModuleClick(btn.id)}
                    />
                  ) : (
                    <ButtonCard
                      nameZh={btn.nameZh}
                      nameEn={btn.nameEn}
                      icon={btn.icon}
                      isActive={activeModule?.id === btn.id}
                      onClick={() => handleModuleClick(btn.id)}
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Column 4 */}
            <div className="flex flex-col gap-[10px]" style={{ width: 280, marginLeft: 115 }}>
              {col4.map((btn) => (
                <div key={btn.id} style={{ height: btn.h }}>
                  {btn.h === 85 ? (
                    <SmallButtonCard
                      nameZh={btn.nameZh}
                      nameEn={btn.nameEn}
                      icon={btn.icon}
                      isActive={activeModule?.id === btn.id}
                      onClick={() => handleModuleClick(btn.id)}
                    />
                  ) : (
                    <ButtonCard
                      nameZh={btn.nameZh}
                      nameEn={btn.nameEn}
                      icon={btn.icon}
                      isActive={activeModule?.id === btn.id}
                      onClick={() => handleModuleClick(btn.id)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- DETAIL PANEL ---- */}
        {activeModule && (
          <div className="absolute top-[50px] right-0 bottom-0" style={{ width: 380 }}>
            <ModulePanel module={activeModule} onClose={() => setActiveModule(null)} />
          </div>
        )}
      </div>

    </div>
  );
}
