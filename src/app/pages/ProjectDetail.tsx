import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, ExternalLink, X } from "lucide-react";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">项目未找到</h1>
          <Link to="/projects">
            <Button variant="outline">返回作品集</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回
        </Button>
      </div>

      {/* Hero Image */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setLightboxImage(project.image)}
            className="block w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden cursor-zoom-in"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </section>

      {/* Project Info */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.id === "12" && (
            <Link to="/ui-demo/siemens">
              <Button className="gap-2">
                <ExternalLink className="h-4 w-4" />
                查看交互演示
              </Button>
            </Link>
          )}
        </div>
      </section>

      {/* Project Details */}
      {project.fullDescription && (
        <section className="mb-16 bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl mb-4">项目概述</h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
              <div className="space-y-8">
                {project.challenge && (
                  <div>
                    <h3 className="mb-3">挑战</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h3 className="mb-3">解决方案</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
                {project.result && (
                  <div>
                    <h3 className="mb-3">成果</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Additional Images */}
      {project.images && project.images.length > 1 && (
        <section className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.slice(1).map((image, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setLightboxImage(image)}
                  className="block aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden cursor-zoom-in group"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} - 图片 ${index + 2}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-gray-400 mb-2">下一个项目</p>
              <h2 className="text-3xl md:text-4xl">{nextProject.title}</h2>
            </div>
            <Link to={`/projects/${nextProject.id}`}>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
                查看项目
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="aspect-[21/9] bg-gray-800 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={nextProject.image}
              alt={nextProject.title}
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage(null);
            }}
            aria-label="关闭"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxImage}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
