

export const Card = ({idx,service}) => {
  return (
    <div
      key={idx}
      className="bg-white text-purple-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
    >
      <i
        className={`fas ${
          idx === 0 ? "fa-code" : idx === 1 ? "fa-paint-brush" : "fa-chart-line"
        } text-4xl mb-4`}
      ></i>
      <h3 className="text-2xl font-semibold">{service}</h3>
      <p className="mt-2">
        {`Providing ${service.toLowerCase()} services to help you succeed online.`}
      </p>
    </div>
  );
}
