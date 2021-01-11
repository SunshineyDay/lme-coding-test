import robot1 from '../images/robot-e-flat.svg';
import robot2 from '../images/robot-ne-flat.svg';
import robot3 from '../images/robot-se.svg';
import robot4 from '../images/robot-se-flat-2.svg';
import robot5 from '../images/robot-sw.svg';
import robot6 from '../images/robot-w-flat.svg';
import robot7 from '../images/robot-nw.svg';

export const robotImages = [robot1, robot2, robot3, robot4, robot5, robot6, robot7];

export const getRandomRobotImage = (): string => robotImages[Math.floor(Math.random() * 6) + 1];
