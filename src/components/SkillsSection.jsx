import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const skills = [
    { name: "HTML/CSS",category: "frontend" },
    { name: "Javascript",category: "frontend" },
    { name: "PHP",category: "backend" },
    { name: "Laravel",category: "framework/library" },
    { name: "Python",category: "backend" },
    { name: "Django",category: "framework/library" },
    { name: "Tailwind CSS",category: "frontend" },
    { name: "React",category: "framework/library" },
    { name: "MySQL",category: "backend" },
    { name: "Java",category: "backend" },
    { name: "Kotlin",category: "framework/library" },
    { name: "C#",category: "backend" },
    { name: "C++",category: "backend" },
    { name: "Next.js",category: "framework/library" },
    { name: "MongoDB",category: "backend" },
    { name: "Git/Github",category: "tools" },
    { name: "MS Office (MS WORD, MS EXCEL, MS POWERPOINT, MS PROJECT)",category: "tools" },
    { name: "Linux",category: "tools" },
    { name: "Cisco Packet Tracer",category: "tools" },
    { name: "Problem Solving",category: "soft skills" },
    { name: "Teamwork",category: "soft skills" },
    { name: "Communication",category: "soft skills" },
    { name: "Adaptability",category: "soft skills" },
    { name: "Time Management",category: "soft skills" },
    { name: "Leadership",category: "soft skills" },
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
            return (
              <div
                key={key}
                className="bg-card p-4 rounded-lg shadow-md hover:shadow-xl card-hover"
              >
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};