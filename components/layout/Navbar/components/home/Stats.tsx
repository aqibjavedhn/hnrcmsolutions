export default function Stats() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "150+", label: "Team Members" },
    { value: "99%", label: "Claim Accuracy" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.label} className="glass rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold gradient-text">
              {item.value}
            </h3>

            <p className="mt-3 text-white/70">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}