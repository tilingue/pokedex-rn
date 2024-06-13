import {faLeaf} from '@fortawesome/free-solid-svg-icons/faLeaf';
import {faSkullCrossbones} from '@fortawesome/free-solid-svg-icons/faSkullCrossbones';
import {faFireFlameCurved} from '@fortawesome/free-solid-svg-icons/faFireFlameCurved';
import {faDroplet} from '@fortawesome/free-solid-svg-icons/faDroplet';
import {faBug} from '@fortawesome/free-solid-svg-icons/faBug';
import {faDragon} from '@fortawesome/free-solid-svg-icons/faDragon';
import {faBolt} from '@fortawesome/free-solid-svg-icons/faBolt';
import {faHandFist} from '@fortawesome/free-solid-svg-icons/faHandFist';
import {faFeather} from '@fortawesome/free-solid-svg-icons/faFeather';
import {faGhost} from '@fortawesome/free-solid-svg-icons/faGhost';
import {faArrowUpFromGroundWater} from '@fortawesome/free-solid-svg-icons/faArrowUpFromGroundWater';
import {faBrain} from '@fortawesome/free-solid-svg-icons/faBrain';
import {faDrumSteelpan} from '@fortawesome/free-solid-svg-icons/faDrumSteelpan';
import {faIcicles} from '@fortawesome/free-solid-svg-icons/faIcicles';
import {faMoon} from '@fortawesome/free-solid-svg-icons/faMoon';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {faSquare} from '@fortawesome/free-solid-svg-icons/faSquare';
import {faTrowelBricks} from '@fortawesome/free-solid-svg-icons/faTrowelBricks';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

interface Icons {
  [key: string]: {
    color: string;
    icon: IconDefinition;
  };
}

export const types: Icons = {
  grass: {
    color: '#43930a',
    icon: faLeaf,
  },
  poison: {
    color: '#6307bf',
    icon: faSkullCrossbones,
  },
  fire: {
    color: '#f78b07',
    icon: faFireFlameCurved,
  },
  water: {
    color: '#2663A7',
    icon: faDroplet,
  },
  bug: {
    color: '#9b0f2b',
    icon: faBug,
  },
  dragon: {
    color: '#701808',
    icon: faDragon,
  },
  electric: {
    color: '#e5bf00',
    icon: faBolt,
  },
  fighting: {
    color: '#000000',
    icon: faHandFist,
  },
  flying: {
    color: '#000000',
    icon: faFeather,
  },
  ghost: {
    color: '#000000',
    icon: faGhost,
  },
  ground: {
    color: '#896317',
    icon: faArrowUpFromGroundWater,
  },
  psychic: {
    color: '#000000',
    icon: faBrain,
  },
  steel: {
    color: '#000000',
    icon: faDrumSteelpan,
  },
  ice: {
    color: '#5dd4fc',
    icon: faIcicles,
  },
  dark: {
    color: '#000000',
    icon: faMoon,
  },
  fairy: {
    color: '#000000',
    icon: faStar,
  },
  normal: {
    color: '#222222',
    icon: faSquare,
  },
  rock: {
    color: '#000000',
    icon: faTrowelBricks,
  },
};
