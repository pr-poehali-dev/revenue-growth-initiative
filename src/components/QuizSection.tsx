import { BusinessQuiz } from "@/components/BusinessQuiz";

export const QuizSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Пройдите короткий опрос</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответьте на 5 вопросов и получите персональное коммерческое предложение
          </p>
        </div>
        <BusinessQuiz />
      </div>
    </section>
  );
};
