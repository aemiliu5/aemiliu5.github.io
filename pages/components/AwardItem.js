// components/AwardItem.js

const AwardItem = ({ src }) => {
    return (
      <img
        src={src}
        width="200"
        height="200"
        className="hover:rotate-[10deg] hover:scale-110 transition-all duration-800"
        alt="Award"
      />
    );
  };
  
  export default AwardItem;
  