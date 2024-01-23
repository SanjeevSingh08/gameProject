const ServiceCard = ({ title, des, icon }) => {
  return (
    <div className="s_card card_animate">
      <div className="s_card_sub">
        <div className="widget-content">
          <span className="iconsbox">{icon}</span>
        </div>
        <div className="widget-text">
          <h4 className="title">{title}</h4>
          <div className="widget">
            <div className="widget-des"><p>{des}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
