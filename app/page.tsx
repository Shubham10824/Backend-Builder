"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LayoutGrid, Code, Settings, FolderPlus, Cpu } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LandingPage() {
  const [isBuilding, setIsBuilding] = useState(false);

  const handleStartBuilding = () => {
    setIsBuilding(true);
    setTimeout(() => setIsBuilding(false), 2000);
  };

  return (
    <div className="bg-black">
      <div className="max-w-screen-2xl mx-auto w-full bg-black">
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
          <Header />
          <main>
            {/* Hero Section */}
            <section className="relative container mx-auto px-4 py-48 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-400/10 to-blue-100/0 blur-[60px] z-0"></div>
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-20% bg-clip-text text-transparent from-blue-500 to-blue-200"
                >
                  Visual Backend Builder
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-2xl lg:text-3xl mb-6 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent font-semibold"
                >
                  Simplify backend code creation with an intuitive drag-and-drop
                  experience.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base md:text-lg lg:text-xl mb-10 text-white/60 max-w-2xl mx-auto"
                >
                  Build your backend by simply dragging components, customizing
                  settings, and instantly generating production-ready code.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button
                    onClick={handleStartBuilding}
                    className="bg-gradient-to-br from-blue-500 to-blue-700 text-gray-200 hover:opacity-80 transition-colors duration-300 py-5 text-base tracking-wider"
                  >
                    Start Building
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-48 bg-black relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-400/10 to-blue-100/0 blur-[60px] z-0"></div>
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Drag-and-Drop Interface",
                      description:
                        "Easily add routes, controllers, middleware, and models by dragging them into your workspace.",
                      icon: LayoutGrid,
                    },
                    {
                      title: "Real-time Code Preview",
                      description:
                        "See generated code update live as you modify your backend design.",
                      icon: Code,
                    },
                    {
                      title: "Customizable Settings",
                      description:
                        "Configure each component with tailored options to fit your project’s unique requirements.",
                      icon: Settings,
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur p-6 rounded-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-500 rounded-full p-3 mr-4">
                          <feature.icon className="w-6 h-6 text-black" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-white/80">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="py-48 bg-black relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-400/10 to-blue-100/0 blur-[60px] z-0"></div>
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                  How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Select Components", icon: FolderPlus },
                    { title: "Customize Settings", icon: Settings },
                    { title: "Generate Code", icon: Cpu },
                  ].map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="text-center bg-white/5 backdrop-blur p-6 rounded-lg transition-all duration-300"
                    >
                      <div className="bg-blue-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <step.icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p>
                        A brief description of how {step.title.toLowerCase()}{" "}
                        works in the backend builder.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-48 bg-black relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-400/10 to-blue-100/0 blur-[60px] z-0"></div>
              <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                  Ready to Start Building?
                </h2>
                <p className="text-xl mb-10">
                  Jump in and start creating your backend in minutes.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-blue-400 to-blue-700 text-black hover:opacity-80 text-lg px-8 py-5 transition-colors duration-300">
                    Start Now
                  </Button>
                </motion.div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
