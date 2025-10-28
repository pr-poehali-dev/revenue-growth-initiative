import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-accent font-bold text-lg">EvaGold</span>
            </div>
            <h2 className="text-4xl font-bold">О компании</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              26 лет мы производим и поставляем смесители и душевые системы под собственной 
              торговой маркой <strong className="text-accent">EvaGold</strong>. Наша продукция — это сочетание 
              европейского качества и конкурентных цен.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы работаем с крупнейшими застройщиками, сетями магазинов и отелями по всей России. 
              Полный цикл производства, собственные склады и логистика позволяют нам 
              гарантировать стабильное качество и сроки поставки.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <Card className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Контроль качества</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5 лет</div>
                <div className="text-sm text-muted-foreground">Гарантия</div>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/556ab70e-b772-45c1-a096-2ad165386d63.jpg"
              alt="Продукция EvaGold"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src="https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/20a0bd6f-7e6e-450d-85db-2a5d2f24576d.jpg"
              alt="Производство"
              className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
            />
            <img
              src="https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/f7e64208-f8a8-45c0-aecf-82c963519f01.jpg"
              alt="Завод"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src="https://cdn.poehali.dev/projects/308223f4-af7d-44fc-8000-0a7b39e2e02d/files/c01c888a-5a56-4cea-a568-20e4d1a25277.jpg"
              alt="Продукция"
              className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
