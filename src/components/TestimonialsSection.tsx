import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Estudante de Idiomas",
    content: "Este método transformou completamente minha forma de aprender idiomas. Progredi mais em 3 meses do que em anos de estudo tradicional.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Profissional de Negócios",
    content: "A abordagem estruturada e metodologia clara tornaram fácil manter a consistência no aprendizado, mesmo com uma agenda lotada.",
    rating: 5,
  },
  {
    name: "Ana García",
    role: "Estudante",
    content: "Estava cética no início, mas os resultados falam por si. Isso é realmente revolucionário para o aprendizado de idiomas.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O Que Nossos Alunos Dizem
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};