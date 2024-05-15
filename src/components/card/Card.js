// import CIcon from '@coreui/icons-react';
// import { cilList } from '@coreui/icons';
// import { UisProcess, UisSpeechBubble, UisGlobe, UisLightbulb, UisMicStudio, UisDesktopMonitor, UisCheckSquare } from '@iconscout/react-unicons-solid';
import "./card.css";

export function Card(params) {
  const { icon, title, description } = params;

  return (
    <div className='border'>
      {/* {renderIcon(icon)} */}
      <p className='titleClass'>{title}</p>
      <p className='descriptionClass'>{description}</p>
    </div>
  );
}

// function renderIcon(icon) {
//   switch (icon) {
//     case "speech-bubble":
//       return <UisSpeechBubble size="30" color="#bd73e8" />;
//     case "globe":
//       return <UisGlobe size="30" color="#bd73e8" />;
//     case "lightbulb":
//       return <UisLightbulb size="30" color="#bd73e8" />;
//     case "mic":
//       return <UisMicStudio size="30" color="#bd73e8" />;
//     case "monitor":
//       return <UisDesktopMonitor size="30" color="#bd73e8" />;
//     case "checkmark":
//       return <UisCheckSquare size="30" color="#bd73e8" />;
//     default:
//       return <UisProcess size="30" color="#bd73e8" />;
//   }
// }