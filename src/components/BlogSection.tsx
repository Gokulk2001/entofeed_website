
import React from "react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Environmental Impact of Traditional Animal Feed",
    excerpt: "Exploring how conventional feed production affects our planet and how insects can help.",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
  },
  {
    title: "Black Soldier Fly Larvae: A Nutritional Powerhouse",
    excerpt: "Discover the impressive nutritional profile of BSFL and why animals thrive on it.",
    date: "June 22, 2023",
    image: "https://images.unsplash.com/photo-1518384491458-d0dda2b84acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
  },
  {
    title: "Scaling Insect Farming: Challenges and Solutions",
    excerpt: "How the industry is overcoming obstacles to bring insect protein to the mainstream.",
    date: "July 8, 2023",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
