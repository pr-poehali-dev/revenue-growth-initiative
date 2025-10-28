export const PartnersSection = () => {
  const partners = [
    "Леруа Мерлен",
    "ОБИ",
    "Строй Депо",
    "Максидом",
    "ВсеИнструменты.ру",
    "Петрович",
    "Сантехника-Онлайн",
    "220 Вольт",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">Наши партнеры</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Нам доверяют крупнейшие строительные и торговые сети России
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 md:p-8 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-base md:text-lg font-semibold text-center">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
