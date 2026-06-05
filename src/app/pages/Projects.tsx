import { useState } from "react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Projects() {
  const [filter, setFilter] = useState("全部");

  const categories = [
    "全部",
    "电子产品",
    "家具设计",
    "照明设计",
    "交通工具",
    "产品原型",
    "配饰",
    "AI作品",
    "UI设计",
  ];

  const filteredProjects =
    filter === "全部"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl mb-6">作品集</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            精选工业设计项目，展示从概念到实现的完整设计过程
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b sticky top-16 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group h-full">
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
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">该分类暂无项目</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
