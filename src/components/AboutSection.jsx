import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
              mollitia tempora. Sed dolore, itaque iusto est cupiditate debitis
              iste a officia nulla minima placeat alias voluptatem fugit
              reprehenderit eos commodi.
            </p>

            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              veritatis molestiae enim minima esse magni facilis ipsam obcaecati
              beatae eius, consequuntur id accusantium sit. Voluptate natus
              maiores cupiditate labore delectus! Quam odio dolores dolorem
              voluptatibus iusto quas atque excepturi! Possimus nesciunt soluta,
              dolorem cumque est dignissimos. Incidunt cumque voluptatum, dicta
              modi placeat iusto sint eligendi nemo in ducimus eaque asperiores.
              In, delectus, quod rerum vero pariatur sunt, quia culpa hic ad
              tempore natus laboriosam amet sapiente expedita excepturi odio
              recusandae molestias possimus velit omnis facere? Sed molestias
              dolore ipsam iure!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id eveniet quod odio omnis nihil architecto repellendus voluptate enim provident quae at unde facere, molestiae veritatis illo molestias numquam aspernatur!</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id eveniet quod odio omnis nihil architecto repellendus voluptate enim provident quae at unde facere, molestiae veritatis illo molestias numquam aspernatur!</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id eveniet quod odio omnis nihil architecto repellendus voluptate enim provident quae at unde facere, molestiae veritatis illo molestias numquam aspernatur!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
