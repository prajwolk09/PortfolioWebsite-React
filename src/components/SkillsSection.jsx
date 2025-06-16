import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const skills = [
    { name: "HTML/CSS", level: 80, category: "frontend" },
    { name: "Javascript", level: 70, category: "frontend" },
    { name: "Tailwind CSS", level: 60, category: "frontend" },
    { name: "React", level: 70, category: "framework/library" },
    { name: "PHP", level: 80, category: "backend" },
    { name: "Laravel", level: 80, category: "framework/library" },
    { name: "MySQL", level: 70, category: "backend" },
    { name: "Python", level: 70, category: "backend" },
    { name: "Java", level: 50, category: "backend" },
    { name: "Kotlin", level: 50, category: "framework/library" },
    { name: "C#", level: 50, category: "backend" },
    { name: "C++", level: 50, category: "backend" },
    { name: "Next.js", level: 60, category: "framework/library" },
    { name: "MongoDB", level: 60, category: "backend" },
    { name: "Git/Github", level: 70, category: "tools" },
    { name: "MS Office (MS WORD, MS EXCEL, MS POWERPOINT, MS PROJECT)", level: 70, category: "tools" },
    { name: "Linux", level: 60, category: "tools" },
    { name: "Cisco Packet Tracer", level: 70, category: "tools" },
    { name: "Problem Solving", level: 70, category: "soft skills" },
    { name: "Teamwork", level: 70, category: "soft skills" },
    { name: "Communication", level: 70, category: "soft skills" },
    { name: "Adaptability", level: 70, category: "soft skills" },
    { name: "Time Management", level: 70, category: "soft skills" },
    { name: "Leadership", level: 60, category: "soft skills" },
];

const categories = ['all', 'frontend', 'backend', 'framework/library', 'tools', 'soft skills'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const highlightedSegments = Math.floor(skill.level / 10);
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="flex w-full gap-1 h-2">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex-1 h-2 rounded-full",
                        index < highlightedSegments ? "bg-primary" : "bg-primary/30",
                        "animate-[grow_0.5s_ease-out]",
                        `delay-${index * 100}ms`
                      )}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};