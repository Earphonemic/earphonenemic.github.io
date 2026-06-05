import { Link } from "react-router";
import { ArrowRight, Award, Users, Lightbulb } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl tracking-tight mb-6">
            创造有意义的
            <br />
            产品体验
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            我是一名工业设计师，专注于将创新理念转化为触动人心的实体产品
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg">
                查看作品
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                联系我
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-gray-900" />
              <div className="text-4xl mb-2">15+</div>
              <p className="text-gray-600">设计奖项</p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-12 w-12 mx-auto mb-4 text-gray-900" />
              <div className="text-4xl mb-2">50+</div>
              <p className="text-gray-600">完成项目</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-900" />
              <div className="text-4xl mb-2">30+</div>
              <p className="text-gray-600">合作客户</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">精选项目</h2>
              <p className="text-gray-600">探索我最新的设计作品</p>
            </div>
            <Link to="/projects">
              <Button variant="ghost">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">设计理念</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  我相信好的设计应该是不引人注目的。它应该与用户的生活无缝融合，提升日常体验而不显突兀。
                </p>
                <p>
                  每个项目都是一次探索，探索形式与功能如何和谐共存，如何在满足用户需求的同时，创造出美学上令人愉悦的产品。
                </p>
                <p>
                  可持续性是我设计过程中的核心考量。我致力于创造既能经受时间考验，又对环境负责的产品。
                </p>
              </div>
              <Link to="/about" className="inline-block mt-8">
                <Button variant="outline">
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599420186985-5c3d1a038e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGVzaWduZXIlMjB3b3Jrc3BhY2UlMjBza2V0Y2h8ZW58MXx8fHwxNzgwMzAzMjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="设计工作空间"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">让我们一起创造</h2>
          <p className="text-lg text-gray-300 mb-8">
            有一个项目想法？让我们讨论如何将它变为现实
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
              开始对话
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
