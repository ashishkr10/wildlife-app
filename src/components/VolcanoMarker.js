import { Icon } from "@iconify/react";
import volcanoIcon from "@iconify/icons-noto/volcano";

const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="loaction-marker" onClick={onClick}>
      <Icon icon={volcanoIcon} className="location-icon" />
    </div>
  );
};

export default VolcanoMarker;
