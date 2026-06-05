import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const skills = [
    "3D建模与渲染",
    "产品原型制作",
    "用户研究",
    "CMF设计",
    "人体工学",
    "可持续设计",
    "3D打印",
    "手绘草图",
  ];

  const experience = [
    {
      year: "2023 - 至今",
      title: "高级工业设计师",
      company: "创新设计工作室",
      description: "领导多个获奖产品的设计开发，专注于可持续消费电子产品。",
    },
    {
      year: "2020 - 2023",
      title: "工业设计师",
      company: "未来科技有限公司",
      description: "负责智能家居产品线的设计，从概念到量产的全流程参与。",
    },
    {
      year: "2018 - 2020",
      title: "初级设计师",
      company: "设计咨询公司",
      description: "参与多个客户项目，涵盖家具、照明和消费品设计。",
    },
  ];

  const awards = [
    "红点设计奖 (2025)",
    "iF设计奖 (2024)",
    "A' Design Award 金奖 (2024)",
    "DIA中国设计智造大奖 (2023)",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl mb-6">关于我</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            一名充满热情的工业设计师，致力于创造改善人们生活的产品
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599420186985-5c3d1a038e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGVzaWduZXIlMjB3b3Jrc3BhY2UlMjBza2V0Y2h8ZW58MXx8fHwxNzgwMzAzMjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="工作环境"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6">设计师简介</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  你好！我是一名工业设计师，拥有超过8年的产品设计经验。我的设计理念是将功能性、美学和可持续性完美结合，创造出真正有价值的产品。
                </p>
                <p>
                  我毕业于中央美术学院工业设计专业，随后在多家知名设计公司和科技企业工作。这些经历让我积累了从概念构思到产品量产的全流程经验。
                </p>
                <p>
                  我相信设计的力量在于解决问题。每个项目都是一次机会，去理解用户需求，探索创新解决方案，并将想法转化为现实。
                </p>
                <p>
                  当我不在设计工作室时，你可能会发现我在逛家具展、拍摄街头摄影，或者在咖啡馆里手绘产品草图。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 mx-auto mb-4 text-gray-900" />
            <h2 className="text-3xl mb-4">专业技能</h2>
            <p className="text-gray-600">多年积累的核心设计能力</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white rounded-full border hover:border-gray-900 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Briefcase className="h-12 w-12 mx-auto mb-4 text-gray-900" />
            <h2 className="text-3xl mb-4">工作经历</h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-32 text-sm text-gray-500 flex-shrink-0">
                    {exp.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{exp.title}</h3>
                    <p className="text-gray-600 mb-3">{exp.company}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-8 w-8 text-gray-900" />
                <h2 className="text-2xl">教育背景</h2>
              </div>
              <Card className="p-6">
                <h3 className="text-xl mb-2">工业设计硕士</h3>
                <p className="text-gray-600 mb-2">中央美术学院</p>
                <p className="text-sm text-gray-500">2016 - 2018</p>
                <div className="mt-4 pt-4 border-t">
                  <h3 className="text-xl mb-2">工业设计学士</h3>
                  <p className="text-gray-600 mb-2">同济大学</p>
                  <p className="text-sm text-gray-500">2012 - 2016</p>
                </div>
              </Card>
            </div>

            {/* Awards */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-8 w-8 text-gray-900" />
                <h2 className="text-2xl">获奖荣誉</h2>
              </div>
              <Card className="p-6">
                <ul className="space-y-4">
                  {awards.map((award, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 pb-4 border-b last:border-b-0 last:pb-0"
                    >
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{award}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">设计哲学</h2>
          <blockquote className="text-xl text-gray-600 italic leading-relaxed">
            "设计不仅仅是让东西看起来漂亮，更重要的是让它们运作得更好。好的设计应该是不引人注目的，它应该与用户的生活无缝融合，提升日常体验而不显突兀。"
          </blockquote>
        </div>
      </section>
    </div>
  );
}
