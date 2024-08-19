import s from "./_s.module.scss";
interface Iprops {
  service: any;
}
export const Service = (props: Iprops) => {
  const { index, category, services } = props.service;

  return (
    <div className={s.service}>
      <div>
        <span>{index}</span>
        <h3>{category}</h3>
      </div>
      <ul>
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
};
