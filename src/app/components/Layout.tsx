import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "首页" },
    { path: "/projects", label: "作品集" },
    { path: "/about", label: "关于" },
    { path: "/contact", label: "联系" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl tracking-tight">
              设计师作品集
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4">设计师作品集</h3>
              <p className="text-gray-500 text-sm">
                专注于创新与功能的完美结合，为用户创造独特的产品体验。
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm">导航</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm">联系方式</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <p>邮箱: design@example.com</p>
                <p>电话: +86 138 0000 0000</p>
                <p>地址: 上海市徐汇区</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
            © 2026 设计师作品集. 保留所有权利.
          </div>
        </div>
      </footer>
    </div>
  );
}
