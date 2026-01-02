/* Company logos with links */
import { getAssetPath } from './constants';

export const CompanyLogos = {
  openclassrooms: (
    <a href="https://openclassrooms.com/" target="_blank" rel="noreferrer">
      <img
        src={getAssetPath('/openclassrooms-icon.svg')}
        width="24"
        height="24"
        alt="OpenClassrooms"
        loading="lazy"
      />
    </a>
  ),
  playplay: (
    <a href="https://playplay.com/" target="_blank" rel="noreferrer">
      <img src={getAssetPath('/PlayPlay.svg')} width="24" height="24" alt="PlayPlay" loading="lazy" />
    </a>
  ),
  lewagon: (
    <a href="https://www.lewagon.com/" target="_blank" rel="noreferrer">
      <img
        src="https://github.com/daddyjanno/Icons/raw/main/schools/lewagon.svg"
        width="24"
        height="24"
        alt="PlayPlay"
        loading="lazy"
      />
    </a>
  ),
  gretadeshautsdeseine: (
    <a href="https://www.greta-cfa92.ac-versailles.fr/" target="_blank" rel="noreferrer">
      <picture>
        <source srcSet={getAssetPath('/greta.webp')} type="image/webp" />
        <img src={getAssetPath('/greta.png')} width="24" height="24" alt="GRETA" loading="lazy" />
      </picture>
    </a>
  ),
  eurosport: (
    <a href="https://www.eurosport.com/" target="_blank" rel="noreferrer">
      <picture>
        <source srcSet={getAssetPath('/eurosport.webp')} type="image/webp" />
        <img src={getAssetPath('/eurosport.png')} width="24" height="24" alt="Eurosport" loading="lazy" />
      </picture>
    </a>
  ),
  freelance: (
    <a href="#" target="_blank" rel="noreferrer">
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Briefcase icon for freelance */}
        <rect x="2" y="7" width="20" height="13" rx="1" />
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <line x1="12" y1="12" x2="12" y2="17" />
      </svg>
    </a>
  ),
};
