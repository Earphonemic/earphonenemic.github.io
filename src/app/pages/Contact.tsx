import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success("消息已发送！我会尽快回复您。");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl mb-6">联系我</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            有项目想法或合作机会？我很乐意听听您的想法
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl mb-8">联系方式</h2>
              <div className="space-y-6 mb-12">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-gray-900 mt-1" />
                    <div>
                      <h3 className="mb-1">邮箱</h3>
                      <a
                        href="mailto:design@example.com"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        design@example.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-gray-900 mt-1" />
                    <div>
                      <h3 className="mb-1">电话</h3>
                      <a
                        href="tel:+8613800000000"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        +86 138 0000 0000
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-gray-900 mt-1" />
                    <div>
                      <h3 className="mb-1">地址</h3>
                      <p className="text-gray-600">
                        中国上海市徐汇区
                        <br />
                        田林路200号
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="mb-4">工作时间</h3>
                <div className="space-y-2 text-gray-600">
                  <p>周一至周五: 9:00 - 18:00</p>
                  <p>周末: 预约制</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-8">发送消息</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    姓名 *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="请输入您的姓名"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    邮箱 *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2">
                    主题 *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="您想讨论什么？"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    消息 *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请告诉我更多关于您的项目..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  发送消息
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>地图占位符</p>
                <p className="text-sm mt-2">上海市徐汇区田林路200号</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl mb-8">关注我</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Behance
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
