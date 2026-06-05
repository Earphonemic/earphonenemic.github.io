import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { SiemensDashboardDemo } from "../components/SiemensDashboardDemo";

export function SiemensDemoPage() {
  return (
    <div style={{ background: "#000028", minHeight: "100vh" }}>
      {/* Back bar */}
      <div
        className="flex items-center gap-3 px-6 py-3"
        style={{ background: "#0d0d2b", borderBottom: "1px solid #00cccc33" }}
      >
        <Link
          to="/projects"
          className="flex items-center gap-2 text-[14px] transition-colors"
          style={{ color: "#9999a9", fontFamily: "'Siemens Sans Global', sans-serif" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00cccc")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9999a9")}
        >
          <ArrowLeft className="size-4" />
          返回作品集
        </Link>
        <span style={{ color: "#333355" }}>|</span>
        <span className="text-[14px]" style={{ color: "#66667e", fontFamily: "'Siemens Sans Global', sans-serif" }}>
          交互演示 · IP网络云可视广播对讲系统
        </span>
        <div className="ml-auto flex items-center gap-2">
          <div className="size-2 rounded-full" style={{ background: "#00FFB9", boxShadow: "0 0 6px #00FFB9" }} />
          <span className="text-[13px]" style={{ color: "#9999a9", fontFamily: "'Siemens Sans Global', sans-serif" }}>
            点击任意模块卡片查看详情
          </span>
        </div>
      </div>

      <SiemensDashboardDemo />
    </div>
  );
}
